import { FC, MouseEvent } from 'react'
import Link from 'next/link'
import { IPlace } from '@/types/place'
import styles from './PopularPlaces.module.scss'

import { MdDeleteOutline } from 'react-icons/md'

export const PlaceItem: FC<{
	place: IPlace
	removeHandler?: (e: MouseEvent<HTMLButtonElement>) => void
}> = ({ place, removeHandler }) => {
	return (
		<Link href={`/place/${place.slug}`} key={place.slug}
			
				className={styles.item}
				style={{
					backgroundImage: `url(${place.imagePath})`
				}}
			>
				<span className={styles.heading}>
					{place.location.city + ', ' + place.location.country}
				</span>
				{removeHandler && (
					<button aria-label="Remove from favorites" onClick={removeHandler}>
						<MdDeleteOutline size={26} />
					</button>
				)}
		</Link>
	)
}

