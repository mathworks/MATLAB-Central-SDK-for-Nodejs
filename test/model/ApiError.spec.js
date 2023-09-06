import MathworksCommunity from '../../src/index.js'
import {expect} from 'expect';

describe('ApiError', function() {
  let instance = new MathworksCommunity.ApiError();
      it('should create an instance of ApiError', function() {
        expect(instance).toBeInstanceOf(MathworksCommunity.ApiError);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).toHaveProperty('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property error (base name: "error")', function() {
        // TODO: update the code to test the property error
        expect(instance).toHaveProperty('error');
        // expect(instance.error).to.be(expectedValueLiteral);
      });

});

