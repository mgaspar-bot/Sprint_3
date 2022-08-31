const readFileSync = require('fs').readFileSync;
const currency_conversions = JSON.parse(readFileSync('./currency_conversions.json'));


function decoratorShowPrice (showPrice) {
    return function (...arguments) {
            for (let arg of arguments) {
                if (typeof arg.currency === "string") { //poso aquest if "extra" pq sino al fer .includes pot saltar uncatched error
                    if (arg.currency.includes('USD')) {
                        arg.price *= currency_conversions["USD_EUR"]
                        arg.currency = 'EUR'
                    } else if (arg.currency.includes('GBP')) {
                        arg.price *= currency_conversions["GBP_EUR"]
                        arg.currency = 'EUR'
                    } else if (arg.currency.includes('CHF')) {
                        arg.price *= currency_conversions["CHF_EUR"]
                        arg.currency = 'EUR'
                    }else if (arg.currency.includes('JPY')) {
                        arg.price *= currency_conversions["JPY_EUR"]
                        arg.currency = 'EUR'
                    }else if (arg.currency.includes('CAD')) {
                        arg.price *= currency_conversions["CAD_EUR"]
                        arg.currency = 'EUR'
                    }else if (arg.currency.includes('CNY')) {
                        arg.price *= currency_conversions["CNY_EUR"]
                        arg.currency = 'EUR'
                    }
                    arg.price = Math.round(arg.price * 100) / 100;
                }
            }
            showPrice(...arguments);
        }     
}



module.exports = decoratorShowPrice;