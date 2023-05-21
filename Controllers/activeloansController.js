const express = require('express');
const activeloans = express.Router();

const {
    getAllActiveLoans,  
  
} =  require('../Queries/activeloans');

activeloans.get("/", async (req, res) => 
{
     
  const allActiveLoans = await getAllActiveLoans();
  if (!allActiveLoans.error) {
    res.status(200).json(allActiveLoans);
  } else {
    console.log(allClients)
    res.status(500).json({ error: "server error!!!!!!" });
  } 
}
);

module.exports = activeloans;