import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();



router.put('/', (_, res) => {
  return res.send('Olá, DEV!');
});


router.post('/teste', (req, res) => {
  //console.log(req);
  return res.status(StatusCodes.ACCEPTED).json(req.body);
});



export { router };
