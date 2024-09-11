import React from 'react'
import styles from '../ForecastTable/forecastTable.module.css'
import { useWeather } from '../../context/WeatherContex'

const WeatherTable = () => {
  const { weatherData, selectDay } = useWeather()

  const handleRowClick = (dayData) => {
    selectDay(dayData)
  }

  return (
    <table className={styles.weatherTable}>
      <thead>
        <tr>
          <th>Day</th>
          <th>Date</th>
          <th>Lowest Temp</th>
          <th>Highest Temp</th>
        </tr>
      </thead>
      <tbody>
        {weatherData?.data.map((day, index) => (
          <tr
            key={index}
            onClick={() => handleRowClick(day)}
            className={styles.row}
          >
            <td data-label="Day">
              {new Date(day.datetime).toLocaleDateString('en-US', {
                weekday: 'long',
              })}
            </td>
            <td data-label="Date">{day.datetime}</td>
            <td data-label="Highest Temp">{day.low_temp}°C</td>
            <td data-label="Lowest Temp">{day.high_temp}°C</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default WeatherTable
