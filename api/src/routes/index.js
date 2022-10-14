const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const detail = require('../Controller/get_detail');
const post = require('../Controller/post_products');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/productDetail/', detail)
router.use('/postProduct',post)

module.exports = router;
