exports.analyze = function(req, res){
  var pdftotext = require('pdftotextjs');
  var pdf = new pdftotext('./files/2.pdf');

  // var papers = Papers.getAll();

  // res.render('analyze', { data:  'Look at he console', papers: papers});
  pdf.getText(function(err, data, cmd) {
	if (err) {
		console.log(err);	    
	}

	  res.render('analyze', { data:  data});
  });
};

exports.import = function(req, res){
	var pdftotext = require('pdftotextjs');
	var pdf = new pdftotext('./files/2.pdf');

	pdf.getText(function(err, data, cmd) {
		if (err) {
			console.log(err);	    
		}

		var monk = require('monk');
		var db = monk('localhost:27017/papers');

		db.get('papers').insert({
			filename: './files/2.pdf',
			text: data
			}, function(err, doc){
				if (err) throw err;
				res.render('analyze', { data:  'Inserted!'});
		});

	  	
	});	
};



exports.list = function(req, res){
	// var mongo = require('mongodb');
	var monk = require('monk');
	var db = monk('localhost:27017/papers');

	db.get('papers').find({}, function(err, docs){
		// res.json(docs);
		res.render('papers-list', { papers:  docs, data:'test'})
	});
};


