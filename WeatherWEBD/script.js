(async () => {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '06fec6a1e0mshcbf9820764ee987p1c5970jsn5a2037827756',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const cityName = document.getElementById('cityName'); // Assuming you have an element with id 'cityName'
    const cityInput = document.getElementById('city');
    const submitBtn = document.getElementById('submitbtn');

    const cards = document.querySelectorAll('.card');

    const getWeather = async (city) => {
        cityName.innerHTML = city;

        try {
            const response = await fetch(`${url}?city=${city}`, options);
            const result = await response.json();

            cards.forEach((card, index) => {
                const tempElement = card.querySelector('.temp');
                const cloudPctElement = card.querySelector('.cloud_pct');
                const feelsLikeElement = card.querySelector('.feels_like');
                const humidityElement = card.querySelector('.humidity');
                const minTempElement = card.querySelector('.min_temp');
                const maxTempElement = card.querySelector('.max_temp');
                const windSpeedElement = card.querySelector('.wind_speed');

                // Update the values for each card
                tempElement.innerHTML = result.temp;
                cloudPctElement.innerHTML = result.cloud_pct;
                feelsLikeElement.innerHTML = result.feels_like;
                humidityElement.innerHTML = result.humidity;
                minTempElement.innerHTML = result.min_temp;
                maxTempElement.innerHTML = result.max_temp;
                windSpeedElement.innerHTML = result.wind_speed;
                // ... (you can add more elements as needed)
            });
        } catch (error) {
            console.error(error);
        }
    }

    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const city = cityInput.value;
        await getWeather(city);
    });

    // Initialize with a default city (e.g., Delhi)
    const defaultCity = 'Delhi';
    await getWeather(defaultCity);   
  

})();
