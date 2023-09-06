
import MATLABCentral from 'matlabcentral';
import { ApiError } from '../../src/model/ApiError.js';

async function executeSearch() {
    let searchApi = new MATLABCentral.SearchApi();
    let opts = { 
        "scope": "matlab-answers",
        "query": "plot",
        "createdBefore": new Date('12-Mar-2023 11:00:00'),
        "createdAfter": new Date('06-Mar-2022 11:00:00'),
        "sortOrder": "created asc"
    }

    for(let i = 0; i < 50; i++) {
        try {
            let searchResponse = await searchApi.search(opts);
            if (searchResponse) {
                console.log("Request Success");
            }
        } catch (e) {
            // e contains two fields:
            // e.reason: which is an instance of ApiError which is the formatted JSON with low-level details about the error
            // e.error: which is the unformatted error with access to the stack trace, request object, response body, headers and so on
            if (e.reason instanceof ApiError) {
                if (e.reason.status == "429") {
                    // 429 errors happen when too many requests have been sent in a short period of time
                    //the code below implements a simple pause based on response headers
                    // consider a more robust backoff strategy for your implementation
                    
                    //uncomment to see low-level formatted details about error
                    // console.log(e.reason.error.details);
                    
                    //We see in the error details to check Retry-After header, let's access the headers from the unformatted error
                    let limitExceededType = (e.error.response.header["x-ratelimit-type"])
                    //console.log(limitExceededType)
                    let retryAfter = (e.error.response.header["retry-after"])
                    //console.log(retryAfter)
                    
                    let currentTime = Date.now()
                    let msDiff =  retryAfter - currentTime;
                    let secondsToWait = ((msDiff % 60000) / 1000).toFixed(0);

                    console.log("Too many requests: Pausing for " + secondsToWait + " seconds");
                    await new Promise(resolve => setTimeout(resolve, msDiff));
                }
            }
        }
    }

};

executeSearch();
