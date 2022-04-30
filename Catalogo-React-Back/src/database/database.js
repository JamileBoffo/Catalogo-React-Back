import mongoose from 'mongoose';
const remoteUrl = 'mongodb+srv://JBoffo:240819@reddragon.0l3cl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const localUrl = 'mongodb://localhost:27017/potions-db'

export function connectToDatabase() {
  mongoose
    .connect(`${remoteUrl}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Mongo funcionando');
    })
    .catch((err) => {
      return console.log(`Erro na conexão como DB: ${err}`);
    });
}


