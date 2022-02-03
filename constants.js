// Declaring constants for each market

const marketA =
    [
        {
            name: "shields",
            price: 20
        },
        {
            name: "ammo",
            price: 4
        }
    ]

const marketB =
    [
        {
            name: "shields",
            price: 20
        },
        {
            name: "ammo",
            price: 4
        },
        {
            name: "engine",
            price: 20
        },
        {
            name: "ship_fuselage",
            price: 5
        },
        {
            name: "weapon_system",
            price: 10
        }
    ]

const marketC =
    [
        {
            name: "shields",
            price: 20
        },
        {
            name: "ammo",
            price: 8
        },
        {
            name: "engine",
            price: 25
        },
        {
            name: "navigation_system",
            price: 5
        },
        {
            name: "weapon_system",
            price: 20
        }
    ]

var neededMachinaries = [
    {
        name: "engine",
        quantity: 1
    },
    {
        name: "ship_fuselage",
        quantity: 1
    },
    {
        name: "ammo",
        quantity: 20
    },
    {
        name: "weapon_system",
        quantity: 1
    },
    {
        name: "navigation_system",
        quantity: 1
    },
    {
        name: "shields",
        quantity: 5
    }

]

exports.marketA = marketA;
exports.marketB = marketB;
exports.marketC = marketC;
exports.neededMachinaries = neededMachinaries;
