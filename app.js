const express = require("express");
const cors = require("cors");

const clientsController = require("./Controllers/clientsController");



//configuration
const app = express();

//middleware
app.use(cors());
app.use(express.json()); 

// routes
app.get("/", (req, res) => {
    res.send("Welcome to Oxea Capital Loans");
  });

  app.use("/clients", clientsController);

  //app.use("/loans", loansController);



module.exports = app;