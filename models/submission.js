//============================== submission data ==============================//

var subContainer = [];

function Sub(name, vid, title, description) {

    this.name        = name;
    this.vid         = vid;
    this.title       = title;
    this.slug        = title.trim().toLowerCase().replace(/ /g, '-');
    this.description = description;
    this.vote        = 0;
}

function addSub(name, vid, title, description) {

    var sub = new Sub(name, vid, title, description);

    subContainer.push(sub);        
}

module.exports = {

    subContainer : subContainer,
    Sub          : Sub,
    addSub       : addSub
}









 