
import car from '../models/car.model';

const deletePosted = (req, res) => {
  const post = car.find(p => p.id === parseInt(req.params.id, 10));

  if (!post) {
    return res.status(404).json({
      status: 404,
      error: 'Car Ad not found',
    });

  }

 const admin=req.user_token.user_token;
console.log(admin.is_admin);

 if(admin.is_admin=='true'){
    const index = car.indexOf(post);
  car.splice(index, 1);
  res.status(200).send({
    status: 200,
    data: 'Car Ad successfully deleted',
  });

 }else{

    return res.status(400).json({status:400,error:'you are not admin you can not delete anything'})
 }
}
export default deletePosted;
