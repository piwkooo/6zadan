const EventEmitter = require("events")

const myEmitter = new EventEmitter()

// function observerFunction(){
//     console.log("zdazenie myevent zostalo wyemitowne")
// }

const greeting =  name => console.log(`witaj, ${name}`)

myEmitter.on("greet", greeting)
myEmitter.emit("greet", "janke")

myEmitter.removeListener(`greet`, greeting)
myEmitter.emit(`greet`, "janke")



// myEmitter.emit("my_event")
