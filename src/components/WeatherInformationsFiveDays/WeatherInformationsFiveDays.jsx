import './WeatherInformationsFiveDays.css'

export default function WeatherInformationsFiveDays({ weatherFiveDays }) {
    let dailyForecast = {}
    for(let forecast of weatherFiveDays.list){
       const date = new Date(forecast.dt * 1000).toLocaleDateString()
       if(!dailyForecast[date]){
            dailyForecast[date] = forecast
       }
    }
    const nextFiveDaysForeCast = Object.values(dailyForecast).slice(1,6)
    function convertDate(date){
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit'})
        return newDate
    }
    return(
            <div className='weather-container'>
                <h3>Previsão para os próximos 5 dias</h3>
                <div className='weather-list'> 
                    {nextFiveDaysForeCast.map(forecast => (
                        <div key={forecast.dt} className='weather-item'> 
                        <p className='forecast-day'>{convertDate(forecast)}</p>
                        <p className='forecast-description'>{forecast.weather[0].description}</p>
                        <p>{Math.round(forecast.main.temp_min)}°C min /{' '} {Math.round(forecast.main.temp_max)}°C max</p>
                    </div>
                ))}
            </div>
            </div>
    )
}