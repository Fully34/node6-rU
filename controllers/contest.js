
//============================== data requirements ==============================//
        
var contest = require('../models/contest.js');
var submission = require('../models/submission.js');
var _ = require('underscore')

//============================== controller ==============================//

// helper function for contest method
function randomVids(arr) {

    return _.sample(arr, 2);
}

//placeholder for the current contest array from the fight page
var currentContestArr = [];

var contestController = {

    //- pick two videos only if the array has 8 elements in it!
    contest : function(req, res) {
        var subContainer = submission.subContainer;
        var contestContainer = submission.contestContainer;

        if (subContainer.length >= 8) {

            var contestArr = randomVids(contestContainer);

            //set currentContestArr global var to contestArr contents
            currentContestArr = contestArr;

            // console.log(currentContestArr + 33);

            res.render('fight', {contestArr : contestArr});

        } else {

            res.redirect('/need-more-contestants')
        }
    },

    notEnough : function(req, res) {

        res.render('need-more-contestants');
    }, 

    winner : function(req, res) {

        // passing the contest array from the contest method to here
        var contestArr = currentContestArr;

        console.log(submission.contestContainer)

        var firstSlug = contestArr[0].slug;
        console.log(firstSlug)
        var secondSlug = contestArr[1].slug;
        console.log(secondSlug)

        // eliminates second object > therefore looking at secondSlug in here
        if(contestArr[0].vote > contestArr[1].vote) {

            contestArr[0].contest = true;
            contestArr[1].contest = false;

            for (var i = 0; i < submission.contestContainer.length; i ++) {

                var currentObj = submission.contestContainer[i];
                var currentSlug = currentObj.slug;

                if (currentSlug = secondSlug) {

                    submission.contestContainer.splice(i, 1);
                }
            }

        // eliminates first object > therefore looking at firstSlug in here
        }

        if (contestArr[1].vote > contestArr[0].vote) {

            contestArr[0].contest = false;
            contestArr[1].contest = true;

            // reverse so the winner is on top
            contestArr.reverse();

            for (var i = 0; i < submission.contestContainer.length; i ++) {

                var currentObj = submission.contestContainer[i];
                var currentSlug = currentObj.slug;

                if (currentSlug = firstSlug) {

                    submission.contestContainer.splice(i, 1);
                }
            }
        }
        // console.log(submission.contestContainer)

        res.render('fight-winner', {contestArr : contestArr});
    }


}

module.exports = contestController
