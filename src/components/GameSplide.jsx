import React, { useState } from 'react'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoadingModal from './loadingPage'
import * as API from '../services/api'

export const GameSplide = props => {
  const [loading, setLoading] = useState(false)

  const notify = () =>
    toast.error('Connection failed.', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })

  const handleGamePlay = async item => {
    setLoading(true)
    const res = await API.getGamePlayUrl(item._id)
    if (res.data.status == '0000') {
      window.open(res.data.session_url, '', 'width=800, height=800')
    } else {
      toast.error(res.data.desc, {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
    }
    setLoading(false)
  }

  return (
    <div className='RecentWin mt-10' id='hits'>
      {!props.direction && (
        <div className='top flex items-center justify-between mb-4'>
          <h1 className='flex items-center'>
            {props.icon && <props.icon />}
            {props.title}
          </h1>
          <a href={`/ALL/${props.games[0]?.platform}`}>See all</a>
        </div>
      )}

      <div className='slider-wrapper-recent'>
        <Splide
          className='mt-8 mb-8 SliderAreaFirst'
          options={{
            gap: 10,
            arrows: false,
            pagination: false,
            perPage: 5,
            // breakpoints: {
            //   280: {
            //     perPage: 1,
            //   },
            //   500:{
            //     perPage: 2,
            //   },
            //   770:{
            //     perPage: 3,
            //   },
            //   970:{
            //     perPage: 4,
            //   },
            //   1200:{
            //     perPage: 5,
            //   }
            // },
            height: props.height,
            direction: props.direction
          }}
        >
          {props.games &&
            props.games.map((item, key) => (
              <SplideSlide
                key={key}
                onClick={() => (handleGamePlay(item), notify)}
              >
                <div
                  className={
                    props.direction
                      ? 'card cursor-pointer hover:border-b-4 hover:border-b-[#469711] rounded-full pb-4 hover:pb-0'
                      : 'card cursor-pointer hover:border-b-4 hover:border-b-[#469711] pb-4 hover:pb-0  rounded-lg'
                  }
                >
                  <img
                    src={process.env.REACT_APP_BACKEND + '/images/' + item.img}
                    alt={`slider ${key + 1}`}
                    className={
                      props.direction
                        ? 'rounded-50 w-[70px] h-[70px]'
                        : 'rounded-tr-lg rounded-tl-lg w-[80px] xl:w-[200px] lg:w-[140px] aspect-square'
                    }
                  />
                  <div className='presentation p-3 justify-between flex flex-col lg:flex-row items-center text-center lg:text-start rounded-bl-lg rounded-br-lg'>
                    <h1 className='w-full h-8 object-cover overflow-hidden'>
                      {item.gameName}
                    </h1>
                    <button>{item.platform}</button>
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
        theme='light'
      />
      {loading && <LoadingModal />}
    </div>
  )
}
