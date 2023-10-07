import { useState } from 'react'
import { GetIcon } from './GetIcon'
import { useNavigate, useParams } from 'react-router-dom';

import {
  Slot,
  LiveCasino,
  Sport,
  FishingGame,
  Table,
  Virtual,
  Lotto,
  Bingo,
  EGame
} from '../config'

export const SideIcon = ({ title, index }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false)
  return (
    <div
      className={`bonus-area rounded-lg flex flex-col mt-[20px] items-center cursor-pointer w-[115px] h-[50px]`}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        if(index == 0) navigate(`/`, { replace: true })
      }}
    >
      <GetIcon title={title} active={isHover} className='' />
      {isHover ? (
        <h1 className={'flex flex-col-1 text-center'} style={{color:"#42930E"}}>{title}</h1>
      ) : (
        <h1 className={'flex flex-col-1 text-center text-blue-600'}>{title}</h1>
      )}
      {index !== 0 && (
        <div className='dropdown-content'>
          {index == '1' && (
            <div className='h-full flex flex-col backdrop-blur-sm no-scrollbar overflow-y-scroll'>
              {/* Sports */}
              {Table.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[40%] hover:brightness-150 m-auto pb-[30px] pt-[30px]'
                    onClick={()=>navigate(`TABLE/${item.platform}`, { replace: true })}
                  />
                )
              })}
            </div>
          )}

          {index == '2' && (
            <div className='h-full flex flex-col backdrop-blur-sm no-scrollbar overflow-y-scroll'>
              {/* Sports */}
              {Sport.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[70%] hover:brightness-150 m-auto pr-[20px] pb-[30px] pt-[30px]'
                    onClick={()=>navigate(`/ESPORTS/${item.platform}`, { replace: true })}
                  />
                )
              })}
            </div>
          )}
          {index == '3' && (
            <div className='h-full flex flex-col backdrop-blur-sm no-scrollbar overflow-y-scroll'>
              {/* Sports */}
              {LiveCasino.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[40%] hover:brightness-150 m-auto pb-[30px] pt-[30px]'
                    onClick={()=>navigate(`/LIVE/${item.platform}`, { replace: true })}
                  />
                )
              })}
            </div>
          )}
          {index == '4' && (
            <div className='h-full flex flex-col backdrop-blur-sm no-scrollbar overflow-y-scroll'>
              {/* Sports */}
              {FishingGame.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[40%] hover:brightness-150 m-auto pb-[30px] pt-[30px]'
                    onClick={()=>navigate(`/FH/${item.platform}`, { replace: true })}
                  />
                )
              })}
            </div>
          )}
          {index == '5' && (
            <div className='h-full flex flex-col backdrop-blur-sm no-scrollbar overflow-y-scroll'>
              {/* Sports */}
              {Slot.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[40%] hover:brightness-150 m-auto pb-[30px] pt-[30px]'
                    onClick={()=>navigate(`/SLOT/${item.platform}`, { replace: true })}
                  />
                )
              })}
            </div>
          )}
          {index == '6' && (
            <div className='h-full flex flex-col backdrop-blur-sm no-scrollbar overflow-y-scroll'>
              {/* Sports */}
              {Virtual.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[40%] hover:brightness-150 m-auto pb-[30px] pt-[30px]'
                    onClick={()=>navigate(`/VIRTUAL/${item.platform}`, { replace: true })}
                  />
                )
              })}
            </div>
          )}
          {index == '7' && (
            <div className='h-full flex flex-col backdrop-blur-sm no-scrollbar overflow-y-scroll'>
              {/* Sports */}
              {Lotto.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[40%] hover:brightness-150 m-auto pb-[30px] pt-[30px]'
                    onClick={()=>navigate(`/LOTTO/${item.platform}`, { replace: true })}
                  />
                )
              })}
            </div>
          )}
          {index == '8' && (
            <div className='h-full flex flex-col backdrop-blur-sm no-scrollbar overflow-y-scroll'>
              {/* Sports */}
              {Bingo.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[40%] hover:brightness-150 m-auto pb-[30px] pt-[30px]'
                    onClick={()=>navigate(`/BINGO/${item.platform}`, { replace: true })}
                  />
                )
              })}
            </div>
          )}
          {index == '9' && (
            <div className='h-full flex flex-col backdrop-blur-sm no-scrollbar overflow-y-scroll'>
              {/* Sports */}
              {EGame.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[40%] hover:brightness-150 m-auto pb-[30px] pt-[30px]'
                    onClick={()=>navigate(`/EGAME/${item.platform}`, { replace: true })}
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
