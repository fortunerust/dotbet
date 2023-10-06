import React, { useEffect, useState } from 'react'

import { Hits } from './Hits'
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

export const HomeList = () => {
    return (
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
    )
}