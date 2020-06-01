import React from "react";
import Advert from "./Advert";

import dior from '../../assets/images/dior.jpg'
import keene from '../../assets/images/keene.jpg'
import arTecHouse from '../../assets/images/artechouse.png'
import taschen from '../../assets/images/Taschen.png'
import tein from '../../assets/images/TEIN.jpg'

const advertList = [
  {
    title: 'ad number 1',
    redirectUrl: 'https://www.keane-eyes.com/',
    img: keene,
    alt: 'Keene',
    id: 1
  },
  {
    title: 'ad number 2',
    redirectUrl: 'https://www.dior.com/en_us',
    img: taschen,
    id: 2
  },
  {
    title: 'ad number 3',
    redirectUrl: 'https://www.dior.com/en_us',
    img: dior,
    alt: 'Dior',
    id: 3
  },
  {
    title: 'ad number 4',
    redirectUrl: 'https://www.keane-eyes.com/',
    img: arTecHouse,
    alt: 'arTecHouse',
    id: 4
  },
  {
    title: 'ad number 5',
    redirectUrl: 'https://www.store.teinclothing.com/',
    img: tein,
    alt: 'T.E.I.N.',
    id: 5
  }
]

function FakeAdvert(){
  return (
    <>
      <div style={{
        marginTop: 'calc(130px + 5vmin)',
        textAlign: 'center',
      }}>
        {Object.values(advertList).map((advert) => {
          return <Advert
            title={advert.title}
            redirectUrl={advert.redirectUrl}
            img={advert.img}
            alt={advert.alt}
            id={advert.id}
            key={advert.id}/>
        })}
      </div>
      <hr/>
    </>
  );
}


export default FakeAdvert;
