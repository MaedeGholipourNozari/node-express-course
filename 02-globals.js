// 02-globals.js
console.log("Current directory:", __dirname);

// Access an environment variable
console.log("MY_VAR:", process.env.MY_VAR || "Environment variable not set");

// Print other global values
console.log("Current filename:", __filename);
console.log("Process ID:", process.pid);
console.log("Node.js version:", process.version);
