const { writeFile, readFile } = require("fs").promises;

writeFile("temp.txt", "First line\n")
    .then(() => writeFile("temp.txt", "Second line\n", { flag: "a" })) // Append mode
    .then(() => writeFile("temp.txt", "Third line\n", { flag: "a" })) // Append mode
    .then(() => {
        console.log("File written successfully");
        return readFile("temp.txt", "utf8");
    })
    .then((data) => console.log("File contents:\n", data))
    .catch((error) => console.error("Error:", error));