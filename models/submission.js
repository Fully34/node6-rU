var _ = require('underscore')
//============================== submission data ==============================//

var subContainer = 
[ { name: 'chris',
    vid: 'https://www.youtube.com/embed/pmoYLtObCtY',
    title: 'Shadow of the Colossus OST',
    slug: 'shadow-ost',
    description: 'shadw soundtrack',
    vote: 10,
    contest : true },
  { name: 'Chris',
    vid: 'https://www.youtube.com/embed/MkzeOmkOUHM',
    title: 'Ori and the Blind Forest OST',
    slug: 'ori-and-the-blind-forest-ost',
    description: 'This is the soundtrack for Ori and the Blind Forest',
    vote: 3,
    contest : true },
  { name: 'Chris',
    vid: 'https://www.youtube.com/embed/TqOVpiXfq0o',
    title: 'Braid OST',
    slug: 'braid-ost',
    description: 'Soundtrack for the game, Braid',
    vote: 4,
    contest : true },
  { name: 'Chris',
    vid: 'https://www.youtube.com/embed/KnJiC8FeI2I',
    title: 'Wind Waker OST',
    slug: 'wind-waker-ost',
    description: 'Great game soundtrack',
    vote: 1,
    contest : true },
  { name: 'Chris',
    vid: 'https://www.youtube.com/embed/tBq_SueS8oo',
    title: 'Metroid Prime OST',
    slug: 'metroid-prime-ost',
    description: 'This is an awesome soundtrack from Metroid Prime',
    vote: 2,
    contest : true },
  { name: 'Chris',
    vid: 'https://www.youtube.com/embed/bMtlLpYcCAQ',
    title: 'Final Fantasy VII OST',
    slug: 'final-fantasy-vii-ost',
    description: 'This is one of the greatest soundtracks of all time!',
    vote: 5,
    contest : true },
  { name: 'Chris',
    vid: 'https://www.youtube.com/embed/mEoN_Xe-B-s',
    title: 'Chrono Trigger OST',
    slug: 'chrono-trigger-ost',
    description: 'My favorite game of all time!',
    vote: 20,
    contest : true },
  { name: 'Chris',
    vid: 'https://www.youtube.com/embed/tBWl9p0fH28',
    title: 'Mega Man X OST',
    slug: 'mega-man-x-ost',
    description: 'AHHH! The memories!',
    vote: 3,
    contest : true } ];

var contestContainer = [ { name: 'chris',
    vid: 'https://www.youtube.com/embed/pmoYLtObCtY',
    title: 'Shadow of the Colossus OST',
    slug: 'shadow-ost',
    description: 'shadw soundtrack',
    vote: 10,
    contest : true },
  { name: 'Chris',
    vid: 'https://www.youtube.com/embed/MkzeOmkOUHM',
    title: 'Ori and the Blind Forest OST',
    slug: 'ori-and-the-blind-forest-ost',
    description: 'This is the soundtrack for Ori and the Blind Forest',
    vote: 3,
    contest : true },
  { name: 'Chris',
    vid: 'https://www.youtube.com/embed/TqOVpiXfq0o',
    title: 'Braid OST',
    slug: 'braid-ost',
    description: 'Soundtrack for the game, Braid',
    vote: 4,
    contest : true },
  { name: 'Chris',
    vid: 'https://www.youtube.com/embed/KnJiC8FeI2I',
    title: 'Wind Waker OST',
    slug: 'wind-waker-ost',
    description: 'Great game soundtrack',
    vote: 1,
    contest : true },
  { name: 'Chris',
    vid: 'https://www.youtube.com/embed/tBq_SueS8oo',
    title: 'Metroid Prime OST',
    slug: 'metroid-prime-ost',
    description: 'This is an awesome soundtrack from Metroid Prime',
    vote: 2,
    contest : true },
  { name: 'Chris',
    vid: 'https://www.youtube.com/embed/bMtlLpYcCAQ',
    title: 'Final Fantasy VII OST',
    slug: 'final-fantasy-vii-ost',
    description: 'This is one of the greatest soundtracks of all time!',
    vote: 5,
    contest : true },
  { name: 'Chris',
    vid: 'https://www.youtube.com/embed/mEoN_Xe-B-s',
    title: 'Chrono Trigger OST',
    slug: 'chrono-trigger-ost',
    description: 'My favorite game of all time!',
    vote: 20,
    contest : true } ];


function Sub(name, vid, title, description) {

    this.name        = name;
    this.vid         = vid;
    this.title       = title;
    this.slug        = title.trim().toLowerCase().replace(/ /g, '-');
    this.description = description;
    this.vote        = 0;
    this.contest     = null;
    contest : null
}

function addSub(name, vid, title, description) {

    var sub = new Sub(name, vid, title, description);

    subContainer.push(sub);
    contestContainer.push(sub)
}

module.exports = {
    subContainer     : subContainer,
    contestContainer : contestContainer,
    Sub              : Sub,
    addSub           : addSub
}









 