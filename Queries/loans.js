

const db =  require("../Db/dbConfig.js");

const getActiveLoanByClient = async (clientId) => {
  try {
    const allActive = await db.any("SELECT * FROM loans where client_id= $1 and active  fetch first row only",[clientId]);
    return allActive;
  } catch (error) {
    return {error};
  }
};

const getHistoryLoansByClient = async (clientId) => {
    try {
      const allHistory = await db.any("SELECT l.*, c.closedate,c.note FROM loans l join closedloan c on (l.loan_id= c.loan_id) where client_id= $1 and not active  fetch first row only",[clientId]);
      return allHistory;
    } catch (error) {
      return {error};
    }
  };


const getLoanByClient = async (clientId,loanId) => {
  try {
    const loan = await db.one("SELECT * FROM loans WHERE client_id = $1 and loan_id=$2", [clientId,loanId]);
    
    return loan;
  } catch (error) {
    return {error: "error"}; //object error : key value of error
  }
}


const createNewLoan = async (loan,clientId) => {
   
    const {totalamount,interestrate,startdate,appfee,numberofpayment} =  loan;
   
  try {
    const newLoan = await db.one(`INSERT INTO loans (totalamount, amountdue, interestrate, startdate, appfee, active, numberofpayment, client_id) VALUES ($1, $2, $3, $4,$5,$6,$7,$8) RETURNING *`, [totalamount, totalamount,interestrate, startdate,appfee,true,numberofpayment,clientId]);
    return newLoan; 
  } catch (error) {
    return {error};
   
  }  
  };




 
  const updateLoan = async (clientId,loanId, loan) => {  
    const {totalamount,amountdue,interestrate,startdate,appfee,active} = loan
  
    try {
      const updatedLoan = await db.one(`UPDATE loans SET totalamount=$1,  amountdue=$2, interestrate=$3, startdate=$4, appfee=$5, active=$6   WHERE client_id = $7 and loan_id = $8  RETURNING *`, [totalamount, amountdue,interestrate, startdate,appfee,active, clientId, loanId]);
      return updatedLoan;
    } catch (error) {
      return {error};
    }
  }

  
 const deleteLoan = async (loanId) => {
    try {
      const deletedLoan = await db.one(`DELETE FROM loans WHERE loan_id = $1 RETURNING *`, [loanId]);
      return deletedLoan;
    } catch (error) {
      return {error}; 
    }
  }


module.exports = {
 getActiveLoanByClient, 
 getHistoryLoansByClient,
  getLoanByClient,
  createNewLoan,
  updateLoan,
  deleteLoan,
  };