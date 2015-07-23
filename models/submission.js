//============================== submission data ==============================//

var subContainer = [];

function Sub(name, vid, title, description) {

    this.name        = name;
    this.vid         = vid;
    this.title       = title;
    this.description = description;
    this.vote        = null;
}

function addSub(name, vid, title, description) {

    var sub = new Sub(name, vid, title, description);

    if (subContainer.length <= 8) {

        subContainer.push(sub);        

    } else {

        alert("The submissions are full!");
    }
}

module.exports = {

    subContainer : subContainer,
    Sub          : sub,
    addSub       : addSub
}









 