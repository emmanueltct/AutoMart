function myLogin() {
    
   
    var pass=document.getElementById("password").value;
    var email=document.getElementById("email").value;
    var validate =/[^aA-zZ]/;
   var validate2 =/[^aA-zZ " ".]/;
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email=="") {
      alert("email is empty");
      return false;
    }
    else if(!email.match(mailformat)){
      alert("invalid email address");
      return false;
    }

    else if(pass==""){
     alert("password is empty"); 
     return false;
    }
    else if(pass.length<=5){
     alert("atleast 5 character length");
      return false;
     
      
    	}else 
        window.location.href="users/user_welcome.html";
       return false;
      
    
  }
  