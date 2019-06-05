  
function get_list() {
  var user_selection=document.getElementById('car_option').value;
  if(user_selection=="Manufacturer"){
    window.location.href="car_manifacturer.html";
  }
  else if(user_selection=="price_range"){

    window.location.href="car_price.html";
  }else if(user_selection=="new_car"){

    window.location.href="new_car.html";

  }else if(user_selection=="used_car"){

    window.location.href="used_car.html";

  }else if(user_selection=="all_car"){
    window.location.href="car_list.html";
    
  }else{
    alert("Please choose correct option");
  }

}
