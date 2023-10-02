import React from 'react'
import axios from 'axios'

import { Splide, SplideSlide } from '@splidejs/react-splide'

import gameg1 from '../assets/img/b1.png'
import gameg2 from '../assets/img/b2.png'
import gameg3 from '../assets/img/b3.png'
import gameg4 from '../assets/img/b4.png'
import gameg5 from '../assets/img/b5.png'
import gameg6 from '../assets/img/b6.png'
import b from '../assets/img/b.svg'

export const Bonus = () => {
  const ImagesArray = [
    {
      img: gameg1,
      text: 'GOLDEN PANTHER',
      gameCode: 'FC-SLOT-001',
      gameType: 'SLOT',
      platform: 'FC',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'THREE LITTLE PIGS',
      gameCode: 'FC-SLOT-002',
      gameType: 'SLOT',
      platform: 'FC',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'HOT POT PARTY',
      gameCode: 'FC-SLOT-003',
      gameType: 'SLOT',
      platform: 'FC',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'NIGHT MARKET',
      gameCode: 'FC-SLOT-004',
      gameType: 'SLOT',
      platform: 'FC',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'LUXURY GOLDEN PANTHER',
      gameCode: 'FC-SLOT-012',
      gameType: 'SLOT',
      platform: 'FC',
      hall: 'SEXY'
    },
    {
      img: gameg6,
      text: 'PONG PONG HU',
      gameCode: 'FC-SLOT-005',
      gameType: 'SLOT',
      platform: 'FC',
      hall: 'SEXY'
    },
    {
      img: gameg1,
      text: 'PANDA DRAGON BOAT',
      gameCode: 'FC-SLOT-006',
      gameType: 'SLOT',
      platform: 'FC',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'CHINESE NEW YEAR',
      gameCode: 'FC-SLOT-007',
      gameType: 'SLOT',
      platform: 'FC',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'FORTUNE KOI',
      gameCode: 'FC-SLOT-008',
      gameType: 'SLOT',
      platform: 'FC',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'HAPPY DUO BAO',
      gameCode: 'FC-SLOT-009',
      gameType: 'SLOT',
      platform: 'FC',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'DA LE MEN',
      gameCode: 'FC-SLOT-010',
      gameType: 'SLOT',
      platform: 'FC',
      hall: 'SEXY'
    },
    {
      img: gameg6,
      text: 'ANIMAL RACING',
      gameCode: 'FC-SLOT-011',
      gameType: 'SLOT',
      platform: 'FC',
      hall: 'SEXY'
    }
  ]

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
        <h1 className='flex items-center'>Bonus Wagering</h1>
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
