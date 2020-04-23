const DevilList = require('./DevilList').DevilList;

class Devil {
    constructor(name) {
        this.name = name;
        DevilList.addDevil(this.name);
        console.log(`[ Added ${this.name} to Satan's list >:) ]`)
    }
}

module.exports.Devil = Devil;