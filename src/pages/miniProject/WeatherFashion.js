import weatherStyle from '../../resources/css/pages/miniProject/Weather.module.css';
import { useState, useEffect } from 'react';

function WeatherFashion() {
    
    const API_KEY = 'e5d6ea3de966e26f78bd504a032a8b22';

    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('Seoul');

    useEffect(() => {
        async function fetchWeather() {
            const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchWeather();
    }, [city]);

    if (!weather) return <div>Loading...</div>;

    // const temperature = (weather.main.temp - 273.15).toFixed(1);
    const temperature = 25;

    /* 온도에 따른 배경색 */
    const BACKGROUND_COLORS = [
        '#FF0000',
        '#FFA500', 
        '#FFFF00', 
        '#32CD32', 
        '#87CEEB', 
        '#0000FF', 
        '#000080',
        '#000080' 
      ];
      
    /* 온도에 따른 배경색 범위 */
    // const index = Math.min(Math.floor((temperature - 5) / 3), 6);
    let startColor = '';
    let endColor = '';
    let fashion = '';

    if (temperature >= 27) {
        startColor = BACKGROUND_COLORS[0];
        endColor = BACKGROUND_COLORS[1];
        fashion = '반팔, 반바지, 원피스';
      } else if (temperature >= 23 && temperature <= 26) {
        startColor = BACKGROUND_COLORS[1];
        endColor = BACKGROUND_COLORS[2];
        fashion = '반팔, 얇은 셔츠, 면바지';
      } else if (temperature >= 20 && temperature <= 22) {
        startColor = BACKGROUND_COLORS[2];
        endColor = BACKGROUND_COLORS[3];
        fashion = '얇은 가디건, 긴팔, 면바지, 청바지';
      } else if (temperature >= 17 && temperature <= 19) {
        startColor = BACKGROUND_COLORS[3];
        endColor = BACKGROUND_COLORS[4];
        fashion = '얇은 니트, 맨투맨, 가디건, 청바지';
      } else if (temperature >= 12 && temperature <= 16) {
        startColor = BACKGROUND_COLORS[4];
        endColor = BACKGROUND_COLORS[5];
        fashion = '자켓, 가디건, 야상, 청바지';
      } else if (temperature >= 6 && temperature <= 11) {
        startColor = BACKGROUND_COLORS[5];
        endColor = BACKGROUND_COLORS[6];
        fashion = '자켓, 트렌치코트, 야상, 니트, 청바지';
      } else if (temperature >= 0 && temperature <= 5) {
        startColor = BACKGROUND_COLORS[6];
        endColor = BACKGROUND_COLORS[7];
        fashion = '코트, 가죽자켓, 히트텍, 니트';
      } else {
        startColor = BACKGROUND_COLORS[6];
        endColor = BACKGROUND_COLORS[7];
        fashion = '패팅, 두꺼운 코트, 목도리, 기모제품';
      }

    /* 그라데이션 배경 */
    const gradient = `linear-gradient(to bottom, ${startColor}, ${endColor})`;
    const gradient2 = `linear-gradient(to bottom, ${endColor}, ${startColor})`;

    return (

        <div style={{background: gradient, width:"100%", height: "100vh", position:"absolute"}}>
            <div className={weatherStyle.weatherContent} style={{background: gradient2}}>
                <div className={weatherStyle.temperature}>
                    <p>{city}</p>
                    <span className={weatherStyle.temperatureText}>{temperature}</span>
                    <span>°C</span>
                </div>
            </div>
        </div>
    );
}

export default WeatherFashion;
