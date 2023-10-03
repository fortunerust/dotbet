import React, { useState } from 'react'
import menuExpander from '../assets/img/menu.svg'
import sports from '../assets/img/aside/Sports.svg'
import Live from '../assets/img/Live casino.svg'
import Support from '../assets/img/aside/Support.svg'
import slots from '../assets/img/aside/Slots.svg'
import home from '../assets/img/aside/tabs/home.svg'
import blog from '../assets/img/aside/blog.svg'
import roulette from '../assets/img/aside/tabs/roulette.svg'

export const Aside = () => {
  const [homeState, setHomeState] = useState(true)
  const [sportState, setSportState] = useState(false)
  const [liveState, setLiveState] = useState(false)
  const [slotState, setSlotState] = useState(false)
  const [rouletteState, setRouletteState] = useState(false)
  const [fishingState, setFishingState] = useState(false)
  const [showState, setShowState] = useState(false)
  const [blogState, setBlogState] = useState(false)
  const [supportState, setSupportState] = useState(false)
  const [openedFaqId, setOpenedFaqId] = useState(7)
  const [supportActiveState, setSupportActiveState] = useState(2)

  const menuState = async e => {
    setOpenedFaqId(e)
    switch (e) {
      case 0:
        await setHomeState(true)
        await setSportState(false)
        await setLiveState(false)
        await setSlotState(false)
        await setRouletteState(false)
        await setFishingState(false)
        await setShowState(false)
        break
      case 1:
        await setHomeState(false)
        await setSportState(true)
        await setLiveState(false)
        await setSlotState(false)
        await setRouletteState(false)
        await setFishingState(false)
        await setShowState(false)
        break
      case 2:
        await setHomeState(false)
        await setSportState(false)
        await setLiveState(true)
        await setSlotState(false)
        await setRouletteState(false)
        await setFishingState(false)
        await setShowState(false)
        break
      case 3:
        await setHomeState(false)
        await setSportState(false)
        await setLiveState(false)
        await setSlotState(true)
        await setRouletteState(false)
        await setFishingState(false)
        await setShowState(false)
        break
      case 4:
        await setHomeState(false)
        await setSportState(false)
        await setLiveState(false)
        await setSlotState(false)
        await setRouletteState(true)
        await setFishingState(false)
        await setShowState(false)
        break
      case 5:
        await setHomeState(false)
        await setSportState(false)
        await setLiveState(false)
        await setSlotState(false)
        await setRouletteState(false)
        await setFishingState(true)
        await setShowState(false)
        break
      case 6:
        await setHomeState(false)
        await setSportState(false)
        await setLiveState(false)
        await setSlotState(false)
        await setRouletteState(false)
        await setFishingState(false)
        await setShowState(true)
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
  return (
    <aside className='px-5 py-4 flex flex-col'>
      <div className='flex items-center justify-center mb-11 mt-2'>
        <img src={menuExpander} alt='menuExpander' />
      </div>

      {gameListState.map((item, index) => {
        return (
          <div
            key={index}
            onClick={e => menuState(index)}
            href={`${item.id}`}
            className={`${
              index === openedFaqId ? 'active' : ''
            } bonus-area mb-2 rounded-lg flex items-center cursor-pointer`}
          >
            <img src={item.Img} alt='card' />
            <h1 className='flex-1 text-center'>{item.Text}</h1>
          </div>
        )
      })}

      <div className='breaker flex-1'></div>

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
    </aside>
  )
}
