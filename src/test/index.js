var chai = require('chai');

var should = chai.should();

var expect = chai.expect;

var Client = require('../main/index')('');

describe("Client", function () {

	describe("Team-Client-Api", function () {

		it("Test team get info", function (done) {

			Client.getTeamById(57)
				  .getInfo()
				  .then(function (res) {

					  expect(res.data.name).be.equal("Arsenal FC");

					  done();

				  })
				  .catch(function (err) {

					  console.error(err);

					  expect(false).be.equal(true);

				  });

		});

		it("Test team get players", function (done) {

			Client.getTeamById(57)
				  .getPlayers()
				  .then(function (res) {

					  expect(res.data.players).be.a("array");

					  done();

				  })
				  .catch(function (err) {

					  console.error(err);

					  expect(false).be.equal(true);

				  });

		});

		it("Test team get fixtures ", function (done) {

			Client.getTeamById(57)
				  .getFixtures()
				  .then(function (res) {

					  expect(res.data.fixtures).be.a("array");

					  done();

				  })
				  .catch(function (err) {

					  console.error(err);

					  expect(false).be.equal(true);

				  });

		});

	});

	describe("Fixtures-Api", function () {


		it("Test fixtures", function (done) {

			Client.getFixtures()
				  .then(function (res) {

					  expect(res.data.fixtures).be.a("Array");

					  done();

				  })
				  .catch(function (err) {

					  console.error(err);

					  expect(false).be.equal(true);

				  });

		});

		it("Test fixtures by id", function (done) {

			Client.getFixturesById(153588)
				  .then(function (res) {

					  expect(res.data.head2head).be.a("Object");
					  expect(res.data.fixture).be.a("Object");

					  done();

				  })
				  .catch(function (err) {

					  console.error(err);

					  expect(false).be.equal(true);

				  });

		});


	});

	describe("Competition-Client-Api", function () {

		it("Test team get info", function (done) {

			Client.getFixtures(57)
				  .getInfo()
				  .then(function (res) {

					  expect(res.data.name).be.equal("Arsenal FC");

					  done();

				  })
				  .catch(function (err) {

					  console.error(err);

				  })

		});

		it("Test team get players", function (done) {

			Client.getTeamById(57)
				  .getPlayers()
				  .then(function (res) {

					  expect(res.data.players).be.a("array");

					  done();

				  });

		});

		it("Test team get fixtures ", function (done) {

			Client.getTeamById(57)
				  .getFixtures()
				  .then(function (res) {

					  expect(res.data.fixtures).be.a("array");

					  done();

				  });

		});

	});

});
