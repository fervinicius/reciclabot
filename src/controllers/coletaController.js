// Importar a conexão com o banco de dados
const database = require('../database/index');

const listarColetas = (req, res) => {
    const sql = 'SELECT * FROM coletas';

    // Executa a query para obeter as linhas, retornando todas as coletas
    database.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        } 
        res.json(rows);
    })
}

const criarColeta = (req, res) => {
    // Desestruturação: extrai os dados específicos do corpo da requisição
    const { solicitante_nome, solicitante_contato, endereco, tipo_material } = req.body

    // Validação simples (Clean Code: Fail Fast)
    if (!solicitante_nome || !endereco) {
        return res.status(400).json({ messagem: 'Nome e endereço são obrigatórios.' })
    }

    const sql = `INSERT INTO coletas (solicitante_nome, solicitante_contato, endereco, tipo_material, status) VALUES (?, ?, ?, ?, ?)`;

    // 'pendente' é o status padrão
    const params = [solicitante_nome, solicitante_contato, endereco, tipo_material, 'pendente'];
    // Executa a query de inserção no banco de dados
    database.run(sql, params, function(err) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }

        // Sucesso! this.lastID pega o ID gerado automaticamente pelo SQLite
        res.status(201).json({
            id: this.lastID,
            solicitante_nome,
            solicitante_contato,
            endereco,
            tipo_material,
            status: 'pendente'
        });
    });
}

const atualizarColeta = (req, res) => {
    const { id } = req.params; // Pega o ID da URL (ex: /coletas/1)
    const { status } = req.body; // Pega o novo status do corpo JSON

    const sql = `UPDATE coletas SET status = ? WHERE id = ?`;

    database.run(sql, [status, id], function(err) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }

        // Verifica se alguma linha foi alterada
        if (this.changes === 0) {
            return res.status(404).json({ mensagem: 'Coleta não encontrada '});
        }

        res.json({ mensagem: 'Coleta atualizada com sucesso!', id, status });
    });
}

const deletarColeta = (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM coletas WHERE id = ?';

    database.run(sql, [id], function(err) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }

        if (this.changes === 0) {
            return res.status(404).json({ mensagem: 'Coleta não encontrada!' })
        }

        res.json({ mensagem: 'Coleta excluída com sucesso!' });
    });
}

module.exports = { listarColetas, criarColeta, atualizarColeta, deletarColeta };
