//eth.contract(Pull this stuff from the JSON file).at(contract address goes here)

//variable to store the contract address and ABI definition
var asdf = eth.contract([{"constant":true,"inputs":[{"name":"index","type":"int256"}],"name":"QueryeReceipt","outputs":[{"name":"","type":"string"}],"type":"function"},{"inputs":[{"name":"_from","type":"string"},{"name":"_to","type":"string"},{"name":"_amount","type":"string"},{"name":"_date","type":"string"},{"name":"_orderNum","type":"string"},{"name":"_productName","type":"string"},{"name":"_notes","type":"string"}],"type":"constructor"}]).at("0x097b1611a01c263ea1df05fb787277724f26e025");//eth.contract([{"constant":true,"inputs":[{"name":"index","type":"int256"}],"name":"QueryeReceipt","outputs":[{"name":"","type":"string"}],"type":"function"},{"inputs":[{"name":"_from","type":"string"},{"name":"_to","type":"string"},{"name":"_amount","type":"string"},{"name":"_date","type":"string"},{"name":"_orderNum","type":"string"},{"name":"_productName","type":"string"},{"name":"_notes","type":"string"}],"type":"constructor"}]).at("0x92806db7f245e3ec97818de5259a292c83f0412f");


/*var info = eth.contract([{ constant: true, inputs: [{ name: "index", type: "int256" }], name: "QueryeReceipt", outputs: [{ name: "", type: "string" }], type: "function" }, { inputs: [{ name: "_from", type: "string" }, { name: "_to", type: "string" }, { name: "_amount", type: "string" }, { name: "_date", type: "string" }, { name: "_orderNum", type: "string" }, { name: "_productName", type: "string" }, { name: "_notes", type: "string" }], type: "constructor" }]).at("0xd63fd29db769290f3c72bc17a07aea09c8dc48ef");*/

//print out contract -->Receipt info
for(i =0; i < 4; i++){
console.log(asdf.QueryeReceipt(i));
}
