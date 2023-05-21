const db =  require("../Db/dbConfig.js");








const getAllClients = async () => {
    try {
      const allClients = await db.any("select * from clients");
     
      return allClients;
    } catch (error) {
      return {error};
    }
  };

  const getClient = async (clientId) => {
    try {
      const client = await db.one("SELECT * FROM clients WHERE client_id = $1", [clientId]);
      
     return client
      
    } catch (error) {
      return {error}; 
    }
  }


  const createClient = async (client) => {
    
   
    try {
      const newClient = await db.one(`INSERT INTO clients (first_name,last_name,direccion,telefono,email,ss,dob,lic_number) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`, [client.firstname,client.lastname,client.direccion,client.telefono,client.email,client.ss,client.dob,client.lic_number]);
      return newClient; 
    } catch (error) {
      return {error};
     
    }  
    }
  
    const updateClient = async (clientId, client) => {  
      const {first_name, last_name, direccion, telefono, email, ss, dob, lic_number} = client;
     
   
      try {
        const updatedClient = await db.one(`UPDATE clients SET first_name=$1, last_name=$2, direccion=$3, telefono=$4, email=$5, ss=$6, dob=$7, lic_number=$8 WHERE client_id=$9 RETURNING *`, [first_name,last_name,direccion,telefono,email,ss,dob,lic_number,clientId]);
        return updatedClient;
      } catch (error) {
        return {error}
      }
    }
  
    const deleteClient = async (clientId) => {
      try {
        const deletedClient = await db.one(`DELETE FROM clients WHERE client_id = $1 RETURNING *`, [clientId])
        return deletedClient;
      } catch (error) {
        return {error}; 
      }
    }




  module.exports = {
    getAllClients, 
    getClient,
    createClient,
    updateClient,
    deleteClient,
   
    };