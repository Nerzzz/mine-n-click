import React from 'react'

import { formatNumber } from '../helpers/formaters'
import Upgrades from './Upgrades'

function Aside({blocks, totalBlocks}) {
    return (
        <aside className='h-dvh xl:max-w-125 flex flex-col gap-10 flex-1 p-10 border-l-light-foreground md:border-l-2'>
            <section className='w-full flex flex-col items-center'>
                <div className='flex items-center flex-col'>
                    <span>Blocks</span>
                    <span className="text-[25pt] font-bold">{formatNumber(blocks)}</span>
                </div>
                <p>Total blocks: {formatNumber(totalBlocks)}</p>
            </section>
            <Upgrades />
        </aside>
    )
}

export default Aside