const util = require("./util.js")

class UserProfile {
    constructor(data){
        this.token = data.token;
    }

    get login(){
        util.get("user", this.token);
        return util.login;
    }
}

module.exports = User;
