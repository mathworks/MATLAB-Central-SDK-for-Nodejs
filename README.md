
# MATLAB Central Node.js SDK

The toolbox provides easy to use functions that simplify the process of making requests to the [MATLAB Central (MathWorks® Community) APIs](https://api.mathworks.com/community/docs). Whether you are using the APIs for data-analysis/reporting or for building custom Node.js apps, the library provides for a smooth integration.

- [MATLAB Central Node.js SDK](#matlab-central-nodejs-sdk)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Quick Usage](#quick-usage)
  - [Tests](#tests)
  - [SDK Reference](#sdk-reference)
    - [Search](#search)
  - [Contribution](#contribution)
  - [License](#license)

## Requirements

Use of the MATLAB Central Node.js SDK requires:

* Node.js 14 or higher

This SDK supports Node.js versions that are either current, or in long-term support status (LTS).  The SDK does not end-of-life (EOL) Node.js versions.  For more information on Node.js versioning, see <https://nodejs.org/en/about/releases/>.

This SDK is for use with Node.js only. It does not support other usages, such as for web browsers or frontend applications.

## Installation

You can quickly install the MATLAB Central Node.js SDK as follows:
```sh
npm install matlabcentral
```

## Quick Usage
To create a Node.js application using the matlabcentral SDK, do the following:

1. Open a new terminal window. Create a new directory for your project and then go to that directory. Alternatively, you could copy the `gettingStarted` directory inside /examples and proceed to Step 6.
```sh
mkdir gettingStarted
cd ./gettingStarted
```

2. Use the npm command to create a project definition file (package.json).
```sh
npm init
```
Answer the questions required. You could also take a look at the package.json inside the /examples/gettingStarted directory for help answering any of the questions.

3. Install the MATLAB Central SDK package.
```sh
npm install matlabcentral
```

4. Make sure the package.json that was created has following line, if not include it

`"type": "module"`

This is required as the SDK only supports ESM imports.

5. In your project directory, create a file named gettingStarted.js with the following content:
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

Save the gettingStarted.js file.

6. Run the script created with the following command

```sh
node gettingStarted.js
```

The above code creates a new instance of the SearchAPI object using the MATLAB Central SDK and calls the search method.

If the request is successful, the code prints 'Search API called successfully.' along with the result items found, on the terminal.


## Tests

First, clone this repo locally and `cd` into the cloned directory.

Next, install dependencies and run tests.

```sh
npm install
npm test
```

## SDK Reference


Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SearchApi* | [**search**](docs/SearchApi.md#search) | **GET** /v1/search | Search MATLAB Central areas for content matching specified query

### Search
* [Search]

The Search collection offers a single method called search which offers a powerful way to programmatically search MATLAB Central.

If you are looking to get data from different MATLAB Central areas like MATLAB Answers, File Exchange, Cody, Community Highlights, Community Contests and Blogs with a single call, this would be the function to use. The function also supports many optional parameters that allow you to further filter the data returned, including limiting the scope to specific MATLAB Central areas.

[search]: docs/SearchApi.md

## Contribution
We are excited to hear any feedback you have for us and welcome contributions in the form of issues.

## License

The license is available in the License file within this repository.

&copy; 2023 The MathWorks, Inc.


