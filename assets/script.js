const galleryImages = [...document.querySelectorAll('.shot img')];
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const btnClose = document.querySelector('.lightbox-close');
const btnPrev = document.querySelector('.lightbox-prev');
const btnNext = document.querySelector('.lightbox-next');
let currentIndex = 0;

function showImage(index) {
  currentIndex = (index + galleryImages.length) % galleryImages.length;
  const img = galleryImages[currentIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = img.alt.replace(' — DGX Fotos', '');
}

function openLightbox(index) {
  showImage(index);
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  btnClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

galleryImages.forEach((img, index) => {
  img.closest('.shot').addEventListener('click', () => openLightbox(index));
  img.closest('.shot').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(index);
    }
  });
});

btnClose.addEventListener('click', closeLightbox);
btnPrev.addEventListener('click', () => showImage(currentIndex - 1));
btnNext.addEventListener('click', () => showImage(currentIndex + 1));
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('is-open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
  if (e.key === 'ArrowRight') showImage(currentIndex + 1);
});
