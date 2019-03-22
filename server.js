const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

console.log("are we in production?", process.env.NODE_ENV);

// Send every other request to the React app
// Define any API routes before this runs
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

const syncOptions = { force: false };

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
