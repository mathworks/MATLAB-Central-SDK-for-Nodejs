
import {ApiClient} from '../ApiClient.js';
import {Author} from './Author.js';

/**
 * The Blog model module.
 * @module model/Blog
 * @version 1.0.0
 */
export class Blog {
  /**
   * Constructs a new <code>Blog</code>.
   * @alias module:model/Blog
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Blog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Blog} obj Optional instance to populate.
   * @return {module:model/Blog} The populated <code>Blog</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Blog();
      if (data.hasOwnProperty('artifact_type'))
        obj.artifactType = ApiClient.convertToType(data['artifact_type'], 'String');
      if (data.hasOwnProperty('author'))
        obj.author = Author.constructFromObject(data['author']);
      if (data.hasOwnProperty('blog_name'))
        obj.blogName = ApiClient.convertToType(data['blog_name'], 'String');
      if (data.hasOwnProperty('blog_url'))
        obj.blogUrl = ApiClient.convertToType(data['blog_url'], 'String');
      if (data.hasOwnProperty('comment_count'))
        obj.commentCount = ApiClient.convertToType(data['comment_count'], 'Number');
      if (data.hasOwnProperty('created_date'))
        obj.createdDate = ApiClient.convertToType(data['created_date'], 'Date');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
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
    }
    return obj;
  }
}

/**
 * @member {String} artifactType
 */
Blog.prototype.artifactType = undefined;

/**
 * @member {module:model/Author} author
 */
Blog.prototype.author = undefined;

/**
 * @member {String} blogName
 */
Blog.prototype.blogName = undefined;

/**
 * @member {String} blogUrl
 */
Blog.prototype.blogUrl = undefined;

/**
 * @member {Number} commentCount
 */
Blog.prototype.commentCount = undefined;

/**
 * @member {String} createdDate
 */
Blog.prototype.createdDate = undefined;

/**
 * @member {String} description
 */
Blog.prototype.description = undefined;

/**
 * @member {String} scope
 */
Blog.prototype.scope = undefined;

/**
 * @member {Array.<String>} tags
 */
Blog.prototype.tags = undefined;

/**
 * @member {String} title
 */
Blog.prototype.title = undefined;

/**
 * @member {String} updatedDate
 */
Blog.prototype.updatedDate = undefined;

/**
 * @member {String} url
 */
Blog.prototype.url = undefined;

/**
 * @member {Number} viewCount
 */
Blog.prototype.viewCount = undefined;

// Implement AnyOfSearchResultsItemsItems interface:
