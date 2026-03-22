import fs from "fs";

const directoryCreation = () => {
  fs.mkdir("newdir", (err, res) => {
    if (!err) {
      console.log("New Directory Created");
    }
  });
};

const data =
  "Never Complain, Never Explain, Stay Silent And Just enjoy the Pain";

// Async File Writing - Non Blocking Operation
const asyncFileWrite = () => {
  fs.writeFile("message.txt", data, (err) => {
    if (err) {
      console.log("Error Occurred ", err);
    }
    console.log("Writing File Success");
  });
};

// Sync File Writing - Blocking Operation
const syncFileWrite = () => {
  fs.writeFileSync("data.txt", data, () => {
    console.log("Writing File Success");
  });
};

// Async File Reading
const asyncFileRead = () => {
  fs.readFile("data.txt", "utf-8", (err, result) => {
    if (err) {
      console.log("Something Error Occurred While Reading File");
    } else {
      console.log("File Output", result);
    }
  });
};

// Async Append File
let fsAppendFile = () => {
  fs.appendFile("data.txt", " New Data to Be Appended", (err, res) => {
    if (err) {
      console.log("Something Error Occurred");
    } else {
      console.log("Success");
    }
  });
};

// let fsasync = fs.appendFileSync("data.txt", "One Appended Async");
// console.log(fsasync);
// console.log(fssync);

// fs.access("data.txt", 0, (err, success) => {
//   if (err) {
//     console.log("Error Occurred");
//   } else {
//     console.log("File Permissions Added Success");
//   }
// });

// fs.copyFile("data.txt", "../Module", (err, success) => {
//   if (err) {
//     console.log("Something Error Occurred",err);
//   } else {
//     console.log("Success ");
//   }
// });

// let rnm = fs.renameSync("data.txt", "text.txt");

// console.log(rnm);

// fs.unlink("data", (err) => {
//   if (err) {
//     console.log("Error While Deleting File");
//   } else {
//     console.log("File Deleted Successfully");
//   }
// });

// directoryCreation();
// asyncFileWrite();
// syncFileWrite();
// asyncFileRead();
// fsAppendFile();
