
import car from '../models/car.model';

  function carStatus(status){
    const car_av=car.filter(c=>c.status==status);
    
return car_av;
  }

  export{carStatus}