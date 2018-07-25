
let expect = require('chai').expect;

function sum(arr) {

    let sum = 0;
    for (num of arr)
        sum += Number(num);

    return sum;
}

describe('Sum', function () {

    it('Should return 3 from [1, 2]', function () {
        expect(sum([1, 2])).to.be.equal(3);
    })

    it('Should return 1 from [1]', function () {
        expect(sum([1])).to.be.equal(1);
    })

    it('Should return 0 from []', function () {
        expect(sum([])).to.be.equal(0);
    })

    it('Should return 3 from [1.5, 2.5, -1]', function () {
        expect(sum([1.5, 2.5, -1])).to.be.equal(3);
    })

    it('Should return NaN from string', function () {
        expect(sum('Invalid Input')).to.be.NaN;
    })

})
