const express = require('express');
const loans = express.Router({ mergeParams: true});
const paymentsController = require("./paymentsController");
//const {validateNAF} = require('../Validations/validation')

const {
    getActiveLoanByClient,
    getHistoryLoansByClient,
    getLoanByClient,
    createNewLoan,
    updateLoan,
    deleteLoan,
} =  require('../Queries/loans');

loans.use("/:loanId/payments",paymentsController)

// localhost:3345/clients/:clientId/loans
loans.get("/active", async (req, res) => {
  const {clientId} = req.params;
  const allActive = await getActiveLoanByClient(clientId);
  if (!allActive.error) {
    res.status(200).json(allActive);
  } else {
    res.status(500).json({ error: "server error!!!!" });
  } 
});

loans.get("/history", async (req, res) => {
    const {clientId} = req.params;
    const allHistory = await getHistoryLoansByClient(clientId);
    if (!allHistory.error) {
      res.status(200).json(allHistory);
    } else {
      res.status(500).json({ error: "server error!!!!" });
    } 
  });

// //show
// // localhost:3345/clients/:clientId/loans/:LoanId 
loans.get("/:loanId", async(req, res) => {
  const { clientId,loanId } = req.params;
   
  const loan= await getLoanByClient(clientId,loanId);
 
  if (loan.error != "error") {
        res.status(200).json(loan);
    } else {
        res.status(404).json({ error: "server error" });
    }
});

  
// //create 
// //localhost:3345/clients/:clientId/loans
loans.post("/", async (req, res) => {
            const { clientId } = req.params;
           
            const newLoan = await createNewLoan(req.body,clientId);
            if (!newLoan.error) {
                res.status(200).json(newLoan);
            } else {
                res.status(404).json({ error: "server error" });
            }
            
        }); 


// //update
// //PUT localhost:3345/clients/:clientId/loans/:loanId
 loans.put("/:loanId",
    async (req, res) => { 
        const { clientId, loanId } = req.params;
       
    const updatedLoan = await updateLoan(clientId,loanId, req.body);
    if (!updatedLoan.error) {
        res.status(200).json(updatedLoan);
    } else {
        res.status(404).json({ error: "server error!!!!!!" });
    }
});



loans.delete("/:loanId", async (req, res) => {
    const { loanId } = req.params;
    const deletedLoan = await deleteLoan(loanId);
    if (!deletedLoan.error) {
        res.status(200).json(deletedLoan);
    } else {
        res.status(404).json({ error: "server error" });
    }
}); 

module.exports = loans;