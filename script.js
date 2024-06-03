console.log(`Entrada al script`);

document.addEventListener('DOMContentLoaded', function() {
  console.log(`Dom realizado`);
  
  const buttons = document.querySelectorAll('.option-button');

  // Manejar eventos de clic en los botones de opción
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      console.log(`Button ${button.id} clicked!`);
      const functionName = button.id.toLowerCase();
      // Utilizar la URL directamente para redirigir al usuario
      window.location.href = `${functionName}.html`;
    });
  });
});
///////////////////////////////////////////////
  let slideIndex = {
    slider1: 0,
    slider2: 0,
    slider3: 0,
    slider4: 0,
    slider5: 0,
    slider6: 0
  };

  function showSlides(sliderId) {
    let slides = document.querySelectorAll(`#${sliderId} .slide`);
    slides.forEach((slide, index) => {
      slide.style.display = 'none';
      if (index === slideIndex[sliderId]) {
        slide.style.display = 'block';
      }
    });
  }

  function changeSlide(n, sliderId) {
    let slides = document.querySelectorAll(`#${sliderId} .slide`);
    slideIndex[sliderId] = (slideIndex[sliderId] + n + slides.length) % slides.length;
    showSlides(sliderId);
  }

  // Initialize both sliders
  showSlides('slider1');
  showSlides('slider2');
  showSlides('slider3');
  showSlides('slider4');
  showSlides('slider5');
  showSlides('slider6');
// ICONOS
function loadIcons() {
  const iconsPath = '/icons/icons.html'; // Ruta fija a icons.html
  const indexPath = '/index.html'; // Ruta fija a index.html

  fetch(iconsPath)
    .then(response => response.text())
    .then(data => {
      // Insertar el contenido de icons.html al final del body
      document.body.insertAdjacentHTML('beforeend', data);

      // Agregar eventos de clic a los iconos
      const goToIndex = document.getElementById('goToIndex');
      if (goToIndex) {
        goToIndex.addEventListener('click', function() {
          window.location.href = indexPath;
        });
      }

      const goBack = document.getElementById('goBack');
      if (goBack) {
        goBack.addEventListener('click', function() {
          window.history.back();
        });
      }
    })
    .catch(error => console.error('Error loading icons:', error));
}

document.addEventListener('DOMContentLoaded', loadIcons);
