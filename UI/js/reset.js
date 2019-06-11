function reset_acc(){

	var old_p=document.getElementById("old_password").value;
    var new_p=document.getElementById("n_password").value;
    var confirm_p=document.getElementById("c_password").value;

    if(old_p ==""){
    	alert("enter the old password");
    	return false;
    }
    else if(new_p.length<5){
    	alert("enter atleast 5 characters for new password");
    	return false;
    }
    else if(new_p!==confirm_p){
    	alert("new password and confirm password not match");
    	return false;
    }
    else{
    	window.location.href="logout.html";
    	return false;
    }
    }
