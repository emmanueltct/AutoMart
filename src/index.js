
import express from "express";
import bodyparser from "body-parser";
import user_router from './routes/user.router';
import login_router from './routes/login.routes';
import car_router from './routes/car.routes';
import order_router from './routes/order.routes';
const app=express();
app.use(bodyparser.json());

app.use('/api/v1/auth', user_router);
app.use('/api/v1/auth/login', login_router);
app.use('/api/v1/car', car_router);
app.use('/api/v1/order',order_router);

const port=process.env.PORT||3200;
app.listen(port,()=>console.log(`server started correctly at port ${port}` ));






