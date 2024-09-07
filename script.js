document.addEventListener('DOMContentLoaded', function () {
    // Get buttons and sections by ID
    var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
    var skillsSection = document.getElementById('skillsSection');
    var eduBtn = document.getElementById('toggleEducationBtn');
    var EduSec = document.getElementById('EducationSection');
    // const toggleProjectsBtn = document.getElementById('toggleProjectsBtn') as HTMLButtonElement;
    // const projectsSection = document.getElementById('projectsSection') as HTMLElement;
    // Toggle visibility function
    // const toggleVisibility = (element: HTMLElement) => {
    //     if (element.classList.contains('hidden')) {
    //         element.classList.remove('hidden');
    //     } else {
    //         element.classList.add('hidden');
    //     }
    // };
    function Skills_Btn() {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleSkillsBtn.textContent = 'Hide Skills';
        }
        else {
            skillsSection.style.display = 'none';
            toggleSkillsBtn.textContent = 'Show Skills';
        }
    }
    function Edu_Btn() {
        if (EduSec.style.display === 'none') {
            EduSec.style.display = 'block';
            eduBtn.textContent = 'Hide Education';
        }
        else {
            EduSec.style.display = 'none';
            eduBtn.textContent = 'Show Education';
        }
    }
    toggleSkillsBtn.addEventListener('click', Skills_Btn);
    eduBtn.addEventListener('click', Edu_Btn);
    // Add event listeners to buttons
    // if (toggleSkillsBtn) {
    //     toggleSkillsBtn.addEventListener('click', () => toggleVisibility(skillsSection));
    // }
    // if (toggleCertificationsBtn) {
    //     toggleCertificationsBtn.addEventListener('click', () => toggleVisibility(certificationsSection));
    // }
    // if (toggleProjectsBtn) {
    //     toggleProjectsBtn.addEventListener('click', () => toggleVisibility(projectsSection));
    // }
});
