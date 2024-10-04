//Define types for Resume data
interface PersonalInfo{
    name:string;
    email:string;
    contact:string;
}

interface Education{
    degree:string;
    institute:string;
    year:number;
}

interface Skills {
    skills: string[];
}


interface WorkExperience{
    company:string;
    jobTitle:string;
    YearsOfExperience:string;
}

interface ResumeData {
    personalInfo: PersonalInfo;
    education: Education;
    workExperience: WorkExperience;
    skills: Skills;
}

//Creating functions to generate the Resume
function generateResume(data: ResumeData): string {
    return `
        <h2>Resume</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${data.personalInfo.name}</p>
        <p><strong>Email:</strong> ${data.personalInfo.email}</p>
        <p><strong>Contact:</strong> ${data.personalInfo.contact}</p>

        <h3>Education</h3>
        <p><strong>Degree:</strong> ${data.education.degree}</p>
        <p><strong>Institute:</strong> ${data.education.institute}</p>
        <p><strong>Year:</strong> ${data.education.year}</p>

       <h3>Skills</h3>
        <p>${data.skills.skills.join(', ')}</p>


        <h3>Work Experience</h3>
        <p><strong>Company:</strong> ${data.workExperience.company}</p>
        <p><strong>Job Title:</strong> ${data.workExperience.jobTitle}</p>
        <p><strong>Years of Experience:</strong> ${data.workExperience.YearsOfExperience}</p>
    `;
}

// Event listener for form submission
document.getElementById('resumeForm')!.addEventListener('submit', function (event) {
    event.preventDefault();

    // Gather data from the form
    const personalInfo: PersonalInfo = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        contact: (document.getElementById('contact') as HTMLInputElement).value,
    };

    const education: Education = {
        degree: (document.getElementById('degree') as HTMLInputElement).value,
        institute: (document.getElementById('institute') as HTMLInputElement).value,
        year: parseInt((document.getElementById('year') as HTMLInputElement).value),
    };

    const skills: Skills = {
        skills: (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim()),
    };


    const workExperience: WorkExperience = {
        company: (document.getElementById('company') as HTMLInputElement).value,
        jobTitle: (document.getElementById('job') as HTMLInputElement).value,
        YearsOfExperience: (document.getElementById('year of Experience') as HTMLInputElement).value,
    };

    // Combine all data
    const resumeData: ResumeData = {
        personalInfo,
        education,
        skills,
        workExperience,
    };

    // Generate resume output
    const resumeOutput = document.getElementById('resumeOutput')!;
    resumeOutput.innerHTML = generateResume(resumeData);
    resumeOutput.classList.remove('hidden');
});
