
let data = require('./data');

function sort(property) {

    let result = data.sort(function (a, b) {
        if (a[property] < b[property])
            return -1;
        if (a[property] > b[property])
            return 1;
        return 0;
    });

    return result;
}

function filter(property, value) {

    let result = [];

    data.forEach(obj => {

        if (obj.hasOwnProperty(property)) {
            let objValue = obj[property];
            if (objValue === value) {
                result.push(obj);
            }
        }
    });

    return result;
}

module.exports = { sort, filter };