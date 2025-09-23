// ======================
// Scroll Fade Animation
// ======================
const fadeElements = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

fadeElements.forEach(el => {
  appearOnScroll.observe(el);
});

// ======================
// Job Apply Pop-Up Modal
// ======================
const modal = document.createElement('div');
modal.id = 'applyModal';
modal.style.cssText = `
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.7); display: none; justify-content: center; align-items: center;
  z-index: 9999;
`;
modal.innerHTML = `
  <div style="
    background:#fff; padding:30px; border-radius:8px; width:90%; max-width:400px;
    text-align:center; position:relative;">
    <h3 style="margin-bottom:20px;">Apply for Job</h3>
    <p id="jobTitle" style="margin-bottom:20px; font-weight:bold;"></p>
    <a id="applyLink" href="contact.html" class="cta-btn">Go to Contact Form</a>
    <button id="closeModal" style="
      position:absolute; top:10px; right:10px; border:none;
      background:#ccc; padding:5px 10px; cursor:pointer;">X</button>
  </div>
`;
document.body.appendChild(modal);

document.querySelectorAll('.apply-btn').forEach(button => {
  button.addEventListener('click', e => {
    const jobName = e.target.getAttribute('data-job');
    document.getElementById('jobTitle').innerText = jobName;
    modal.style.display = 'flex';
  });
});

document.getElementById('closeModal').addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
