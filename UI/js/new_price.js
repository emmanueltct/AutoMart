
function order(){
	
    var amount=document.getElementById("amount").value;
    var validate =/[^0-9]/;


    if(amount==""){
    	alert("enter amount of money");
    	return false;
    }else if(amount.match(validate)){
    	alert("use only numbers on ammount");
    	return false;
    }
  
    else{
    	window.location.href="purchase.html";
        return false;
    }
}
    