var marketA =
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

var marketB =
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

var marketC =
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

function getPrice(item) {
    var priceA = 0;
    var priceB = 0;
    var priceC = 0;

    marketA.forEach(a => {
        if (a.name === item.name) {
            priceA = item.quantity * a.price
        }
    });
    marketB.forEach(b => {
        if (b.name === item.name) {
            priceB = item.quantity * b.price
        }
    });
    marketC.forEach(b => {
        if (b.name === item.name) {
            priceC = item.quantity * b.price
        }
    });

    // Convert all price to Currency 1
    var priceArray = [priceA, priceB / 0.025, (priceC * 50) / 20]
    var max = Math.max(...priceArray)

    var index = priceArray.indexOf(max);
    switch (index) {
        case 0:
            return { name: item.name, market: "MarketA", price: priceArray[0] }
        case 1:
            return { name: item.name, market: "MarketB", price: priceArray[1] }
        case 2:
            return { name: item.name, market: "MarketC", price: priceArray[2] }
    }
}

function main() {
    var indexOfAll = []
    neededMachinaries.forEach((item) => {
        indexOfAll.push(getPrice(item))
    })
    console.log(indexOfAll)

}
main()