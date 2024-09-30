import './WeatherInformations.css'

export default function WeatherInformations({ weather }){
    return(
        <>
            <div className='weather-container'>
                <h2>{weather.name}</h2>
                <div className='weather-info'>
                    <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
                </div>
                <p className='description'>
                    {weather.weather[0].description}
                </p>
                <div className='details'>
                    <p>Sensação Térmica: {Math.round(weather.main.feels_like)}°C</p>
                    <p>Umidade: {weather.main.humidity}%</p>
                    <p>Pressão: {weather.main.pressure}</p>
                    <p>Temperatura Máxima: {Math.round(weather.main.temp_max)}°C</p>
                    <p>Temperatura Mínima: {Math.round(weather.main.temp_min)}°C</p>
                </div>
            </div>
        </>
    )
}