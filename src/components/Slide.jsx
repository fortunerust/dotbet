import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default function Slide () {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: false
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img
            src='/img/slide/Artboard-1-copy-2[1].jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/img/slide/Artboard-1-copy-3[1].jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/img/slide/Artboard-1-copy-3[1].png'
            alt=''
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
