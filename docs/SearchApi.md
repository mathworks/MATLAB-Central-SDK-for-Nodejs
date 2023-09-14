# SearchApi

All URIs for the HTTP request are relative to *api.mathworks.com/community*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchApi.md#search) | **GET** /v1/search | Search MATLAB Central areas for content matching specified query.
# **search**
> SearchResults search(opts)

Search MATLAB Central areas for content matching specified query.

Returns MATLAB Central artifacts that match a specified query. Areas you can search include MATLAB Answers, File Exchange, Blogs, Cody, Community Highlights, and Community Contests. All parameters are optional. When no parameters are specified, all results from MATLAB Central are returned.

The 'scope' parameter lets you restrict the request to specific MATLAB Central areas. The request accepts several other parameters to help narrow your search and create complex queries.

### Example
```javascript
import MATLABCentral from 'matlabcentral';

async function executeSearch() {
  try {
    let searchApi = new MATLABCentral.SearchApi();
    let opts = {
        "query": "plotting",
        "scope": "matlab-answers,file-exchange"
    }
    let searchResponse = await searchApi.search(opts);
    console.log("Search API called successfully");
    console.log(searchResponse);
  } catch (e) {
    // e contains two fields:
    // e.reason: which is an instance of ApiError which is the formatted JSON with low-level details about the error
    // e.error: which is the unformatted error with access to the stack trace, request object, response body, headers and so on
    console.log(e.reason);
    console.log(e.error); 
  }
};

executeSearch();


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Enter keywords to search. Separate multiple keywords with space or comma. | [optional] 
 **scope** | **String**| A comma-separated list of MATLAB Central areas to search within.All values must be a member of this set: matlab-answers, file-exchange, cody, blogs, community-contests, community-highlights. | [optional] [default is all values in the set]
 **tags** | **String**| A comma-separated list of tags. MATLAB Central areas that do not support tags are excluded from the result set. | [optional] 
 **createdBefore** | **Date**| Content that was created before this date and time, specified in ISO 8601 format. | [optional] 
 **createdAfter** | **Date**| Content that was created after this date and time, specified in ISO 8601 format. | [optional] 
 **sortOrder** | **String**| &lt;p&gt;Items returned in the response can be ordered by created date, updated date, or relevance and sorted in ascending or descending order.&lt;/p&gt;&lt;p&gt;If &lt;var&gt;sort_order&lt;/var&gt; is not specified and there is no value in the query parameter, results are sorted by updated date in descending order. However, if &lt;var&gt;sort_order&lt;/var&gt; is not specified and there is a value in query, the default sort changes to relevance in descending order.&lt;/p&gt; | [optional] 
 **page** | **Number**| The page number indicating which page of items to be returned in the result set, specified as a valid positive number. | [optional] [default to 1]
 **count** | **Number**| The number of items to return in the result set, specified as a value between 1 and 50. The default value is 10. | [optional] [default to 10]

### Return type

[**SearchResults**](SearchResults.md)

Each of the items returned can be one of the following artifact types:

* [**Question**](Question.md)
* [**File**](File.md)
* [**Problem**](Problem.md)
* [**Blog**](Blog.md)
* Topic which can be a [**CommunityHighlight**](CommunityHighlight.md) or [**CommunityContest**](CommunityContest.md)
  
The value for the scope parameter determines which artifacts are returned.

### Possible Errors

When the API returns a non 2XX response code, an instance of the [ApiError](ApiError.md) object is returned.
See [API Documentation](https://api.mathworks.com/community) for more details on possible error codes.

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

