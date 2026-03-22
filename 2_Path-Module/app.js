import path from "path";

const filePath = path.join("folder", "students", "data.txt");

const parseData = path.parse(filePath);

const resolvedPath = path.resolve(filePath);

const extname = path.extname(filePath);

const dirname = path.dirname(filePath);

console.log({ resolvedPath, parseData, extname, dirname, seprator: path.sep });
