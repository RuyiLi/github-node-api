const snekfetch = require("snekfetch");
const User = require("./User")
const util = require("./Util")

class ClientUser extends User {
    constructor(){
        super();
        this.privateRepos = null;
        this.privateGists = null;
        this.diskUsage = null;
        this.collaborators = null;
        this.tfa = null;
        this.plan = null;
        this.client = null;
        /***
        Some other stuff: Maybe you (me) could integrate these in some way later?
        "followers_url": "https://api.github.com/users/RuyiLi/followers",
        "following_url": "https://api.github.com/users/RuyiLi/following{/other_user}",
        "gists_url": "https://api.github.com/users/RuyiLi/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/RuyiLi/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/RuyiLi/subscriptions",
        "organizations_url": "https://api.github.com/users/RuyiLi/orgs",
        "repos_url": "https://api.github.com/users/RuyiLi/repos",
        "events_url": "https://api.github.com/users/RuyiLi/events{/privacy}",
        "received_events_url": "https://api.github.com/users/RuyiLi/received_events",
        ***/
    }

    async update(){
        this.addToken(this.client);
    }

    async addToken(client){
        let url = util.get("user", client.token);
        try{
            let res = (await snekfetch.get(url)).body;
            this.setValues(res);
            this.privateRepos = res.total_private_repos;
            this.privateGists = res.private_gists;
            this.diskUsage = res.disk_usage;
            this.collaborators = res.collaborators;
            this.tfa = res.two_factor_authentication;
            this.plan = res.plan;
            this.client = client;
        }catch(err){
            throw new TypeError(err);
        }
    }

    async setName(name){
        if(typeof name != "string"){
            throw new TypeError("\'name\' must be of type string!");
        }
        let url = util.get("user", this.client.token);
        try{
            let res = (await snekfetch.patch(url).send({
                name: name
            })).body;
            this.update();
        }catch(err){
            throw new TypeError(err);
        }
    }

    async setEmail(email){
        if(typeof email != "string"){
            throw new TypeError("\'email\' must be of type string!");
        }
        let url = util.get("user", this.client.token);
        try{
            let res = (await snekfetch.patch(url).send({
                email: email
            })).body;
            this.update();
        }catch(err){
            throw new TypeError(err);
        }
    }

    async setWebsite(website){
        if(typeof website != "string"){
            throw new TypeError("\'website\' must be of type string!");
        }
        let url = util.get("user", this.client.token);
        try{
            let res = (await snekfetch.patch(url).send({
                blog: website
            })).body;
            this.update();
        }catch(err){
            throw new TypeError(err);
        }
    }

    async setCompany(company){
        if(typeof company != "string"){
            throw new TypeError("\'company\' must be of type string!");
        }
        let url = util.get("user", this.client.token);
        try{
            let res = (await snekfetch.patch(url).send({
                company: company
            })).body;
            this.update();
        }catch(err){
            throw new TypeError(err);
        }
    }

    async setLocation(location){
        if(typeof location != "string"){
            throw new TypeError("\'location\' must be of type string!");
        }
        let url = util.get("user", this.client.token);
        try{
            let res = (await snekfetch.patch(url).send({
                location: location
            })).body;
            this.update();
        }catch(err){
            throw new TypeError(err);
        }
    }

    async setBio(bio){
        if(typeof bio != "string"){
            throw new TypeError("\'bio\' must be of type string!");
        }
        let url = util.get("user", this.client.token);
        try{
            let res = (await snekfetch.patch(url).send({
                bio: bio
            })).body;
            this.update();
        }catch(err){
            throw new TypeError(err);
        }
    }

    async setHireable(hireable){
        if(typeof hireable != "boolean"){
            throw new TypeError("\'hireable\' must be of type boolean!");
        }
        let url = util.get("user", this.client.token);
        try{
            let res = (await snekfetch.patch(url).send({
                hireable: hireable
            })).body;
            this.update();
        }catch(err){
            throw new TypeError(err);
        }
    }
}

module.exports = ClientUser;
