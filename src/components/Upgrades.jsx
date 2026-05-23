import React from 'react'

import ItemCard from "./ItemCard"
import { TOOL_UPGRADES } from "../data/upgrades"

import { formatNumber } from '../helpers/formaters'

const toolUpgrades = TOOL_UPGRADES

function Upgrades() {
    return (
        <section className='flex flex-1 flex-col gap-10 overflow-y-auto items-center'>
            <div className='flex flex-col gap-5 max-w-75'>
                <h2>Tool upgrades</h2>
                <div className='flex flex-wrap gap-5'>
                    {
                        toolUpgrades.map(item => (
                            <ItemCard key={item.id} 
                                title={item.title}
                                desc={item.desc}
                                icon={item.icon}
                                cost={formatNumber(item.cost)}
                             />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Upgrades