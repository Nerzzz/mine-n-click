import React, { useEffect, useState } from 'react'

function StatusCard({title, desc, icon, cost}) {

    const [showInfo, setShowInfo] = useState(false)

    return (
        <>
            <div onMouseEnter={e => setShowInfo(true)} onMouseLeave={e => setShowInfo(false)} className='relative status-card flex flex-col items-center justify-center w-[60px] h-[60px] bg-gray border-4 border-light-foreground rounded-[8px] transition-[100ms] ease-out hover:scale-[0.95]'>
                <img src={`images/tools/${icon}`} />
                {cost && <p className='absolute left-1 top-0'>{cost}</p>}
            </div>
            <div className={`${showInfo ? "show" : "hide"} gap-[20px] items-center w-fit max-w-[400px] bg-[#00000091] p-[20px] text-[11pt] fixed top-[20px] left-[20px]`}>
                <img src={`images/tools/${icon}`} className='w-[40px] h-[40px]' />
                <div>
                    <h1 className='font-bold'>{title}</h1>
                    <p>{desc}</p>
                    {cost && <p className='mt-[11pt]'>Cost: {cost} clicks</p>}
                </div>
            </div>
        </>
    )
}

export default StatusCard