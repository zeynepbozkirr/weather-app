import React from 'react'
import styles from './navbar.module.css'
import { useWeather } from '../../context/WeatherContex'

const Navbar = () => {
  const { resetWeather } = useWeather()

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft} onClick={resetWeather}>
        Enos Weather Forecaster
      </div>
      <div className={styles.navbarRight}>
        <img
          src={require('../../assets/image/logo.png')}
          alt="Logo"
          style={{ width: 25, height: 25 }}
        />
      </div>
    </nav>
  )
}

export default Navbar
