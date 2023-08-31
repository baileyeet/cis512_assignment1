const locations = ['New York, NY', 'New York, NY''];
const temperatures = ['75°F', '68°F'];
const conditions = ['Sunny', 'Clear Skies'];
const backgrounds = ['dark_background.jpg', 'light_background.jpg''];

let currentIndex = 0;

const weatherContainer = document.querySelector('.weather-container');
const locationElement = document.querySelector('.location');
const temperatureElement = document.querySelector('.temperature');
const conditionsElement = document.querySelector('.conditions');

weatherContainer.addEventListener('click', () => {
  console.log("click event triggered");
  currentIndex = (currentIndex + 1) % locations.length;

  locationElement.textContent = locations[currentIndex];
  temperatureElement.textContent = temperatures[currentIndex];
  conditionsElement.textContent = conditions[currentIndex];

  document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
});

// Initial setup
locationElement.textContent = locations[currentIndex];
temperatureElement.textContent = temperatures[currentIndex];
conditionsElement.textContent = conditions[currentIndex];
document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;

