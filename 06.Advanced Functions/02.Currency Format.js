
function currencyFormatter(separator, symbol, symbolFirst, value) {

    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);

    if (symbolFirst)
        return symbol + ' ' + result;
    else
        return result + ' ' + symbol;
}

function result(func) {

    return function (num) {
        return func(',', '$', true, num);
    }
}

let dollarFormatter = result(currencyFormatter);

console.log(dollarFormatter(5345));
console.log(dollarFormatter(3.1429));
console.log(dollarFormatter(2.709));
console.log();
console.log(result(currencyFormatter)(5345));
console.log(result(currencyFormatter)(3.1429));
console.log(result(currencyFormatter)(2.709));