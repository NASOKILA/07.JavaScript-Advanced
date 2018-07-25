
let expect = require('chai').expect;

let rgbToHexColor = require('../06.RgbToHex');

describe('RgbToHex', function () {

    it('Should return undefined 255,255,255', function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    })

    it('Should return undefined 0, 0, 0', function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    })

    it('Should return undefined  ', function () {
        expect(rgbToHexColor()).to.be.undefined;
    })

    it('Should return undefined 0', function () {
        expect(rgbToHexColor(0)).to.be.undefined;
    })

    it('Should return undefined 0, 0', function () {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
    })

    it('Should return undefined 550, 550, 550', function () {
        expect(rgbToHexColor(550, 550, 550)).to.be.undefined;
    })

    it('Should return undefined -50, -50, -50', function () {
        expect(rgbToHexColor(-50, -50, -50)).to.be.undefined;
    })

});