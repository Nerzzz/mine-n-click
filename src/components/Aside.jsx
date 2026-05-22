import React from 'react'

import { formatNumber } from '../helpers/formaters'

function Aside({clicks, totalClicks}) {
    return (
        <aside className='h-dvh xl:max-w-[500px] flex flex-1 p-[40px] border-l-light-foreground xl:border-l-2'>
            <section className='w-full flex flex-col items-center'>
                <div className='flex items-center flex-col'>
                    <span>Clicks</span>
                    <span className="text-[25pt] font-bold">{formatNumber(clicks)}</span>
                </div>
                <p>Total clicks: {formatNumber(totalClicks)}</p>
            </section>
        </aside>
    )
}

export default Aside