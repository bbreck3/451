var primaryAccount = web3.eth.accounts[2];
var sec = "0xff49ee83b1f5ac7aaa8252b728e5341f4dfc91ff"
var source = "contract test { function multiply(uint a) returns(uint d) { return a * 7; } }"
// compile with solc
contract = web3.eth.compile.solidity(source).test
// create contract object
var MyContract = web3.eth.contract(contract.info.abiDefinition)
// extracts info from contract, save the json serialisation in the given file, 
contenthash = admin.saveInfo(contract.info, "/home/goeth/Desktop/dapps/shared/contracts/test/info.json")
// send off the contract to the blockchain
MyContract.new({from: primaryAccount, data: contract.code}, function(error, contract){
  if(!error && contract.address) {
    // calculates the content hash and registers it with the code hash in `HashReg`
    // it uses address to send the transaction. 
    // returns the content hash that we use to register a url
    admin.register(primaryAccount, contract.address, contenthash)
    // here you deploy ~/dapps/shared/contracts/test/info.json to a url
    admin.registerUrl(primaryAccount, hash, url)
  }
});