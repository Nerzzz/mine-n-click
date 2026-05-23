import React, { useEffect, useRef, useState } from 'react'
import { ACHIEVEMENTS } from '../data/achievements'

function Toast({totalBlocks, level}) {

    const [visible, setVisible] = useState(false)
    const timerRef = useRef(null)

    useEffect(() => {
        new Audio('/audio/achievement.mp3').play();

        setVisible(true)

        timerRef.current = setTimeout(() => {
            setVisible(false)
        }, 5000)
    },[])

    useEffect(() => {
        const achievement = ACHIEVEMENTS[level]

        if (totalBlocks >= achievement.min){
            new Audio('/audio/achievement.mp3').play();

            setVisible(true)

            timerRef.current = setTimeout(() => {
                setVisible(false)
            }, 5000)
            
            return () => clearTimeout(timerRef)
        }

    }, [level])

    return (
        <div className={`flex gap-[10px] items-center fixed p-[10px] bottom-[10px] left-[10px] rounded-[8px] min-w-[300px] bg-gray border-3 border-light-foreground transition-[200ms] ${visible ? 'translate-x-0' : '-translate-x-[120%]'}`}>
            <img className='w-[40px] h-[40px] pixelate' src={`images/achievements/${ACHIEVEMENTS[level].icon}`} />
            <div className='text-[11pt]'>
                <h1 className='!text-[#ffe600]'>New achievement!</h1>
                <p>{ACHIEVEMENTS[level].msg}</p>
            </div>
        </div>
    )
}

export default Toast