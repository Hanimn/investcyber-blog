+++
title = "Projects/Tools"
date = '2025-05-25T13:45:45+01:00'
draft = false
description = ""
+++

<div class="filter-buttons">
    <button class="filter-button active" onclick="filterSelection('all')">All</button>
    <button class="filter-button" onclick="filterSelection('project')">Projects</button>
    <button class="filter-button" onclick="filterSelection('tool')">Tools</button>
</div>

<div class="project-card" data-category="project">
    <div class="project-card-content">
        <h3>Agent X Cyber Challenge</h3>
        <p><strong>Description:</strong> Contributed to the development and potential volunteering for the SATRO Cyber Challenge, a program for Year 7-9 students. The initiative, in collaboration with the Surrey Cyber Cluster, aims to introduce young students to digital skills, explore career aptitudes, and highlight the range of digital careers available. The program focuses on bridging the regional digital skills gap by providing real-world insights and experiences.</p>
        <p><strong>Technologies/Focus:</strong> Educational Program Development, Digital Skills, Cybersecurity Awareness, Youth Engagement</p>
        <p><a href="https://www.satro.org.uk/digital-challenge" target="_blank" class="github-link-button">
            View Project Page
        </a></p>
    </div>
</div>
<script>
function filterSelection(category) {
    let cards, i;
    cards = document.getElementsByClassName("project-card");
    if (category == "all") category = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
        if (cards[i].getAttribute('data-category').indexOf(category) > -1) {
            cards[i].style.display = "block"; // Or "flex", "grid" depending on your layout
        }
    }

    // Add active class to the current button
    let btns = document.getElementsByClassName("filter-button");
    for (i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace(" active", "");
    }
    event.currentTarget.className += " active";
}

// Show all cards by default
filterSelection('all');
</script>