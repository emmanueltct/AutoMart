

function price() {
	var min=document.getElementById("min").value;
    var max=document.getElementById("max").value;
    var validate =/[^0-9]/;


    if(min==""){
    	alert("enter minimum price");
    	return false;
    }else if(min.match(validate)){
    	alert("use only numbers");
    	return false;
    }
    else if(max==""){
    	alert("enter maximum price");
    	return false;

    }else if(max.match(validate)){
    		alert("use only numbers");
    	return false;
    }else if(min>max){
    	alert("the maximun price should be greater than minimum price");
    	return false;
    }else{
    	return true;
    }
}
    