
import {ApiClient} from './ApiClient.js';
import {ApiError} from './model/ApiError.js';
import {ApiErrorDetail} from './model/ApiErrorDetail.js';
import {Author} from './model/Author.js';
import {Blog} from './model/Blog.js';
import {CommunityContest} from './model/CommunityContest.js';
import {CommunityHighlight} from './model/CommunityHighlight.js';
import {File} from './model/File.js';
import {Problem} from './model/Problem.js';
import {Question} from './model/Question.js';
import {SearchResults} from './model/SearchResults.js';
import {SearchApi} from './api/SearchApi.js';

export default {

    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ApiError model constructor.
     * @property {module:model/ApiError}
     */
     ApiError,

    /**
     * The ApiErrorDetail model constructor.
     * @property {module:model/ApiErrorDetail}
     */
     ApiErrorDetail,    

    /**
     * The Author model constructor.
     * @property {module:model/Author}
     */
    Author,

    /**
     * The Blog model constructor.
     * @property {module:model/Blog}
     */
    Blog,

    /**
     * The CommunityContest model constructor.
     * @property {module:model/CommunityContest}
     */
    CommunityContest,

    /**
     * The CommunityHighlight model constructor.
     * @property {module:model/CommunityHighlight}
     */
    CommunityHighlight,

    /**
     * The File model constructor.
     * @property {module:model/File}
     */
    File,

    /**
     * The Problem model constructor.
     * @property {module:model/Problem}
     */
    Problem,

    /**
     * The Question model constructor.
     * @property {module:model/Question}
     */
    Question,

    /**
     * The SearchResults model constructor.
     * @property {module:model/SearchResults}
     */
    SearchResults,

    /**
    * The SearchApi service constructor.
    * @property {module:api/SearchApi}
    */
    SearchApi
};
