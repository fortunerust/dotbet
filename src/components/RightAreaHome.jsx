import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import chat from '../assets/img/chat-green.svg'
import emoji from '../assets/img/emoji.svg'
import send from '../assets/img/send.svg'
import dailyBonus from '../assets/img/dailyBonus.svg'
import { Hits } from './Hits'
import { TopRatesGame } from './TopRatesGame'
import { RecommendedGames } from './RecommendedGames'
import { LatestBets } from './LatestBets'
import { CommentCard } from './CommentCard'
import { LiveCasino } from './LiveCasino'
import { GameShow } from './GameShow'
import { Fishing } from './Fishing'
import { Roulette } from './Roulette'
import { Slots } from './Slots'
import { Sports } from './Sports'
import { NewArrival } from './NewArrival'
import menuExpander from '../assets/img/menu.svg'
import Support from '../assets/img/aside/Support.svg'
import blog from '../assets/img/aside/blog.svg'

import sports from '../assets/img/aside/tabs/Sports.svg'
import roulette from '../assets/img/aside/tabs/roulette.svg'
import Live from '../assets/img/aside/tabs/Live casino.svg'
import slots from '../assets/img/aside/tabs/Slots.svg'
import home from '../assets/img/aside/tabs/home.svg'
import home_hover from '../assets/img/aside/tabs/home_hover.svg'
import cards from '../assets/img/aside/tabs/Card.svg'

import Slide from '../components/Slide'
import { SideIcon } from './SideIcon'

