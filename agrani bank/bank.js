      const loginBtn = document.getElementById("login");
 loginBtn.addEventListener("click", function () {
   const loginArea = document.getElementById("login-area");
   loginArea.style.display = "none";
   const transactionArea = document.getElementById("transaction-area");
   transactionArea.style.display = "block";

 });

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositNumber = getInputNumber("depositAmount");

  // const currentDeposit = document.getElementById("currentDeposit").innerText;
  // const currentDepositNumber = parseFloat(currentDeposit);
  // const totalDeposit = depositNumber + currentDepositNumber;
  // document.getElementById("currentDeposit").innerText = totalDeposit;
 
   updateSpanText("currentDeposit",depositNumber);

  updateSpanText("currentBalance",depositNumber);

  document.getElementById("depositAmount").value = "";
})

function updateSpanText(id,depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current );
  const totalAmount = depositNumber + currentNumber; 
  document.getElementById(id).innerText = totalAmount;

}

// withdraw button
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  // const withdrawAmount = document.getElementById("withdrawAmount").value;
  // const withdrawNumber = parseFloat(withdrawAmount);
 
  const withdrawNumber = getInputNumber("withdrawAmount");
  
  updateSpanText("currentWithdraw", withdrawNumber);
  updateSpanText("currentBalance",-1 * withdrawNumber);
  document.getElementById("withdrawAmount").value = "";
})

function getInputNumber(id) {
  const Amount = document.getElementById(id).value;
  const amountNumber = parseFloat(Amount);
  return amountNumber;
}

 