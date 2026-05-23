import { create } from "zustand"
import { TOOL_UPGRADES } from "../data/upgrades"

const INITIAL_STATES = {
    blocks: 0,
    totalMined: 0,
    clickPower: 1,
    level: 0,
    toolUpgrades: {} // tool_up_id: true/false ...
}

export const useGameStore = create((set, get) => ({
    ...INITIAL_STATES,

    canAfford(cost) {
        return get().blocks >= cost
    },

    clickBlock() {
        const power = get().clickPower * 1
        set((s) => ({
            blocks: s.blocks + power,
            totalMined: s.totalMined + power,
        }))
        
        return power
    },

    isToolUpgradeAvaliable(id){
        const up = TOOL_UPGRADES.find((u) => u.id === id)
        if(!up) return false
        if (get().toolUpgrades[id]) return false
        if (up.req && !get().toolUpgrades[up.req]) return false
        return true
    },

    buyToolUpgrade(id){
        const up = TOOL_UPGRADES.find((u) => u.id === id)
        if(!get().canAfford(up.cost)) return false

        set((s) => {
            const apply = {
                blocks: s.blocks - up.cost,
                clickPower: up.apply,
                toolUpgrades: { ...s.toolUpgrades, [up.id]:true }
            }
            const proxy = {
                clickPower: apply.clickPower,
            }
            up.apply(proxy)
            apply.clickPower = proxy.clickPower
            return apply
        })

        return true
    }
}))