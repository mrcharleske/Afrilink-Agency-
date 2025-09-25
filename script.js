AOS.init({
    duration: 1000,
    once: true
});

let currentJob = '';
let currentCountry = '';
let currentService = '';

function setJobCountry(country) {
    currentCountry = country;
    document.getElementById('countryName').textContent = country;
    document.getElementById('formCountry').textContent = country;
    document.getElementById('hiddenCountry').value = country;
}

function setJob(job) {
    currentJob = job;
    document.getElementById('jobName').textContent = job;
    document.getElementById('hiddenJob').value = job;
    document.getElementById('whatsappJobBtn').href = `https://wa.me/254707614590?text=Hi Afrilink, I want to learn more about ${job} jobs in ${currentCountry}`;
}

function setService(service) {
    currentService = service;
    document.getElementById('serviceName').textContent = service;
    document.getElementById('hiddenService').value = service;
    document.getElementById('whatsappServiceBtn').href = `https://wa.me/254707614590?text=Hi Afrilink, I want to learn more about ${service}`;
    const preferredCountryField = document.getElementById('preferredCountryField');
    preferredCountryField.style.display = service === 'Job Placements' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const findJobsButtons = document.querySelectorAll('.find-jobs');
    findJobsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const country = button.getAttribute('onclick').match(/'([^']+)'/)[1];
            setJobCountry(country);
        });
    });

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navbarCollapse).hide();
            }
        });
    });
});
