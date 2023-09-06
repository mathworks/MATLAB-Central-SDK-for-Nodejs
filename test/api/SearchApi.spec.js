import MathworksCommunity from '../../src/index.js'
import {expect} from 'expect';
import { ApiError } from '../../src/model/ApiError.js';
import { ApiErrorDetail } from '../../src/model/ApiErrorDetail.js';

describe.only('SearchApi', function() {
  describe('search', function() { 
    it('should call search successfully', function(done) {
      let instance = new MathworksCommunity.SearchApi();
      let response = instance.search();
      response
      .then(result => {
        expect(result).toMatchObject(new MathworksCommunity.SearchResults());
        expect(result.items).toBeTruthy();
        expect(result.items).toBeInstanceOf(Array)
        expect(result.hasMore).toBeTruthy();
        expect(typeof result.hasMore).toEqual("boolean");
        expect(result.totalFound).toBeTruthy();
        expect(typeof result.totalFound).toEqual("number");
       })
      .then(done).catch(done);
    });

    it('should call return 400 as expected', async() => {
      let instance = new MathworksCommunity.SearchApi();
      let opts = {
        "scope": "abc"
      };
      let apiError = new ApiError();
      apiError.status = "400";
      apiError.error = new ApiErrorDetail();
      apiError.error.errorCode = "Bad Request";
      apiError.error.message = "Invalid scope value.";
      apiError.error.details = "Provide a scope value supported by this resource.";

      let expectedError = {
         "error": new Error("Bad Request"),
         "reason": apiError
      }
      await expect(instance.search(opts)).rejects.toEqual(expectedError);
    });    
  }) ;
});
