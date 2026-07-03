// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------
// import Node Modules
import express from "express";

// Creating an instance of the express module so we can use all the methods
const app = express();

// tell express which port to listen to
const port = 3000;

// This server will be recieving and responding in JSON
app.use(express.json());

app.listen(port, () => {
  console.log(`My server is listening on port: ${port}`);
});
// ---------------------------------
// Helper Functions
// ---------------------------------

// ---------------------------------
// Our very first API Endpoints
// ---------------------------------

app.get("/", (req, res) => {
  res.send("Hello Universe!");
});

app.get("/get-user", (req, res) => {
  res.send("Hello User!");
});

// add a dynamic parameter
app.get("/get-user-name/:userName", (req, res) => {
  const name = req.params.userName;
  res.send(`Hello ${name}!`);
});

// order yummy tacos
app.get("/order-tacos/:protien/:numTacos", (req, res) => {
  const protien = req.params.protien;
  const numTacos = req.params.numTacos;

  res.send(`Your order of ${numTacos} ${protien} tacos is on the way!`);
});

// --------------------------------
// 🚀 LEVEL 1 CHALLENGES
// --------------------------------

// 1. 🏆 Add a /goodbye endpoint that responds with "Goodbye, see you later!"

app.get("/goodbye", (req, res) => {
  res.send("Goodbye, see you later!");
});

// 2. 🏆 Add a /happy-birthday endpoint that responds with "Happy birthday!!!"
app.get("/happy-birthday", (req, res) => {
  res.send("Happy Birthday!!!");
});
// --------------------------------
// 🚀 LEVEL 2 CHALLENGES — ADDING DYNAMIC PARAMETERS
// --------------------------------

// 1. 🏆 Add a /happy-birthday/:name endpoint says "Happy birthday, [name]!!!"

app.get("/happy-birthday/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Happy birthday, ${name}!!!`);
});

// 2. 🏆 Add a /say-hello/:name/:language endpoint that says hello in multiple languages. Examples:
//      - If language = "English", respond with "Hello, [name]!"
//      - If language = "Spanish", respond with "Hola, [name]!"
//      - If language = "Vietnamese", respond with "Xin chao, [name]!"
//      - If language = "Turkish", respond with "Merhaba, [name]!"
//      - Add as many languages as you want!
//      - Otherwise, respond with "Language not supported.""

app.get("/say-hello/:name/:language", (req, res) => {
  const name = req.params.name;
  const language = req.params.language;

  if (language === "English") {
    res.send(`Hello, ${name}!`);
  } else if (language === "Spanish") {
    res.send(`Hola, ${name}!`);
  } else if (language === "Vietnamese") {
    res.send(`Xin Chao, ${name}!`);
  } else if (language === "Turkish") {
    res.send(`Merhaba, ${name}!`);
  } else {
    res.send("Language not supported");
  }
});

// --------------------------------
// 🚀 LEVEL 3 CHALLENGES — EVEN MORE DYNAMIC PARAMETERS
// --------------------------------

// 1. 🏆 Add a /calculate-dog-years/:dogName/:humanYears endpoint that calculates a dog's age in dog years. Refer to your dogAgeCalculator.js file.

// 2. 🏆 Add a /calculate-tip/:bill/:tipPercentage/:numGuests endpoint that calculates the amount each guests owes. Refer to your tipCalculator.js file.

// --------------------------------
// LEVEL 4 CHALLENGES — USING THE FILE SYSTEM MODULE
// --------------------------------

// 1. 🏆 Add a /get-birthstone/:month endpoint that tells the user the birthstone for the inputted month using the fs module. Use the birthstones-data.json file in this folder.

// 2. 🏆 Add a /get-all-pizza-orders endpoint that responds with the array of pizza orders. Use the pizza-orders-data.json file in this folder.

// 3. 🏆 Add a /get-one-pizza-order/:index endpoint that responds with the specified pizza order.

// --------------------------------
// 🚀 LEVEL 5 CHALLENGES — USING THIRD-PARTY MODULES
// --------------------------------

// 1. 🏆 Add a /is-leap-year/:year endpoint that responds with whether the specified year is a leap year. Use the moment third-party node module and refer to your leap-year.js file.

// 2. 🏆 Add a /get-signs/:month/:day/:year endpoint that responds with the user's astrological and zodiac signs based on their inputted birthday. Use the horoscope third-party node module and refer to your sign-finder.js file.
