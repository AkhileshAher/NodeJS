import EventEmitter from "events";

const emitter = new EventEmitter();

let loginCount = 0;
let logoutCount = 0;
let purchase = 0;
let update = 0;

emitter.on("login", () => {
  if (loginCount) {
    loginCount = 1;
  } else {
    loginCount += 1;
  }
});

emitter.on("logout", () => {
  if (logoutCount) {
    logoutCount = 1;
  } else {
    logoutCount += 1;
  }
});

emitter.on("purchase", () => {
  if (purchase) {
    purchase = 1;
  } else {
    purchase += 1;
  }
});

emitter.on("profUpdate", () => {
  if (update) {
    update = 1;
  } else {
    update += 1;
  }
});

emitter.emit("login");
emitter.emit("logout");
emitter.emit("purchase");
emitter.emit("profUpdate");
emitter.emit("login");
emitter.emit("logout");
emitter.emit("purchase");
emitter.emit("profUpdate");
emitter.emit("login");
emitter.emit("logout");
emitter.emit("purchase");
emitter.emit("profUpdate");
emitter.emit("login");
emitter.emit("logout");
emitter.emit("purchase");
emitter.emit("profUpdate");
emitter.emit("login");
emitter.emit("logout");
emitter.emit("purchase");
emitter.emit("profUpdate");

console.log({ loginCount, logoutCount, purchase, update });
