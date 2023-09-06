
import {ApiClient} from '../ApiClient.js';

/**
 * The Author model module.
 * @module model/Author
 * @version 1.0.0
 */
export class Author {
  /**
   * Constructs a new <code>Author</code>.
   * @alias module:model/Author
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Author</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Author} obj Optional instance to populate.
   * @return {module:model/Author} The populated <code>Author</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Author();
      if (data.hasOwnProperty('author_id'))
        obj.authorId = ApiClient.convertToType(data['author_id'], 'Number');
      if (data.hasOwnProperty('author_url'))
        obj.authorUrl = ApiClient.convertToType(data['author_url'], 'String');
      if (data.hasOwnProperty('author_name'))
        obj.authorName = ApiClient.convertToType(data['author_name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} authorId
 */
Author.prototype.authorId = undefined;

/**
 * @member {String} authorUrl
 */
Author.prototype.authorUrl = undefined;

/**
 * @member {String} authorName
 */
Author.prototype.authorName = undefined;

