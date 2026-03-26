import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("greet", () => {
  console.log("Akhilesh Aher");
});

emitter.emit("greet");

emitter.on("greet", (username, prof) => {
  console.log(`Hello I'm ${username} and working as ${prof}`);
});

emitter.emit("greet", "Akhilesh", "Full Stack Developer");
