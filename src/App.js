// App.js

import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import { WeatherProvider } from './context/WeatherContex' // WeatherProvider import edilmeli
import styles from './App.css'
import SearchResult from './components/SearchResult/searchResult'

function App() {
  return (
    <WeatherProvider>
      <div className={styles.app}>
        <Navbar />
        <SearchResult />
      </div>
    </WeatherProvider>
  )
}

export default App
