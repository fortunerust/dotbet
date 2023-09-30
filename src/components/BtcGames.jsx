import React from 'react'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import gameg1 from '../assets/img/bt1.png'
import gameg2 from '../assets/img/bt2.png'
import gameg3 from '../assets/img/bt3.png'
import gameg4 from '../assets/img/bt4.png'
import gameg5 from '../assets/img/bt5.png'

export const BtcGames = () => {
  const ImagesArray = [
    {
      img: gameg1,
      text: 'Gao Gae',
      gameCode: 'LUCKYPOKER-TABLE-001',
      gameType: 'TABLE',
      platform: 'LUCKYPOKER',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: "Texas Hold'em",
      gameCode: 'LUCKYPOKER-TABLE-002',
      gameType: 'TABLE',
      platform: 'LUCKYPOKER',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'Pok Deng',
      gameCode: 'LUCKYPOKER-TABLE-003',
      gameType: 'TABLE',
      platform: 'LUCKYPOKER',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'Hilo',
      gameCode: 'LUCKYPOKER-TABLE-004',
      gameType: 'TABLE',
      platform: 'LUCKYPOKER',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'Paikang',
      gameCode: 'LUCKYPOKER-TABLE-005',
      gameType: 'TABLE',
      platform: 'LUCKYPOKER',
      hall: 'SEXY'
    },
    {
      img: gameg1,
      text: 'Domino',
      gameCode: 'LUCKYPOKER-TABLE-006',
      gameType: 'TABLE',
      platform: 'LUCKYPOKER',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'Dummy',
      gameCode: 'LUCKYPOKER-TABLE-007',
      gameType: 'TABLE',
      platform: 'LUCKYPOKER',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: "Thai Hold'em",
      gameCode: 'LUCKYPOKER-TABLE-008',
      gameType: 'TABLE',
      platform: 'LUCKYPOKER',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'Hoo Hey How',
      gameCode: 'LUCKYPOKER-TABLE-009',
      gameType: 'TABLE',
      platform: 'LUCKYPOKER',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'Domino Qiu Qiu',
      gameCode: 'LUCKYPOKER-TABLE-010',
      gameType: 'TABLE',
      platform: 'LUCKYPOKER',
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
        <h1 className='flex items-center'>Btc Games</h1>
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
