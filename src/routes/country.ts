import { Router } from 'express';
import { getCountry } from '../controllers/country';
import checkToken from '../middlewares/auth';
import limitRequestRate from '../middlewares/rateLimiting';

const router = Router();

router.route('/:country').get(checkToken, limitRequestRate, getCountry);

export default router;
