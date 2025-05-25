let fuse;
let searchVisible = false;
let firstRun = true;
let list = document.getElementById("searchResults");
let first = list.firstChild;
let last = list.lastChild;
let maininput = document.getElementById("searchInput");
let searchStats = document.getElementById("searchStats");

function loadSearch() {
  const baseURL = document.querySelector('meta[name="baseURL"]')?.getAttribute('content') || '/';
  const indexURL = baseURL + 'index.json';
  
  fetch(indexURL)
    .then(response => response.json())
    .then(data => {
      const options = {
        isCaseSensitive: false,
        shouldSort: true,
        includeMatches: true,
        includeScore: true,
        useExtendedSearch: true,
        minMatchCharLength: 1,
        threshold: 0.2,
        keys: [
          { name: "title", weight: 10.0 },
          { name: "tags", weight: 8.0 },
          { name: "categories", weight: 7.0 },
          { name: "summary", weight: 6.0 },
          { name: "description", weight: 5.0 },
          { name: "content", weight: 3.0 },
          { name: "permalink", weight: 1.0 }
        ]
      };
      
      fuse = new Fuse(data, options);
      
      if (maininput) {
        maininput.addEventListener('input', executeSearch);
        maininput.focus();
      }
    })
    .catch(err => {
      console.error('Search index could not be loaded:', err);
      showNoResults('Search functionality is currently unavailable.');
    });
}

function executeSearch(terms) {
  let searchterms = typeof terms === 'string' ? terms : this.value.trim();
  
  if (searchterms.length === 0) {
    showClearState();
    return;
  }

  if (searchterms.length < 1) {
    return;
  }

  let results = fuse.search(searchterms);
  updateSearchStats(results.length, searchterms);
  
  if (results.length === 0) {
    showNoResults(`No results found for "${searchterms}"`);
  } else {
    populateResults(results.slice(0, 10)); // Show top 10 results
  }
}

function updateSearchStats(count, terms) {
  if (searchStats) {
    if (count === 0) {
      searchStats.innerHTML = `No results found for "${terms}"`;
    } else {
      searchStats.innerHTML = `Found ${count} result${count !== 1 ? 's' : ''} for "${terms}"`;
    }
  }
}

function showClearState() {
  if (list) {
    list.innerHTML = '';
  }
  if (searchStats) {
    searchStats.innerHTML = '';
  }
}

function showNoResults(message) {
  if (list) {
    list.innerHTML = `
      <div id="noResults">
        <h3>🔍 ${message}</h3>
        <p>Try using different keywords or check the search tips below.</p>
      </div>
    `;
  }
}

function populateResults(results) {
  if (!list) return;
  
  list.innerHTML = '';
  
  results.forEach(result => {
    const item = result.item;
    const matches = result.matches || [];
    
    let snippet = item.summary || item.content || '';
    let title = item.title;
    
    // Highlight matches in title and content
    matches.forEach(match => {
      if (match.key === 'title') {
        title = highlightMatches(title, match.indices);
      } else if (match.key === 'content' || match.key === 'summary') {
        snippet = getSnippetWithHighlight(snippet, match.indices, match.value);
      }
    });
    
    // Truncate snippet to reasonable length
    if (snippet.length > 200) {
      snippet = snippet.substring(0, 200) + '...';
    }
    
    const resultElement = document.createElement('div');
    resultElement.className = 'search-result';
    
    const tagsHtml = item.tags ? 
      `<div class="search-tags">
        ${item.tags.map(tag => `<span class="search-tag">${tag}</span>`).join('')}
      </div>` : '';
    
    const categoryHtml = item.categories ? 
      `<span class="search-category">📁 ${item.categories.join(', ')}</span>` : '';
    
    resultElement.innerHTML = `
      <div class="search-result-title">
        <a href="${item.permalink}">${title}</a>
      </div>
      <div class="search-result-meta">
        ${item.date ? new Date(item.date).toLocaleDateString() : ''} 
        ${categoryHtml}
        <span class="search-score">Match: ${Math.round((1 - result.score) * 100)}%</span>
      </div>
      <div class="search-result-snippet">${snippet}</div>
      ${tagsHtml}
    `;
    
    list.appendChild(resultElement);
  });
}

function highlightMatches(text, indices) {
  if (!indices || indices.length === 0) return text;
  
  let result = '';
  let lastIndex = 0;
  
  indices.forEach(([start, end]) => {
    result += text.substring(lastIndex, start);
    result += `<span class="search-highlight">${text.substring(start, end + 1)}</span>`;
    lastIndex = end + 1;
  });
  
  result += text.substring(lastIndex);
  return result;
}

function getSnippetWithHighlight(text, indices, matchValue) {
  if (!indices || indices.length === 0) return text;
  
  const firstMatch = indices[0];
  const start = Math.max(0, firstMatch[0] - 50);
  const end = Math.min(text.length, firstMatch[1] + 50);
  
  let snippet = text.substring(start, end);
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';
  
  return highlightMatches(snippet, 
    indices.map(([s, e]) => [s - start + (start > 0 ? 3 : 0), e - start + (start > 0 ? 3 : 0)])
  );
}

// Advanced search operators
function parseSearchQuery(query) {
  const operators = {
    exact: /"([^"]+)"/g,
    exclude: /!(\w+)/g,
    tag: /tag:(\w+)/g,
    category: /category:(\w+)/g,
    title: /title:(\w+)/g
  };
  
  let parsedQuery = {
    terms: query,
    exact: [],
    exclude: [],
    tag: [],
    category: [],
    title: []
  };
  
  // Extract operators
  Object.keys(operators).forEach(op => {
    let matches;
    while ((matches = operators[op].exec(query)) !== null) {
      parsedQuery[op].push(matches[1]);
      parsedQuery.terms = parsedQuery.terms.replace(matches[0], '').trim();
    }
  });
  
  return parsedQuery;
}

// Load search when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadSearch);
} else {
  loadSearch();
}

// Load Fuse.js library locally
if (!window.Fuse) {
  // Fallback to a simple search if Fuse.js is not available
  window.Fuse = class SimpleFuse {
    constructor(data, options) {
      this.data = data;
      this.options = options;
    }
    
    search(query) {
      if (!query || query.length === 0) return [];
      
      const results = [];
      const lowerQuery = query.toLowerCase();
      
      this.data.forEach((item, index) => {
        let score = 0;
        let matches = [];
        
        // Search in title (highest priority)
        if (item.title && item.title.toLowerCase().includes(lowerQuery)) {
          score += 10;
          matches.push({ key: 'title', value: item.title });
        }
        
        // Search in tags
        if (item.tags && item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) {
          score += 8;
          matches.push({ key: 'tags', value: item.tags.join(', ') });
        }
        
        // Search in categories
        if (item.categories && item.categories.some(cat => cat.toLowerCase().includes(lowerQuery))) {
          score += 7;
          matches.push({ key: 'categories', value: item.categories.join(', ') });
        }
        
        // Search in summary
        if (item.summary && item.summary.toLowerCase().includes(lowerQuery)) {
          score += 6;
          matches.push({ key: 'summary', value: item.summary });
        }
        
        // Search in content
        if (item.content && item.content.toLowerCase().includes(lowerQuery)) {
          score += 3;
          matches.push({ key: 'content', value: item.content });
        }
        
        if (score > 0) {
          results.push({
            item: item,
            score: 1 - (score / 50), // Normalize score
            matches: matches
          });
        }
      });
      
      return results.sort((a, b) => a.score - b.score);
    }
  };
  
  loadSearch();
}
