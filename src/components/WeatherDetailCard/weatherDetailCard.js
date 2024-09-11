import React, { Image } from 'react'
import styles from './weatherDetailCard.module.css'
import SearchBar from '../SearchBar/searchbar'
import { useWeather } from '../../context/WeatherContex'

const WeatherDetailCard = ({ content, title }) => {
  const { weatherData, isNotFound, selectedDay, city } = useWeather()

  return (
    <div className={styles.container}>
      <div className={styles.searchDiv}>
        <SearchBar />
      </div>
      <div className={styles.weatherDetail}>
        {!weatherData ? (
          <div>
            <h2 className={styles.city}>{title}</h2>
            <p className={styles.day}>{content}</p>
          </div>
        ) : (
          <div>
            <h3 className={styles.title}>{selectedDay?.app_max_temp}</h3>
            <p className={styles.city}>{city}</p>
            <p className={styles.day}>
              {new Date(selectedDay?.datetime).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                weekday: 'long',
              })}
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={require(`../../assets/icon/${selectedDay?.weather?.icon}.png`)}
                alt={'icon'}
                style={{ width: 25, height: 25 }}
              />
              <p className={styles.state}>
                {selectedDay?.weather?.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default WeatherDetailCard
