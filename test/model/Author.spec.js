import MathworksCommunity from '../../src/index.js'
import {expect} from 'expect';

describe('Author', function() {
  let instance = new MathworksCommunity.Author();
  it('should create an instance of Author', function() {
    expect(instance).toBeInstanceOf(MathworksCommunity.Author);
  });

  it('should have the property authorId (base name: "author_id")', function() {
    // TODO: update the code to test the property authorId
    expect(instance).toHaveProperty('authorId');
    // expect(instance.authorId).to.be(expectedValueLiteral);
  });

  it('should have the property authorUrl (base name: "author_url")', function() {
    // TODO: update the code to test the property authorUrl
    expect(instance).toHaveProperty('authorUrl');
    // expect(instance.authorUrl).to.be(expectedValueLiteral);
  });

  it('should have the property authorName (base name: "author_name")', function() {
    // TODO: update the code to test the property authorName
    expect(instance).toHaveProperty('authorName');
    // expect(instance.authorName).to.be(expectedValueLiteral);
  });
});


