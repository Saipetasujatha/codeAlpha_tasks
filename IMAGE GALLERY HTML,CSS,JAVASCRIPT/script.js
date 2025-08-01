function openLightbox(imageSrc) {
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-image').src = imageSrc;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}


document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target === document.getElementById('lightbox')) {
    closeLightbox();
  }
});

let images = document.querySelectorAll('.image-container img');
let currentImage = 0;


images[currentImage].style.border = '10px solid black';

document.getElementById('next').addEventListener('click', () => {
  images[currentImage].style.border = 'none';
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.border = '10px solid black';
});


document.getElementById('prev').addEventListener('click', () => {
  images[currentImage].style.border = 'none';
  currentImage = (currentImage - 1 + images.length) % images.length;
  images[currentImage].style.border = '10px solid black';
});



