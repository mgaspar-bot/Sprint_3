const readFileSync = require('fs').readFileSync;
const currency_conversions = JSON.parse(readFileSync('./currency_conversions.json'));


function decoratorShowPrice (showPrice) {
    return function (...arguments) {
            for (let arg of arguments) {
                if (typeof arg.currency === "string" && !(arg.currency.includes('EUR'))) { //poso aquest if "extra" pq sino al fer .includes pot saltar uncatched error
                    if (arg.currency.includes('USD')) {
                        arg.priceEUR = arg.price* currency_conversions["USD_EUR"]
                        // arg.currency = 'EUR'
                    } else if (arg.currency.includes('GBP')) {
                        arg.priceEUR = arg.price*currency_conversions["GBP_EUR"]
                        // arg.currency = 'EUR'
                    } else if (arg.currency.includes('CHF')) {
                        arg.priceEUR = arg.price* currency_conversions["CHF_EUR"]
                        // arg.currency = 'EUR'
                    }else if (arg.currency.includes('JPY')) {
                        arg.priceEUR = arg.price *currency_conversions["JPY_EUR"]
                        // arg.currency = 'EUR'
                    }else if (arg.currency.includes('CAD')) {
                        arg.priceEUR = arg.price * currency_conversions["CAD_EUR"]
                        // arg.currency = 'EUR'
                    }else if (arg.currency.includes('CNY')) {
                        arg.priceEUR = arg.price * currency_conversions["CNY_EUR"];
                        // arg.currency = 'EUR'
                    }
                    arg.priceEUR = Math.round(arg.priceEUR * 100) / 100;
                }
                
                showPrice(arg); //showPrice tambe funciona si li passes un sol argument, i aixi evito haver de tocar el codi de la "original"
                if (arg.priceEUR != undefined) {                     
                    console.log(`   Price in EUR: ${arg.priceEUR}`);
                }
            }
            
        }     
}



module.exports = decoratorShowPrice;