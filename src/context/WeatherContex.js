import React, { createContext, useState, useContext } from 'react'

const WeatherContext = createContext()

export const useWeather = () => useContext(WeatherContext)

const API_KEY = 'c1343cdadc5f47d9a2f0e9877d75fc28'
const BASE_URL = 'https://api.weatherbit.io/v2.0/forecast/daily'

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null)
  const [isNotFound, setIsNotFound] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedDay, setSelectedDay] = useState(null)
  const [city, setCity] = useState('')

  const fetchWeatherData = async (city) => {
    setLoading(true)
    setIsNotFound(false)
    setWeatherData(null)

    try {
      const response = await fetch(
        `${BASE_URL}?city=${city}&days=7&key=${API_KEY}`,
        { method: 'GET', headers: { accept: 'application/json' } }
      )
      const data = await response.json()

      if (response.ok && data && data.city_name) {
        const normalizedData = data.city_name
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
        const normalizedCity = city
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')

        if (normalizedData.toLowerCase() === normalizedCity.toLowerCase()) {
          setWeatherData(data)
          setSelectedDay(data.data[0])
          setCity(data.city_name)
        } else {
          setIsNotFound(true)
        }
      } else {
        setIsNotFound(true)
      }
    } catch (error) {
      console.error('Error fetching weather data:', error)
      setIsNotFound(true)
    } finally {
      setLoading(false)
    }
  }

  const selectDay = (dayData) => {
    setSelectedDay(dayData)
  }

  const resetWeather = () => {
    setWeatherData(null)
    setIsNotFound(false)
    setSelectedDay(null)
  }

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        isNotFound,
        loading,
        selectedDay,
        city,
        fetchWeatherData,
        selectDay,
        resetWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}
