const { writeFile, readFile } = require("fs").promises;  


async function writer() {
    try {
        await writeFile("temp.txt", "First line\n");
        await writeFile("temp.txt", "Second line\n", { flag: "a" }); // Append mode
        await writeFile("temp.txt", "Third line\n", { flag: "a" }); // Append mode
        
        console.log("File written successfully");
    } catch (error) {
        console.error("Error writing file:", error);
    }
}


async function reader() {
    try {
        const data = await readFile("temp.txt", "utf8");
        console.log("File contents:\n", data);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

async function readWrite() {
    await writer();
    await reader();
}

readWrite();
