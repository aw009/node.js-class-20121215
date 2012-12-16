function fightBadGuys(superpower, callback) {
    console.log("I'll fight the bad guys with my " + superpower);
    var result = true;
    var err = null;
    setTimeout(callback(err, result), 3000);
}

fightBadGuys('hacker skills', function(err, result) {
    if (err) {
        console.log("There was a problem fighting the bad guys. Pick a better superpower next time.");
        return false;
    } else {
        console.log("I fought the bad guys and now they are defeated");
        return true;
    }
});