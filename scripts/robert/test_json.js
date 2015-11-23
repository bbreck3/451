

var main = web3.eth.accounts[2];
var sec = "0xd5694f3042a62d769188bb87aff419456ba614e5"


var source = 'contract eReceipt { string from; string to; string amount; string date; string orderNum; string productName; string notes; function eReceipt(string _from, string _to, string _amount, string _date, string _orderNum, string _productName, string _notes) public { from = _from; to = _to; amount = _amount; date = _date; orderNum = _orderNum; productName = _productName; notes = _notes; } function QueryeReceipt(int index) constant returns (string) { if(index == 0) return date; if(index == 1) return orderNum; if(index == 2) return productName; if(index == 3) return notes; return "Invalid index"; } } '

var compiled = web3.eth.compile.solidity(source).eReceipt;
var contract = web3.eth.contract(compiled.info.abiDefinition);
var contentHash = admin.saveInfo(compiled.info, "/home/goeth/Desktop/dapps/shared/contracts/test/info.json");
var _from = main;
var _to = sec;
var _amount = web3.toWei(1, "ether");
var _date = "11/14/15";
var _orderNum = "13579";
var _productName = "A Product";
var _notes = "Some notes.";

var deploy = contract.new(_from, _to, _amount, _date, _orderNum, _productName, _notes, {from: main, data: compiled.code, gas: 30000000}, function(e, contract){ if(!e){ if(!contract.address){ console.log("Waiting to be mined..."); }else{ web3.eth.sendTransaction({from: _from, to: _to, value: _amount}); console.log("Contract mined!!! Address: " + contract.address); console.log("abi: " + abi + " adddress : " + contract.address + " contentHash :" + contentHash); admin.register(main, contract.address, contentHash); admin.registerUrl(main, hash, url, contract.address);console.log(contract); } } }); 






miner.start();
admin.sleepBlocks(5);
miner.stop();

console.log("Debug");
for(i =0; i < 4; i++){
console.log("Debug");
console.log(deploy.QueryeReceipt(1));

}





