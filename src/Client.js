const ClientUser = require("./ClientUser")
const User = require("./User")
const snekfetch = require("snekfetch");
const util = require("./Util")
const EventEmitter = require("events").EventEmitter;

class Client extends EventEmitter{
    constructor(){
        super();
        this.token = null;
        this.user = new ClientUser();
    }

    async login(token){
        this.token = token;
        await this.user.addToken(this)
        this.emit("ready", this.user);
    }

    async getUser(username){
        const url = util.get(`users/${username}`, this.token);

        try{
            const res = (await snekfetch.get(url)).body;
            const user = new User();
            user.setValues(res);
            return user;
        }catch(err){
            return new TypeError(err);
        }
    }
}

module.exports = Client;
