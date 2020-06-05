import express from "express";
import routes from "./routes";
import path from "path";
import cors from "cors";

const app = express();

// Faz com que o Express entenda o corpo da requisição em formato JSON
app.use(express.json());
app.use(cors());

// Rota: endereço completo da requisição
// Recurso: qual a entidade estamos acessando do sistema

// GET: busca uma ou mais informações do backend
// POST: criar uma nova informação no backend
// PUT: atualizar uma informação existente no backend
// DELETE: Remover uma informação do backend

// POST http://localhost:3333/users -> Criar um usuário
// GET http://localhost:3333/users -> Listar usuários
// GET http://localhost:3333/users/5 -> Buscar dados do usuário com ID 5

// Request Params: parâmetros que vêm na própria rota que identificam um recurso. Geralmente são obrigatórios
// Query Params: parâmetros que vêm na própria rota geralmente opcionais para filtros e paginação
// Request Body: parâmetros para criação e atualização de informações

// const users = ["Diego", "Cleyton", "Robson", "Pedro"];

// app.get("/users", (request, response) => {
//   const search = String(request.query.search);
//   const filteredUsers = search
//     ? users.filter((user) => user.includes(search))
//     : users;
//   return response.json(filteredUsers);
// });

// app.get("/users/:id", (request, response) => {
//   const id = Number(request.params.id);
//   const user = users[id];
//   return response.json(user);
// });

// app.post("/users", (request, response) => {
//   const data = request.body;
//   const user = {
//     name: data.name,
//     email: data.email,
//   };
//   return response.json(user);
// });

app.use(routes);
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.listen(3333);
