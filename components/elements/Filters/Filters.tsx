import React from 'react'
import styles from './Filters.module.scss'

const cities = [
  { location: 'Paris' },
  { location: 'Bora Bora' },
  { location: 'Maui' },
  { location: 'Tahiti' },
  { location: 'Brazil' },
  { location: 'Norway' }
]

export const Filters = () => {
  return (
    <div className={styles.wrapper}>
      {cities.map(city => (
        <button key={city.location}>{city.location}</button>
      ))}
    </div>
  ) 
}
