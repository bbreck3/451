// loadScript("/home/goeth/Desktop/final/test_send_transaction.js")


//accounts-->from: is the customer; to: is the distributor
var from = web3.eth.accounts[6];
var to = "0xccf3e3b6201ce6c543772b2955ba370db81e1030";

//amount to send
var amount = web3.toWei(0.01, "ether");

var acctBalanceBefore = web3.eth.getBalance(from);

//send the transaction
web3.eth.sendTransaction({from: from, to: to, value: amount});

//start mining --> simply to verify block chain synchronization between nodes
miner.start();
admin.sleepBlocks(2);
miner.stop();

//print out confirmation
console.log("Payment in the amount of: " + amount + " to: " + to + " sent!");

var acctBalanceAfter = web3.eth.getBalance(from);

//print out before and after imformation as proof
console.log("Account Balance Before: " + acctBalanceBefore);
console.log("Account Balance After:  " + acctBalanceAfter);
var amountDeducted = acctBalanceBefore-acctBalanceAfter;
console.log("Total sent :"+ amountDeducted);
