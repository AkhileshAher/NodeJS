import fs from "fs/promises";
import path from "path";

const __dirname = path.resolve();

const readingDirectory = () => {
  fs.readdir(__dirname, { encoding: "utf-8" })
    .then((result) => {
      console.log("Result is : ", result);
    })
    .catch((err) => {
      console.log("Something Error Occurred", err);
    });
};

const readFile = async () => {
  const res = await fs.readFile("text.txt", { encoding: "utf-8" });
  console.log(res);
};

readingDirectory();
readFile();
