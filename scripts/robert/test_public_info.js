//eth.contract(Pull this stuff from the JSON file).at(contract address goes here)

var info = eth.contract([{"constant":true,"inputs":[{"name":"index","type":"int256"}],"name":"QueryeReceipt","outputs":[{"name":"","type":"string"}],"type":"function"},{"inputs":[{"name":"_from","type":"string"},{"name":"_to","type":"string"},{"name":"_amount","type":"string"},{"name":"_date","type":"string"},{"name":"_orderNum","type":"string"},{"name":"_productName","type":"string"},{"name":"_notes","type":"string"}],"type":"constructor"}]).at("0xd63fd29db769290f3c72bc17a07aea09c8dc48ef");


/*var info = eth.contract([{ constant: true, inputs: [{ name: "index", type: "int256" }], name: "QueryeReceipt", outputs: [{ name: "", type: "string" }], type: "function" }, { inputs: [{ name: "_from", type: "string" }, { name: "_to", type: "string" }, { name: "_amount", type: "string" }, { name: "_date", type: "string" }, { name: "_orderNum", type: "string" }, { name: "_productName", type: "string" }, { name: "_notes", type: "string" }], type: "constructor" }]).at("0xd63fd29db769290f3c72bc17a07aea09c8dc48ef");*/

//prints out all the information at once
for(i =0; i < 4; i++){
console.log(info.QueryeReceipt(i));
}
