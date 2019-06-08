function car_option1() {
document.getElementById("publshe_form").style.display = 'block';
document.getElementById("unsold_car").style.display = 'none';
document.getElementById("sold_car").style.display = 'none';

}

function car_option2() {
var opt=document.getElementById("car_filter").value;

if(opt=="new"){
	
	document.getElementById("publshe_form").style.display = 'block';
	document.getElementById("unsold_car").style.display = 'none';
	document.getElementById("sold_car").style.display = 'none';
	}
	else if(opt=="unsold"){
	document.getElementById("publshe_form").style.display = 'none';
	document.getElementById("unsold_car").style.display = 'block';
	document.getElementById("sold_car").style.display = 'none';
	}
	else if (opt=="sold"){
	document.getElementById("publshe_form").style.display = 'none';
	document.getElementById("unsold_car").style.display = 'none';
	document.getElementById("sold_car").style.display = 'block';
	}
	else{
		alert('choose correct car option filter');
	}

}


function car_advert() {
var validate =/[^0-9]/;
var c_date=document.getElementById("created_date").value;
var manufacturer=document.getElementById("manufacturer").value;
var model=document.getElementById("model").value;
var body_type=document.getElementById("body_type").value;
var state=document.getElementById("state").value;
var price=document.getElementById("price").value;

if(c_date==""){
	alert("crated date is empty");
	return false;
}
else if(manufacturer==""){
	alert("manufacturer is empty");
	return false;
}
else if(model==""){
	alert("Car model is empty");
	return false;
}
else if(body_type==""){
	alert("body_type is empty");
	return false;
}
else if(state=="state"){
	alert("choose correct car state");
	return false;
}
else if(price==""){
	alert("price is empty");
	return false;
}
else if(price.match(validate)){
	alert("use only numbers");
	return false;
}
else{
	window.location.href="user_welcome.html";
	return false;
}

}