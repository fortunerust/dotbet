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
      case 'SPORTS':
        if (active) {
          setIcon(sports_hover)
        } else {
          setIcon(sports)
        }
        break
      case 'Live Casino':
        if (active) {
          setIcon(Live_hover)
        } else {
          setIcon(Live)
        }
        break
      case 'TABLE':
        if (active) {
          setIcon(slots_hover)
        } else {
          setIcon(slots)
        }
        break
      case 'FISHING GAME':
        if (active) {
          setIcon(roulette_hover)
        } else {
          setIcon(roulette)
        }
        break
      case 'VIRTUAL':
        if (active) {
          setIcon(roulette_hover)
        } else {
          setIcon(cards)
        }
        break
      case 'Slots':
        if (active) {
          setIcon(slots_hover)
        } else {
          setIcon(slots)
        }
        break
      case 'LOTTO':
        if (active) {
          setIcon(slots_hover)
        } else {
          setIcon(roulette)
        }
        break
      case 'BINGO':
        if (active) {
          setIcon(cards_hover)
        } else {
          setIcon(cards)
        }
        break
      case 'EGAME':
        if (active) {
          setIcon(slots_hover)
        } else {
          setIcon(slots)
        }
        break
      default:
        break
    }
  }, [active])

  return <img src={icon} alt='' />
}
