
const path = require("path");

// Join parts of a file path
const filePath = path.join("Users", "JohnSmith", "node-express-course", "01-node-tutorial", "answers");

console.log("Joined Path:", filePath);

// Get the absolute path by resolving it from the current working directory
const absolutePath = path.resolve(__dirname, "answers");
console.log("Absolute Path:", absolutePath);

// Get the directory name of a file path
console.log("Directory Name:", path.dirname(filePath));

// Get the base (file name) of a path
console.log("Base Name:", path.basename(filePath));

// Get the file extension of a path
console.log("File Extension:", path.extname("example.txt"));
