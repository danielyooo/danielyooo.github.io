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
    slider6: 0,
    slider7: 0,
    slider8: 0,
    slider9: 0,
    slider10: 0
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
  showSlides('slider7');
  showSlides('slider8');
  showSlides('slider9');
  showSlides('slider10');
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
// logo
document.addEventListener('DOMContentLoaded', function() {
  // Crea un nuevo elemento link para el favicon
  var link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png'; // Cambiado a image/png
  link.href = '/art/logo_transparente.png'; // Cambia este valor al camino correcto de tu logo.png

  // Agrega el elemento link al head del documento
  document.head.appendChild(link);
});
//logo

//ZOOM
let scale = 1;
let startDistance = 0;
let lastX = 0;
let lastY = 0;
let isDragging = false;
let translateX = 0;
let translateY = 0;
let originalTranslateX = 0;
let originalTranslateY = 0;
window.onload = function() {
  // Establecer la posición original de la imagen
  originalTranslateX = (zoomContainer.offsetWidth - zoomImage.offsetWidth) / 2;
  originalTranslateY = (zoomContainer.offsetHeight - zoomImage.offsetHeight) / 2;
  translateX = originalTranslateX;
  translateY = originalTranslateY;
  applyTransform();
};
  
      const zoomImage = document.getElementById('zoomImage');
      const zoomContainer = document.getElementById('zoomContainer');
  
      zoomImage.addEventListener('wheel', function(event) {
        event.preventDefault();
  
        scale += event.deltaY * -0.01;
        scale = Math.min(Math.max(.125, scale), 4);
        scale = Math.max(1, scale);
        applyTransform();
      });
  
      zoomImage.addEventListener('touchstart', function(event) {
        if (event.touches.length === 2) {
          startDistance = getDistance(event.touches[0], event.touches[1]);
        } else if (event.touches.length === 1) {
          lastX = event.touches[0].clientX;
          lastY = event.touches[0].clientY;
        }
      });
  
      zoomImage.addEventListener('touchmove', function(event) {
        if (event.touches.length === 2) {
          event.preventDefault();
  
          let newDistance = getDistance(event.touches[0], event.touches[1]);
          scale *= newDistance / startDistance;
          scale = Math.min(Math.max(.125, scale), 4);
  
          startDistance = newDistance;
        } else if (event.touches.length === 1) {
          event.preventDefault();
  
          if (scale > 1) { // Permitir arrastrar solo si está ampliada
            let deltaX = event.touches[0].clientX - lastX;
            let deltaY = event.touches[0].clientY - lastY;
  
            translateX += deltaX;
            translateY += deltaY;
  
            lastX = event.touches[0].clientX;
            lastY = event.touches[0].clientY;
          }
        }
        applyTransform();
      });
  
      zoomImage.addEventListener('mousedown', function(event) {
        if (scale > 1) { // Permitir arrastrar solo si está ampliada
          isDragging = true;
          lastX = event.clientX;
          lastY = event.clientY;
        }
      });
  
      document.addEventListener('mousemove', function(event) {
        if (isDragging) {
          event.preventDefault();
  
          let deltaX = event.clientX - lastX;
          let deltaY = event.clientY - lastY;
  
          translateX += deltaX;
          translateY += deltaY;
  
          lastX = event.clientX;
          lastY = event.clientY;
  
          applyTransform();
        }
      });
  
      document.addEventListener('mouseup', function() {
        isDragging = false;
      });
  
      function getDistance(touch1, touch2) {
        let dx = touch1.clientX - touch2.clientX;
        let dy = touch1.clientY - touch2.clientY;
        return Math.sqrt(dx * dx + dy * dy);
      }
  
      function applyTransform() {
        zoomImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        // Limitar la escala mínima a 1
  if (scale < 1) {
    scale = 1;
  }
      }

      function resetImage() {
        scale = 1;
        translateX = originalTranslateX;
        translateY = originalTranslateY;
        applyTransform();
      }
//ZOOM