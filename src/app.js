require('dotenv').config(); // Carrying environment variables from .env file

const express = require('express');

const helmet = require('helmet'); // Import Helmet for security headers

const app = express();

app.use(helmet());

app.use(express.json()); // Middleware to understand JSON requests

const coletaRoutes = require('./routes/coletaRoutes');

const PORT = process.env.PORT || 3000;

app.use('/api', coletaRoutes);

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
})
