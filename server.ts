import express, { Request, Response } from "express";
import { ITodo } from "./models";

const app = express();
const port = 3000;

app.use(express.json());

let todos: ITodo[] = [
  { id: 1, title: "Estudar TypeScript", completed: false },
  { id: 2, title: "Fazer API REST", completed: false }
];

app.get("/todos", (req: Request, res: Response) => {
  res.json(todos);
});

app.get("/todos/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Tarefa não encontrada" });
  }

  res.json(todo);
});

app.post("/todos", (req: Request, res: Response) => {
  const { id, title, description, completed } = req.body;

  if (!id || !title || typeof completed !== "boolean") {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  if (todos.find(t => t.id === id)) {
    return res.status(400).json({ message: "ID já existe" });
  }

  const newTodo: ITodo = { id, title, description, completed };
  todos.push(newTodo);

  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, description, completed } = req.body;

  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Tarefa não encontrada" });
  }

  if (title !== undefined) todos[index].title = title;
  if (description !== undefined) todos[index].description = description;
  if (completed !== undefined) todos[index].completed = completed;

  res.json(todos[index]);
});

app.delete("/todos/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Tarefa não encontrada" });
  }

  todos.splice(index, 1);
  res.json({ message: "Tarefa removida com sucesso" });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
