
//Global Variables

var main = web3.eth.accounts[2];
var sec = "0xd5694f3042a62d769188bb87aff419456ba614e5"

var objectVal = 100;
var paymentSent = false;
var flag=false;

var acctBalanceBefore = web3.eth.getBalance(web3.eth.accounts[2]);
var acctBalanceAfter;

var source = 'contract eReceipt { string from; string to; string amount; string date; string orderNum; string productName; string notes; function eReceipt(string _from, string _to, string _amount, string _date, string _orderNum, string _productName, string _notes) public { from = _from; to = _to; amount = _amount; date = _date; orderNum = _orderNum; productName = _productName; notes = _notes; } function QueryeReceipt(int index) constant returns (string) { if(index == 0) return date; if(index == 1) return orderNum; if(index == 2) return productName; if(index == 3) return notes; return "Invalid index"; } } '

var compiled = web3.eth.compile.solidity(source).eReceipt;
var contract = web3.eth.contract(compiled.info.abiDefinition);
var contentHash = admin.saveInfo(compiled.info, "/home/goeth/Desktop/dapps/shared/contracts/test/info.json");
var _from = main;
var _to = sec;
var _amount = web3.toWei(1, "ether");
var _date = "25 Dec 2015"
var _orderNum = "2468";
var _productName = "The Product";
var _notes = "Some notes.";


console.log("Waiting on payment...");



/**

	waits for payment to be recieved:
	while payment has not been recieved...
	keep cheking the 'from' account..
	one a deduction from the an account has been detected,
	mark payment as true and deploy the contract.

*/
while(paymentSent==false && flag==false){
	//console.log("Debug");
	//waiting for payment
	//continously check to see if payment has been recieved
	acctBalanceAfter = web3.eth.getBalance(web3.eth.accounts[2]);
	//checks account balance--> if before transaction is greater than after transaction, you have spent money and have therefore payed
	if(acctBalanceAfter >  acctBalanceBefore ){
		

		//payment has been sent
		paymentSent=true;

		if(paymentSent ==true){
			console.log("Payment Received value: " + paymentSent);
		
		//payment has been sent so deploy the contract
		console.log("Payment recieved!, Deploying Contract");
		//deploy();
		var asdf= contract.new(_from, _to, _amount, _date, _orderNum, _productName, _notes, {from: main, data: compiled.code, gas: 30000000}, function(e, contract){ if(!e){ if(!contract.address){ console.log("Waiting to be mined..."); }else{ web3.eth.sendTransaction({from: _from, to: _to, value: _amount}); console.log("Contract mined!!! Address: " + contract.address); console.log("abi: " + abi + " adddress : " + contract.address + " contentHash :" + contentHash); admin.register(main, contract.address, contentHash); admin.registerUrl(main, hash, url, contract.address);console.log(contract); } } }); 
		miner.start();
		admin.sleepBlocks(5);
		miner.stop();
	}
	}
}


//functions

//checks for paymnet recieved
/**function paymentReceived(){
	if(paymentSent==true){
			return true;
	}
	else return false;

}*/

/**
	Deploys the contract
	adds contract to meta data to a public available json file querable by all nodes on the network

	prints out contract info

*/
function deploy() {
	flag=true;
	var deployContract= contract.new(_from, _to, _amount, _date, _orderNum, _productName, _notes, {from: main, data: compiled.code, gas: 30000000}, function(e, contract){ if(!e){ if(!contract.address){ console.log("Waiting to be mined..."); }else{ web3.eth.sendTransaction({from: _from, to: _to, value: _amount}); console.log("Contract mined!!! Address: " + contract.address); console.log("abi: " + abi + " adddress : " + contract.address + " contentHash :" + contentHash); admin.register(main, contract.address, contentHash); admin.registerUrl(main, hash, url, contract.address);console.log(contract); } } }); 
miner.start();
admin.sleepBlocks(5);
miner.stop();
}





for(i=0; i<4; i++){
console.log(deploy.QueryeReceipt(i));
}

















