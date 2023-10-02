import React from 'react'
import axios from 'axios'
import glowdot from '../assets/img/glow-dot.svg'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import gameg1 from '../assets/img/Dragon-tiger2.png'
import gameg2 from '../assets/img/Super Golf Drive.png'
import gameg3 from '../assets/img/Alchemy Gold.png'
import gameg4 from '../assets/img/Bombing Fishing.png'
import gameg5 from '../assets/img/l1.png'

export const Hits = () => {
  const ImagesArray = [
    {
      img: gameg1,
      text: 'Dragon-tiger2',
      gameCode: 'KM-TABLE-011',
      gameType: 'TABLE',
      platform: 'KINGMAKER',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'Super Golf Drive',
      gameCode: 'PG-SLOT-118',
      gameType: 'SLOT',
      platform: 'PG',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'Alchemy Gold',
      gameCode: 'PG-SLOT-108',
      gameType: 'SLOT',
      platform: 'PG',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'Bombing Fishing',
      gameCode: 'JILI-FISH-002',
      gameType: 'FH',
      platform: 'JILI',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'Roulette',
      gameCode: 'BG-LIVE-003',
      gameType: 'LIVE',
      platform: 'BG',
      hall: null
    }
  ]

  const handleGamePlay = async game => {
    const token = window.localStorage.getItem('token')
    const options = {
      method: 'POST',
      url: process.env.REACT_APP_BACKEND + '/api/game/play',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'x-auth-token': token
      },
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
    <div className='RecentWin mt-10'>
      <div className='top flex items-center justify-between mb-4'>
        <h1 className='flex items-center'>
          <img src={glowdot} alt='glowdot' className='mr-2' />
          Hits
        </h1>
        <a href='/'>See all</a>
      </div>

      <div className='slider-wrapper-recent'>
        <Splide
          className='mt-8 mb-8 SliderAreaFirst'
          options={{
            gap: 10,
            arrows: false,
            pagination: false,
            perPage: 5
          }}
        >
          {ImagesArray.map((EachImage, key) => (
            <SplideSlide key={key} onClick={() => handleGamePlay(EachImage)}>
              <div className='card cursor-pointer hover:border-2 hover:border-[#469711] rounded-lg'>
                <img
                  src={EachImage.img}
                  alt={`slider ${key + 1}`}
                  className='rounded-tr-lg rounded-tl-lg w-[200px] h-[180px]'
                />
                <div className='presentation p-3 justify-between flex items-center rounded-bl-lg rounded-br-lg'>
                  <h1>{EachImage.text}</h1>
                  <button>Original</button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}
