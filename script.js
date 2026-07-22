// Sample projects data
const projectsData = [
    {
        title: "Visual histories",
        date: "2026-06",
        description: "Visual history timelines for events/institutions. An effort in making history of institutions more interesting",
        tags: ["Python", "HTML", 'graphics'],
        github: "https://ydunga.github.io/ealing_business_units/",
        demo: "#"
    },
    {
        title: "India's energy transition",
        date: "2026-05",
        description: "Data, maps and reports on India's energy transition.",
        tags: ["Python", "Machine Learning", "SQL"],
        github: "https://github.com/ydunga/customer-segmentation",
        demo: "#"
    },
    {
        title: "Local governance and Macro-economics",
        date: "2026-04",
        description: "Tracking the Indian economy and delving into datasets on local borough and district level governance.",
        tags: ["Python", "Statistics", "Forecasting"],
        github: "https://github.com/ydunga/time-series",
        demo: "#"
    }
];

// Load projects on page load
document.addEventListener('DOMContentLoaded', loadProjects);

function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    if (projectsData.length === 0) {
        projectsGrid.innerHTML = '<p class="loading">No projects yet. Check back soon!</p>';
        return;
    }

    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-date">${formatDate(project.date)}</p>
            </div>
            <div class="project-content">
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link">View on GitHub</a>
                    ${project.demo !== '#' ? `<a href="${project.demo}" target="_blank" class="project-link">Live Demo</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function formatDate(dateString) {
    const [year, month] = dateString.split('-');
    const date = new Date(year, month - 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
