const EventEmitter = require("events");  
const emitter = new EventEmitter();  

// Event handler for 'greet'
emitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
    emitter.emit("response", `Nice to meet you, ${name}!`);
});

// Event handler for 'response'
emitter.on("response", (message) => {
    console.log("Response received:", message);
});

// Event handler for 'timer'
emitter.on("timer", (msg) => console.log(msg));  

// Emitting events
emitter.emit("greet", "Alice");
setTimeout(() => {
    emitter.emit("greet", "Bob");
}, 1000);

setInterval(() => {  
    emitter.emit("timer", "Timer event triggered");  
}, 2000);
