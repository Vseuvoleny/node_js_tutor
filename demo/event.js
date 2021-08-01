const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("Some event", (data) => {
  console.log("On: anything", data);
});

// emitter.emit("Some event", { a: 1 });
// emitter.emit("Some event", { a: 12 });
// setTimeout(() => {
//   emitter.emit("Some event", { a: 3 });
// }, 500);

class Dispatcher extends EventEmitter {
  subscribe(event, cb) {
    console.log("[Subscribe...]");
    this.on(event, cb);
  }

  dispatch(eventName, data) {
    console.log("Dispatching...");
    this.emit(eventName, data);
  }
}

const dis = new Dispatcher();
dis.subscribe("aa", (data) => {
  console.log("On: aa", data);
});

dis.dispatch("aa", { a: 5 });
