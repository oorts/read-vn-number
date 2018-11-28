'use strict';

var expect = require('chai').expect;
var readVNNumber = require('../lib/index').default;

describe('#readVNNumber', function() {
    it('should return empty', function() {
        var result = readVNNumber.toVNWord();
        expect(result).to.equal('');
    });
    it('should convert 5 to "năm"', function() {
        var result = readVNNumber.toVNWord(5);
        expect(result).to.equal('năm');
    });
    it('should convert -5 to "Âm năm"', function() {
        var result = readVNNumber.toVNWord(-5);
        expect(result).to.equal('Âm năm');
    });
    it('should convert 11 to "mười một"', function() {
        var result = readVNNumber.toVNWord(11);
        expect(result).to.equal('mười một');
    });
    it('should convert 15 to "mười lăm"', function() {
        var result = readVNNumber.toVNWord(15);
        expect(result).to.equal('mười lăm');
    });
    it('should convert 51 to "năm mươi mốt"', function() {
        var result = readVNNumber.toVNWord(51);
        expect(result).to.equal('năm mươi mốt');
    });
    it('should convert 55 to "năm mươi lăm"', function() {
        var result = readVNNumber.toVNWord(55);
        expect(result).to.equal('năm mươi lăm');
    });
    it('should convert 105 to "một trăm lẻ năm"', function() {
        var result = readVNNumber.toVNWord(105);
        expect(result).to.equal('một trăm lẻ năm');
    });
    it('should convert 100.000 to "một trăm nghìn"', function() {
        var result = readVNNumber.toVNWord(100000);
        expect(result).to.equal('một trăm nghìn');
    });
    it('should convert 5555555 to "năm triệu năm trăm năm mươi lăm nghìn năm trăm năm mươi lăm"', function() {
        var result = readVNNumber.toVNWord(5555555);
        expect(result).to.equal('năm triệu năm trăm năm mươi lăm nghìn năm trăm năm mươi lăm');
    });
});