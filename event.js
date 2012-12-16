var events = require('events');

var actionHero = new events.EventEmitter();

actionHero.addListener('killBadGuys', function (){
    console.log("I killed all the bad guys!");
})

actionHero.emit('killBadGuys');