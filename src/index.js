
import express from "express";
import bodyparser from "body-parser";
import user_router from './routes/user.router';

const app=express();
app.use(bodyparser.json());

app.use('/api/v1/auth', user_router);



const port=process.env.PORT||3200;
app.listen(port,()=>console.log(`server started correctly at port ${port}` ));






