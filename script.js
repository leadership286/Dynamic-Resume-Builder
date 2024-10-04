//Creating functions to generate the Resume
function generateResume(data) {
    return "\n        <h2>Resume</h2>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(data.personalInfo.name, "</p>\n        <p><strong>Email:</strong> ").concat(data.personalInfo.email, "</p>\n        <p><strong>Contact:</strong> ").concat(data.personalInfo.contact, "</p>\n\n        <h3>Education</h3>\n        <p><strong>Degree:</strong> ").concat(data.education.degree, "</p>\n        <p><strong>Institute:</strong> ").concat(data.education.institute, "</p>\n        <p><strong>Year:</strong> ").concat(data.education.year, "</p>\n\n       <h3>Skills</h3>\n        <p>").concat(data.skills.skills.join(', '), "</p>\n\n\n        <h3>Work Experience</h3>\n        <p><strong>Company:</strong> ").concat(data.workExperience.company, "</p>\n        <p><strong>Job Title:</strong> ").concat(data.workExperience.jobTitle, "</p>\n        <p><strong>Years of Experience:</strong> ").concat(data.workExperience.YearsOfExperience, "</p>\n    ");
}
// Event listener for form submission
document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Gather data from the form
    var personalInfo = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        contact: document.getElementById('contact').value,
    };
    var education = {
        degree: document.getElementById('degree').value,
        institute: document.getElementById('institute').value,
        year: parseInt(document.getElementById('year').value),
    };
    var skills = {
        skills: document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); }),
    };
    var workExperience = {
        company: document.getElementById('company').value,
        jobTitle: document.getElementById('job').value,
        YearsOfExperience: document.getElementById('year of Experience').value,
    };
    // Combine all data
    var resumeData = {
        personalInfo: personalInfo,
        education: education,
        skills: skills,
        workExperience: workExperience,
    };
    // Generate resume output
    var resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = generateResume(resumeData);
    resumeOutput.classList.remove('hidden');
});
