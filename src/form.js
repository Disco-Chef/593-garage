import { insertCar } from './car';

const form = document.getElementById('new-car');

const createCarObject = (garageName) => {
  const car = {
    brand: document.getElementById("brand").value,
    model: document.getElementById("model").value,
    plate: document.getElementById("plate").value,
    owner: document.getElementById("owner").value
  };
  const url = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`;
  fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(car)
  })
    .then(response => response.json())
    .then((data) => {
      insertCar(data);
      // handy-dandy method to reset the form's inputs
      form.reset();
    });
};

const prepareNewCarForm = (garageName) => {
  // 1. Add the event listener to the form
  form.addEventListener('submit', (event) => {
    // 2. Prevent the default behaviour of the submit event ⚡
    event.preventDefault();
    // 3. Make the POST request with the value of the input fields
    createCarObject(garageName);
  });
};


export { prepareNewCarForm };
