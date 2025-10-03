import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validação básica
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    // Enviar email via Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'oi@johan.com.br',
      subject: `[Julia Site] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #0066cc, #1a1a1a);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border: 1px solid #e0e0e0;
                border-top: none;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #0066cc;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                background: white;
                padding: 12px;
                border-radius: 4px;
                border: 1px solid #e0e0e0;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 4px;
                border-left: 4px solid #0066cc;
                margin-top: 10px;
                white-space: pre-wrap;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
                color: #666;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0;">Nova Mensagem de Contato</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Site Julia Jonsson</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Nome:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <span class="label">Assunto:</span>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <span class="label">Mensagem:</span>
                <div class="message-box">${message}</div>
              </div>
              <div class="footer">
                <p>Para responder, envie um email para: <a href="mailto:${email}">${email}</a></p>
              </div>
            </div>
          </body>
        </html>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ error: error.message || 'Erro ao enviar email' });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Mensagem enviada com sucesso!',
      id: data?.id 
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

