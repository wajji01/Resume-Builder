document.addEventListener('DOMContentLoaded', function () {
    // Get buttons and sections by ID
    var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
    var skillsSection = document.getElementById('skillsSection');
    var eduBtn = document.getElementById('toggleEducationBtn');
    var EduSec = document.getElementById('EducationSection');
    // Toggle visibility function
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
    // Add event listeners to buttons
    toggleSkillsBtn.addEventListener('click', Skills_Btn);
    eduBtn.addEventListener('click', Edu_Btn);
});
