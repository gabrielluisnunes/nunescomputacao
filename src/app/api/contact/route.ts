import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_PORT === '465', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const { name, email, phone, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Erro: Nome, e-mail e mensagem são obrigatórios.' },
        { status: 400 }
      );
    }
    
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `NOVO CONTATO WEB - ${name}`,
      html: `
        <h2>Nova Solicitação de Contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone/WhatsApp:</strong> ${phone || 'Não fornecido'}</p>
        <hr>
        <h3>Mensagem:</h3>
        <p style="white-space: pre-wrap; font-style: italic;">${message}</p>
        <hr>
        <small>E-mail enviado automaticamente através do formulário do site.</small>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao processar envio de e-mail:', error);
    
    return NextResponse.json(
      { message: 'Erro interno do servidor ao enviar a mensagem.' },
      { status: 500 }
    );
  }
}