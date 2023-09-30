import React from 'react'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import gameg1 from '../assets/img/s1.png'
import gameg2 from '../assets/img/s2.png'
import gameg3 from '../assets/img/s3.png'
import gameg4 from '../assets/img/s4.png'
import gameg5 from '../assets/img/s5.png'
import gameg6 from '../assets/img/s6.png'
import b from '../assets/img/b.svg'

export const Slots = () => {
  const ImagesArray = [
    {
      img: gameg1,
      text: 'Burglar',
      gameCode: 'JDB-SLOT-001',
      gameType: 'SLOT',
      platform: 'JDB',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'Crystal Realm',
      gameCode: 'JDB-SLOT-002',
      gameType: 'SLOT',
      platform: 'JDB',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'Chef Doeuvre',
      gameCode: 'JDB-SLOT-003',
      gameType: 'SLOT',
      platform: 'JDB',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'Lucky Miner',
      gameCode: 'JDB-SLOT-004',
      gameType: 'SLOT',
      platform: 'JDB',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'Candy Land',
      gameCode: 'JDB-SLOT-005',
      gameType: 'SLOT',
      platform: 'JDB',
      hall: 'SEXY'
    },
    {
      img: gameg6,
      text: 'Crazy Scientist',
      gameCode: 'JDB-SLOT-006',
      gameType: 'SLOT',
      platform: 'JDB',
      hall: 'SEXY'
    },
    {
      img: gameg1,
      text: 'Super Dumpling',
      gameCode: 'JDB-SLOT-007',
      gameType: 'SLOT',
      platform: 'JDB',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'Cash Man',
      gameCode: 'JDB-SLOT-008',
      gameType: 'SLOT',
      platform: 'JDB',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'Wild Beauty',
      gameCode: 'JDB-SLOT-009',
      gameType: 'SLOT',
      platform: 'JDB',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'Flirting Scholar Tang',
      gameCode: 'JDB-SLOT-010',
      gameType: 'SLOT',
      platform: 'JDB',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'Winning Mask',
      gameCode: 'JDB-SLOT-011',
      gameType: 'SLOT',
      platform: 'JDB',
      hall: 'SEXY'
    },
    {
      img: gameg6,
      text: 'Wu kong',
      gameCode: 'JDB-SLOT-012',
      gameType: 'SLOT',
      platform: 'JDB',
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
        <h1 className='flex items-center'>Slots</h1>
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
