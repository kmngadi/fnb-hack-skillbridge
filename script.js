// Authentication
function handleLogin(event) {
    event.preventDefault();
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
}

function showSignupForm() {
    // Implementation for signup form
    alert('Signup form will be displayed here');
}

function logout() {
    document.getElementById('welcomePage').style.display = 'flex';
    document.getElementById('mainApp').style.display = 'none';
}

// Navigation
function showSection(sectionId) {
    const sections = ['coursesSection', 'opportunitiesSection', 'resourcesSection', 'communitySection'];
    sections.forEach(section => {
        document.getElementById(section).style.display =
            section === sectionId + 'Section' ? 'block' : 'none';
    });
}

// Forum functionality
function createNewPost() {
    // Implementation for creating new forum post
    alert('New post creation form will be displayed here');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Show login page by default
    document.getElementById('welcomePage').style.display = 'flex';
    document.getElementById('mainApp').style.display = 'none';
});



let courses = [
    { id: 1, title: 'Web Development Basics', progress: 60 },
    { id: 2, title: 'Financial Management', progress: 30 }
];

let opportunities = [
    { id: 1, title: 'Small Business Grant', description: 'Up to R50 000 available for startups' },
    { id: 2, title: 'Mentorship Program', description: 'Connect with experienced entrepreneurs' }
];

let financialResources = [
    { title: 'Microloans', description: 'Low-interest loans for small businesses' },
    { title: 'Financial Planning', description: 'Free consultation sessions' }
];

// Initialize the app
function initializeApp() {
    renderCourses();
    renderOpportunities();
    renderFinancialResources();
}

// Course Management
function renderCourses() {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = courses.map(course => `
        <li class="course-item">
            <h3>${course.title}</h3>
            <div class="progress-bar">
                <div class="progress" style="width: ${course.progress}%"></div>
            </div>
            <button class="btn" onclick="updateProgress(${course.id})">Update Progress</button>
        </li>
    `).join('');
}

function addCourse() {
    const title = document.getElementById('courseTitle').value;
    const description = document.getElementById('courseDescription').value;

    if (title && description) {
        courses.push({
            id: courses.length + 1,
            title: title,
            progress: 0
        });
        renderCourses();
        closeModal('addCourseModal');
    }
}

function updateProgress(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        course.progress = Math.min(100, course.progress + 10);
        renderCourses();
    }
}

// Opportunity Management
function renderOpportunities() {
    const opportunityList = document.getElementById('opportunityList');
    opportunityList.innerHTML = opportunities.map(opp => `
        <li class="opportunity-item">
            <h3>${opp.title}</h3>
            <p>${opp.description}</p>
            <button class="btn" onclick="applyForOpportunity(${opp.id})">Apply Now</button>
        </li>
    `).join('');
}

function addOpportunity() {
    const title = document.getElementById('opportunityTitle').value;
    const description = document.getElementById('opportunityDescription').value;

    if (title && description) {
        opportunities.push({
            id: opportunities.length + 1,
            title: title,
            description: description
        });
        renderOpportunities();
        closeModal('addOpportunityModal');
    }
}

function applyForOpportunity(oppId) {
    alert('Application submitted successfully! We will contact you soon.');
}

// Financial Resources
function renderFinancialResources() {
    const resourcesDiv = document.getElementById('financialResources');
    resourcesDiv.innerHTML = financialResources.map(resource => `
        <div class="course-item">
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <button class="btn" onclick="learnMore('${resource.title}')">Learn More</button>
        </div>
    `).join('');
}

function learnMore(resourceTitle) {
    alert(`More information about ${resourceTitle} will be sent to your email.`);
}

// Modal Management
function openAddCourseModal() {
    document.getElementById('addCourseModal').style.display = 'block';
}

function openAddOpportunityModal() {
    document.getElementById('addOpportunityModal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Initialize the app when the page loads
window.onload = initializeApp;