export const RightAreaHome = () => {
  const commentsData = [
    {
      name: 'Devon Lane',
      date: '04:02 am',
      img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      comment: 'Me recomenda alguma coisa 🥺🥺'
    },
    {
      name: 'Dianne Russell',
      date: '02:34 am',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      comment: 'Ação, comédia, romance... sou um cinéfilo versátil! 🎥💥'
    },
    {
      name: 'Imran Hossen',
      date: '02:34 am',
      img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      comment:
        'Quem precisa de heróis reais quando se tem super-heróis no cinema? 💪🎞️'
    },
    {
      name: 'Jane Cooper',
      date: '12:23 pm',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      comment: 'Filmes são minha terapia diária. 🎞️💆‍♂️'
    },
    {
      name: 'Dianne Russell',
      date: '02:34 am',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      comment: 'Ação, comédia, romance... sou um cinéfilo versátil! 🎥💥'
    },
    {
      name: 'Imran Hossen',
      date: '02:34 am',
      img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      comment:
        'Quem precisa de heróis reais quando se tem super-heróis no cinema? 💪🎞️'
    },
    {
      name: 'Jane Cooper',
      date: '12:23 pm',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      comment: 'Filmes são minha terapia diária. 🎞️💆‍♂️'
    },
    {
      name: 'Dianne Russell',
      date: '02:34 am',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      comment: 'Ação, comédia, romance... sou um cinéfilo versátil! 🎥💥'
    },
    {
      name: 'Imran Hossen',
      date: '02:34 am',
      img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      comment:
        'Quem precisa de heróis reais quando se tem super-heróis no cinema? 💪🎞️'
    }
  ]

  const [rollingNumber, setRollingNumber] = useState(
    50000000 + parseInt(Math.random() * 10000)
  )
  const [homeState, setHomeState] = useState(true)
  const [sportState, setSportState] = useState(false)
  const [liveState, setLiveState] = useState(false)
  const [slotState, setSlotState] = useState(false)
  const [rouletteState, setRouletteState] = useState(false)
  const [fishingState, setFishingState] = useState(false)
  const [showState, setShowState] = useState(false)
  const [blogState, setBlogState] = useState(false)
  const [supportState, setSupportState] = useState(false)
  const [openedFaqId, setOpenedFaqId] = useState(10)
  const [supportActiveState, setSupportActiveState] = useState(2)

  const dropDownText = e => {
    setOpenedFaqId(e)
    switch (e) {
      case 0:
        setHomeState(true)
        setSportState(false)
        setLiveState(false)
        setSlotState(false)
        setRouletteState(false)
        setFishingState(false)
        setShowState(false)
        break
      case 1:
        setHomeState(false)
        setSportState(true)
        setLiveState(false)
        setSlotState(false)
        setRouletteState(false)
        setFishingState(false)
        setShowState(false)
        break
      case 2:
        setHomeState(false)
        setSportState(false)
        setLiveState(true)
        setSlotState(false)
        setRouletteState(false)
        setFishingState(false)
        setShowState(false)
        break
      case 3:
        setHomeState(false)
        setSportState(false)
        setLiveState(false)
        setSlotState(true)
        setRouletteState(false)
        setFishingState(false)
        setShowState(false)
        break
      case 4:
        setHomeState(false)
        setSportState(false)
        setLiveState(false)
        setSlotState(false)
        setRouletteState(true)
        setFishingState(false)
        setShowState(false)
        break
      case 5:
        setHomeState(false)
        setSportState(false)
        setLiveState(false)
        setSlotState(false)
        setRouletteState(false)
        setFishingState(true)
        setShowState(false)
        break
      case 6:
        setHomeState(false)
        setSportState(false)
        setLiveState(false)
        setSlotState(false)
        setRouletteState(false)
        setFishingState(false)
        setShowState(true)
        break
      default:
        break
    }
  }

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

  const gameListState = [
    {
      Img: home,
      Text: 'Lobby',
      id: 'hits'
    },
    {
      Img: sports,
      Text: 'Sports',
      id: 'sports'
    },
    {
      Img: Live,
      Text: 'Live Casino',
      id: 'liveCasino'
    },
    {
      Img: slots,
      Text: 'Featured Slots',
      id: 'slots'
    },
    {
      Img: roulette,
      Text: 'Roulette',
      id: 'roulette'
    },
    {
      Img: slots,
      Text: 'Fishing',
      id: 'fishing'
    },
    {
      Img: slots,
      Text: 'Game Shows',
      id: 'gameShow'
    }
  ]

  const gameListLeft = [
    {
      Img: home,
      Text: 'Lobby',
      Hover: home_hover
    },
    {
      Img: home_hover,
      Text: 'TABLE',
      Hover: home_hover
    },
    {
      Img: sports,
      Text: 'SPORTS',
      Hover: home_hover
    },
    {
      Img: Live,
      Text: 'Live Casino',
      Hover: home_hover
    },
    {
      Img: cards,
      Text: 'FISHING GAME',
      Hover: home_hover
    },
    {
      Img: slots,
      Text: 'Slots',
      Hover: home_hover
    },
    {
      Img: Live,
      Text: 'VIRTUAL',
      Hover: home_hover
    },
    {
      Img: slots,
      Text: 'LOTTO',
      Hover: home_hover
    },
    {
      Img: slots,
      Text: 'BINGO',
      Hover: home_hover
    },
    {
      Img: slots,
      Text: 'EGAME',
      Hover: home_hover
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
                      className={`${
                        index === supportActiveState ? 'active' : ''
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
          <div className='w-full lg:w-[65%] xl:w-[70%] 2xl:w-[75%] px-2 mx-a'>
            <Slide />
            <div className='tags-wrapper mt-10 mb-12 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-3'>
              {gameListState.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={e => dropDownText(index)}
                    // href={`${item.id}`}
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

            {homeState && (
              <>
                {/* RecentWin*/}
                <Hits items={5} />

                {/* NewArrival */}
                <NewArrival items={5} />
                {/* Sports */}
                <Sports items={5} />

                {/* LiveCasino */}
                <LiveCasino items={5} />

                {/* Slots */}
                <Slots items={5} />

                {/* Roulette */}
                <Roulette items={5} />

                {/* Fishing */}
                <Fishing items={5} />

                {/* GameShow */}
                <GameShow items={5} />

                {/* Top Rates Game */}
                <TopRatesGame items={5} />

                {/* LatestBets */}
                <LatestBets items={5} />

                {/* Recommended Game */}
                <RecommendedGames items={5} />
              </>
            )}

            {sportState && (
              <>
                {/* Sports */}
                <Sports items={5} />
              </>
            )}

            {liveState && (
              <>
                {/* LiveCasino */}
                <LiveCasino items={5} />
              </>
            )}
            {slotState && (
              <>
                {/* Slots */}
                <Slots items={5} />
              </>
            )}
            {rouletteState && (
              <>
                {/* Roulette */}
                <Roulette items={5} />
              </>
            )}
            {fishingState && (
              <>
                {/* Fishing */}
                <Fishing items={5} />
              </>
            )}
            {showState && (
              <>
                {/* GameShow */}
                <GameShow items={5} />
              </>
            )}
          </div>
          <div className=' body-right-area w-[20%] rounded-2xl p-4 hidden lg:flex lg:flex-col'>
            <div className='top-area pb-4 flex items-center relative'>
              <img src={chat} alt='' />
              <h1 className='flex-1 ml-1'>General Chat</h1>
              <p className='mr-1 absolute'>489</p>
              <div className='flex items-center'>
                <img
                  src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80'
                  alt='first user online'
                  className='w-5 h-5 rounded-full'
                />
                <img
                  src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
                  alt='second user online'
                  className='w-5 h-5 rounded-full'
                />
                <img
                  src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80'
                  alt='third user online'
                  className='w-5 h-5 rounded-full'
                />
              </div>
            </div>

            <div className='scroll-area-start pt-4 pb-10'>
              <img src={dailyBonus} alt='Daily Bonus' className='w-full mb-4' />

              {commentsData.map((EachData, index) => (
                <CommentCard
                  key={index}
                  name={EachData.name}
                  date={EachData.date}
                  img={EachData.img}
                  comment={EachData.comment}
                />
              ))}

              <div className='comment-area flex items-center px-4 h-14 rounded-bl-2xl rounded-br-2xl'>
                <input
                  type='text'
                  placeholder='Send a message...'
                  className='flex-1 w-full'
                />
                <div className='flex'>
                  <img src={emoji} alt='emoji' className='mr-3' />
                  <img src={send} alt='send' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
