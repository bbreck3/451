var eReceipt = eth.contract([{ constant: true, inputs: [{ name: "index", type: "int256" }], name: "QueryeReceipt", outputs: [{ name: "", type: "string" }], type: "function" }, { constant: false, inputs: [], name: "kill", outputs: [], type: "function" }, { inputs: [{ name: "_from", type: "string" }, { name: "_to", type: "string" }, { name: "_amount", type: "string" }, { name: "_date", type: "string" }, { name: "_orderNum", type: "string" }, { name: "_productName", type: "string" }, { name: "_notes", type: "string" }], type: "constructor" }]).at("0x266e5c36e4b0edcce8bb9f6639129843956ce186")


