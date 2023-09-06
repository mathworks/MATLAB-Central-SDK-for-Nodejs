
import {ApiClient} from '../ApiClient.js';
import {Author} from './Author.js';

/**
 * The Question model module.
 * @module model/Question
 * @version 1.0.0
 */
export class Question {
  /**
   * Constructs a new <code>Question</code>.
   * @alias module:model/Question
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Question</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Question} obj Optional instance to populate.
   * @return {module:model/Question} The populated <code>Question</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Question();
      if (data.hasOwnProperty('answer_count'))
        obj.answerCount = ApiClient.convertToType(data['answer_count'], 'Number');
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
      if (data.hasOwnProperty('is_accepted'))
        obj.isAccepted = ApiClient.convertToType(data['is_accepted'], 'Boolean');
      if (data.hasOwnProperty('is_answered'))
        obj.isAnswered = ApiClient.convertToType(data['is_answered'], 'Boolean');
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
 * @member {Number} answerCount
 */
Question.prototype.answerCount = undefined;

/**
 * @member {String} artifactType
 */
Question.prototype.artifactType = undefined;

/**
 * @member {module:model/Author} author
 */
Question.prototype.author = undefined;

/**
 * @member {Number} commentCount
 */
Question.prototype.commentCount = undefined;

/**
 * @member {String} createdDate
 */
Question.prototype.createdDate = undefined;

/**
 * @member {String} description
 */
Question.prototype.description = undefined;

/**
 * @member {Number} id
 */
Question.prototype.id = undefined;

/**
 * @member {Boolean} isAccepted
 */
Question.prototype.isAccepted = undefined;

/**
 * @member {Boolean} isAnswered
 */
Question.prototype.isAnswered = undefined;

/**
 * @member {String} scope
 */
Question.prototype.scope = undefined;

/**
 * @member {Array.<String>} tags
 */
Question.prototype.tags = undefined;

/**
 * @member {String} title
 */
Question.prototype.title = undefined;

/**
 * @member {String} updatedDate
 */
Question.prototype.updatedDate = undefined;

/**
 * @member {String} url
 */
Question.prototype.url = undefined;

/**
 * @member {Number} viewCount
 */
Question.prototype.viewCount = undefined;

/**
 * @member {Number} voteCount
 */
Question.prototype.voteCount = undefined;

// Implement AnyOfSearchResultsItemsItems interface:
