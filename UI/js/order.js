function orders(){
  
    var amount=document.getElementById("amounts").value;
    var validate =/[^0-9]/;


    if(amount==""){
      alert("enter new price");
      return false;
    }else if(amount.match(validate)){
      alert("use only numbers");
      return false;
    }
  
    else{
      window.location.href="user_welcome.html";
        return false;
    }
}
    
  