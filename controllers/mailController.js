const dotenv = require("dotenv").config();

const fetch = require("node-fetch");
const nodemailer = require("nodemailer");


const SECRET_KEY = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"; // chave de teste

const submit = async (req, res) => {
  const token = req.body["g-recaptcha-response"];
  const { nome, email, telefone, mensagem } = req.body;

  if (!token) return res.status(400).send("Por favor, confirme o reCAPTCHA.");

  const resposta = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${SECRET_KEY}&response=${token}`,
  });
  console.log("EMAIL_HOST:", process.env.EMAIL_HOST);
  const dados = await resposta.json();
  if (!dados.success) return res.status(403).send("Falha na verificação do reCAPTCHA.");

  console.log("EMAIL_HOST:", process.env.EMAIL_HOST);
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: `Memória Informática LTDA" <${process.env.EMAIL_USER}>`,
    to: "suporte@memoriainformatica.com.br",
    subject: "Nova solicitação de demonstração ERP",
   html: `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #2ecc71;">Nova solicitação de demonstração</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <p><strong>Mensagem:</strong></p>
    <div style="background:#f2f2f2;padding:10px;border-radius:5px;">
      ${mensagem}
    </div>
    <hr />
    <p style="font-size: 0.85em; color: #888;">Este e-mail foi gerado automaticamente pelo site.</p>
  </div>
`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Formulário enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).send("Erro ao enviar e-mail.");
  }
};

module.exports = { submit };