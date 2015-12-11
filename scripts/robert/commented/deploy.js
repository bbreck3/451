//   loadScript("/home/goeth/Desktop/final/deploy.js")
//Global Variables

//account --> main is the distributer; sec is the customer that an item
var main = web3.eth.accounts[2];
var sec = "0xd5694f3042a62d769188bb87aff419456ba614e5"

//conditional variables used for the scripts
var objectVal = 100;
var paymentSent = false;
var flag=false;
var acctBalanceBefore = web3.eth.getBalance(web3.eth.accounts[2]);
var acctBalanceAfter;


//contract data that will interact with the ethereum javascript geth environment
// contracts are written on go, but the the web3 envionmnet is javascript based
var source = 'contract eReceipt { string from; string to; string amount; string date; string orderNum; string productName; string notes; function eReceipt(string _from, string _to, string _amount, string _date, string _orderNum, string _productName, string _notes) public { from = _from; to = _to; amount = _amount; date = _date; orderNum = _orderNum; productName = _productName; notes = _notes; } function QueryeReceipt(int index) constant returns (string) { if(index == 0) return date; if(index == 1) return orderNum; if(index == 2) return productName; if(index == 3) return notes; return "Invalid index"; } } '

var compiled = web3.eth.compile.solidity(source).eReceipt;
var contract = web3.eth.contract(compiled.info.abiDefinition);
//stores the contract data in a central location that is easy to find
var contentHash = admin.saveInfo(compiled.info, "/home/goeth/Desktop/dapps/shared/contracts/test/info.json");

//contract data-->Receipt data
var _from = main;
var _to = sec;
var _amount = web3.toWei(1, "ether");
var _date = "25 Dec 2015"
var _orderNum = "2468";
var _productName = "eTextBook";
var _notes = "Will Deliver to Address: 12345 N Street Richmond, VA.";
var asdf;

//Waiting for payment....
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
		
		asdf= contract.new(_from, _to, _amount, _date, _orderNum, _productName, _notes, {from: main, data: compiled.code, gas: 30000000}, function(e, contract){ if(!e){ if(!contract.address){ console.log("Waiting to be mined..."); }else{ web3.eth.sendTransaction({from: _from, to: _to, value: _amount}); console.log("Contract mined!!! Address: " + contract.address); console.log("abi: " + abi + " adddress : " + contract.address + " contentHash :" + contentHash); admin.register(main, contract.address, contentHash); admin.registerUrl(main, hash, url, contract.address);console.log(contract); } } }); 
		//mine in order to put the contract information on the block chain
		miner.start();
		admin.sleepBlocks(2);
		miner.stop();
	}
	}
}


//functions
//prints out the receipt info
for(i=0; i<4; i++){
console.log(asdf.QueryeReceipt(i));
}

















