const buttons = document.querySelectorAll('.func-button button');
const screen = document.querySelector('.item-screen .screen');


buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonText = button.textContent;
      screen.innerHTML = buttonText;
      console.log(`El botón ${buttonText} ha sido presionado`);
    });
  });
   
