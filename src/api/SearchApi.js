
import {ApiClient} from "../ApiClient.js";
import {SearchResults} from '../model/SearchResults.js';

/**
* Search service.
* @module api/SearchApi
* @version 1.0.0
*/
export class SearchApi {

    /**
    * Constructs a new SearchApi. 
    * @alias module:api/SearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Search MATLAB Central areas for content matching specified query.
     * &lt;br/&gt;&lt;div&gt;Returns MATLAB Central artifacts that match a specified query. Areas you can search include MATLAB Answers, File Exchange, Blogs, Cody, Community Highlights, and Community Contests. All parameters are optional. When no parameters are specified, all results from MATLAB Central are returned.&lt;/div&gt;&lt;br/&gt;&lt;div&gt;The &lt;var&gt;scope&lt;/var&gt; parameter lets you restrict the request to specific MATLAB Central areas. The request accepts several other parameters to help narrow your search and create complex queries.&lt;/div&gt;&lt;br/&gt;&lt;div&gt;/v1/search returns one or more of the following artifacts:&lt;ul&gt;&lt;li&gt;Question&lt;/li&gt;&lt;li&gt;File&lt;/li&gt;&lt;li&gt;Problem&lt;/li&gt;&lt;li&gt;Blog&lt;/li&gt;&lt;li&gt;Topic&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;p&gt;The value for the scope parameter determines which artifacts are returned.&lt;/p&gt;
     * @param {Object} opts Optional parameters
     * @param {String} opts.query Enter keywords to search. Separate multiple keywords with space or comma.
     * @param {module:model/String} opts.scope A comma-separated list of MATLAB Central areas to search within. (default to <.>)
     * @param {String} opts.tags A comma-separated list of tags. MATLAB Central areas that do not support tags are excluded from the result set.
     * @param {Date} opts.createdBefore Content that was created before this date and time, specified in Internet date and time format.
     * @param {Date} opts.createdAfter Content that was created after this date and time, specified in Internet date and time format.
     * @param {module:model/String} opts.sortOrder &lt;p&gt;Items returned in the response can be ordered by created date, updated date, or relevance and sorted in ascending or descending order.&lt;/p&gt;&lt;p&gt;If &lt;var&gt;sort_order&lt;/var&gt; is not specified and there is no value in the query parameter, results are sorted by updated date in descending order. However, if &lt;var&gt;sort_order&lt;/var&gt; is not specified and there is a value in query, the default sort changes to relevance in descending order.&lt;/p&gt;
     * @param {Number} opts.page The page number indicating which page of items to be returned in the result set, specified as a valid positive number. (default to <.>)
     * @param {Number} opts.count The number of items to return in the result set, specified as a value between 1 and 50. The default value is 10. (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchResults} and HTTP response
     */
    searchWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'query': opts['query'],'scope': opts['scope'],'tags': opts['tags'],'created_before': opts['createdBefore'],'created_after': opts['createdAfter'],'sort_order': opts['sortOrder'],'page': opts['page'],'count': opts['count']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SearchResults;

      return this.apiClient.callApi(
        '/v1/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search MATLAB Central areas for content matching specified query.
     * &lt;br/&gt;&lt;div&gt;Returns MATLAB Central artifacts that match a specified query. Areas you can search include MATLAB Answers, File Exchange, Blogs, Cody, Community Highlights, and Community Contests. All parameters are optional. When no parameters are specified, all results from MATLAB Central are returned.&lt;/div&gt;&lt;br/&gt;&lt;div&gt;The &lt;var&gt;scope&lt;/var&gt; parameter lets you restrict the request to specific MATLAB Central areas. The request accepts several other parameters to help narrow your search and create complex queries.&lt;/div&gt;&lt;br/&gt;&lt;div&gt;/v1/search returns one or more of the following artifacts:&lt;ul&gt;&lt;li&gt;Question&lt;/li&gt;&lt;li&gt;File&lt;/li&gt;&lt;li&gt;Problem&lt;/li&gt;&lt;li&gt;Blog&lt;/li&gt;&lt;li&gt;Topic&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;p&gt;The value for the scope parameter determines which artifacts are returned.&lt;/p&gt;
     * @param {Object} opts Optional parameters
     * @param {String} opts.query Enter keywords to search. Separate multiple keywords with space or comma.
     * @param {module:model/String} opts.scope A comma-separated list of MATLAB Central areas to search within. (default to <.>)
     * @param {String} opts.tags A comma-separated list of tags. MATLAB Central areas that do not support tags are excluded from the result set.
     * @param {Date} opts.createdBefore Content that was created before this date and time, specified in Internet date and time format.
     * @param {Date} opts.createdAfter Content that was created after this date and time, specified in Internet date and time format.
     * @param {module:model/String} opts.sortOrder &lt;p&gt;Items returned in the response can be ordered by created date, updated date, or relevance and sorted in ascending or descending order.&lt;/p&gt;&lt;p&gt;If &lt;var&gt;sort_order&lt;/var&gt; is not specified and there is no value in the query parameter, results are sorted by updated date in descending order. However, if &lt;var&gt;sort_order&lt;/var&gt; is not specified and there is a value in query, the default sort changes to relevance in descending order.&lt;/p&gt;
     * @param {Number} opts.page The page number indicating which page of items to be returned in the result set, specified as a valid positive number. (default to <.>)
     * @param {Number} opts.count The number of items to return in the result set, specified as a value between 1 and 50. The default value is 10. (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchResults}
     */
    search(opts) {
      return this.searchWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}