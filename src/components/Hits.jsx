import React from 'react'
import axios from 'axios'
import glowdot from '../assets/img/glow-dot.svg'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import gameg1 from '../assets/img/jetx.png'
import gameg2 from '../assets/img/wild-spin.png'
import gameg3 from '../assets/img/throne.png'
import gameg4 from '../assets/img/bufalo.png'
import gameg5 from '../assets/img/bufalo2.png'

export const Hits = () => {
  const ImagesArray = [
    {
      img: gameg1,
      text: 'Booming Gems',
      gameCode: 'DRAGOONSOFT-SLOT-042',
      gameType: 'SLOT',
      platform: 'DRAGOONSOFT',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'Wolf Legend',
      gameCode: 'DRAGOONSOFT-SLOT-024',
      gameType: 'SLOT',
      platform: 'DRAGOONSOFT',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'Bust Treasury',
      gameCode: 'DRAGOONSOFT-SLOT-020',
      gameType: 'Live',
      platform: 'DRAGOONSOFT',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: '5 God Beast',
      gameCode: 'DRAGOONSOFT-SLOT-021',
      gameType: 'SLOT',
      platform: 'DRAGOONSOFT',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'Ultra Treasure',
      gameCode: 'DRAGOONSOFT-SLOT-014',
      gameType: 'SLOT',
      platform: 'DRAGOONSOFT',
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
              <div className='card cursor-pointer'>
                <img
                  src={EachImage.img}
                  alt={`slider ${key + 1}`}
                  className='rounded-tr-lg rounded-tl-lg'
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
