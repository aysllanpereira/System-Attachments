
const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());
// app.request()

app.post('/', (req, res) => {
    const { nome, cpf, endereco, turno, curso, numeroTurma } = req.body;
    res.json({status: 'ok'});
    console.log(`Recebidos! ${nome, cpf, endereco, turno, curso, numeroTurma}`);
    res.send('ok');
});

app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${port}`);
})