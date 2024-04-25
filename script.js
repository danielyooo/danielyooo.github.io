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