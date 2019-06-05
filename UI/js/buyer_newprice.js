
function update_price() {
	
    var amount=document.getElementById("amount").value;
    var validate =/[^0-9]/;


    if(amount==""){
    	alert("enter new price");
    	return false;
    }else if(amount.match(validate)){
    	alert("use only numbers");
    	return false;
    }
  
    else{
    	window.location.href="purchase.html";
        return false;
    }
}
    