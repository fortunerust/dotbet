import React from 'react'
import axios from 'axios'

import { Splide, SplideSlide } from '@splidejs/react-splide'

import gameg1 from '../assets/img/n1.png'
import gameg2 from '../assets/img/n2.png'
import gameg3 from '../assets/img/n3.png'
import gameg4 from '../assets/img/n4.png'
import gameg5 from '../assets/img/n5.png'
import gameg6 from '../assets/img/n6.png'
import b from '../assets/img/b.svg'

export const NewArrival = () => {
  const ImagesArray = [
    {
      img: gameg1,
      text: 'Legend of Eagle',
      gameCode: 'FastSpin-SLOT-015',
      gameType: 'SLOT',
      platform: 'FASTSPIN',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'Neon Fantasy',
      gameCode: 'FastSpin-SLOT-016',
      gameType: 'SLOT',
      platform: 'FASTSPIN',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'Space Conquest',
      gameCode: 'FastSpin-SLOT-017',
      gameType: 'SLOT',
      platform: 'FASTSPIN',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'Loki',
      gameCode: 'FastSpin-SLOT-018',
      gameType: 'SLOT',
      platform: 'FASTSPIN',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'Fortune Lions',
      gameCode: 'FastSpin-SLOT-019',
      gameType: 'SLOT',
      platform: 'FASTSPIN',
      hall: 'SEXY'
    },
    {
      img: gameg6,
      text: 'Honey Trap',
      gameCode: 'FastSpin-SLOT-020',
      gameType: 'SLOT',
      platform: 'FASTSPIN',
      hall: 'SEXY'
    },
    {
      img: gameg1,
      text: 'Oceanic Melodies',
      gameCode: 'FastSpin-SLOT-021',
      gameType: 'SLOT',
      platform: 'FASTSPIN',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'The Maya Myth',
      gameCode: 'FastSpin-SLOT-022',
      gameType: 'SLOT',
      platform: 'FASTSPIN',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'Spin and Win',
      gameCode: 'FastSpin-SLOT-023',
      gameType: 'SLOT',
      platform: 'FASTSPIN',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'Safari Blitz',
      gameCode: 'FastSpin-SLOT-024',
      gameType: 'SLOT',
      platform: 'FASTSPIN',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'Goddess Of Egypt',
      gameCode: 'FastSpin-SLOT-025',
      gameType: 'SLOT',
      platform: 'FASTSPIN',
      hall: 'SEXY'
    },
    {
      img: gameg6,
      text: 'Heavenly Fortunes 2',
      gameCode: 'FastSpin-SLOT-026',
      gameType: 'SLOT',
      platform: 'FASTSPIN',
      hall: 'SEXY'
    }
  ]

  const handleGamePlay = async game => {
    const options = {
      method: 'POST',
      url: process.env.REACT_APP_BACKEND + '/api/game/play',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        gameCode: game.gameCode,
        gameType: game.gameType,
        platform: game.platform,
        hall: game.platform,
        tid: 1
      }
    }

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        if (response.data.status == '0000') {
          window.location.href = response.data.session_url
        }
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  return (
    <div className='RecentWin arrowareaslider'>
      <div className='top flex items-center justify-between mb-4'>
        <h1 className='flex items-center'>New</h1>
      </div>

      <div className='slider-wrapper-recent'>
        <Splide
          className='mt-8 mb-8 SliderAreaFirst'
          options={{
            gap: 10,
            arrows: true,
            pagination: false,
            perPage: 6
          }}
        >
          {ImagesArray.map((EachImage, key) => (
            <SplideSlide key={key} onClick={() => handleGamePlay(EachImage)}>
              <div className='card cursor-pointer'>
                <img
                  src={EachImage.img}
                  alt={`slider ${key + 1}`}
                  className='rounded-tr-lg rounded-tl-lg'
                />
                <div className='presentation p-3 justify-between flex items-center rounded-bl-lg rounded-br-lg'>
                  <h1>{EachImage.text}</h1>
                  <img src={b} alt='tag' />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}
