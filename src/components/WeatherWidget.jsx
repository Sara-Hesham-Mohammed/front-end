import React, { useState, useEffect } from 'react';

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch('https://api.weatherapi.com/v1/forecast.json?key=ff9b41622f994b1287a73535210809&q=Guwahati&days=3')
      .then(response => response.json())
      .then(json => setWeatherData(json));
  }, []);

  const formattedDateDisplay = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return (new Date(date)).toLocaleDateString('en-US', options);
  };

  return (
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-white shadow rounded-lg p-4 dark:bg-gray-800 w-full">
          <h2 className="font-bold text-gray-800 text-xs dark:text-gray-400">
            {formattedDateDisplay(new Date())}
          </h2>

          {weatherData != null ? (
            <div>
              <div className="flex mt-3 mb-2">
                <div className="flex-1">
                  <div className="text-gray-600 text-xs dark:text-gray-400">
                    {weatherData.location.name + ', ' + weatherData.location.region}
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-300">
                    {weatherData.current.temp_c} &deg;C
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {weatherData.current.condition.text}
                  </div>
                </div>
                <div className="w-20">
                  <img src={`https:${weatherData.current.condition.icon}`} alt={weatherData.current.condition.text} loading="lazy" />
                </div>
              </div>

              <div className="flex space-x-1 justify-between border-t dark:border-gray-500">
                {weatherData.forecast.forecastday.slice(1).map((forecast, key) => (
                  <div key={key} className="flex-1 text-center pt-3" style={{ borderRight: key === 0 ? '1px solid rgba(0, 0, 0, 0.1)' : '' }}>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {forecast.date.split('-').reverse().join('/')}
                    </div>
                    <img src={`https:${forecast.day.condition.icon}`} alt={forecast.day.condition.text} loading="lazy" className="mx-auto" />
                    <div className="font-semibold text-gray-800 mt-1.5 dark:text-gray-300">
                      {forecast.day.maxtemp_c} &deg;C
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {forecast.day.condition.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="animate-pulse">
              <div className="flex mt-3 mb-4">
                <div className="flex-1">
                  <div className="rounded h-2 mb-1.5 bg-gray-200 w-1/2"></div>
                  <div className="bg-gray-200 rounded h-4"></div>
                  <div className="rounded h-2 mt-1.5 bg-gray-200 w-1/2"></div>
                </div>
                <div className="w-20">
                  <div className="w-10 h-10 rounded-full bg-gray-100 mx-auto"></div>
                </div>
              </div>

              <div className="flex space-x-1 justify-between border-t h-28 dark:border-gray-500">
                <div className="flex-1 text-center pt-4 border-r px-5 dark:border-gray-500">
                  <div className="rounded h-2 mb-2 bg-gray-200 w-1/2 mx-auto"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-100 mx-auto mb-2"></div>
                  <div className="rounded h-3 mt-1 bg-gray-200 mt-1.5 mx-auto"></div>
                  <div className="rounded h-2 mt-1 bg-gray-200 w-1/2 mx-auto"></div>
                </div>
                <div className="flex-1 text-center pt-4 px-5">
                  <div className="rounded h-2 mb-2 bg-gray-200 w-1/2 mx-auto"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-100 mx-auto mb-2"></div>
                  <div className="rounded h-3 mt-1 bg-gray-200 mt-1.5 mx-auto"></div>
                  <div className="rounded h-2 mt-1 bg-gray-200 w-1/2 mx-auto"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        
      </div>
  );
};

export default WeatherCard;
