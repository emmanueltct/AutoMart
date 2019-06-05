
function get_image(id_image){
	
//var image=document.getElementsById(id_image).getAttribute("src"); 
var x = document.getElementById(id_image).src;
//alert(x);
var new_image = document.getElementById("new_car");

            while (new_image.hasChildNodes()) {
               new_image.removeChild(new_image.firstChild);
            }




    var newElement = document.createElement("img");
   newElement.setAttribute("src",x);
   newElement.setAttribute("alt",'clicked car image');
    new_image.appendChild(newElement);


 var e = document.querySelector(".car_heading"); 
        e.innerHTML = "Image Of Clicked car"; 


         }

