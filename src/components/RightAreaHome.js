import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Header } from './Header'

import menuExpander from '../assets/img/menu.svg'
import Support from '../assets/img/aside/Support.svg'
import blog from '../assets/img/aside/blog.svg'

import sports from '../assets/img/aside/tabs/Sports.svg'
import Live from '../assets/img/aside/tabs/Live casino.svg'
import slots from '../assets/img/aside/tabs/Slots.svg'
import home from '../assets/img/aside/tabs/home.svg'
import home_hover from '../assets/img/aside/tabs/home_hover.svg'
import sportGame from '../assets/img/aside/tabs/sports-game-l.svg'
import tableGame from '../assets/img/aside/tabs/table-game-l.svg'
import fishingGame from '../assets/img/aside/tabs/fishing-game-l.svg'
import virtualGame from '../assets/img/aside/tabs/virtual-game-l.svg'
import lottoGame from '../assets/img/aside/tabs/Lotto-game-l.svg'
import egame from '../assets/img/aside/tabs/egame-l.svg'

import Slide from '../components/Slide'
import { SideIcon } from './SideIcon'
import { HomeList } from './HomeList'
import { GameList } from './GameList';

export const RightAreaHome = () => {
  const navigate = useNavigate();

  const [rollingNumber, setRollingNumber] = useState(
    50000000 + parseInt(Math.random() * 10000)
  )
  const [blogState, setBlogState] = useState(false)
  const [supportState, setSupportState] = useState(false)
  const [openedFaqId, setOpenedFaqId] = useState(10)
  const [supportActiveState, setSupportActiveState] = useState(2)

  const supportAction = async e => {
    setSupportActiveState(e)
    switch (e) {
      case 0:
        await setBlogState(true)
        await setSupportState(false)
        break
      case 1:
        await setBlogState(false)
        await setSupportState(true)
        break
      default:
        break
    }
  }

  const gameListLeft = [
    {
      Img: home,
      Text: 'Lobby',
      Hover: home_hover
    },
    {
      Img: tableGame,
      Text: 'Table Game',
      Hover: home_hover,
      gameType: 'TABLE'
    },
    {
      Img: sportGame,
      Text: 'Sports',
      Hover: home_hover,
      gameType: 'ESPORTS'
    },
    {
      Img: Live,
      Text: 'Live Casino',
      Hover: home_hover,
      gameType: 'LIVE'
    },
    {
      Img: fishingGame,
      Text: 'Fishing Game',
      Hover: home_hover,
      gameType: 'FH'
    },
    {
      Img: slots,
      Text: 'Slots',
      Hover: home_hover,
      gameType: 'SLOT'
    },
    {
      Img: virtualGame,
      Text: 'Virtual',
      Hover: home_hover,
      gameType: 'VIRTUAL'
    },
    {
      Img: lottoGame,
      Text: 'Lotto',
      Hover: home_hover,
      gameType: 'LOTTO'
    },
    {
      Img: sports,
      Text: 'Bingo',
      Hover: home_hover,
      gameType: 'BINGO'
    },
    {
      Img: egame,
      Text: 'EGame',
      Hover: home_hover,
      gameType: 'EGAME'
    }
  ]

  const supportList = [
    {
      Img: blog,
      Text: 'Blog'
    },
    {
      Img: Support,
      Text: 'Support'
    }
  ]

  useEffect(() => {
    let i = rollingNumber
    let poolnumber = setInterval(function () {
      i += parseInt(Math.random() * 100)
      setRollingNumber(i)
    }, 1000)
    return () => {
      clearInterval(poolnumber)
    }
  }, [])

  return (
    <>
      <div className='md:flex sticky dropdown'>
        <aside className='py-4 hidden  md:flex '>
          <div className='flex flex-col justify-between z-[99]'>
            <div>
              <div className='flex items-center justify-center mb-8 mt-2'>
                <img src={menuExpander} alt='menuExpander' />
              </div>
              {gameListLeft.map((item, index) => {
                return (
                  <SideIcon title={item.Text} index={index} key={item.Text} />
                )
              })}
            </div>
            <div>
              <div className='flex flex-col '>
                {supportList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={e => supportAction(index)}
                      className={`${index === supportActiveState ? 'active' : ''
                        } bonus-area mb-2 rounded-lg flex items-center cursor-pointer`}
                    >
                      <img src={item.Img} alt='card' />
                      <h1 className='flex-1 text-center'>{item.Text}</h1>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className='md:w-[84%] md:ml-[110px] w-full flex-1'>
        <Header />
        <div className='w-full justify-between flex items-start gap-10 px-2 sm:px-8 pt-6'>
          <div className='w-full px-2 mx-a'>
            <Slide />
            <div className='tags-wrapper mt-10 mb-12 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-3'>
              {gameListLeft.map((item, index) => {
                return (
                  <div
                    key={index}
                    // href={`${item.id}`}
                    onClick={()=>{
                      if(item.Text == "Lobby") navigate("/", {replace: true});
                      else navigate(`${item.gameType}/ALL`, { replace: true })
                      setOpenedFaqId(index);
                    }}
                    className={`${
                      index === openedFaqId ? 'active' : ''
                    } tag flex justify-center  items-center cursor-pointer`}
                  >
                    <img src={item.Img} alt='game show' />
                    <p>{item.Text}</p>
                  </div>
                )
              })}
            </div>

            <Routes>
              <Route path="/" element={<HomeList />} />
              <Route path="/:gameType/:platform" element={<GameList />} />
            </Routes>

          </div>
        </div>
      </div>
    </>
  )
}
