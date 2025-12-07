# ♻️ ReciclaBot

> Uma API RESTful desenvolvida para otimizar o processo de atendimento e gestão de coletas de materiais recicláveis.

![Badge License](https://img.shields.io/badge/license-MIT-green)
![Badge Node](https://img.shields.io/badge/Node.js-v24+-green)

## 📌 Sobre o Projeto

O **ReciclaBot** é um projeto de extensão universitária focado no tema **ESG (Environmental, Social, and Governance)**. O objetivo principal é fornecer uma solução tecnológica de *backend* para cooperativas de reciclagem, substituindo o agendamento manual (planilhas/papel) por um sistema digital automatizado.

Esta API serve como o "cérebro" para um futuro Chatbot, permitindo registrar, listar, atualizar e deletar solicitações de coleta de forma rápida e organizada.

---

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes ferramentas e bibliotecas:

* **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript.
* **[Express](https://expressjs.com/):** Framework para construção da API.
* **[SQLite3](https://www.sqlite.org/):** Banco de dados relacional leve (Serverless) para persistência dos dados.
* **[Dotenv](https://www.npmjs.com/package/dotenv):** Gerenciamento de variáveis de ambiente.
* **[Helmet](https://helmetjs.github.io/):** Middlewares de segurança para proteção da API.

---

## ⚙️ Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/) (versão 24 ou superior recomendada)
* Um cliente de requisições HTTP (ex: [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/))

---

## 🔧 Instalação e Configuração

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o repositório
```bash
git clone https://github.com/fervinicius/reciclabot.git
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
```
PORT=3000
DB_NAME=nome_do_banco_de_dados.db
NODE_ENV=development
```

### 4. Inicie o servidor
```bash
npm start
```
O servidor estará rodando em `http://localhost:3000` (ou na porta que você definiu no arquivo `.env`).

### 5. Documentação da API
| Método | Endpoint           | Descrição                                      |
|--------|--------------------|-----------------------------------------------|
| GET    | /api/coletas       | Lista todas as solicitações de coleta.        |
| POST   | /api/coletas       | Registra uma nova solicitação.                |
| PUT    | /api/coletas/:id   | Atualiza o status de uma coleta existente.    |
| DELETE | /api/coletas/:id   | Remove uma solicitação do banco de dados.     |

### 6. Arquitetura do Projeto
O projeto segue o padrão MVC (Model-View-Controller) adaptado para API, garantindo organização e escalabilidade:

reciclabot/
├── src/
│   ├── controllers/   # Lógica das regras de negócio (CRUD)
│   ├── routes/        # Definição das rotas da API
│   ├── database/      # Configuração e conexão com SQLite
│   └── app.js         # Entrada da aplicação e config do servidor
├── .env               # Variáveis de ambiente (não versionado)
├── .gitignore         # Arquivos ignorados pelo Git
├── package.json       # Dependências e scripts
└── README.md          # Documentação

## 📝 Licença
O projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

Desenvolvido por Vinicius Ferreira como parte do Projeto de Extensão Universitária.