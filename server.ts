import express, {Request, Response} from 'express';
import { IUser } from './interfaces/IUser';

const app = express();
app.use(express.json());

let users: IUser[] = [
    { id: 1, name: "João", email: "joao@email.com" },
    { id: 2, name: "Maria", email: "maria@email.com" },
  ];

app.get('/users', (req: Request, res: Response<IUser[]>)=>{
    res.json(users);
});

app.get('/users/:id', (req: Request<{ id: string }>, res: Response<IUser | { message: string }>) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
  
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
  
    res.json(user);
  });

  app.post('/users', (req: Request<{}, {}, IUser>, res: Response<IUser | { message: string }>) => {
    const { id, name, email } = req.body;
  
    if (!id || !name || !email) {
      return res.status(400).json({ message: 'Dados inválidos' });
    }
  
    const exists = users.some(u => u.id === id);
    if (exists) {
      return res.status(409).json({ message: 'Usuário com esse ID já existe' });
    }
  
    const newUser: IUser = { id, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  });

  app.put('/users/:id', (req: Request<{ id: string }, {}, Partial<IUser>>, res: Response<IUser | { message: string }>) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
  
    if (index === -1) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
  
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  });

  app.delete('/users/:id', (req: Request<{ id: string }>, res: Response<{ message: string }>) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
  
    if (index === -1) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
  
    users.splice(index, 1);
    res.json({ message: 'Usuário removido com sucesso' });
  });

  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });