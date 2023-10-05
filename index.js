async function loadProjects() {
    const projects = await (await fetch('./projects.json')).json();
    return projects;
}

function createPersonalProjectDiv(project, id) {
    const name = project.name;
    const viewLink = project.view_link;
    const codeLink = project.code_link;
    const description = project.description;

    const projectContainer = document.querySelector('.personal.work-display-container');

    const projectDiv = document.createElement('div');
    projectDiv.className = 'work-display';

    // TITLE
    const projectTitle = document.createElement('h3');
    projectTitle.innerText = name;
    projectTitle.className = 'work-title';
    projectDiv.appendChild(projectTitle);

    // LINKS
    const projectLinkContainer = document.createElement('div');
    projectLinkContainer.className = 'work-link-container';

    const projectViewButton = document.createElement('button');
    projectViewButton.innerText = 'View';
    projectViewButton.className = 'work-link';
    projectViewButton.addEventListener('click', e => window.open(viewLink, '_blank'));

    const projectCodeButton = document.createElement('button');
    projectCodeButton.innerText = 'Code';
    projectCodeButton.className = 'work-link';
    projectCodeButton.addEventListener('click', e => window.open(codeLink, '_blank'));

    projectLinkContainer.appendChild(projectViewButton);
    projectLinkContainer.appendChild(projectCodeButton);

    projectDiv.appendChild(projectLinkContainer);

    // DESCRIPTION TOGGLE
    const projectDescToggle = document.createElement('p');
    projectDescToggle.className = 'work-desc-toggle';
    projectDescToggle.addEventListener('mouseenter', () => {
        const blurOverlay = document.querySelector(`#blur-overlay-${id}`);
        const projectDesc = document.querySelector(`#work-desc-${id}`);

        blurOverlay.classList.add('blur-overlay-active');
        projectDesc.classList.add('work-desc-active');
    })

    projectDescToggle.addEventListener('mouseleave', () => {
        const blurOverlay = document.querySelector(`#blur-overlay-${id}`);
        const projectDesc = document.querySelector(`#work-desc-${id}`);

        blurOverlay.classList.remove('blur-overlay-active');
        projectDesc.classList.remove('work-desc-active');
    })

    const projectDescToggleSpan = document.createElement('span');
    projectDescToggleSpan.innerText = 'Details';

    projectDescToggle.appendChild(projectDescToggleSpan);

    projectDiv.appendChild(projectDescToggle);

    // DESCRIPTION OVERLAY
    const blurOverlay = document.createElement('div');
    blurOverlay.className = 'blur-overlay';
    blurOverlay.id = `blur-overlay-${id}`
    projectDiv.appendChild(blurOverlay);

    const projectDesc = document.createElement('p');
    projectDesc.className = 'work-desc';
    projectDesc.innerHTML = description;
    projectDesc.id = `work-desc-${id}`
    projectDiv.appendChild(projectDesc);



    // Finally add the project div to the container
    projectContainer.appendChild(projectDiv);

    // EXAMPLE HTML
    // <div class="work-display">
    //     <h3 class="work-tile">Snake 3D</h3>
    //     <div class="work-link-container">
    //         <button onclick="window.open('https://jordan-w-99.github.io/Snake_3D/', '_blank')" class="work-link">View</button>
    //         <button onclick="window.open('https://github.com/Jordan-w-99/Snake_3D', '_blank')" class="work-link">Code</button>
    //     </div>
    //     <p class="work-desc-toggle"><span>Details</span></p>
    //     <div class="blur-overlay">
    //         <p class="work-desc">
    //             ThreeJS recreation of a Snake Game.<br>
    //             I used this as a project to learn the basics of ThreeJS.<br>
    //             I would like to implement proper 3D models and complete the gameplay features in future.
    //         </p>
    //     </div>
    // </div>
}

function createUniProjectDiv(project, id) {
    const name = project.name;
    const viewLink = project.view_link;
    const grade = project.grade;
    const description = project.description;

    const projectContainer = document.querySelector('.uni.work-display-container');

    const projectDiv = document.createElement('div');
    projectDiv.className = 'work-display';
    projectDiv.style.backgroundImage = `url('assets/${project.image}')`

    // TITLE
    const projectTitle = document.createElement('h3');
    projectTitle.innerText = name;
    projectTitle.className = 'work-title';
    projectDiv.appendChild(projectTitle);

    // LINKS
    const projectLinkContainer = document.createElement('div');
    projectLinkContainer.className = 'work-link-container';

    const projectViewButton = document.createElement('button');
    projectViewButton.innerText = 'View';
    projectViewButton.className = 'work-link';
    projectViewButton.addEventListener('click', e => window.open(viewLink, '_blank'));

    if (viewLink === "") {
        projectViewButton.disabled = true;
    }

    const projectGradeDisplay = document.createElement('div');
    projectGradeDisplay.innerText = `${grade}%`;
    projectGradeDisplay.className = 'work-link';

    projectLinkContainer.appendChild(projectViewButton);
    projectLinkContainer.appendChild(projectGradeDisplay);

    projectDiv.appendChild(projectLinkContainer);

    // DESCRIPTION TOGGLE
    const projectDescToggle = document.createElement('p');
    projectDescToggle.className = 'work-desc-toggle';
    projectDescToggle.addEventListener('mouseenter', () => {
        const blurOverlay = document.querySelector(`#blur-overlay-${id}`);
        const projectDesc = document.querySelector(`#work-desc-${id}`);

        blurOverlay.classList.add('blur-overlay-active');
        projectDesc.classList.add('work-desc-active');
    })

    projectDescToggle.addEventListener('mouseleave', () => {
        const blurOverlay = document.querySelector(`#blur-overlay-${id}`);
        const projectDesc = document.querySelector(`#work-desc-${id}`);

        blurOverlay.classList.remove('blur-overlay-active');
        projectDesc.classList.remove('work-desc-active');
    })


    const projectDescToggleSpan = document.createElement('span');
    projectDescToggleSpan.innerText = 'Details';

    projectDescToggle.appendChild(projectDescToggleSpan);

    projectDiv.appendChild(projectDescToggle);

    // DESCRIPTION OVERLAY
    const blurOverlay = document.createElement('div');
    blurOverlay.className = 'blur-overlay';
    blurOverlay.id = `blur-overlay-${id}`
    projectDiv.appendChild(blurOverlay);

    const projectDesc = document.createElement('p');
    projectDesc.className = 'work-desc';
    projectDesc.innerHTML = description;
    projectDesc.id = `work-desc-${id}`
    projectDiv.appendChild(projectDesc);

    // Finally add the project div to the container
    projectContainer.appendChild(projectDiv);

    // EXAMPLE HTML
    // <div class="work-display">
    //     <h3 class="work-tile">Asteroids</h3>
    //     <div class="work-link-container">
    //         <button onclick="window.open('https://jordan-w-99.github.io/Snake_3D/', '_blank')" class="work-link">View</button>
    //         <div class="grade-display">74%</div>
    //     </div>
    //     <p class="work-desc-toggle"><span>Details</span></p>
    //     <div class="blur-overlay">
    //         <p class="work-desc">
    //             An asteroids recreation in C++, using a basic OpenGL graphics library.
    //         </p>
    //     </div>
    // </div>
}

async function populateProjects() {
    const projects = await loadProjects();
    projects.personal_projects.forEach((project, index) => createPersonalProjectDiv(project, `personal-${index}`));
    projects.uni_projects.forEach((project, index) => createUniProjectDiv(project, `uni-${index}`));
}

populateProjects();