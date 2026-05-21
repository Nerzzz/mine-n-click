import React from 'react'
import { useEffect, useState } from 'react'

function GameField({click, level}) {
    return (
        <section id="game-field" className='flex-2 flex justify-center items-center'>
            <div id="block-field" style={{backgroundImage: `url(images/levels/${level}/foreground.webp)`}} className='flex relative justify-center items-center w-[500px] h-[500px]'>
                <button id='block' style={{backgroundImage: `url(images/levels/${level}/block.webp)`}} className='click' onClick={click}></button>
            </div>
        </section>
    )
}

export default GameField