const express = require('express');

const router = express.Router();

const coletaControllers = require('../controllers/coletaController');

// Define as rotas (Endpoints)
router.get('/coletas', coletaControllers.listarColetas);

router.post('/coletas', coletaControllers.criarColeta);

router.put('/coletas/:id', coletaControllers.atualizarColeta);

router.delete('/coletas/:id', coletaControllers.deletarColeta);

module.exports = router;
