const events = require('events');//used to load events

const utils = require('util');//used to inherit events to the constructor variables

var Person =function(name){
    this.name=name;
}
utils.inherits(Person, events.EventEmitter);

var srikar = new Person('srikar');
var pavani = new Person('pavani');
var ketan = new Person('ketan');
var people =[srikar,pavani,ketan];
people.forEach(function(person) {
    person.on('speak',(msg)=>{
    console.log(person.name + " said: "+msg);
});
    person.on('replied',(msg)=>{
    console.log(person.name + " said: "+msg);
});
});

srikar.emit('speak',"hi folks");
pavani.emit('replied',"hi ALL");