// AOS Initialization
AOS.init({
    duration: 1000,
    once: true
});

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000); // Change every 5 seconds
slides[0].classList.add('active'); // Start with first

// Jobs Modal
const jobsModal = document.getElementById('jobsModal');
const formModal = document.getElementById('formModal');
const findJobBtns = document.querySelectorAll('.find-jobs');
const jobBtns = document.querySelectorAll('.job-btn');
const closeBtns = document.querySelectorAll('.close');
const whatsappBtn = document.querySelector('.whatsapp-btn');

findJobBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const country = btn.dataset.country;
        document.getElementById('country').value = country;
        document.getElementById('jobTitle').textContent = `Jobs in ${country}`;
        jobsModal.style.display = 'block';
    });
});

jobBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const job = btn.dataset.job;
        const country = document.getElementById('country').value;
        document.getElementById('job').value = job;
        document.getElementById('formTitle').textContent = `Inquiry: ${job} in ${country}`;
        whatsappBtn.href = `https://wa.me/254707614590?text=Hi Afrilink, I want to learn more about ${job} jobs in ${country}`;
        jobsModal.style.display = 'none';
        formModal.style.display = 'block';
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        jobsModal.style.display = 'none';
        formModal.style.display = 'none';
    });
});

// Close modals on outside click
window.onclick = (e) => {
    if (e.target == jobsModal) jobsModal.style.display = 'none';
    if (e.target == formModal) formModal.style.display = 'none';
}

// Form Submissions (Formspree handles backend)
document.querySelector('form').addEventListener('submit', (e) => {
    // Optional: Add client-side validation here
    e.preventDefault();
    // Formspree auto-submits via action
});
