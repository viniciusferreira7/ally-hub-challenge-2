import { GalleryContainer } from './styles'

import Landscape1 from '../../../../assets/landscape-1.avif'
import Landscape2 from '../../../../assets/landscape-2.avif'
import Landscape3 from '../../../../assets/landscape-3.avif'
import Landscape4 from '../../../../assets/landscape-4.avif'
import Landscape5 from '../../../../assets/landscape-5.avif'
import Landscape6 from '../../../../assets/landscape-6.avif'
import Landscape7 from '../../../../assets/landscape-7.avif'
import Landscape8 from '../../../../assets/landscape-8.avif'
import Landscape9 from '../../../../assets/landscape-9.avif'
import Landscape10 from '../../../../assets/landscape-10.avif'
import Landscape11 from '../../../../assets/landscape-11.avif'
import Landscape12 from '../../../../assets/landscape-12.avif'
import Landscape13 from '../../../../assets/landscape-13.avif'
import Landscape14 from '../../../../assets/landscape-14.avif'
import Landscape15 from '../../../../assets/landscape-15.avif'
import Landscape16 from '../../../../assets/landscape-16.avif'
import Landscape17 from '../../../../assets/landscape-17.avif'
import Landscape18 from '../../../../assets/landscape-18.avif'
import Landscape19 from '../../../../assets/landscape-19.avif'
import Landscape20 from '../../../../assets/landscape-20.avif'
import Landscape21 from '../../../../assets/landscape-21.avif'
import Landscape22 from '../../../../assets/landscape-22.avif'
import Landscape23 from '../../../../assets/landscape-23.avif'
import Landscape24 from '../../../../assets/landscape-24.avif'
import Landscape25 from '../../../../assets/landscape-25.avif'

export function Galley() {
  const galleyImages = [
    Landscape1,
    Landscape2,
    Landscape3,
    Landscape4,
    Landscape5,
    Landscape6,
    Landscape7,
    Landscape8,
    Landscape9,
    Landscape10,
    Landscape11,
    Landscape12,
    Landscape13,
    Landscape14,
    Landscape15,
    Landscape16,
    Landscape17,
    Landscape18,
    Landscape19,
    Landscape20,
    Landscape21,
    Landscape22,
    Landscape23,
    Landscape24,
    Landscape25,
  ]

  return (
    <GalleryContainer>
      {galleyImages.map((landscape) => (
        <div key={landscape}>
          <img src={landscape} alt="Imagem de paisagem" />
        </div>
      ))}
    </GalleryContainer>
  )
}
