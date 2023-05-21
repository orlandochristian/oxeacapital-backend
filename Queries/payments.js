const db =  require("../Db/dbConfig.js");

const getPaymentsByLoan = async (loanId) => {
  try {
    const allPayment = await db.any("SELECT * FROM payments where loan_id= $1",[loanId]);
    return allPayment;
  } catch (error) {
    return {error};
  }
};


const createNewPayment = async (payment,loanId) => {
    const {paymentamount, amountdue,interestrate, paymentdate} =  payment;

  try {
    const newPayment = await db.one(`INSERT INTO payments ( paymentamount, interestamount, paymentdate, loan_id ) VALUES ($1, $2, $3, $4) RETURNING *`, [paymentamount,((interestrate*paymentamount)/100).toFixed(2),paymentdate,loanId]);
    const newAmountDue = await db.one('UPDATE loans SET amountdue = $1 where loan_id = $2 RETURNING *',[(amountdue - (paymentamount - ((interestrate*paymentamount)/100).toFixed(2))), loanId]);
    return newPayment; 
  } catch (error) {
    return {error};
   
  }  
  };



module.exports = {
    getPaymentsByLoan, 
    createNewPayment,
   
     };