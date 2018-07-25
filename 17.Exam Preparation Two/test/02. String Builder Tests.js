
let expect = require('chai').expect;

let StringBuilder = require('../02. String Builder').StringBuilder;

describe('StringBuilder Class Text', function () {

    it('Should return User,woop hello, there', function () {
        let str = new StringBuilder('hello');
        str.append(', there');
        str.prepend('User, ');
        str.insertAt('woop', 5);

        expect(str.toString()).to.be.equal(`User,woop hello, there`);
    })

    it('Should return User,w hello, there', function () {
        let str = new StringBuilder('hello');
        str.append(', there');
        str.prepend('User, ');
        str.insertAt('woop', 5);
        str.remove(6, 3);
        expect(str.toString()).to.be.equal(`User,w hello, there`);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.append(5)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.append([])).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.append({})).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.append(true)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.append(5.5)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.append(-5.5)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.append(-5)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.prepend(undefined)).to.throw(TypeError);
    })


    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.prepend(5)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.prepend([])).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.prepend({})).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.prepend(true)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.prepend(5.5)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.prepend(-5.5)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.prepend(-5)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.prepend(undefined)).to.throw(TypeError);
    })


    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.insertAt(5, 1)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.insertAt([], 1)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.insertAt({}, 1)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.insertAt(true, 1)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.insertAt(5.5, 1)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.insertAt(-5.5, 1)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.insertAt(-5, 1)).to.throw(TypeError);
    })

    it('Should return throw error', function () {
        let str = new StringBuilder('hello');
        expect(() => str.insertAt(undefined, 1)).to.throw(TypeError);
    })


    it('Should return []', function () {
        let str = new StringBuilder(undefined);
        expect(str._stringArray).to.be.empty;
    })

    it('Should return true', function () {
        expect(StringBuilder.prototype.hasOwnProperty('_vrfyParam')).to.be.false;
    })

    it('Should return true', function () {
        expect(StringBuilder.prototype.hasOwnProperty('append')).to.be.true;
    })

    it('Should return true', function () {
        expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.be.true;
    })

    it('Should return true', function () {
        expect(StringBuilder.prototype.hasOwnProperty('remove')).to.be.true;
    })

    it('Should return true', function () {
        expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.be.true;
    })

})