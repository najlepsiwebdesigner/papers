// Constructor
function Paper(db) {
  // always initialize all instance properties
  this.db = db;
  this.name = 'test';
  this.authors = {

  }; // default value
}
// class methods
Paper.prototype.getName = function() {
	return this.name;
};

Paper.prototype.getPapers = function () {
	console.log('Here');
	console.log(this.db);
};

// export the class
module.exports = Paper;