import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreation = () => {
  rl.question("Enter your Filename : ", (filename) => {
    rl.question("Enter the Content : ", (content) => {
      fs.writeFile(`${filename}.txt`, content, (err) => {
        if (err) {
          console.error("Error While Writing The File");
        } else {
          console.log("File Created Succesfully and Content Added");
          rl.close();
        }
      });
    });
  });
};

fileCreation();

