const express = require('express');
const payments = express.Router({ mergeParams: true});

//const {validateNAF} = require('../Validations/validation')

const {
    getPaymentsByLoan,
    createNewPayment,
    // getHistoryLoansByClient,
    // getLoanByClient,
    // createLoan,
    // updateLoan,
    // deleteLoan,
} =  require('../Queries/payments');




payments.get("/", async (req, res) => {
  const {loanId} = req.params;
  const allPayments = await getPaymentsByLoan(loanId);
  if (!allPayments.error) {
    res.status(200).json(allPayments);
  } else {
    res.status(500).json({ error: "server error!!!!" });
  } 
});



// //show
// // // localhost:3345/clients/:clientId/loans/:LoanId 
// loans.get("/:loanId", async(req, res) => {
//   const { clientId,loanId } = req.params;
   
//   const loan= await getLoanByClient(clientId,loanId);
 
//   if (loan.error != "error") {
//         res.status(200).json(loan);
//     } else {
//         res.status(404).json({ error: "server error" });
//     }
// });

  
// //create 
// // //localhost:3345/clients/:clientId/loans/:loanId/payments
payments.post("/", async (req, res) => {
            const { loanId } = req.params;
            const newPayment = await createNewPayment(req.body,loanId);
            if (!newPayment.error) {
                res.status(200).json(newPayment);
            } else {
                res.status(404).json({ error: "server error" });
            }
            
        }); 


// // //update
// // //PUT localhost:3345/clients/:clientId/loans/:loanId
//  loans.put("/:loanId",
//     async (req, res) => { 
//         const { clientId, loanId } = req.params;
       
//     const updatedLoan = await updateLoan(clientId,loanId, req.body);
//     if (!updatedLoan.error) {
//         res.status(200).json(updatedLoan);
//     } else {
//         res.status(404).json({ error: "server error!!!!!!" });
//     }
// });



// loans.delete("/:loanId", async (req, res) => {
//     const { loanId } = req.params;
//     const deletedLoan = await deleteLoan(loanId);
//     if (!deletedLoan.error) {
//         res.status(200).json(deletedLoan);
//     } else {
//         res.status(404).json({ error: "server error" });
//     }
// }); 

module.exports = payments;