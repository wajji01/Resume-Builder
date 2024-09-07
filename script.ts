document.addEventListener('DOMContentLoaded', () => {
    // Get buttons and sections by ID
    const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
    const skillsSection = document.getElementById('skillsSection') as HTMLElement;

    const eduBtn = document.getElementById('toggleEducationBtn') as HTMLButtonElement;
    const EduSec = document.getElementById('EducationSection') as HTMLElement;

    // Toggle visibility function

    function Skills_Btn(): void {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleSkillsBtn.textContent = 'Hide Skills';
        } else {
            skillsSection.style.display = 'none';
            toggleSkillsBtn.textContent = 'Show Skills';
        }
    }
    function Edu_Btn(): void {
        if (EduSec.style.display === 'none') {
            EduSec.style.display = 'block';
            eduBtn.textContent = 'Hide Education';
        } else {
            EduSec.style.display = 'none';
            eduBtn.textContent = 'Show Education';
        }
    }
    
    // Add event listeners to buttons
    
        toggleSkillsBtn.addEventListener('click', Skills_Btn);
        eduBtn.addEventListener('click', Edu_Btn);

 });

