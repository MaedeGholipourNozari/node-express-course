const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let message = "Guess a number between 1 and 100!";

// Function to extract form data
const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// HTML form with message display
const form = () => {
  return `
  <body>
  <h2>${message}</h2>
  <form method="POST">
    <input type="number" name="guess" min="1" max="100" required>
    <button type="submit">Submit Guess</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    getBody(req, (body) => {
      let guess = parseInt(body["guess"], 10);
      
      if (isNaN(guess)) {
        message = "Please enter a valid number.";
      } else if (guess > secretNumber) {
        message = "Too high! Try again.";
      } else if (guess < secretNumber) {
        message = "Too low! Try again.";
      } else {
        message = `Correct! The number was ${secretNumber}. Refresh to play again!`;
        secretNumber = Math.floor(Math.random() * 100) + 1; // Reset game
      }

      res.writeHead(303, { Location: "/" });
      res.end();
    });
  } else {
    res.end(form());
  }
});
server.on("request", (req) => {  
  console.log("event received: ", req.method, req.url);  
});  
server.listen(3000);
console.log("The server is listening on port 3000.");
