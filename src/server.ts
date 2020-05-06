import * as express from 'express';
import { createConnection, Connection } from 'typeorm'
import { ClienteRepositorio } from './Repository/Cliente-Repositorio';

const clienteRepo = new ClienteRepositorio()

createConnection().then(Connection=>({
    "type": "mysql",
    "host": "127.0.0.1",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "tienda",
    "entities": ["src/Entities/*.ts"]
})).catch(error => console.log(error));

const app = express();
app.use(express.json);

app.get('/customer', (req,res)=>{
    clienteRepo.obtenerListaClientes().then((resultado) => res.send(resultado));
})

app.get('/customer/:id', (req, res)=>{
    clienteRepo.obtenerCliente(req.params.id).then((resultado)=>res.send(resultado));
})

app.post('/customer', (req, res)=>{
    clienteRepo.crearcliente(req.body).then((resultado)=>res.send(resultado));
})

app.put('/customer/:id',(req, res)=>{
    clienteRepo.actualizarCliente(req.params.id, req.body).then(() => res.send('Ok - Updated'));
})

app.delete('/customer/:id', (req, res)=>{
    clienteRepo.eliminarCliente(req.params.id).then(() => res.send('Ok - Deleted'));
})

app.listen(3000, () =>{
    console.log('Ready on port 3000');
});