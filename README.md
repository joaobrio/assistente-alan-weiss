# 🧠 Assistente Alan Weiss - Consultoria Estratégica

> Assistente de IA baseado na metodologia Alan Weiss para ajudar equipes na transição de modelo de agência para consultoria baseada em valor.

## 🎯 Objetivo

Este assistente foi criado para acelerar a transição de mentalidade das consultoras, de operação de agência para consultoria estratégica baseada em valor. Sempre que surgirem dúvidas sobre clientes, precificação ou abordagem, elas podem consultar o "Agente Alan Weiss".

## ✨ Funcionalidades

- 💬 **Chat Inteligente**: Conversa natural com metodologia Alan Weiss
- 🎯 **Cenários Rápidos**: 6 situações comuns pré-configuradas
- 💡 **Respostas Contextualizadas**: Foco em quebrar mentalidades limitantes
- 🔄 **Histórico de Conversa**: Mantém contexto durante a sessão
- 📱 **Interface Responsiva**: Funciona em desktop e mobile

## 🚀 Quick Start

### 1. Pré-requisitos
- Node.js 16+ ([Download](https://nodejs.org/))
- Chave API da Anthropic ([Obter aqui](https://console.anthropic.com/))

### 2. Instalação
```bash
git clone https://github.com/joaobrio/assistente-alan-weiss.git
cd assistente-alan-weiss
npm install
```

### 3. Configuração
```bash
# Copie o template de configuração
cp .env.example .env

# Edite o arquivo .env e adicione sua chave da API
ANTHROPIC_API_KEY=sk-ant-sua_chave_aqui
PORT=3001
```

### 4. Executar
```bash
# Desenvolvimento (com auto-reload)
npm run dev

# Produção
npm start
```

Acesse: http://localhost:3001

## 🎯 Cenários Rápidos Incluídos

1. **Precificação de Projeto** - Como precificar baseado em valor
2. **Cliente Quer Pagar por Hora** - Como responder essa objeção
3. **Identificando Valor Real** - Como descobrir o verdadeiro valor
4. **Comprador Econômico** - Identificar o decisor real
5. **Primeira Reunião** - Como conduzir o primeiro encontro
6. **Proposta de Valor** - Estruturar uma proposta completa

## 🏗️ Arquitetura

```
├── server.js          # Backend Express + Anthropic API
├── package.json       # Dependências e scripts
├── .env              # Configurações (não commitado)
├── public/           # Frontend estático
│   └── index.html    # App React via CDN
└── docs/            # Documentação adicional
```

## 🔧 Desenvolvido com

- **Backend**: Node.js + Express
- **Frontend**: React (via CDN) + Tailwind CSS
- **IA**: Anthropic Claude API
- **Metodologia**: Alan Weiss - "A Bíblia da Consultoria"

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
# Configure ANTHROPIC_API_KEY nas variáveis de ambiente
```

### Heroku
```bash
heroku create seu-app-name
heroku config:set ANTHROPIC_API_KEY=sua_chave
git push heroku main
```

## 💰 Custos Estimados

- **Setup**: Gratuito (créditos iniciais Anthropic)
- **Uso leve**: $5-20/mês para equipe pequena
- **Uso intenso**: $20-100/mês

## 🤖 Usando com Cursor AI

Este projeto foi otimizado para uso com Cursor AI:

```
@cursor Clone este repo e implemente melhorias:
- Sistema de histórico persistente
- Dashboard de analytics
- Modo offline com respostas pré-programadas
- Autenticação simples
```

## 📚 Metodologia Alan Weiss

### Princípios Fundamentais
- Valor precede honorários
- ROI mínimo de 10:1 para clientes
- Foco no comprador econômico
- Objetivos → Métricas → Valor
- Relacionamentos > Vendas

### Frameworks Utilizados
- Sistema O-M-V (Objetivos-Métricas-Valor)
- Curva de Aceleração
- Pirâmide de Confiança
- Propostas de 2,5 páginas

## 🛠️ Customização

### Modificar System Prompt
Edite a variável `SYSTEM_PROMPT` em `server.js`

### Adicionar Cenários
Modifique o array `QUICK_SCENARIOS` em `public/index.html`

### Personalizar Interface
Edite os estilos Tailwind em `public/index.html`

## 🐛 Troubleshooting

### API Desconectada
- ✅ Verifique se `ANTHROPIC_API_KEY` está no `.env`
- ✅ Reinicie o servidor
- ✅ Teste a chave em console.anthropic.com

### Módulos não encontrados
```bash
npm install
```

### Porta em uso
```bash
# Linux/Mac
kill -9 $(lsof -ti:3001)

# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👥 Equipe

- **Desenvolvimento**: [@joaobrio](https://github.com/joaobrio)
- **Metodologia**: Alan Weiss - "A Bíblia da Consultoria"
- **IA**: Anthropic Claude

---

🚀 **Acelere a transição da sua equipe para consultoria baseada em valor!**