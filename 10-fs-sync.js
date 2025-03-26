
const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "temporary");
const filePath = path.join(dirPath, "fileA.txt");

// Ensure the temporary directory exists
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
}

fs.writeFileSync(filePath, "This is the first line.\n");
fs.writeFileSync(filePath, "This is the second line.\n", { flag: "a" });
fs.writeFileSync(filePath, "This is the third line.\n", { flag: "a" });

const fileContent = fs.readFileSync(filePath, "utf8");

console.log("File Contents:\n", fileContent);
