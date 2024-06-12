import { EventEmitter } from 'events'

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello World ' + name);
}
function goodbyeHandler(name) {
    console.log('Goodbye World ' + name);
}

// Register event listeners
myEmitter.on('greet', greetHandler)
myEmitter.on('goodbye', goodbyeHandler)

// Emit events
myEmitter.emit('greet', 'Melih')
myEmitter.emit('goodbye', 'Melih')

// Error handling
myEmitter.on('error', (err) => {
    console.log('an error occured', err)});

// Simulate error
myEmitter.emit('error', new Error('something went wrong'))