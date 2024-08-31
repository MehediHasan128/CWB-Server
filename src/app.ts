import express, { Application } from 'express';
import cors from 'cors';
import router from './app/routes';
import GLobalErrorHandelare from './app/middlwares/GlobalErrorHandelaer';
import NotFound from './app/middlwares/NotFound';
const app: Application = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

app.use('/api/v1', router)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(GLobalErrorHandelare)
app.use(NotFound)

export default app;
