// Constructor
function PaperFactory(db) {
  // always initialize all instance properties
  this.db = db;
}
// class methods

PaperFactory.prototype.getAll = function () {

	// var mongo = require('mongodb');
	var monk = require('monk');
	var db = monk('localhost:27017/papers');

	db.get('papers').find({}, function (err, docs){
		console.log(docs)

	});

	// console.log(papers);

};

// export the class
module.exports = PaperFactory;