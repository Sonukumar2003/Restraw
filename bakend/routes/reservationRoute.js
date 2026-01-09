
import express from 'express'

import { sendReservation } from '../controller/reservationC.js';

const router = express.Router();

router.post('/send', sendReservation);
export default router;