// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IPlace } from '@/src/types/place'
import type { NextApiRequest, NextApiResponse } from 'next'
import japanImg from '../../assets/images/places/japan.jpg'

const places: IPlace[] = [
  {
    slug: 'tokyo',
    description: 'Description',
    distance: 10,
    imagePath: japanImg.src,
    location: 'Japan',
    rating: 5,
    duration: '10 days',
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
