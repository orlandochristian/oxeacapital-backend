const db =  require("../Db/dbConfig.js");

const getAllActiveLoans = async () => {
    try {
      const allActiveLoans = await db.any("select * from clients c join loans l on (c.client_id=l.client_id) where l.active");
     
      return allActiveLoans;
    } catch (error) {
      return {error};
    }
  };







  module.exports = {
    getAllActiveLoans,
   
    };