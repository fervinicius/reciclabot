const sqlite3 = require('sqlite3').verbose();

const dbName = process.env.DB_NAME;

// Create or open the database file
const db = new sqlite3.Database(`./${dbName}`, (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
        // Create the table 'coletas' if does not exist
        db.run(`CREATE TABLE IF NOT EXISTS coletas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            solicitante_nome TEXT NOT NULL,
            solicitante_contato TEXT NOT NULL,
            endereco TEXT NOT NULL,
            tipo_material TEXT,
            status TEXT DEFAULT 'pendente',
            data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) {
                console.error('Erro ao criar tabela:', err.message);
            } else {
                console.log('Tabela "coletas" pronta.');
            }
        });
    }
});

module.exports = db;
