import React from 'react'
import styles from './HeadingSection.module.scss'
import { Search } from '../../Search/Search'
import { Filters } from '../../Filters/Filters'

import mapImage from '../../../../assets/images/map.png'

export const HeadingSection = () => {
  return (
    <section 
      className={styles.section}
      style={{ backgroundImage: `url('${mapImage.src}')` }}
    >
      <div>
        <h1>best places for trip</h1>
        
      </div>
    </section>
  )
}
