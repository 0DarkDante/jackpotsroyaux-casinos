document.addEventListener('DOMContentLoaded', () => {
  const cookieNotice = document.querySelector('.cookie-notice');
  const acceptBtn = document.querySelector('.cookie-btn.accept');
  const refuseBtn = document.querySelector('.cookie-btn.refuse');

  // Перевірка, чи користувач вже зробив вибір
  const cookieConsent = localStorage.getItem('cookieConsent');

  if (!cookieConsent) {
    cookieNotice.classList.add('active');
  }

  function setConsent(value) {
    localStorage.setItem('cookieConsent', value);
    cookieNotice.classList.remove('active');
  }

  acceptBtn.addEventListener('click', () => {
    setConsent('accepted');
    // тут можна додати логіку завантаження аналітики або трекерів
  });

  refuseBtn.addEventListener('click', () => {
    setConsent('refused');
    // тут можна додати логіку, якщо потрібно відмовитись від трекерів
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const ageGate = document.querySelector('.age-verification');
  const confirmBtn = document.querySelector('.confirm-btn');
  const declineBtn = document.querySelector('.decline-btn');

  const isAdult = localStorage.getItem('isAdult');

  if (isAdult !== 'true') {
    ageGate.style.display = 'flex';
  }

  confirmBtn.addEventListener('click', () => {
    localStorage.setItem('isAdult', 'true');
    ageGate.style.display = 'none';
  });

  declineBtn.addEventListener('click', () => {
    // Перенаправити або закрити сторінку
    window.location.href = 'https://www.google.com'; // або щось інше
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const contactLink = document.querySelector('.contact-link');
  const contactModal = document.getElementById('contact-popup');
  const closeBtn = contactModal?.querySelector('.contact-close');

  contactLink?.addEventListener('click', (e) => {
    e.preventDefault();
    contactModal?.classList.add('active');
    contactModal?.setAttribute('aria-hidden', 'false');
  });

  closeBtn?.addEventListener('click', () => {
    contactModal?.classList.remove('active');
    contactModal?.setAttribute('aria-hidden', 'true');
  });

  // Optional: Закриття по кліку поза формою
  contactModal?.addEventListener('click', (e) => {
    if (e.target === contactModal) {
      contactModal.classList.remove('active');
      contactModal.setAttribute('aria-hidden', 'true');
    }
  });
});
