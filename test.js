const Octocat = require("./src/Client");
const client = new Octocat();

client.on("ready", user => {
    const token = client.token;
    /**
    user.setName("archaicnode").then(() => console.error(user.username))
    user.setName(123123).then(() => console.error(user.username))
    user.setEmail("lusiddev@gmail.com").then(() => console.error(user.email))
    user.setWebsite("https://pixgunners.herokuapp.com").then(() => console.error(user.website))
    user.setCompany("lusid").then(() => console.error(user.company))
    user.setLocation("United States of Canada").then(() => console.error(user.location))
    user.setBio("this is a test").then(() => console.error(user.bio))
    user.setHireable(true).then(() => console.error(user.hireable))
    **/
    client.getUser("RuyiLi").then(u => {
        u.fetchEvents(token).then(wew => {
            console.log(wew[0].id)
        });
    });
});

client.login("github oauth token");
//meme http://i.imgur.com/gjRp51B.gif
setTimeout(function(){}, 1000000)
