# Julia Jonsson - Site Oficial

Site oficial de Julia Jonsson, campeã brasileira de tênis de 14 anos do Rio de Janeiro.

## 🚀 Tecnologia

- **HTML5** - Marcação semântica
- **CSS3** - Design responsivo moderno
- **Vanilla JavaScript** - Sem dependências
- **Vercel** - Hospedagem e Serverless Functions
- **Resend** - Envio de emails do formulário de contato

## 📁 Estrutura do Projeto

```
julia-site/
├── index.html              # Página inicial
├── about.html              # Sobre Julia
├── achievements.html       # Conquistas
├── partners.html           # Parcerias
├── gallery.html            # Galeria de fotos
├── contact.html            # Contato
├── 404.html                # Página de erro
├── assets/
│   ├── css/
│   │   └── styles.css      # Todos os estilos
│   ├── js/
│   │   └── main.js         # JavaScript principal
│   ├── images/             # Imagens do site
│   └── docs/               # Media kit e documentos
├── api/
│   └── contact.js          # Serverless function para contato
├── vercel.json             # Configuração do Vercel
└── package.json            # Dependências (Resend)
```

## 🔧 Configuração Local

1. Clone o repositório:
```bash
git clone https://github.com/Johan-Jo/julia-site.git
cd julia-site
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente no Vercel:
   - `RESEND_API_KEY` - Sua chave da API Resend

4. Para testar localmente:
```bash
npx vercel dev
```

## 📧 Formulário de Contato

O formulário de contato usa:
- **Resend** para envio de emails
- **Vercel Serverless Function** (`/api/contact`)
- Emails enviados de: `onboarding@resend.dev`
- Emails recebidos em: `oi@johan.com.br`

## 🌐 Deploy

O site é automaticamente deployado no Vercel quando você faz push para a branch `main`.

**URL de Produção**: [julia-site.vercel.app](https://julia-site-du3zlzhfa-johans-projects-4b909657.vercel.app)

## 📱 Funcionalidades

- ✅ Design 100% responsivo
- ✅ Navegação mobile otimizada
- ✅ Galeria de imagens com filtros
- ✅ Formulário de contato funcional
- ✅ Mensagens de sucesso/erro
- ✅ Validação de formulário
- ✅ SEO otimizado
- ✅ Acessibilidade (ARIA labels, alt text)
- ✅ Performance otimizada

## 🎨 Design

- **Fonte Títulos**: Poppins (600, 700, 800)
- **Fonte Corpo**: Inter (300, 400, 500, 600, 700)
- **Cores Principais**: Azul (#0066cc) e Cinza Escuro (#1a1a1a)
- **Layout**: Mobile-first, responsivo

## 📄 Idioma

Site em **Português** (Brasil)

## 👥 Contato

**Johan Jonsson** - Gerente
- 📱 +55 11 99926-0051
- 📧 oi@johan.com.br
- 📍 Rio de Janeiro (Ipanema), Brasil

## 📝 Licença

© 2025 Julia Jonsson. Todos os direitos reservados.
