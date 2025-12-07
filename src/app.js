require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

const express = require('express');

const helmet = require('helmet'); // Importa o Helmet para segurança HTTP headers

const app = express();

app.use(helmet()); // Usa o Helmet para proteger o app definindo vários HTTP headers

app.use(express.json()); // Middleware para entender JSON

const coletaRoutes = require('./routes/coletaRoutes');

const PORT = process.env.PORT || 3000;

app.use('/api', coletaRoutes);

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
})
