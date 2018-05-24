var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a dd!');
}
var myEventHandlerGG = function () {
  console.log('I hear a gg!');
}
//Assign the eventhandler to an event:
//eventEmitter.on('dd', myEventHandler);
//eventEmitter.on('gg', myEventHandlerGG);
//Fire the 'scream' event:
eventEmitter.emit('dd', eventEmitter.on('dd', myEventHandler));
eventEmitter.emit('gg', eventEmitter.on('gg', myEventHandlerGG));