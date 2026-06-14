document.addEventListener('DOMContentLoaded', function () {
  // Hamburger menu
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    // mobile dropdown toggle
    var dd = navLinks.querySelector('.nav-dropdown > a');
    if (dd) {
      dd.addEventListener('click', function (e) {
        if (window.innerWidth <= 760) {
          e.preventDefault();
          dd.parentElement.classList.toggle('open');
        }
      });
    }
  }

  // Scroll to top button
  var scrollBtn = document.querySelector('.scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) scrollBtn.classList.add('show');
      else scrollBtn.classList.remove('show');
    });
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Lightbox for album items
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var items = document.querySelectorAll('.album-item');
    var closeBtn = lightbox.querySelector('.lightbox-close');
    var img = lightbox.querySelector('img');
    items.forEach(function (item) {
      item.addEventListener('click', function () {
        var ph = item.querySelector('.album-placeholder');
        lightbox.classList.add('active');
        img.style.display = 'none';
        var big = document.createElement('div');
        big.className = 'album-placeholder';
        big.style.width = '320px';
        big.style.height = '320px';
        big.style.borderRadius = '8px';
        big.style.background = getComputedStyle(ph).background;
        big.innerHTML = ph.innerHTML;
        var old = lightbox.querySelector('.album-placeholder');
        if (old) old.remove();
        lightbox.appendChild(big);
      });
    });
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        lightbox.classList.remove('active');
      });
    }
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }

  // Contact form (demo only - no backend)
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız. (Demo form)');
      form.reset();
    });
  }
});
