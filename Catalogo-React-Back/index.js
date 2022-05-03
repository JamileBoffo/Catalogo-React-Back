import express from 'express';
import cors from 'cors';

import {router} from './src/routes/potion.route.js';

import {connectToDatabase} from './src/database/database.js';

const port = 3333;

const app = express();
app.use(express.json());
connectToDatabase();
app.use(cors());
app.use('/potions', router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
