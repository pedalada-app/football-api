var BASE_URL = "https://api.football-data.org/v1";

var request = require('request-promise');

function getOptions(apiKey, resource, queryParams) {

	queryParams = queryParams || {};

	return {
		method: 'GET',
		url: BASE_URL + resource,
		headers: {
			'X-Auth-Token': apiKey,
			'X-Response-Control': "minified"
		},
		resolveWithFullResponse: true,
		simple: false,
		qs: queryParams
	};
}

function mergeResponse(response) {

	if (response.statusCode !== 429 && response.statusCode !== 400) {
		throw new Error("Error : " + response.statusCode)
	}

	return {
		data: JSON.parse(response.body),
		metadata: {
			requestCount: response.headers['x-requests-available'],
			requestCountReset: response.headers['x-requestcounter-reset']
		}
	};


}

function makeRequest(apiKey, apiResource, options) {

	return request(getOptions(apiKey, apiResource, options))
		.then(mergeResponse);
}

module.exports.makeRequest = makeRequest;