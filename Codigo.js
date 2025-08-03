const Botoncito1 = document.getElementById('Si');
const Botoncito2 = document.getElementById('No');
const Contenedor = document.querySelector('.inicio');

Botoncito1.addEventListener('click', () => {
  Contenedor.classList.add('fondo-conicita', 'girar');
  alert('Así me gusta...');
});

function Mover() {
  const Ancho = window.innerWidth;
  const Alto = window.innerHeight * 0.5;

  const X = Math.floor(Math.random() * (Ancho - 100));
  const Y = Math.floor(Math.random() * (Alto - 50));

  Botoncito2.style.left = `${X}px`;
  Botoncito2.style.top = `${Y}px`;
  Botoncito2.style.transform = `translate(0, 0)`;
}


Botoncito2.addEventListener('mouseover', Mover);
