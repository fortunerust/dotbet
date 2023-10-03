import React, { useState } from 'react'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoadingModal from './loadingPage'

import gameg1 from '../assets/img/Lucky Piggy.png'
import gameg2 from '../assets/img/Prosperity Fortune Tree.png'
import gameg3 from '../assets/img/Totem Wonders.png'
import gameg4 from '../assets/img/Alchemy Gold.png'
import gameg5 from '../assets/img/Diner Delights.png'
import gameg6 from '../assets/img/Asgardian Rising.png'
import gameg7 from '../assets/img/Midas Fortune.png'
import gameg8 from '../assets/img/Rave Party Fever.png'
import gameg9 from '../assets/img/Bakery Bonanza.png'
import gameg10 from '../assets/img/Lucky Clover Lady.png'
import gameg11 from '../assets/img/Safari Wilds.png'
import gameg12 from '../assets/img/FortuneCat.png'

import b from '../assets/img/b.svg'

export const Slots = () => {
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
      text: 'Lucky Piggy',
      gameCode: 'PG-SLOT-101',
      gameType: 'SLOT',
      platform: 'PG',
      hall: 'SEXY'
    },
    {
      img: gameg2,
      text: 'Prosperity Fortune Tree',
      gameCode: 'PG-SLOT-106',
      gameType: 'SLOT',
      platform: 'PG',
      hall: 'SEXY'
    },
    {
      img: gameg3,
      text: 'Totem Wonders',
      gameCode: 'PG-SLOT-107',
      gameType: 'SLOT',
      platform: 'PG',
      hall: 'SEXY'
    },
    {
      img: gameg4,
      text: 'Alchemy Gold',
      gameCode: 'PG-SLOT-108',
      gameType: 'SLOT',
      platform: 'PG',
      hall: 'SEXY'
    },
    {
      img: gameg5,
      text: 'Diner Delights',
      gameCode: 'PG-SLOT-109',
      gameType: 'SLOT',
      platform: 'PG',
      hall: 'SEXY'
    },
    {
      img: gameg6,
      text: 'Asgardian Rising',
      gameCode: 'PG-SLOT-110',
      gameType: 'SLOT',
      platform: 'PG',
      hall: 'SEXY'
    },
    {
      img: gameg7,
      text: 'Midas Fortune',
      gameCode: 'PG-SLOT-111',
      gameType: 'SLOT',
      platform: 'PG',
      hall: 'SEXY'
    },
    {
      img: gameg8,
      text: 'Rave Party Fever',
      gameCode: 'PG-SLOT-113',
      gameType: 'SLOT',
      platform: 'PG',
      hall: 'SEXY'
    },
    {
      img: gameg9,
      text: 'Bakery Bonanza',
      gameCode: 'PG-SLOT-115',
      gameType: 'SLOT',
      platform: 'PG',
      hall: 'SEXY'
    },
    {
      img: gameg10,
      text: 'Lucky Clover Lady',
      gameCode: 'PG-SLOT-119',
      gameType: 'SLOT',
      platform: 'PG',
      hall: 'SEXY'
    },
    {
      img: gameg11,
      text: 'Safari Wilds',
      gameCode: 'PG-SLOT-122',
      gameType: 'SLOT',
      platform: 'JDB',
      hall: 'SEXY'
    },
    {
      img: gameg12,
      text: 'FortuneCat',
      gameCode: 'YesBingo-SLOT-014',
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
    <div className='RecentWin arrowareaslider' id='slots'>
      <div className='top flex items-center justify-between mb-4'>
        <h1 className='flex items-center'>Featured Slots</h1>
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
            <SplideSlide
              key={key}
              onClick={() => (handleGamePlay(EachImage), notify)}
            >
              <div className='card cursor-pointer hover:border-2 hover:border-[#469711] rounded-lg'>
                <img
                  src={EachImage.img}
                  alt={`slider ${key + 1}`}
                  className='rounded-tr-lg rounded-tl-lg w-[200px] h-[250px]'
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
