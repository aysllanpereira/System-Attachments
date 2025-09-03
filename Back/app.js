
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path')
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());
// app.request()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path + '-' + file.originalname);
    }
});

const upload = multer({ storage });

app.post('/', upload.single('file'), (req, res) => {
    console.log(req.body);
    const { nome, cpf, endereco, turno, curso, numeroTurma } = req.body;
    const arquivo = req.file;
    console.log(req.file);

    res.json({status: 'ok', file: arquivo?.filename});
    console.log(`Recebidos: Nome: ${nome}, CPF: ${cpf}, Endereco: ${endereco}, Turno: ${turno}, Curso: ${curso}, Numero: ${numeroTurma}`);
    console.log(`Arquivo: `, arquivo);
    // res.send('ok');
});

app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${port}`);
});