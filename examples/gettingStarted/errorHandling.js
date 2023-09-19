
import MATLABCentral from 'matlabcentral';

async function executeSearch() {
 try {
    let searchApi = new MATLABCentral.SearchApi();
    
    let opts = {
        "foo": "bar", //this is an unsupported request param
        "query": "plotting",
        "scope": "abc", //this is an unsupported scope value
        "createdBefore": new Date('12-Mar-2023 11:00:00'),
        "createdAfter": new Date('06-Mar-2022 11:00:00'),
        "sortOrder": "created asc",
        "page": 2,
        "count": 15
    }
    //business logic goes here
    let searchResponse = await searchApi.search(opts);
    console.log("Search API called successfully"); 
  } catch (e) {
    // e contains two fields:
    // e.reason: which is an instance of ApiError which is the formatted JSON with low-level details about the error
    // e.error: which is the unformatted error with access to the stack trace, request object, response body, headers and so on
    if (e.reason instanceof MATLABCentral.ApiError) {
      console.log(e.reason);
      console.log(e.error);
      // reason.status has the HTTP status code 
      // reason.error.errorCode has the string representation of the HTTP error code
      // reason.error.details and reason.error.message have low-level details about the error
    }
  }
};

executeSearch();
