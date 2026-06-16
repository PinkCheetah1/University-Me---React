export function fetchWeather() {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // Simulate random failure (1 in 4 chance)
      if (Math.random() > 0.75) {
        reject(new Error("Failed to fetch weather data. Please try again."));
      } else {
        // Return random weather
        const weathers = [
          { temp: 72, condition: "Sunny", emoji: "☀️", location: "San Francisco" },
          { temp: 45, condition: "Raining", emoji: "🌧️", location: "Seattle" },
          { temp: 85, condition: "Hot", emoji: "🔥", location: "Austin" },
          { temp: 30, condition: "Snowing", emoji: "❄️", location: "Chicago" },
          { temp: 65, condition: "Cloudy", emoji: "☁️", location: "New York" }
        ];
        
        const randomWeather = weathers[Math.floor(Math.random() * weathers.length)];
        resolve(randomWeather);
      }
    }, 1500); // 1.5 second delay
  });
}
