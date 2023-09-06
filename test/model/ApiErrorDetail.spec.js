import MathworksCommunity from '../../src/index.js'
import {expect} from 'expect';

describe('ApiErrorDetail', function() {
  let instance = new MathworksCommunity.ApiErrorDetail();
      it('should create an instance of ApiErrorDetail', function() {
        expect(instance).toBeInstanceOf(MathworksCommunity.ApiErrorDetail);
      });
      it('should have the property errorCode (base name: "error_code")', function() {
        // TODO: update the code to test the property errorCode
        expect(instance).toHaveProperty('errorCode');
        // expect(instance.errorCode).to.be(expectedValueLiteral);
      });

      it('should have the property message (base name: "message")', function() {
        // TODO: update the code to test the property message
        expect(instance).toHaveProperty('message');
        // expect(instance.message).to.be(expectedValueLiteral);
      });

      it('should have the property details (base name: "details")', function() {
        // TODO: update the code to test the property details
        expect(instance).toHaveProperty('details');
        // expect(instance.details).to.be(expectedValueLiteral);
      });

});

