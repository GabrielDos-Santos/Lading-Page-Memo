const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const path = require('path');
const env = require('dotenv').config();
const codigo = Math.floor(100000 + Math.random() * 900000);

const app = express();
const PORT = process.env.PORT || 3000;

const SECRET_KEY = "6LcDzCArAAAAAEaliOKuVljD3a7cvyJC7WfM9MYT"

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post("/submit", async (req, res) => {
    const token = req.body["g-recaptcha-response"];
    if (!token) {
        return res.status(400).send("Captcha não verificado. Tente novamente.");
    }

    const googleURL = `https://www.google.com/recaptcha/api/siteverify`;	
    const response  = await fetch(googleURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `secret=${SECRET_KEY}&response=${token}`
    });
    const data = await response.json();
    if (data.success) {
        console.log("Captcha verificado com sucesso!");
        res.status(200).send("Captcha verificado com sucesso!");
    } else {
        console.log("Erro ao verificar o captcha:", data["error-codes"]);
        res.status(400).send("Erro ao verificar o captcha. Tente novamente.");
    }

   

async function sendEmail() {
    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT), 
        secure: false,
        auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS      
        },
        tls: {
        rejectUnauthorized: false// Evita erro com certificados autoassinados
        }
});


    let mailOptions = {
        from: `"Memoria Informatica Ltda" <${process.env.EMAIL_USER}>`,
        to: 'dossantosgabriel@yahoo.com.br',
        subject: 'Confirmação de cadastro',
        text: `Olá! Seu código de verificação é:${codigo}` ,
};

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('E-mail enviado:', info.messageId);
    } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    }
}

sendEmail();
exports.codigo = codigo; // Exporta o código para uso em outros arquivos

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
})