 var Paper = require('../classes/paper.js');

exports.index = function(req, res){
  var pdftotext = require('pdftotextjs');
  var pdf = new pdftotext('./files/1.pdf');

  var paper = new Paper(req.db);


  paper.getPapers('a');

  res.render('analyze', { data:  'Look at he console'});
  // pdf.getText(function(err, data, cmd) {
	 //  if (err) {
		// 	console.log(err);	    
	 //  }
	 //  res.render('analyze', { data:  data});
  // });


};
