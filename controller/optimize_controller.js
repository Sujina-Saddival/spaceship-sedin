const { marketA, marketB, marketC, neededMachinaries } = require('../constants');

// [Running] Compare price of each market and return cheapest price
const getPrice = function (item) {
    var priceA = Number.MAX_VALUE;
    var priceB = Number.MAX_VALUE;
    var priceC = Number.MAX_VALUE;

    marketA.forEach(a => {
        if (a.name === item.name) {
            priceA = item.quantity * a.price
            return false
        }
    });
    marketB.forEach(b => {
        if (b.name === item.name) {
            priceB = item.quantity * b.price
            return false
        }
    });
    marketC.forEach(b => {
        if (b.name === item.name) {
            priceC = item.quantity * b.price
            return false
        }
    });

    // [Running] Convert the currencies to one type for the comparision
    var priceArray = [priceA, priceB * 50, priceC * 0.8 * 50]
    var max = Math.min(...priceArray)

    var index = priceArray.indexOf(max);
    switch (index) {
        case 0:
            return { name: item.name, market: "MarketA", priceWithQuantity: priceA }
        case 1:
            return { name: item.name, market: "MarketB", priceWithQuantity: priceB }
        case 2:
            return { name: item.name, market: "MarketC", priceWithQuantity: priceC }
    }
}

module.exports.getOptimizedValue = function (req, res, next) {
    var indexOfAll = []
    neededMachinaries.forEach((item) => {
        indexOfAll.push(getPrice(item))
    })

    var totalMarketAPrice = 0;
    var totalMarketBPrice = 0;
    var totalMarketCPrice = 0;

    indexOfAll.forEach((i) => {
        if (i.market == "MarketA") {
            totalMarketAPrice = i.priceWithQuantity + totalMarketAPrice
        }
        else if (i.market == "MarketB") {
            totalMarketBPrice = i.priceWithQuantity + totalMarketBPrice
        }
        else {
            totalMarketCPrice = i.priceWithQuantity + totalMarketCPrice
        }
    })

    // Total price of purchased got from each market
    TotalPriceByMarket = [
        { "name": "MarketA", totalPrice: totalMarketAPrice + " CURA" },
        { "name": "MarketB", totalPrice: totalMarketBPrice + " CURB" },
        { "name": "MarketC", totalPrice: totalMarketCPrice + " CURC" },
    ]
    return res.status(201).json({indexOfAll, TotalPriceByMarket})
}