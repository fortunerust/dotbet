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
      className={`bonus-area rounded-lg flex items-center cursor-pointer w-[115px] h-[50px]`}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <GetIcon title={title} active={isHover} className='' />
      <h1 className='flex-1 text-center'>{title}</h1>
      {index !== 0 && (
        <div className='dropdown-content'>
          {index == '1' && (
            <div className='h-full backdrop-blur-sm flex flex-col flex-wrap items-center justify-center gap-6 mx-2'>
              {/* Sports */}
              {TableUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[72px] aspect-square hover:w-[82px] hover:m-0 m-[10px]'
                  />
                )
              })}
            </div>
          )}

          {index == '2' && (
            <div className='h-full backdrop-blur-sm flex flex-col flex-wrap items-center justify-center gap-6 mx-2'>
              {/* Sports */}
              {SportUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[72px] aspect-square hover:w-[82px] hover:m-0 m-[10px]'
                  />
                )
              })}
            </div>
          )}
          {index == '3' && (
            <div className='h-full backdrop-blur-sm flex flex-col flex-wrap items-center justify-center gap-6 mx-2'>
              {/* Sports */}
              {LiveCasinoUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[72px] aspect-square hover:w-[82px] hover:m-0 m-[10px]'
                  />
                )
              })}
            </div>
          )}
          {index == '4' && (
            <div className='h-full backdrop-blur-sm flex flex-col flex-wrap items-center justify-center gap-6 mx-2'>
              {/* Sports */}
              {FishingGameUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[72px] aspect-square hover:w-[82px] hover:m-0 m-[10px]'
                  />
                )
              })}
            </div>
          )}
          {index == '5' && (
            <div className='h-full backdrop-blur-sm flex flex-col flex-wrap items-center justify-center gap-6 mx-2'>
              {/* Sports */}
              {SLOTUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[72px] aspect-square hover:w-[82px] hover:m-0 m-[10px]'
                  />
                )
              })}
            </div>
          )}
          {index == '6' && (
            <div className='h-full backdrop-blur-sm flex flex-col flex-wrap items-center justify-center gap-6 mx-2'>
              {/* Sports */}
              {VirtualUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[72px] aspect-square hover:w-[82px] hover:m-0 m-[10px]'
                  />
                )
              })}
            </div>
          )}
          {index == '7' && (
            <div className='h-full backdrop-blur-sm flex flex-col flex-wrap items-center justify-center gap-6 mx-2'>
              {/* Sports */}
              {LottoUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[72px] aspect-square hover:w-[82px] hover:m-0 m-[10px]'
                  />
                )
              })}
            </div>
          )}
          {index == '8' && (
            <div className='h-full backdrop-blur-sm flex flex-col flex-wrap items-center justify-center gap-6 mx-2'>
              {/* Sports */}
              {BingoUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[72px] aspect-square hover:w-[82px] hover:m-0 m-[10px]'
                  />
                )
              })}
            </div>
          )}
          {index == '9' && (
            <div className='h-full backdrop-blur-sm flex flex-col flex-wrap items-center justify-center gap-6 mx-2'>
              {/* Sports */}
              {EGameUrl.map((item, index) => {
                return (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[72px] aspect-square hover:w-[82px] hover:m-0 m-[10px]'
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
