export const TOOL_UPGRADES = [
    {
        id: "wooden_pickaxe",
        title: "Woden Pickaxe",
        desc: "Each click is worth 2x.",
        req: null,
        cost: 50,
        apply: 2,
        icon: "wooden_pickaxe.webp"
    },
    {
        id: "iron_pickaxe",
        title: "Iron Pickaxe",
        desc: "Each click is worth 3x.",
        req: "wooden_pickaxe",
        cost: 1_000,
        apply: 3,
        icon: "iron_pickaxe.webp"
    },
    {
        id: "diamond_pickaxe",
        title: "Diamond Pickaxe",
        desc: "Each click is worth 5x.",
        req: "iron_pickaxe",
        cost: 10_000,
        apply: 5,
        icon: "diamond_pickaxe.webp"
    },
    {
        id: "netherite_pickaxe",
        title: "Netherite Pickaxe",
        desc: "Each click is worth 10x.",
        req: "diamond_pickaxe",
        cost: 100_000,
        apply: 10,
        icon: "netherite_pickaxe.webp"
    },
    {
        id: "enchanted_mace",
        title: "Enchanted Mace",
        desc: "Each click is worth 50x.",
        req: "netherite_pickaxe",
        cost: 500_000,
        apply: 50,
        icon: "enchanted_mace.gif"
    },
    {
        id: "debug_stick",
        title: "Debug Stick",
        desc: "Each click is worth 200x.",
        req: "enchanted_mace",
        cost: 1_000_000,
        apply: 200,
        icon: "debug_stick.gif"
    }
]