// ================= HAMBURGER MENU TOGGLE =================
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('nav').classList.toggle('active');
});

// ================= JOB FILTER =================
document.getElementById('job-filter')?.addEventListener('change', function() {
  const filterValue = this.value;
  const jobCards = document.querySelectorAll('.job-card');

  jobCards.forEach(card => {
    if (filterValue === 'all') {
      card.style.display = 'block';
    } else {
      const cardJob = card.getAttribute('data-job');
      const cardCountry = card.getAttribute('data-country');
      if (cardJob === filterValue || cardCountry === filterValue) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
});

// ================= MODAL FUNCTIONALITY =================
document.querySelectorAll('.apply-btn').forEach(button => {
  button.addEventListener('click', function() {
    const job = this.getAttribute('data-job');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Apply for ${job}</h2>
        <form action="https://formspree.io/f/mjkedvkg" method="POST">
          <label for="name">Full Name *</label>
          <input type="text" id="name" name="name" required>
          <label for="email">Email *</label>
          <input type="email" id="email" name="email" required>
          <label for="phone">Phone Number *</label>
          <input type="tel" id="phone" name="phone" required>
          <label for="job-role">Job Role *</label>
          <select id="job-role" name="job-role" required>
            <option value="" disabled selected>Select Job Role</option>
            <option value="Caregivers" ${job.includes('Caregivers') ? 'selected' : ''}>Caregivers</option>
            <option value="Supermarket Attendants" ${job.includes('Supermarket Attendants') ? 'selected' : ''}>Supermarket Attendants</option>
            <option value="Drivers and Riders" ${job.includes('Drivers and Riders') ? 'selected' : ''}>Drivers and Riders</option>
            <option value="Security Guards" ${job.includes('Security Guards') ? 'selected' : ''}>Security Guards</option>
            <option value="Cleaners" ${job.includes('Cleaners') ? 'selected' : ''}>Cleaners</option>
            <option value="Waiters & Waitresses" ${job.includes('Waiters & Waitresses') ? 'selected' : ''}>Waiters & Waitresses</option>
            <option value="Hospitality Staff" ${job.includes('Hospitality Staff') ? 'selected' : ''}>Hospitality Staff</option>
            <option value="Construction Workers" ${job.includes('Construction Workers') ? 'selected' : ''}>Construction Workers</option>
            <option value="General Application" ${job === 'General Application' ? 'selected' : ''}>General Application</option>
          </select>
          <label for="country">Country *</label>
          <select id="country" name="country" required>
            <option value="" disabled selected>Select Country</option>
            <option value="Canada" ${job.includes('Canada') ? 'selected' : ''}>Canada</option>
            <option value="Qatar" ${job.includes('Qatar') ? 'selected' : ''}>Qatar</option>
            <option value="Dubai" ${job.includes('Dubai') ? 'selected' : ''}>Dubai</option>
            <option value="Saudi Arabia" ${job.includes('Saudi Arabia') ? 'selected' : ''}>Saudi Arabia</option>
            <option value="Europe" ${job.includes('Europe') ? 'selected' : ''}>Europe</option>
          </select>
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="4"></textarea>
          <label for="cv">Upload CV (PDF)</label>
          <input type="file" id="cv" name="cv" accept=".pdf">
          <button type="submit">Submit Application</button>
        </form>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', function() {
      modal.remove();
    });

    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.remove();
      }
    });

    const form = modal.querySelector('form');
    form.addEventListener('submit', function(e) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      requiredFields.forEach(field => {
        if (!field.value) {
          isValid = false;
          field.style.borderColor = 'red';
        } else {
          field.style.borderColor = '#ddd';
        }
      });
      if (!isValid) {
        e.preventDefault();
        alert('Please fill all required fields.');
      }
    });
  });
});

// ================= SMOOTH SCROLL FOR CTAs =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
