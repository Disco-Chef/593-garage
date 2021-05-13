const insertCar = (car) => {
  const carCard = `<div class="car">
    <div class="car-image">
      <img src="http://loremflickr.com/300/300/${car.brand}%20${car.model}" />
    </div>
    <div class="car-info">
      <h4>${car.brand} - ${car.model}</h4>
      <p><strong>Owner:</strong> ${car.owner}</p>
      <p><strong>Plate:</strong> ${car.plate}</p>
    </div>
  </div>`;
  document.querySelector('.cars-list').insertAdjacentHTML('beforeend', carCard);
};

const fetchAndDisplayCars = (garageName) => {
  // 1. Fetch they array of cars from the API
  fetch(`https://wagon-garage-api.herokuapp.com/${garageName}/cars`)
    .then(response => response.json())
    .then((data) => {
      // 2. FOR EACH car, insert a filled in template in the DOM
      data.forEach(insertCar);
    });
};

export { insertCar, fetchAndDisplayCars };
