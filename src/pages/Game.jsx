import React, {useEffect, useState} from 'react'

import GameField from '../components/GameField'

function Game() {

    const [clicks, setClicks] = useState(0)
    const [totalClicks, setTotalClicks] = useState(0)
    
    const [level, setLevel] = useState(0)

    function handleIncrement(){
        setClicks(c => {
            const newClicks = c + 1
            setTotalClicks(newClicks)
            upLevel(newClicks)

            return newClicks
        })
    }

    function upLevel(){
        if(totalClicks < 50) setLevel(0); // surface 
        if(totalClicks+1 >= 50) setLevel(1); // stone
        if(totalClicks+1 >= 200) setLevel(2); // coal
        if(totalClicks+1 >= 500) setLevel(3); // iron
        if(totalClicks+1 >= 2000) setLevel(4); // spawner
        if(totalClicks+1 >= 5000) setLevel(5); // fake diamond
        if(totalClicks+1 >= 10000) setLevel(6); // emerald
        if(totalClicks+1 >= 50000) setLevel(7); // -1
        if(totalClicks+1 >= 100000) setLevel(8); // warden
        if(totalClicks+1 >= 200000) setLevel(9); // diamond
        if(totalClicks+1 >= 500000) setLevel(10); // obsidian
        if(totalClicks+1 >= 1000000) setLevel(11); // nether
    }

    useEffect(()=>{
        upLevel();
    },[])

    return (
        <main className='w-full h-dvh flex'>
            <GameField click={handleIncrement} level={level} />
            <section id="upgrades" className='flex-1 border-l-border border-l'>
                <p>Clicks: {clicks}</p>
            </section>
        </main>
    )
}

export default Game