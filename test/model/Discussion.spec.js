import MathworksCommunity from '../../src/index.js'
import {expect} from 'expect';

describe('Discussion', function() {
  let instance = new MathworksCommunity.Discussion();
      it('should create an instance of Discussion', function() {
        expect(instance).toBeInstanceOf(MathworksCommunity.Discussion);
      });

      it('should have the property artifactType (base name: "artifact_type")', function() {
        expect(instance).toHaveProperty('artifactType');
      });

      it('should have the property author (base name: "author")', function() {
        expect(instance).toHaveProperty('author');
      });

      it('should have the property channel (base name: "channel")', function() {
        expect(instance).toHaveProperty('channel');
      });

      it('should have the property createdDate (base name: "created_date")', function() {
        expect(instance).toHaveProperty('createdDate');
      });

      it('should have the property description (base name: "description")', function() {
        expect(instance).toHaveProperty('description');
      });

      it('should have the property discussionType (base name: "discussion_type")', function() {
        expect(instance).toHaveProperty('discussionType');
      });

      it('should have the property id (base name: "id")', function() {
        expect(instance).toHaveProperty('id');
      });

      it('should have the property replyCount (base name: "reply_count")', function() {
        expect(instance).toHaveProperty('replyCount');
      });

      it('should have the property scope (base name: "scope")', function() {
        expect(instance).toHaveProperty('scope');
      });

      it('should have the property tags (base name: "tags")', function() {
        expect(instance).toHaveProperty('tags');
      });

      it('should have the property title (base name: "title")', function() {
        expect(instance).toHaveProperty('title');
      });

      it('should have the property updatedDate (base name: "updated_date")', function() {
        expect(instance).toHaveProperty('updatedDate');
      });

      it('should have the property url (base name: "url")', function() {
        expect(instance).toHaveProperty('url');
      });

      it('should have the property viewCount (base name: "view_count")', function() {
        expect(instance).toHaveProperty('viewCount');
      });

      it('should have the property voteCount (base name: "vote_count")', function() {
        expect(instance).toHaveProperty('voteCount');
      });

});
