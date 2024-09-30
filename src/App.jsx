import { useRef, useState } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'
import WeatherInformationsFiveDays from './components/WeatherInformationsFiveDays/WeatherInformationsFiveDays'

function App() {
  const [ weather, setWeather] = useState()
  const [ weatherFiveDays, setWeatherFiveDays ] = useState()
  const inputRef = useRef() 
  
  async function SearchCity() {
    const city = inputRef.current.value
    const key = "3c378d0c3f717cabad9a4fa336bdac27"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const urlFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric` 
    const apiInfo = await axios.get(url)
    const apiInfoFiveDays = await axios.get(urlFiveDays)
    setWeatherFiveDays(apiInfoFiveDays.data)
    setWeather(apiInfo.data)
  }
  return (
    <>
      <div className='container'>
        <h1>DevClub Previsão do Tempo</h1>
        <input ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
        <button onClick={SearchCity}>Buscar</button>
        {weather && <WeatherInformations weather={weather} />}
        {weatherFiveDays && <WeatherInformationsFiveDays weatherFiveDays={weatherFiveDays} />}
      </div> 
    </>
  )
}

export default App
