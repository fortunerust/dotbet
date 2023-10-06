import { useState } from 'react'
import { GetIcon } from './GetIcon'
import { useNavigate, useParams } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false)
  return (
    <div
      className={`bonus-area rounded-lg flex items-center cursor-pointer w-[115px] h-[50px]`}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        if(index == 0) navigate(`/`, { replace: true })
      }}
    >
      <GetIcon title={title} active={isHover} className='' />
      {isHover ? (
        <h1 className={'flex-1 text-center'} style={{color:"#42930E"}}>{title}</h1>
      ) : (
        <h1 className={'flex-1 text-center text-blue-600'}>{title}</h1>
      )}
      {index !== 0 && (
        <div className='dropdown-content'>
          {index == '1' && (
            <div className='h-full backdrop-blur-sm flex flex-col flex-wrap items-center justify-center gap-6 mx-2'>
              {/* Sports */}
              {TableUrl.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[65px] aspect-square hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white m-[10px]'
                    onClick={()=>navigate(`TABLE/${item.platform}`, { replace: true })}
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
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[65px] aspect-square hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white m-[10px]'
                    onClick={()=>navigate(`/ESPORTS/${item.platform}`, { replace: true })}
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
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[65px] aspect-square hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white m-[10px]'
                    onClick={()=>navigate(`/LIVE/${item.platform}`, { replace: true })}
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
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[65px] aspect-square hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white m-[10px]'
                    onClick={()=>navigate(`/FH/${item.platform}`, { replace: true })}
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
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[65px] aspect-square hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white m-[10px]'
                    onClick={()=>navigate(`/SLOT/${item.platform}`, { replace: true })}
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
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[65px] aspect-square hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white m-[10px]'
                    onClick={()=>navigate(`/VIRTUAL/${item.platform}`, { replace: true })}
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
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[65px] aspect-square hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white m-[10px]'
                    onClick={()=>navigate(`/LOTTO/${item.platform}`, { replace: true })}
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
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[65px] aspect-square hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white m-[10px]'
                    onClick={()=>navigate(`/BINGO/${item.platform}`, { replace: true })}
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
                    key={index}
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className='w-[65px] aspect-square hover:shadow-[0_0px_40px_-0px_rgba(0,0,0,0.3)] hover:shadow-white m-[10px]'
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
