export const UPGRADES = [
    {
        id: "wooden_pickaxe",
        title: "Woden Pickaxe",
        desc: "Each click is worth 2x.",
        req: null,
        cost: 50,
        aply: 2,
        icon: "wooden_pickaxe"
    },
    {
        id: "iron_pickaxe",
        title: "Iron Pickaxe",
        desc: "Each click is worth 3x.",
        req: "wooden_pickaxe",
        cost: 1000,
        aply: 3,
        icon: "iron_pickaxe"
    },
    {
        id: "diamond_pickaxe",
        title: "Diamond Pickaxe",
        desc: "Each click is worth 5x.",
        req: "iron_pickaxe",
        cost: 10000,
        aply: 5,
        icon: "diamond_pickaxe"
    },
    {
        id: "netherite_pickaxe",
        title: "Netherite Pickaxe",
        desc: "Each click is worth 10x.",
        req: "diamond_pickaxe",
        cost: 500000,
        aply: 10,
        icon: "netherite_pickaxe"
    }
]