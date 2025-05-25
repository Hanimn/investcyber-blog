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
    <img src="/images/projects/agent-x-challenge.jpg" alt="Agent X Cyber Challenge project image" class="project-card-image">
    <div class="project-card-content">
        <h3>Agent X Cyber Challenge</h3>
        <p><strong>Description:</strong> Contributed to the development and potential volunteering for the SATRO Cyber Challenge, a program for Year 7-9 students. The initiative, in collaboration with the Surrey Cyber Cluster, aims to introduce young students to digital skills, explore career aptitudes, and highlight the range of digital careers available. The program focuses on bridging the regional digital skills gap by providing real-world insights and experiences.</p>
        <p><strong>Technologies/Focus:</strong> Educational Program Development, Digital Skills, Cybersecurity Awareness, Youth Engagement</p>
        <p><a href="https://www.satro.org.uk/digital-challenge" target="_blank" class="github-link-button">
            View Project Page
        </a></p>
    </div>
</div>

<div class="project-card" data-category="tool">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Daemon-phk.svg/1200px-Daemon-phk.svg.png" alt="Sample project image for LogSweep" class="project-card-image">
    <div class="project-card-content">
        <h3>LogSweep OSQuery Extensions</h3>
        <p><strong>Description:</strong> A collection of custom OSQuery extensions designed to enhance endpoint detection and response capabilities. Focuses on Linux systems, providing deeper insights into running processes, network connections, and user activity.</p>
        <p><strong>Technologies:</strong> C++, OSQuery SDK, CMake, Linux</p>
        <p><a href="https://github.com/yourusername/logsweep" target="_blank" class="github-link-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            View on GitHub
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