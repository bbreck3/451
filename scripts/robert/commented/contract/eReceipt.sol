contract eReceipt {  //eReceipt--> contract name
	//conrtract --> Receipt information
	string from; 
	string to; 
	string amount; 
	string date; 
	string orderNum; 
	string productName; 
	string notes; 
	//eReceipt contructor and variable definitions
	function eReceipt(string _from, string _to, string _amount, string _date, string _orderNum, string _productName, string _notes) public { 
		from = _from; 
		to = _to; 
		amount = _amount; 
		date = _date; 
		orderNum = _orderNum; 
		productName = _productName; 
		notes = _notes; 
	} 
	//Querries Contract information and prints it out
	function QueryeReceipt(int index) constant returns (string) {
	 if(index == 0) 
	 	return date; 
	 if(index == 1) 
	 	return orderNum; 
	 if(index == 2) 
	 	return productName; 
	 if(index == 3) 
	 	return notes; 
	 return "Invalid index"; 
	} 
}
