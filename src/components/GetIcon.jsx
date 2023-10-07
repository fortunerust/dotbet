import { useEffect, useState } from 'react'
import sports from '../assets/img/aside/tabs/Sports.svg'
import sports_hover from '../assets/img/aside/tabs/Sports_hover.svg'
import roulette from '../assets/img/aside/tabs/roulette.svg'
import roulette_hover from '../assets/img/aside/tabs/roulette_hover.svg'
import Live from '../assets/img/aside/tabs/Live casino.svg'
import Live_hover from '../assets/img/aside/tabs/Live casino_hover.svg'
import slots from '../assets/img/aside/tabs/Slots.svg'
import slots_hover from '../assets/img/aside/tabs/Slots_hover.svg'
import home from '../assets/img/aside/tabs/home.svg'
import home_hover from '../assets/img/aside/tabs/home_hover.svg'
import cards from '../assets/img/aside/tabs/Card.svg'
import cards_hover from '../assets/img/aside/tabs/Card_hover.svg'
import sportGame from '../assets/img/aside/tabs/sports-game-l.svg'
import sportGame_hover from '../assets/img/aside/tabs/sports-game.svg'
import tableGame from '../assets/img/aside/tabs/table-game-l.svg'
import tableGame_hover from '../assets/img/aside/tabs/table-game.svg'
import fishingGame from '../assets/img/aside/tabs/fishing-game-l.svg'
import fishingGame_hover from '../assets/img/aside/tabs/fishing-game.svg'
import virtualGame from '../assets/img/aside/tabs/virtual-game-l.svg'
import virtualGame_hover from '../assets/img/aside/tabs/virtual-game.svg'
import lottoGame from '../assets/img/aside/tabs/Lotto-game-l.svg'
import lottoGame_hover from '../assets/img/aside/tabs/lotto-game.svg'
import egame from '../assets/img/aside/tabs/egame-l.svg'
import egame_hover from '../assets/img/aside/tabs/egame.svg'

export const GetIcon = ({ title, active }) => {
  const [icon, setIcon] = useState('')

  useEffect(() => {
    switch (title) {
      case 'Lobby':
        if (active) {
          setIcon(home_hover)
        } else {
          setIcon(home)
        }
        break
      case 'Sports':
        if (active) {
          setIcon(sportGame_hover)
        } else {
          setIcon(sportGame)
        }
        break
      case 'Live Casino':
        if (active) {
          setIcon(Live_hover)
        } else {
          setIcon(Live)
        }
        break
      case 'Table Game':
        if (active) {
          setIcon(tableGame_hover)
        } else {
          setIcon(tableGame)
        }
        break
      case 'Fishing Game':
        if (active) {
          setIcon(fishingGame_hover)
        } else {
          setIcon(fishingGame)
        }
        break
      case 'Virtual':
        if (active) {
          setIcon(virtualGame_hover)
        } else {
          setIcon(virtualGame)
        }
        break
      case 'Slots':
        if (active) {
          setIcon(slots_hover)
        } else {
          setIcon(slots)
        }
        break
      case 'Lotto':
        if (active) {
          setIcon(lottoGame_hover)
        } else {
          setIcon(lottoGame)
        }
        break
      case 'Bingo':
        if (active) {
          setIcon(sports_hover)
        } else {
          setIcon(sports)
        }
        break
      case 'EGame':
        if (active) {
          setIcon(egame_hover)
        } else {
          setIcon(egame)
        }
        break
      default:
        break
    }
  }, [active])

  return <img src={icon} alt='' />
}
