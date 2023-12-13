
  const search = document.querySelector('#search');

        const container = document.querySelector('.container');

        const weatherBox = document.querySelector('#search');

        const error = document.querySelector('#search');

        const cityEntered = document.querySelector('#city')

        const weatherBody = document.querySelector('.weather-part')
 
        

        const apiKey = "597c40c39084687093b091cd48b366f8";

        const city = "japan";
 
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 
        fetch(apiUrl)

            .then(response => {

                if (!response.ok) {

                    throw new Error(`HTTP error! Status: ${response.status}`);

                }

                return response.json();

            })

            .then(data => {

                // Handle the data received from the API

                console.log(data);
 
               

                const temperature = data.main.temp;

                const weatherDescription = data.weather[0].description;

                const humidity = data.main.humidity;

                const icon = weather[0].icon;
 
          
 
                const weatherBody = document.getElementById('weatherBody'); // Assuming you have an element with the ID 'weatherBody'
 
                const div = document.createElement('div');

                div.innerHTML =

                    `

          <img src="" alt="Weather Icon">

          <div class="temp">

             ${data.weather[0].description}

          </div>

          <div class="weather">_ _</div>

          <div class="location">

            Temperature: ${data.main.temp}°C

          </div>

          <div class="bottom-details">

              <div class="column feels">

           ${weather[0].icon}

                  <div class="details">

                      <div class="temp">

                          <span class="numb-2">${data.main.feels_like}</span>

                          <span class="deg">°</span>C

                      </div>

                      <p>Feels like</p>

                  </div>

              </div>

              <div class="column humidity">

                  <i class='bx bxs-droplet-half'></i>

                  <div class="details">

                      <span>${data.main.humidity}</span>

                      <p>Humidity</p>

                  </div>

              </div>

          </div>

    `;
 
                // div.className = "insideWeather";

                weatherBody.appendChild('div');

            })

            .catch(error => {

                console.error('Fetch error:', error);

            });
 