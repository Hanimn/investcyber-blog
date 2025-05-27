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
<div class="project-card" data-category="tool">
    <div class="project-image-container">
        <img src="/images/projects/logsweep.png" alt="LogSweep OSQuery Extensions" class="project-image">
    </div>
    <div class="project-card-content">
        <h3>LogSweep OSQuery Extensions</h3>
        <p><strong>Description:</strong> Developed LogSweep, a suite of OSQuery extensions designed to enhance endpoint detection and response capabilities. These extensions provide deeper insights into system activities, helping security teams to identify and mitigate threats more effectively.</p>
        <p><strong>Technologies/Focus:</strong> OSQuery, Endpoint Security, C++, Threat Detection</p>
        <p><a href="https://github.com/Hanimn/LogSweep-osquery-extensions" target="_blank" class="github-link-button">
            View on GitHub
        </a></p>
    </div>
</div>

<script src="{{ '/js/project-filter.js' | relURL }}"></script>