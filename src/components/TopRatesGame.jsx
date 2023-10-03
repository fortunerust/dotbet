import React, { useState } from 'react'
import axios from 'axios'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoadingModal from './loadingPage'

import gameg1 from '../assets/img/BullBull.png'
import gameg2 from '../assets/img/FullColorBaccarat.png'
import gameg3 from '../assets/img/Sicbo.png'
import gameg4 from '../assets/img/Golden Aztec.png'
import gameg5 from '../assets/img/Thor Fortune.png'
import info from '../assets/img/info.svg'

export const TopRatesGame = () => {
  const [loading, setLoading] = useState(false)

  const notify = () =>
    toast.success('Signing up. Please wait for a while.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    })

  const ImagesArray = [
    {
      img: gameg1,
      text: 'BullBull',
      gameCode: 'BG-LIVE-009',
      gameType: 'LIVE',
      platform: 'BG',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'FullColorBaccarat',
      gameCode: 'BG-LIVE-008',
      gameType: 'LIVE',
      platform: 'BG',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'Sicbo',
      gameCode: 'BG-LIVE-004',
      gameType: 'LIVE',
      platform: 'BG',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'Golden Aztec',
      gameCode: 'YesBingo-SLOT-019',
      gameType: 'SLOT',
      platform: 'YESBINGO',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'Thor Fortune',
      gameCode: 'YesBingo-SLOT-012',
      gameType: 'SLOT',
      platform: 'YESBINGO',
      hall: 'SEXY'
    }
  ]

  const handleGamePlay = async game => {
    setLoading(true)
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
        if (response.data.status === '0000') {
          window.location.href = response.data.session_url
          setLoading(false)
        }
      })
      .catch(function (error) {
        console.error(error)
        setLoading(false)
      })
  }

  return (
    <div className='RecentWin TopRatesGame' id='topRatesGame'>
      <div className='top flex items-center justify-between mb-4'>
        <h1 className='flex items-center'>Top Rates Game</h1>
        <a href='/'>See all</a>
      </div>

      <div className='slider-wrapper-recent'>
        <Splide
          className='mt-8 mb-8 SliderAreaFirst '
          options={{
            gap: 10,
            arrows: false,
            pagination: false,
            perPage: 5
          }}
        >
          {ImagesArray.map((EachImage, key) => (
            <SplideSlide key={key}>
              <div className='card '>
                <img
                  src={EachImage.img}
                  alt={`slider ${key + 1}`}
                  className='rounded-tr-lg rounded-tl-lg  w-[200px] h-[250px]'
                />
                <div className='presentation p-3 rounded-bl-lg rounded-br-lg'>
                  <div className='top-area  mb-2 flex items-center justify-between'>
                    <h1 className=''>{EachImage.text}</h1>
                    <img src={info} alt='info' />
                  </div>

                  <button
                    className='h-6 rounded-lg text-xs'
                    onClick={() => (handleGamePlay(EachImage), notify)}
                  >
                    Play Now
                  </button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      {loading && <LoadingModal />}
    </div>
  )
}
