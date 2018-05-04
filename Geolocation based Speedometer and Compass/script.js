const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed');

navigator.geolocation.watchPosition(data => {
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.log(err);
  alert('HEY! You Gotta Allow That to Happen !!!');
}
);
