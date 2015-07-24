
//============================== data requirements ==============================//
        
var contest = require('../models/contest.js');
var submission = require('../models/submission.js');
var _ = require('underscore')
//============================== controller ==============================//
        
var indexController = {
	index: function(req, res) {
		res.render('index');
	}, 

    submit: function(req, res) {

        // check to see if we have 8 or less items in the submission array
        if (submission.subContainer.length < 8) {

            var name        = req.body.name;
            var vid         = req.body.vid;
            var title       = req.body.title;
            var description = req.body.description;

            // add the sub based on the object created
            submission.addSub(name, vid, title, description);

            // console.log(submission.subContainer);
            //redirect to the homepage
            res.redirect('/')

        } else {

            res.redirect('/subsFull')
        }
    }, 

    subsFull : function(req, res) {

        res.render('subsFull')
    },

    viewSubs : function(req, res) {

        var subContainer = submission.subContainer;
        var contestContainer = submission.contestContainer;

        //need to compare the subContainer with the contestContainer
            // if the object is missing from the contestContainer, that means it is out of the contest and should be red
        for (var i = 0; i < subContainer.length; i++) {

            var thisSub = subContainer[i];
            var subSlug = subContainer[i].slug;

            // if _.find() returns undefined, that means the element is not in the contest
            var inContest =  _.find(contestContainer, function(el) {

                return el.slug === subSlug;
            });

            if (inContest) {

                thisSub.contest = true;

            } else {

                thisSub.contest = false;
            }
        };

        res.render('submissions', {subContainer : subContainer, contestContainer : contestContainer});
    },

    vote     : function(req, res) {

        //grab the slug
        var theSlug = req.params.slug
        // find the video that corresponds to that slug
        var theVideo = _.find(submission.subContainer, function(el){

            return el.slug === theSlug;
        });

        theVideo.vote ++

        res.redirect('/submissions');
    },

    viewWinner: function(req, res) {


    }
};

module.exports = indexController;