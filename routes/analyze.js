
/*
 * GET home page.
 */

var pdftotext = require('pdftotextjs'),
    pdf = new pdftotext('files/1.pdf');

// pdf.add_options(['-f 1', '-l 1']);


exports.index = function(req, res){
  pdf.getText(function(err, data, cmd) {
	  if (err) 
	    console.error(err);
	  
	  else {
	    console.log(data);
	    // additionally you can also access cmd array
	    // it contains params which passed to pdftotext ['filename', '-f', '1', '-l', '1', '-']
	    console.log(cmd.join(' '));
	  }
	  res.render('analyze', { data: data });
  });


};
