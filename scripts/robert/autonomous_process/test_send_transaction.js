var from = web3.eth.accounts[6];
var to = "0xccf3e3b6201ce6c543772b2955ba370db81e1030";


var amount = web3.toWei(0.01, "ether");

var acctBalanceBefore = web3.eth.getBalance(from);


web3.eth.sendTransaction({from: from, to: to, value: amount});


miner.start();
admin.sleepBlocks(5);
miner.stop();


console.log("Payment in the amount of: " + amount + " to: " + to + " sent!");

var acctBalanceAfter = web3.eth.getBalance(from);


console.log("Account Balance Before: " + acctBalanceBefore);
console.log("Account Balance After: " + acctBalanceAfter);
var amountDeducted = acctBalanceBefore-acctBalanceAfter;
console.log("Total sent :"+ amountDeducted);
