import express from 'express';
import cors from 'cors';

import router from './src/routes/potion.route.js';

import connectToDatabase from './src/database/database.js';

const port = 3333;

const app = express();

connectToDatabase();
app.use(express.json());
app.use(cors());
app.use('/potions', router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
