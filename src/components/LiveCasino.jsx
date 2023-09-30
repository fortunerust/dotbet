import React from 'react'
import axios from 'axios'

import { Splide, SplideSlide } from '@splidejs/react-splide'

import gameg1 from '../assets/img/l1.png'
import gameg2 from '../assets/img/l2.png'
import gameg3 from '../assets/img/l3.png'
import gameg4 from '../assets/img/l4.png'
import gameg5 from '../assets/img/l5.png'
import livecasino from '../assets/img/live-casino.svg'

export const LiveCasino = () => {
  const ImagesArray = [
    {
      img: gameg1,
      text: 'Roulette',
      gameCode: 'BG-LIVE-003',
      gameType: 'Live',
      platform: 'BG',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'SicBo',
      gameCode: 'BG-LIVE-004',
      gameType: 'Live',
      platform: 'BG',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'Baccarat',
      gameCode: 'BG-LIVE-002',
      gameType: 'Live',
      platform: 'BG',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'SpeedBaccarat',
      gameCode: 'BG-LIVE-006',
      gameType: 'Live',
      platform: 'BG',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'MiCardBaccarat',
      gameCode: 'BG-LIVE-007',
      gameType: 'Live',
      platform: 'BG',
      hall: 'SEXY'
    },
    {
      img: gameg1,
      text: 'FullColorBaccarat',
      gameCode: 'BG-LIVE-008',
      gameType: 'Live',
      platform: 'BG',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'BullBull',
      gameCode: 'BG-LIVE-009',
      gameType: 'Live',
      platform: 'BG',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'WinThreeCards',
      gameCode: 'BG-LIVE-010',
      gameType: 'Live',
      platform: 'BG',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'RedBlack',
      gameCode: 'BG-LIVE-011',
      gameType: 'Live',
      platform: 'BG',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'SpeedSicBo',
      gameCode: 'BG-LIVE-012',
      gameType: 'Live',
      platform: 'BG',
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
        console.log(response.data, "dfsdfsdfsdf")
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
        <h1 className='flex items-center'>
          <img src={livecasino} alt='livecasino' className='mr-2' />
          Live Casino
        </h1>
      </div>

      <div className='slider-wrapper-recent'>
        <Splide
          className='mt-8 mb-8 SliderAreaFirst'
          options={{
            gap: 10,
            arrows: true,
            pagination: false,
            perPage: 5
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
                  <button>Pragmatic Play</button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}
