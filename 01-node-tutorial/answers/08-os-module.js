const os = require("os");


// Get the current user info
const user = os.userInfo();
console.log("User Info:", user);

// Get system uptime in seconds
console.log(`System Uptime: ${os.uptime()} seconds`);

// Get OS name and version
console.log(`Operating System: ${os.type()} ${os.release()}`);

// Get total and free memory
console.log(`Total Memory: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log(`Free Memory: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`);

// Get CPU details
console.log("CPU Info:", os.cpus());

// Get home directory
console.log("Home Directory:", os.homedir());

// Get system architecture
console.log("System Architecture:", os.arch());
