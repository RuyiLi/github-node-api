module.exports.get = function(str, token){
    let base = `https://api.github.com/${str}`;
    if(base.includes("?"))
        return `${base}&access_token=${token}`
    else
        return `${base}?access_token=${token}`
}
