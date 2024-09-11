import React from 'react'
import styles from './searchResult.module.css'
import invalid from '../../assets/image/invalid.png'
import noCity from '../../assets/image/noCity.png'
import WeatherDetailCard from '../WeatherDetailCard/weatherDetailCard'
import ForecastTable from '../ForecastTable/forecastTable'
import { useWeather } from '../../context/WeatherContex'
import RingLoader from 'react-spinners/RingLoader'

const SearchResult = ({ setSelectedDay, selectedDay }) => {
  const { weatherData, isNotFound, loading, city } = useWeather()

  const image = isNotFound ? invalid : noCity
  const title = isNotFound ? 'Does not Exist' : 'Select a City'
  const content = isNotFound
    ? 'Type a valid city name to get weekly forecast data.'
    : 'Search and select a city to see results. Try typing the first letters of the city you want.'

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.load}>
          <RingLoader color="#296573" size={100} />
        </div>
      ) : weatherData ? (
        <div className={styles.searchResult}>
          <ForecastTable
            forecastData={weatherData}
            onSelectDay={setSelectedDay}
          />
          <div className={styles.WeatherDetailCard}>
            <WeatherDetailCard selectedDay={selectedDay} />
          </div>
        </div>
      ) : (
        <div className={styles.searchResult}>
          <img src={image} alt={'image'} className={styles.image}></img>
          <div className={styles.WeatherDetailCard}>
            <WeatherDetailCard content={content} title={title} />
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchResult
