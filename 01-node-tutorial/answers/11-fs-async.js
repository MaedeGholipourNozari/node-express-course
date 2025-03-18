const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "temporary");
const filePath = path.join(dirPath, "fileB.txt");

// Ensure the directory exists
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
}

console.log("at start");

// Writing the first line (overwrites the file if it exists)
fs.writeFile(filePath, "This is line 1\n", (err) => {
    console.log("at point 1");

    if (err) {
        console.error("Error writing line 1:", err);
        return;
    }

    // Writing the second line (appending)
    fs.writeFile(filePath, "This is line 2\n", { flag: "a" }, (err) => {
        console.log("at point 2");

        if (err) {
            console.error("Error writing line 2:", err);
            return;
        }

        // Writing the third line (appending)
        fs.writeFile(filePath, "This is line 3\n", { flag: "a" }, (err) => {
            console.log("at point 3");

            if (err) {
                console.error("Error writing line 3:", err);
                return;
            }

            console.log("All lines written successfully!");
        });
    });
});

console.log("at end");
