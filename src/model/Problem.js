
import {ApiClient} from '../ApiClient.js';
import {Author} from './Author.js';

/**
 * The Problem model module.
 * @module model/Problem
 * @version 1.0.0
 */
export class Problem {
  /**
   * Constructs a new <code>Problem</code>.
   * @alias module:model/Problem
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Problem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Problem} obj Optional instance to populate.
   * @return {module:model/Problem} The populated <code>Problem</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Problem();
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
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('like_count'))
        obj.likeCount = ApiClient.convertToType(data['like_count'], 'Number');
      if (data.hasOwnProperty('scope'))
        obj.scope = ApiClient.convertToType(data['scope'], 'String');
      if (data.hasOwnProperty('solver_count'))
        obj.solverCount = ApiClient.convertToType(data['solver_count'], 'Number');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('updated_date'))
        obj.updatedDate = ApiClient.convertToType(data['updated_date'], 'Date');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} artifactType
 */
Problem.prototype.artifactType = undefined;

/**
 * @member {module:model/Author} author
 */
Problem.prototype.author = undefined;

/**
 * @member {Number} commentCount
 */
Problem.prototype.commentCount = undefined;

/**
 * @member {String} createdDate
 */
Problem.prototype.createdDate = undefined;

/**
 * @member {String} description
 */
Problem.prototype.description = undefined;

/**
 * @member {Number} id
 */
Problem.prototype.id = undefined;

/**
 * @member {Number} likeCount
 */
Problem.prototype.likeCount = undefined;

/**
 * @member {String} scope
 */
Problem.prototype.scope = undefined;

/**
 * @member {Number} solverCount
 */
Problem.prototype.solverCount = undefined;

/**
 * @member {Array.<String>} tags
 */
Problem.prototype.tags = undefined;

/**
 * @member {String} title
 */
Problem.prototype.title = undefined;

/**
 * @member {String} updatedDate
 */
Problem.prototype.updatedDate = undefined;

/**
 * @member {String} url
 */
Problem.prototype.url = undefined;

// Implement AnyOfSearchResultsItemsItems interface:
