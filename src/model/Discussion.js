
import {ApiClient} from '../ApiClient.js';
import {Author} from './Author.js';

/**
 * The Discussion model module.
 * @module model/Discussion
 * @version 1.0.0
 */
export class Discussion {
  /**
   * Constructs a new <code>Discussion</code>.
   * @alias module:model/Discussion
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Discussion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Discussion} obj Optional instance to populate.
   * @return {module:model/Discussion} The populated <code>Discussion</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Discussion();
      if (data.hasOwnProperty('artifact_type'))
        obj.artifactType = ApiClient.convertToType(data['artifact_type'], 'String');
      if (data.hasOwnProperty('author'))
        obj.author = Author.constructFromObject(data['author']);
      if (data.hasOwnProperty('channel'))
        obj.channel = ApiClient.convertToType(data['channel'], ['String']);
      if (data.hasOwnProperty('created_date'))
        obj.createdDate = ApiClient.convertToType(data['created_date'], 'Date');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('discussion_type'))
        obj.discussionType = ApiClient.convertToType(data['discussion_type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('reply_count'))
        obj.replyCount = ApiClient.convertToType(data['reply_count'], 'Number');
      if (data.hasOwnProperty('scope'))
        obj.scope = ApiClient.convertToType(data['scope'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
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
Discussion.prototype.artifactType = undefined;

/**
 * @member {module:model/Author} author
 */
Discussion.prototype.author = undefined;

/**
 * @member {Array.<String>} channel
 */
Discussion.prototype.channel = undefined;

/**
 * @member {String} createdDate
 */
Discussion.prototype.createdDate = undefined;

/**
 * @member {String} description
 */
Discussion.prototype.description = undefined;

/**
 * @member {String} discussionType
 */
Discussion.prototype.discussionType = undefined;

/**
 * @member {Number} id
 */
Discussion.prototype.id = undefined;

/**
 * @member {Number} replyCount
 */
Discussion.prototype.replyCount = undefined;

/**
 * @member {String} scope
 */
Discussion.prototype.scope = undefined;

/**
 * @member {Array.<String>} tags
 */
Discussion.prototype.tags = undefined;

/**
 * @member {String} title
 */
Discussion.prototype.title = undefined;

/**
 * @member {String} updatedDate
 */
Discussion.prototype.updatedDate = undefined;

/**
 * @member {String} url
 */
Discussion.prototype.url = undefined;

/**
 * @member {Number} viewCount
 */
Discussion.prototype.viewCount = undefined;

/**
 * @member {Number} voteCount
 */
Discussion.prototype.voteCount = undefined;

// Implement AnyOfSearchResultsItemsItems interface:
