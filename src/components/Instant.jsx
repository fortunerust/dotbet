import React from 'react'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import gameg1 from '../assets/img/i1.png'
import gameg2 from '../assets/img/i2.png'
import gameg3 from '../assets/img/i3.png'
import gameg4 from '../assets/img/i4.png'
import gameg5 from '../assets/img/i5.png'
import gameg6 from '../assets/img/i6.png'
import b from '../assets/img/b.svg'

export const Instant = () => {
  const ImagesArray = [
    {
      img: gameg1,
      text: 'Hot Chilli',
      gameCode: 'JILI-SLOT-002',
      gameType: 'SLOT',
      platform: 'JILI',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'Chin Shi Huang',
      gameCode: 'JILI-SLOT-003',
      gameType: 'SLOT',
      platform: 'JILI',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'War Of Dragons',
      gameCode: 'JILI-SLOT-004',
      gameType: 'SLOT',
      platform: 'JILI',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'Fortune Tree',
      gameCode: 'JILI-SLOT-005',
      gameType: 'SLOT',
      platform: 'JILI',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'Lucky Ball',
      gameCode: 'JILI-SLOT-006',
      gameType: 'SLOT',
      platform: 'JILI',
      hall: 'SEXY'
    },
    {
      img: gameg6,
      text: 'Hyper Burst',
      gameCode: 'JILI-SLOT-007',
      gameType: 'SLOT',
      platform: 'JILI',
      hall: 'SEXY'
    },
    {
      img: gameg1,
      text: 'Shanghai Beauty',
      gameCode: 'JILI-SLOT-008',
      gameType: 'SLOT',
      platform: 'JILI',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'Fa Fa Fa',
      gameCode: 'JILI-SLOT-009',
      gameType: 'SLOT',
      platform: 'JILI',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'God Of Martial',
      gameCode: 'JILI-SLOT-010',
      gameType: 'SLOT',
      platform: 'JILI',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'Hawaii Beauty',
      gameCode: 'JILI-SLOT-011',
      gameType: 'SLOT',
      platform: 'JILI',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'SevenSevenSeven',
      gameCode: 'JILI-SLOT-012',
      gameType: 'SLOT',
      platform: 'JILI',
      hall: 'SEXY'
    },
    {
      img: gameg6,
      text: 'Crazy777',
      gameCode: 'JILI-SLOT-013',
      gameType: 'SLOT',
      platform: 'JILI',
      hall: 'SEXY'
    }
  ];

  const handleGamePlay = async game => {
    const token = window.localStorage.getItem("token");
    const options = {
      method: 'POST',
      url: process.env.REACT_APP_BACKEND + '/api/game/play',
      headers: { 'content-type': 'application/x-www-form-urlencoded', 'x-auth-token': token },
      data: {
        gameCode: game.gameCode,
        gameType: game.gameType,
        platform: game.platform,
        hall: game.hall,
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
        <h1 className='flex items-center'>Instant</h1>
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
