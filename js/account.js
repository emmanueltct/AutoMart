function myAccount() {
    
    var email=document.getElementById("email").value;
  var  fname=document.getElementById("fname").value;
  var  lname=document.getElementById("lname").value;
   var pass=document.getElementById("password").value;
   var  address=document.getElementById("address").value;
   var acc=document.getElementById("acc_option").value;

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

    else if(fname=="") 
    {
    alert("firstname is empty");
      return false;
    }
    else if(fname.match(validate)){
    alert("use only letters for firstname");
      return false;
    }
     else if(fname.length<=2){
    	alert("use full firstname");
      return false;
    }

    else if(lname=="") 
    {

    alert("Lastname is empty");
      return false;
     
    }
     else if(lname.match(validate2)){
    	alert("use only letters for lastname");
      return false;
    }
     else if(lname.length<=3){
    	alert("use full Lastname");
      return false;
    }
      else if(pass==""){

    alert("passwor is empty");
      return false;
     
    }
     else if(pass.length<=5){
     alert("atleast 5 character length");
      return false;
     }

    else if(acc=="Are you Admin?"){
   
    alert("choose correct account");
      return false;
    }
     else if(address=="") 
    {

    alert("choose address is empty");
      return false;
     
    }
    else{
    	   window.location.href="login.html";
    	   return false;
    }
  }
  
