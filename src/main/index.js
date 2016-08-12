"use strict";

var makeRequest = require('./utils');

class FootballApiClient {

	constructor(apiKey) {

		this.apiKey = apiKey;

	}

	getCompetitions(season) {

		let queryParams = season ? {season: season} : undefined;
		let apiResource = "/competitions";

		return makeRequest(this.apiKey, apiResource, queryParams);

	}

	getCompetitionById(compId) {

		return new Competition(this.apiKey, compId);

	}

	getFixures(options) {

		let apiResource = "/fixtures";

		return makeRequest(this.apiKey, apiResource);
	}

	getFixturesById(fixtureId, head2head) {

		let apiResource = "/fixtures/" + fixtureId;
		let queryParams = head2head ? {head2head: head2head} : undefined;

		return makeRequest(this.apiKey, apiResource, queryParams);

	}


	getTeam(id) {

		return new TeamClient(this.apiKey, id);

	}

}

module.exports = function (apiKey) {
	return new FootballApiClient(apiKey);
};