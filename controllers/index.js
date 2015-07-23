
//============================== data requirements ==============================//
        
var contest = require('../models/contest.js');
var submission = require('../models/submission.js');

//============================== controller ==============================//
        
var indexController = {
	index: function(req, res) {
		res.render('index');
	}, 

    submit: function(req, res) {


    }, 

    viewSubs : function(req, res) {


    },

    viewWinner: function(req, res) {


    }
};

module.exports = indexController;