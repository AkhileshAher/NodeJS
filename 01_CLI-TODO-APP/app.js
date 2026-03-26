import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todos = [];

const handleInput = (option) => {
  if (option === "1") {
    rl.question("Enter the Task : ", (task) => {
      todos.push(task);
      console.log("Task Added : ", task);
      showMenu();
    });
  } else if (option === "2") {
    todos.forEach((task, index) => {
      console.log(`${index + 1} : ${task}`);
    });
    showMenu();
  } else if (option === "3") {
    todos = [];
    showMenu();
  } else if (option === "4") {
    console.log("GoodBye");
    rl.close();
  } else {
    console.log("Invalid Input !! Please Try Again");
    showMenu();
  }
};

const showMenu = () => {
  console.log("\n1. Add a Task :");
  console.log("2. View Task");
  console.log("3. RESET");
  console.log("4. Exit");
  rl.question("Choose an Option : ", handleInput);
};

showMenu();
