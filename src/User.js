const snekfetch = require("snekfetch");
const Event = require("./Event")
const util = require("./Util")
const EventEmitter = require("events").EventEmitter;

class User extends EventEmitter{
    constructor(){
        super();
        this.username = null;
        this.id = null;
        this.avatarURL = null;
        this.gravatarId = null;
        this.profile = null;
        this.type = null;
        this.siteAdmin = null;
        this.name = null;
        this.company = null;
        this.website = null;
        this.location = null;
        this.email = null;
        this.hireable = null;
        this.bio = null;
        this.publicRepos = null;
        this.publicGists = null;
        this.followers = null;
        this.following = null;
        this.createdDate = null;
        this.updatedDate = null;

    }

    setValues(res){
        this.username = res.login;
        this.id = res.id;
        this.avatarURL = res.avatar_url;
        this.gravatarId = res.gravatar_id;
        this.profile = res.html_url;
        this.accountType = res.type;
        this.siteAdmin = res.site_admin;
        this.name = res.name;
        this.company = res.company;
        this.website = res.blog;
        this.location = res.location;
        this.email = res.email;
        this.hireable = res.hireable;
        this.bio = res.bio;
        this.publicRepos = res.public_repos;
        this.publicGists = res.public_gists;
        this.followers = res.followers;
        this.following = res.following;
        this.createdDate = res.created_at;
        this.updatedDate = res.updated_at;
    }



    async fetchEvents(token, page = 1){
        //Limit: 30 events per page
        const url = util.get(`users/${this.username}/events?page=${page}`, token);

        try{
            const res = (await snekfetch.get(url)).body;
            let events = [];
            for(let r in res){
                events.push(new Event(res[r]))
            }
            return Promise.resolve(events);
        }catch(err){
            return new TypeError(err);
        }
    }
}

module.exports = User;
