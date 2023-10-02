import React from 'react'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import gameg1 from '../assets/img/dream.png'
import gameg2 from '../assets/img/baller.png'
import gameg3 from '../assets/img/bt3.png'
import gameg4 from '../assets/img/l4.png'
import gameg5 from '../assets/img/bt5.png'
import gameshow from '../assets/img/game-show.svg'

export const GameShow = () => {
  const ImagesArray = [
    {
      img: gameg1,
      text: 'Thai-hi-lo2',
      gameCode: 'KM-TABLE-009',
      gameType: 'TABLE',
      platform: 'KINGMAKER',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'Belangkai2',
      gameCode: 'KM-TABLE-010',
      gameType: 'TABLE',
      platform: 'KINGMAKER',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'Dragon-tiger2',
      gameCode: 'KM-TABLE-011',
      gameType: 'TABLE',
      platform: 'KINGMAKER',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'Fish-prawn-crab2',
      gameCode: 'KM-TABLE-013',
      gameType: 'TABLE',
      platform: 'KINGMAKER',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'VN_fish-prawn-crab',
      gameCode: 'KM-TABLE-014',
      gameType: 'TABLE',
      platform: 'KINGMAKER',
      hall: 'SEXY'
    },
    {
      img: gameg1,
      text: 'Dream Catcher',
      gameCode: 'KM-TABLE-015',
      gameType: 'TABLE',
      platform: 'KINGMAKER',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'Sicbo',
      gameCode: 'KM-TABLE-017',
      gameType: 'TABLE',
      platform: 'KINGMAKER',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'Taixiu',
      gameCode: 'KM-TABLE-018',
      gameType: 'TABLE',
      platform: 'KINGMAKER',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'Keno',
      gameCode: 'KM-TABLE-019',
      gameType: 'TABLE',
      platform: 'KINGMAKER',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'Thai-fpc',
      gameCode: 'KM-TABLE-020',
      gameType: 'TABLE',
      platform: 'KINGMAKER',
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
        <h1 className='flex items-center'>
          <img src={gameshow} alt='gameshow' className='mr-2' />
          Game Shows
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
                  <button>Evolution</button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}
