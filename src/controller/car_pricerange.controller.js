
import car from '../models/car.model';

function carPriceRange(min_v,max_v,status){
  const car_pr=car.filter(c=>c.status==status && c.price>=min_v && c.price<=max_v);

  
return car_pr;
}

export{carPriceRange}