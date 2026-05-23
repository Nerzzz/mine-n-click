import React from 'react'
import { useEffect, useState } from 'react'

import ItemCard from './ItemCard'

function GameField({click, level}) {
    return (
        <main id="game_field" className='flex-1 flex justify-center md:items-center'>
            <div className='flex relative gap-5 p-5'>
                <div id="block_field" style={{backgroundImage: `url(images/levels/${level}/foreground.webp)`}} className='flex relative justify-center items-center lg:p-0 p-5 lg:w-[500px] lg:h-[500px] h-fit'>
                    <div id='block' style={{backgroundImage: `url(images/levels/${level}/block.webp)`}} className='click md:w-50 w-40 md:h-50 h-40' onMouseDown={click}></div>
                </div>
                <div id='status_bar' className='flex flex-col gap-5 max-w-25 max-h-50 lg:max-h-125 overflow-y-auto overflow-x-clip'>
                    <ItemCard // Current tool display
                        title={"Wooden Stick"} 
                        desc={"Each click is worth 1x."} 
                        icon={"stick.webp"}/>
                </div>
            </div>
        </main>
    )
}

export default GameField