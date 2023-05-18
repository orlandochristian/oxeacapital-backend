const express = require('express');
const clients = express.Router();
const loansController = require("./loansController");

const {
    getAllClients,
     getClient,
     createClient,
     updateClient,
     deleteClient,
  
} =  require('../Queries/clients');


 //localhost:3345/clients/:clientId/loans
 clients.use("/:clientId/loans",loansController)



clients.get("/", async (req, res) => 
{
     
  const allClients = await getAllClients();
  if (!allClients.error) {
    res.status(200).json(allClients);
  } else {
    console.log(allClients)
    res.status(500).json({ error: "server error!!!!!!" });
  } 
}
);

 
clients.get("/:clientId", async(req, res) => {

    
    const { clientId } = req.params;
   
      const client = await getClient(clientId);
      if (client.error != "error") {
          res.status(200).json(client);
      } else {
          res.status(404).json({ error: "server error" });
      }
  }
  );
  
    
  
  clients.post("/", async (req, res) => {
            
              const newClient = await createClient(req.body);
              if (!newClient.error) {
                  res.status(200).json(newClient);
              } else {
                  res.status(404).json({ error: "server error!!!!" });
              }
              
           }
          ); 
  
  
  //update
  
   clients.put("/:clientId",
      async (req, res) => { 
        
          const { clientId } = req.params;
      const updatedClient = await updateClient(clientId, req.body);
      if (!updatedClient.error) {
          res.status(200).json(updatedClient);
      } else {
          res.status(404).json({ error: "server error" });
      }
  });
  
  
  
  clients.delete("/:clientId", async (req, res) => {
     
      
      const { clientId } = req.params;
  
  
      const deletedClient = await deleteClient(clientId);
      if (!deletedClient.error) {
          res.status(200).json(deletedClient);
      } else {
          res.status(404).json({ error: "server error" });
      }
  }); 


module.exports = clients;