# ♻️ ReciclaBot

> A RESTful API developed to optimize the service and management process for collecting recyclable materials.

![Badge License](https://img.shields.io/badge/license-MIT-green)
![Badge Node](https://img.shields.io/badge/Node.js-v24+-green)

## 📌 About the Project

The **ReciclaBot** is a University Extension Project focused on the topic **ESG (Environmental, Social, Governance)**. The main objective is to provide a backend technological solution for recycling cooperatives, replacing manual scheduling (spreadsheets/paper) with an automated digital system.

This API serves as the "brain" for a future Chatbot, allowing register, list, update and delete collection requests in a fast and organized manner.

---

## 🚀 Technologies Used

The project was developed using the following tools and libraries:

* **[Node.js](https://nodejs.org/):** JavaScript runtime environment.
* **[Express](https://expressjs.com/):** Framework for building API.
* **[SQLite3](https://www.sqlite.org/):** Lightweight relational database (Serverless) for data persistence.
* **[Dotenv](https://www.npmjs.com/package/dotenv):** Environment variable management.
* **[Helmet](https://helmetjs.github.io/):** Security Middleware for API protection.

---

## ⚙️ Prerequisites

Before begin, you will need to install in your machine:
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/) (version 24 or higher is recommended)
* A HTTP requests client (ex: [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/))

---

## 🔧 Installation and Configuration

Follow the steps below to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/fervinicius/reciclabot.git
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a file `.env` in the project root and add the following variables:
```
PORT=3000
DB_NAME=nome_do_banco_de_dados.db
NODE_ENV=development
```

### 4. Start the Server
```bash
npm start
```
The server will be running on `http://localhost:3000` (or at the port where you definined the file `.env`).

### 5. API Documentation
| Method | Endpoint           | Description                                   |
|--------|--------------------|-----------------------------------------------|
| GET    | /api/coletas       | List all the collecting requests.             |
| POST   | /api/coletas       | Registers a new request.                      |
| PUT    | /api/coletas/:id   | Updates the status of an existing collecting. |
| DELETE | /api/coletas/:id   | Deletes a request from the database.          |

### 6. Project Architecture
The project follows MVC Pattern (Model-View-Controller) adapted for API, ensuring organization and scalability:

reciclabot/
├── src/
│   ├── controllers/   # Business rules logic (CRUD)
│   ├── routes/        # Definition the API routes
│   ├── database/      # Configuration and connection to SQLite
│   └── app.js         # Application's input and server config
├── .env               # Environment Variables (not versionated)
├── .gitignore         # Files ignored by Git
├── package.json       # Dependencies and scripts
└── README.md          # Documentation

## 📝 License
The project is licensed by MIT. See the file [LICENSE](LICENSE) for more details.

Developed by Vinicius Ferreira as part of a University Extension Project.