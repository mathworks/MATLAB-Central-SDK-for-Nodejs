import MathworksCommunity from '../../src/index.js'
import {expect} from 'expect';

describe('SearchResults', function() {
  let instance = new MathworksCommunity.SearchResults();
      it('should create an instance of SearchResults', function() {
        expect(instance).toBeInstanceOf(MathworksCommunity.SearchResults);
      });

      it('should have the property items (base name: "items")', function() {
        // TODO: update the code to test the property items
        expect(instance).toHaveProperty('items');
        // expect(instance.items).to.be(expectedValueLiteral);
      });

      it('should have the property totalFound (base name: "total_found")', function() {
        // TODO: update the code to test the property totalFound
        expect(instance).toHaveProperty('totalFound');
        // expect(instance.totalFound).to.be(expectedValueLiteral);
      });

      it('should have the property hasMore (base name: "has_more")', function() {
        // TODO: update the code to test the property hasMore
        expect(instance).toHaveProperty('hasMore');
        // expect(instance.hasMore).to.be(expectedValueLiteral);
      });

});
