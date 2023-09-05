const locations = ['Tokyo', 'Tokyo'];
const temperatures = ['15°C', '13°C'];
const times = ['3:04PM', '10:31PM'];
const dates = ['September 3rd, 2023', 'September 3rd, 2023'];

let currentIndex = 0;

const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const bodyElement = document.body;

function updateWeatherInfo(index) {
  locationElement.textContent = locations[index];
  temperatureElement.textContent = temperatures[index];
  timeElement.textContent = times[index];
  dateElement.textContent = dates[index];

  // Update background image based on the current slide
  bodyElement.className = `slide${index + 1}`;
}

updateWeatherInfo(currentIndex);

document.body.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % locations.length;
  updateWeatherInfo(currentIndex);
});

