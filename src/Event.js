const snekfetch = require("snekfetch");
const util = require("./Util")

class Event{
    constructor(res){
        this.id = res.id;
        this.type = res.type;
        this.actor = res.actor;
        this.repository = res.repo;
        this.payload = res.payload;
        this.public = res.public;
        this.timestamp = res.created_at;
    }
}

module.exports = Event;
