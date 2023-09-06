
import {ApiClient} from '../ApiClient.js';
import {Author} from './Author.js';

/**
 * The CommunityContest model module.
 * @module model/CommunityContest
 * @version 1.0.0
 */
export class CommunityContest {
  /**
   * Constructs a new <code>CommunityContest</code>.
   * @alias module:model/CommunityContest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CommunityContest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommunityContest} obj Optional instance to populate.
   * @return {module:model/CommunityContest} The populated <code>CommunityContest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CommunityContest();
      if (data.hasOwnProperty('artifact_type'))
        obj.artifactType = ApiClient.convertToType(data['artifact_type'], 'String');
      if (data.hasOwnProperty('author'))
        obj.author = Author.constructFromObject(data['author']);
      if (data.hasOwnProperty('created_date'))
        obj.createdDate = ApiClient.convertToType(data['created_date'], 'Date');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('reply_count'))
        obj.replyCount = ApiClient.convertToType(data['reply_count'], 'Number');
      if (data.hasOwnProperty('scope'))
        obj.scope = ApiClient.convertToType(data['scope'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('updated_date'))
        obj.updatedDate = ApiClient.convertToType(data['updated_date'], 'Date');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('view_count'))
        obj.viewCount = ApiClient.convertToType(data['view_count'], 'Number');
      if (data.hasOwnProperty('vote_count'))
        obj.voteCount = ApiClient.convertToType(data['vote_count'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} artifactType
 */
CommunityContest.prototype.artifactType = undefined;

/**
 * @member {module:model/Author} author
 */
CommunityContest.prototype.author = undefined;

/**
 * @member {String} createdDate
 */
CommunityContest.prototype.createdDate = undefined;

/**
 * @member {String} description
 */
CommunityContest.prototype.description = undefined;

/**
 * @member {Number} id
 */
CommunityContest.prototype.id = undefined;

/**
 * @member {Number} replyCount
 */
CommunityContest.prototype.replyCount = undefined;

/**
 * @member {String} scope
 */
CommunityContest.prototype.scope = undefined;

/**
 * @member {String} title
 */
CommunityContest.prototype.title = undefined;

/**
 * @member {String} updatedDate
 */
CommunityContest.prototype.updatedDate = undefined;

/**
 * @member {String} url
 */
CommunityContest.prototype.url = undefined;

/**
 * @member {Number} viewCount
 */
CommunityContest.prototype.viewCount = undefined;

/**
 * @member {Number} voteCount
 */
CommunityContest.prototype.voteCount = undefined;

// Implement AnyOfSearchResultsItemsItems interface:
