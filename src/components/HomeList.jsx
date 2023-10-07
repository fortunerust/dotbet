import React, { useEffect, useState } from 'react'

import { GameSplide } from './GameSplide'
import { TopRatesGame } from './TopRatesGame'
import { RecommendedGames } from './RecommendedGames'
import { LatestBets } from './LatestBets'
import { LiveCasino } from './LiveCasino'
import { GameShow } from './GameShow'
import { Fishing } from './Fishing'
import { Roulette } from './Roulette'
import { Slots } from './Slots'
import { Sports } from './Sports'
import { NewArrival } from './NewArrival'
import * as API from '../services/api'
import { ToastContainer, toast } from 'react-toastify'

import glowdot from '../assets/img/glow-dot.svg'
import livecasino from '../assets/img/live-casino.svg'
import gameshow from '../assets/img/game-show.svg'

export const HomeList = () => {
  const [games, setGames] = useState([])
  const fetchData = async () => {
    const res = await API.getGames()
    if (res.data.status == '0000') {
      setGames(res.data.games)
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
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {/* RecentWin*/}
      <GameSplide
        items={5}
        icon={() => {
          return <img src={glowdot} alt='glowdot' className='mr-2' />
        }}
        title='Hits'
        games={games.slice(0, 10)}
      />

      {/* NewArrival */}
      <GameSplide items={5} title='New' games={games.slice(11, 20)} />

      {/* Providers */}
      <GameSplide
        items={5}
        title='Providers'
        games={
          games.length > 0
            ? games.filter(game => game.gameType == 'Providers')
            : []
        }
      />

      {/* Sports */}
      <GameSplide
        items={5}
        title='Sports'
        games={
          games.length > 0
            ? games.filter(game => game.gameType == 'ESPORTS')
            : []
        }
      />

      {/* LiveCasino */}
      <GameSplide
        items={5}
        icon={() => {
          return <img src={livecasino} alt='livecasino' className='mr-2' />
        }}
        title='Live Casino'
        games={
          games.length > 0 ? games.filter(game => game.gameType == 'LIVE') : []
        }
      />

      {/* Slots */}
      <GameSplide
        items={5}
        title='Featured Slots'
        games={
          games.length > 0 ? games.filter(game => game.gameType == 'SLOT') : []
        }
      />
      {/* Roulette */}
      <GameSplide
        items={5}
        title='Roulette'
        games={
          games.length > 0
            ? games.filter(game => game.gameName == 'VRLOTTO')
            : []
        }
      />

      {/* Fishing */}
      <GameSplide
        items={5}
        title='Fishing'
        games={
          games.length > 0 ? games.filter(game => game.gameType == 'FH') : []
        }
      />

      {/* GameShow */}
      <GameSplide
        items={5}
        icon={() => {
          return <img src={gameshow} alt='gameshow' className='mr-2' />
        }}
        title='Game Shows'
        games={games.slice(81, 90)}
      />

      {/* Top Rates Game */}
      <GameSplide
        items={5}
        title='Top Rates Game'
        games={games.slice(91, 100)}
      />

      {/* LatestBets */}
      <LatestBets items={5} />

      {/* Recommended Game */}
      <GameSplide
        items={5}
        title='Recommended Games'
        games={games.slice(45, 55)}
      />
    </>
  )
}
