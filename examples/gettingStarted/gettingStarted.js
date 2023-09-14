
import MATLABCentral from 'matlabcentral';

async function executeSearch() {
  try {
    let searchApi = new MATLABCentral.SearchApi();
    
    let opts = {
        "query": "plotting",
        "scope": "file-exchange,matlab-answers",
        "tags": "legend",
        "createdBefore": new Date('12-Mar-2023 11:00:00'),
        "createdAfter": new Date('06-Mar-2022 11:00:00'),
        "sortOrder": "created asc",
        "page": 3,
        "count": 15
    }
    let searchResponse = await searchApi.search(opts);

    // business logic goes here
    console.log("Search API called successfully");
    console.log("Found " + searchResponse.totalFound + " Results");
    console.log(searchResponse);
    searchResponse.items.map(function(item){
      console.log(item.constructor.name);
    });  
  } catch (e) {
    //error-handling code goes here, see errorHandling.js and tooManyRequestsError.js

    // e contains two fields:
    // e.reason: which is an instance of ApiError which is the formatted JSON with low-level details about the error
    // e.error: which is the unformatted error with access to the stack trace, request object, response body, headers and so on
    console.log(e.reason);
    console.log(e.error);
  }
};

executeSearch();
