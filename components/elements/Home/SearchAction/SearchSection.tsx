import React from 'react'
import styles from './SearchSection.module.scss'
import { Search } from '../../Search/Search'
import { Filters } from '../../Filters/Filters'

import mapImage from '../../../../assets/images/map.png'

export const SearchSection = () => {
  return (
    <section 
      className={styles.section}
      style={{ backgroundImage: `url('${mapImage.src}')` }}
    >
      <div>
        <h1>best places for trip</h1>
        <Search />
        <Filters />
      </div>
    </section>
  )
}
