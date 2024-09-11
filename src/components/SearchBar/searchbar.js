import React, { useState } from 'react'
import styles from './searchbar.module.css'
import { useWeather } from '../../context/WeatherContex'

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('')
  const { fetchWeatherData } = useWeather()

  const handleSearch = () => {
    fetchWeatherData(city)
  }

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={styles.searchInput}
      />
      <button onClick={handleSearch} className={styles.button}>
        🔍
      </button>
    </div>
  )
}

export default SearchBar
