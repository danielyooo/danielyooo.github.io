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
<<<<<<< HEAD
    slider4: 0,
    slider5: 0,
    slider6: 0
=======
    slider4: 0
>>>>>>> 3cb18b5a35f0c8b6ce9bf7ef5947c47e1c2e04c3
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
<<<<<<< HEAD
  showSlides('slider5');
  showSlides('slider6');
=======
>>>>>>> 3cb18b5a35f0c8b6ce9bf7ef5947c47e1c2e04c3
