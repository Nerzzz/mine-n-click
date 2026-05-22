import React from 'react'
import { useEffect, useState } from 'react'

import StatusCard from './StatusCard'

function GameField({click, level}) {

    useEffect(() => {

    },[level])

    return (
        <main id="game_field" className='flex-1 flex p-[20px] justify-center gap-[20px] md:items-center'>
            <div id="block_field" style={{backgroundImage: `url(images/levels/${level}/foreground.webp)`}} className='flex relative justify-center items-center w-[500px] h-[500px]'>
                <div id='block' style={{backgroundImage: `url(images/levels/${level}/block.webp)`}} className='click' onMouseDown={click}></div>
            </div>
            <div id='status_bar' className='flex flex-col gap-[20px] max-w-[100px] h-[500px]'>
                <StatusCard // Current tool display
                    title={"Wooden Stick"} 
                    desc={"Each click is worth 1x."} 
                    icon={"stick.webp"}/>
            </div>
        </main>
    )
}

export default GameField