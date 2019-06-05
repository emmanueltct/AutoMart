function  reporting_car() {
	var reason1=document.getElementById("reason_car").value;
    var descr=document.getElementById("description").value;
    var validate =/[^0-9]/;


    if(reason1==""){
    	alert("enter the reason");
    	return false;
    }
    else if(reason1.length<=5){
    	alert("use more than five character");
    	return false;
    }
    else if(descr==""){
    	alert("enter description");
    	return false;

    }
    else if(descr.length<=20){
    		alert("more than 20 characters");
    	return false;
    }
    else{
        window.location.href="purchase.html";
        return false;
    }
}
    