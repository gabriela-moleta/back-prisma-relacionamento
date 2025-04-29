import express from 'express'


import animesRouter from './animeRoutes.js'
import personagensRouter from './personagenRoutes.js'
import collectionRouter from './collectionRoutes.js'
import cardRouter from './cardRoutes.js'

import authMiddleware from '../middleware/authmiddleware.js'

const router= express.Router();

router.use('/animes', animesRouter);
router.use('/collections', collectionRouter);
router.use('/personagens', personagensRouter);
router.use('/cards', cardRouter);


export default router;