import { useState } from 'react'
import { Sports } from './Sports'
import { Fishing } from './Fishing'
import { GameShow } from './GameShow'
import { GetIcon } from './GetIcon'
import { LiveCasino } from './LiveCasino'
import { Roulette } from './Roulette'
import { Slots } from './Slots'

import {
  SLOTUrl,
  LiveCasinoUrl,
  SportUrl,
  FishingGameUrl,
  TableUrl,
  VirtualUrl,
  LottoUrl,
  BingoUrl,
  EGameUrl
} from '../config/Url'

export const SideIcon = ({ title, index }) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div
      className={`bonus-area rounded-lg flex items-center cursor-pointer  w-[115px] h-[50px]`}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <GetIcon title={title} active={isHover} className='' />
      <h1 className='flex-1 text-center'>{title}</h1>
      {index !== 0 && (
        <div className='dropdown-content'>
          {index == '1' && (
            <div className=' h-full backdrop-blur-sm grid grid-rows-6 grid-flow-col gap-4 items-center justify-center'>
              {/* Sports */}
              {TableUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='rounded-full w-20 aspect-square mx-2 hover:shadow-[0_0px_40px_0px_rgba(0,0,0,0.3)] hover:shadow-white'
                  />
                )
              })}
            </div>
          )}

          {index == '2' && (
            <div className=' h-full backdrop-blur-sm grid grid-rows-6 grid-flow-col gap-4 items-center justify-center'>
              {/* Sports */}
              {SportUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='rounded-full w-20 aspect-square mx-2 hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white'
                  />
                )
              })}
            </div>
          )}
          {index == '3' && (
            <div className=' h-full backdrop-blur-sm grid grid-rows-6 grid-flow-col gap-4 items-center justify-center'>
              {/* Sports */}
              {LiveCasinoUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='rounded-full w-20 aspect-square mx-2 hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white'
                  />
                )
              })}
            </div>
          )}
          {index == '4' && (
            <div className=' h-full backdrop-blur-sm grid grid-rows-6 grid-flow-col gap-4 items-center justify-center'>
              {/* Sports */}
              {FishingGameUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='rounded-full w-20 aspect-square mx-2 hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white'
                  />
                )
              })}
            </div>
          )}
          {index == '5' && (
            <div className=' h-full backdrop-blur-sm grid grid-rows-6 grid-flow-col gap-4 items-center justify-center'>
              {/* Sports */}
              {SLOTUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='rounded-full w-20 aspect-square mx-2 hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white'
                  />
                )
              })}
            </div>
          )}
          {index == '6' && (
            <div className=' h-full backdrop-blur-sm grid grid-rows-6 grid-flow-col gap-4 items-center justify-center'>
              {/* Sports */}
              {VirtualUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='rounded-full w-20 aspect-square mx-2 hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white'
                  />
                )
              })}
            </div>
          )}
          {index == '7' && (
            <div className=' h-full backdrop-blur-sm grid grid-rows-6 grid-flow-col gap-4 items-center justify-center'>
              {/* Sports */}
              {LottoUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='rounded-full w-20 aspect-square mx-2 hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white'
                  />
                )
              })}
            </div>
          )}
          {index == '8' && (
            <div className=' h-full backdrop-blur-sm grid grid-rows-6 grid-flow-col gap-4 items-center justify-center'>
              {/* Sports */}
              {BingoUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='rounded-full w-20 aspect-square mx-2 hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white'
                  />
                )
              })}
            </div>
          )}
          {index == '9' && (
            <div className=' h-full backdrop-blur-sm grid grid-rows-6 grid-flow-col gap-4 items-center justify-center'>
              {/* Sports */}
              {EGameUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='rounded-full w-20 aspect-square mx-2 hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white'
                  />
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
