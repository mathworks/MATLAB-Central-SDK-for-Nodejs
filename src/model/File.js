
import {ApiClient} from '../ApiClient.js';
import {Author} from './Author.js';

/**
 * The File model module.
 * @module model/File
 * @version 1.0.0
 */
export class File {
  /**
   * Constructs a new <code>File</code>.
   * @alias module:model/File
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>File</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/File} obj Optional instance to populate.
   * @return {module:model/File} The populated <code>File</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new File();
      if (data.hasOwnProperty('artifact_type'))
        obj.artifactType = ApiClient.convertToType(data['artifact_type'], 'String');
      if (data.hasOwnProperty('author'))
        obj.author = Author.constructFromObject(data['author']);
      if (data.hasOwnProperty('comment_count'))
        obj.commentCount = ApiClient.convertToType(data['comment_count'], 'Number');
      if (data.hasOwnProperty('created_date'))
        obj.createdDate = ApiClient.convertToType(data['created_date'], 'Date');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('download_count'))
        obj.downloadCount = ApiClient.convertToType(data['download_count'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
      if (data.hasOwnProperty('rating_count'))
        obj.ratingCount = ApiClient.convertToType(data['rating_count'], 'Number');
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
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} artifactType
 */
 File.prototype.artifactType = undefined;

/**
 * @member {module:model/Author} author
 */
 File.prototype.author = undefined;

/**
 * @member {Number} commentCount
 */
 File.prototype.commentCount = undefined;

/**
 * @member {String} createdDate
 */
 File.prototype.createdDate = undefined;

/**
 * @member {String} description
 */
 File.prototype.description = undefined;

/**
 * @member {Number} downloadCount
 */
 File.prototype.downloadCount = undefined;

/**
 * @member {Number} id
 */
 File.prototype.id = undefined;

/**
 * @member {Number} rating
 */
 File.prototype.rating = undefined;

/**
 * @member {Number} ratingCount
 */
 File.prototype.ratingCount = undefined;

/**
 * @member {String} scope
 */
 File.prototype.scope = undefined;

/**
 * @member {Array.<String>} tags
 */
 File.prototype.tags = undefined;

/**
 * @member {String} title
 */
 File.prototype.title = undefined;

/**
 * @member {String} updatedDate
 */
 File.prototype.updatedDate = undefined;

/**
 * @member {String} url
 */
 File.prototype.url = undefined;

/**
 * @member {String} version
 */
 File.prototype.version = undefined;

// Implement AnyOfSearchResultsItemsItems interface:
