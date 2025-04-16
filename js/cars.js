import { qs } from './main.js';
import { showModal } from './modal.js';

const gallery = qs('#cars');

fetch('data/cars.json')
  .then(r => r.json())
  .then(list => buildCards(list))
  .catch(console.error);

function buildCards(cars) {
  cars.forEach(car => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="images/${car.img}" alt="${car.model}" loading="lazy">
      <div style="padding:1rem">
        <h3>${car.brand} ${car.model}</h3>
        <address>${car.price}</address>
        <p>${car.summary}</p>
        <a href="#" class="card-btn">Learn&nbsp;More</a>
      </div>`;
    card.querySelector('.card-btn').onclick = e => {
      e.preventDefault();
      showModal(
        `${car.brand} ${car.model}`,
        `<p><strong>Engine:</strong> ${car.engine}</p>
         <p><strong>Fuel:</strong> ${car.fuel}</p>
         <p>${car.details}</p>`
      );
    };
    gallery.appendChild(card);
  });
}
