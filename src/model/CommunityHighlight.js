
import {ApiClient} from '../ApiClient.js';
import {Author} from './Author.js';

/**
 * The CommunityHighlight model module.
 * @module model/CommunityHighlight
 * @version 1.0.0
 */
export class CommunityHighlight {
  /**
   * Constructs a new <code>CommunityHighlight</code>.
   * @alias module:model/CommunityHighlight
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CommunityHighlight</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommunityHighlight} obj Optional instance to populate.
   * @return {module:model/CommunityHighlight} The populated <code>CommunityHighlight</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CommunityHighlight();
      if (data.hasOwnProperty('artifact_type'))
        obj.artifactType = ApiClient.convertToType(data['artifact_type'], 'String');
      if (data.hasOwnProperty('author'))
        obj.author = Author.constructFromObject(data['author']);
      if (data.hasOwnProperty('created_date'))
        obj.createdDate = ApiClient.convertToType(data['created_date'], 'Date');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('highlight_type'))
        obj.highlightType = ApiClient.convertToType(data['highlight_type'], 'String');
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
CommunityHighlight.prototype.artifactType = undefined;

/**
 * @member {module:model/Author} author
 */
CommunityHighlight.prototype.author = undefined;

/**
 * @member {String} createdDate
 */
CommunityHighlight.prototype.createdDate = undefined;

/**
 * @member {String} description
 */
CommunityHighlight.prototype.description = undefined;

/**
 * @member {String} highlightType
 */
CommunityHighlight.prototype.highlightType = undefined;

/**
 * @member {Number} id
 */
CommunityHighlight.prototype.id = undefined;

/**
 * @member {Number} replyCount
 */
CommunityHighlight.prototype.replyCount = undefined;

/**
 * @member {String} scope
 */
CommunityHighlight.prototype.scope = undefined;

/**
 * @member {String} title
 */
CommunityHighlight.prototype.title = undefined;

/**
 * @member {String} updatedDate
 */
CommunityHighlight.prototype.updatedDate = undefined;

/**
 * @member {String} url
 */
CommunityHighlight.prototype.url = undefined;

/**
 * @member {Number} viewCount
 */
CommunityHighlight.prototype.viewCount = undefined;

/**
 * @member {Number} voteCount
 */
CommunityHighlight.prototype.voteCount = undefined;

// Implement AnyOfSearchResultsItemsItems interface:
