// Hamburger Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('active');
});

// Modal Form Logic
const applyButtons = document.querySelectorAll('.apply-btn');
const modal = document.createElement('div');
modal.className = 'modal';
modal.setAttribute('aria-modal', 'true');
modal.setAttribute('role', 'dialog');
modal.innerHTML = `
  <div class="modal-content">
    <span class="close-btn">&times;</span>
    <h2>Apply for a Job</h2>
    <form id="apply-form" action="https://formspree.io/f/mjkedvkg" method="POST" enctype="multipart/form-data">
      <label for="modal-name">Full Name</label>
      <input type="text" id="modal-name" name="name" placeholder="Full Name" required>
      <label for="modal-email">Email Address</label>
      <input type="email" id="modal-email" name="email" placeholder="Email Address" required>
      <label for="modal-phone">Phone Number</label>
      <input type="text" id="modal-phone" name="phone" placeholder="Phone Number" required>
      <label for="modal-job">Job Role</label>
      <select id="modal-job" name="job" required>
        <option value="" disabled selected>Select Job Role</option>
        <option value="Caregivers">Caregivers</option>
        <option value="Supermarket Attendants">Supermarket Attendants</option>
        <option value="Drivers and Riders">Drivers and Riders</option>
        <option value="Security Guards">Security Guards</option>
        <option value="Cleaners">Cleaners</option>
        <option value="Waiters & Waitresses">Waiters & Waitresses</option>
      </select>
      <label for="modal-country">Country</label>
      <select id="modal-country" name="country" required>
        <option value="" disabled selected>Select Country</option>
        <option value="Canada">Canada</option>
        <option value="Qatar">Qatar</option>
        <option value="Dubai">Dubai</option>
        <option value="Saudi Arabia">Saudi Arabia</option>
        <option value="Europe">Europe</option>
      </select>
      <label for="modal-message">Message</label>
      <textarea id="modal-message" name="message" rows="5" placeholder="Tell us about your interest..." required></textarea>
      <label for="modal-cv">Upload CV (PDF)</label>
      <input type="file" id="modal-cv" name="cv" accept=".pdf">
      <button type="submit" class="cta-btn">Submit Application</button>
    </form>
  </div>
`;
document.body.appendChild(modal);

applyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const job = button.getAttribute('data-job');
    if (job) {
      const [jobRole, country] = job.split(' – ');
      document.getElementById('modal-job').value = jobRole || '';
      document.getElementById('modal-country').value = country || '';
      document.getElementById('modal-message').value = `Applying for: ${job}`;
    }
    modal.style.display = 'flex';
    document.getElementById('modal-name').focus(); // Focus trap for accessibility
  });
});

document.querySelector('.close-btn').addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal on outside click
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Form Validation (Modal and Contact Form)
function validateForm(form) {
  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
  let valid = true;
  inputs.forEach(input => {
    if (!input.value.trim()) {
      valid = false;
      input.style.borderColor = 'red';
    } else {
      input.style.borderColor = '#ccc';
    }
    if (input.type === 'email' && input.value) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(input.value)) {
        valid = false;
        input.style.borderColor = 'red';
      }
    }
  });
  return valid;
}

document.getElementById('apply-form').addEventListener('submit', e => {
  if (!validateForm(e.target)) {
    e.preventDefault();
    alert('Please fill all required fields correctly.');
  }
});

// Contact Form Validation
const contactForm = document.querySelector('.form-box form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    if (!validateForm(e.target)) {
      e.preventDefault();
      alert('Please fill all required fields correctly.');
    }
  });
}

// Job Filter Logic
const jobFilter = document.getElementById('job-filter');
if (jobFilter) {
  jobFilter.addEventListener('change', e => {
    const filterValue = e.target.value;
    const jobCards = document.querySelectorAll('.job-card');
    jobCards.forEach(card => {
      const job = card.getAttribute('data-job');
      const country = card.getAttribute('data-country');
      if (filterValue === 'all' || job === filterValue || country === filterValue) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}
