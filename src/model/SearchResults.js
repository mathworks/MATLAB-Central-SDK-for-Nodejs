
import {ApiClient} from '../ApiClient.js';
import { CommunityContest } from './CommunityContest.js';
import { CommunityHighlight } from './CommunityHighlight.js';
import { Question } from './Question.js';
import { File } from './File.js';
import { Problem } from './Problem.js';
import { Blog } from './Blog.js';


/**
 * The SearchResults model module.
 * @module model/SearchResults
 * @version 1.0.0
 */
export class SearchResults {
  /**
   * Constructs a new <code>SearchResults</code>.
   * @alias module:model/SearchResults
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SearchResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchResults} obj Optional instance to populate.
   * @return {module:model/SearchResults} The populated <code>SearchResults</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SearchResults();
      if (data.hasOwnProperty('items')) {
          let items = data.items;
          obj.items = items.map(function (item, index) {
            switch(item.artifact_type) {
              case 'question':
                return items[index] = Question.constructFromObject(item);
              case 'file':
                return items[index] = File.constructFromObject(item);
              case 'problem':
                return items[index] = Problem.constructFromObject(item);
                break;
              case 'blog':
                return items[index] = Blog.constructFromObject(item);
              case 'topic':
                if (item.scope == "community-highlights") {
                  return items[index] = CommunityHighlight.constructFromObject(item);
                } else if (item.scope == "community-contests") {
                  return items[index] = CommunityContest.constructFromObject(item);
                }
                end
            }
          });
        }
      if (data.hasOwnProperty('total_found'))
        obj.totalFound = ApiClient.convertToType(data['total_found'], 'Number');
      if (data.hasOwnProperty('has_more'))
        obj.hasMore = ApiClient.convertToType(data['has_more'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Array.<Object>} items
 */
SearchResults.prototype.items = undefined;

/**
 * @member {Number} totalFound
 */
SearchResults.prototype.totalFound = undefined;

/**
 * @member {Boolean} hasMore
 */
SearchResults.prototype.hasMore = undefined;

