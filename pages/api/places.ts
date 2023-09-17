// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IPlace } from '@/types/place'
import type { NextApiRequest, NextApiResponse } from 'next'
import japanImg from '../../assets/images/places/japan.jpg'
import italyImg from '../../assets/images/places/italy.jpg'

const places: IPlace[] = [
  {
    slug: 'tokyo',
    description: 'Description',
    distance: 10,
    imagePath: 'http://localhost:3000/images/places/japan.jpg',
    location: { country: 'Japan', city: 'Kyoto' },
    rating: 5,
    duration: '10 days',
    googleMapLink: 'wewa',
    mapImage: 'dsawd'
  },
  {
    slug: 'venezia',
    description: 'Description',
    imagePath: 'http://localhost:3000/images/places/italy.jpg',
    location: { country: 'Italy', city: 'Venezia' },
    rating: 5,
    duration: '7 days',
    distance: 9372,
    googleMapLink: 'wewa',
    mapImage: 'dsawd'
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(places)
}
