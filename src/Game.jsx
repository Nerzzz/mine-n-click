import React, {useCallback, useEffect, useState} from 'react'

import { useGameStore } from './store/gameStore'

import GameField from './components/GameField'
import Aside from './components/Aside'
import Toast from './components/Toast'

function Game() {

    const [blocks, setBlocks] = useState(0)
    const [totalBlocks, setTotalBlocks] = useState(0)
    
    const [level, setLevel] = useState(0)

    function handleIncrement(){
        setBlocks(c => {
            const newClicks = c + 1
            return newClicks
        })

        setTotalBlocks(c => {
            const newClicks = c + 1
            upLevel(newClicks)
            return newClicks
        })
    }

    const buyToolUpgrade  = useGameStore((s) => s.buyToolUpgrade)

    const handleBuyTool = useCallback((id) => {
        const ok = buyToolUpgrade(id)
        if (!ok) alert("Insuficient blocks!")
        else showToast("Upgrade acquired")
    }, [buyToolUpgrade])

    function upLevel(){
        if(totalBlocks < 50) setLevel(0); // surface 
        if(totalBlocks+1 >= 50) setLevel(1); // stone
        if(totalBlocks+1 >= 200) setLevel(2); // coal
        if(totalBlocks+1 >= 500) setLevel(3); // iron
        if(totalBlocks+1 >= 2_000) setLevel(4); // spawner
        if(totalBlocks+1 >= 5_000) setLevel(5); // fake diamond
        if(totalBlocks+1 >= 10_000) setLevel(6); // emerald
        if(totalBlocks+1 >= 50_000) setLevel(7); // -1
        if(totalBlocks+1 >= 100_000) setLevel(8); // warden
        if(totalBlocks+1 >= 200_000) setLevel(9); // diamond
        if(totalBlocks+1 >= 500_000) setLevel(10); // obsidian
        if(totalBlocks+1 >= 1_000_000) setLevel(11); // nether
    }

    useEffect(()=>{
        upLevel();
    },[])

    return (
        <>
            <GameField click={handleIncrement} level={level} />
            <Aside blocks={blocks} totalBlocks={totalBlocks}/>
            <Toast totalBlocks={totalBlocks} level={level}/>
        </>
    )
}

export default Game