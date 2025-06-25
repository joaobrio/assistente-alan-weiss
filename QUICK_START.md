# ⚡ Setup Rápido - 5 Minutos

> Coloque o Assistente Alan Weiss funcionando em menos de 5 minutos

## 🏃‍♂️ Quick Start

### 1. Clone o Repositório
```bash
git clone https://github.com/joaobrio/assistente-alan-weiss.git
cd assistente-alan-weiss
```

### 2. Instale Dependências
```bash
npm install
```

### 3. Configure API Anthropic
```bash
# Copie o template
cp .env.example .env

# Edite e adicione sua chave (obtenha em: https://console.anthropic.com/)
# No arquivo .env:
ANTHROPIC_API_KEY=sk-ant-sua_chave_aqui
```

### 4. Execute
```bash
npm run dev
```

### 5. Acesse
Abra http://localhost:3001 no navegador

✅ **Pronto!** O assistente já está funcionando.

---

## 🤖 Setup com Cursor AI (Recomendado)

### Prompt para Setup Automático:
```
@cursor Clone o repositório https://github.com/joaobrio/assistente-alan-weiss.git e configure automaticamente:

1. Instale todas as dependências
2. Crie arquivo .env baseado no template
3. Configure servidor de desenvolvimento
4. Teste se tudo funciona
5. Me dê um resumo do projeto

Depois que estiver funcionando, implemente essas melhorias:
- Sistema de histórico de conversas
- Dashboard de analytics básico
- Modo offline com respostas pré-programadas
- Deploy automatizado na Vercel
```

---

## 🌐 Deploy em 1 Clique

### Vercel (Recomendado):
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/joaobrio/assistente-alan-weiss)

**Não esqueça de configurar a variável `ANTHROPIC_API_KEY` no painel da Vercel!**

### Railway:
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/quick-start)

---

## 🎯 Cenários Já Configurados

O assistente vem com 6 cenários prontos:

1. **💰 Precificação de Projeto** - Como precificar baseado em valor
2. **🎯 Cliente Quer Pagar por Hora** - Como responder essa objeção  
3. **📈 Identificando Valor Real** - Como descobrir o verdadeiro valor
4. **👥 Comprador Econômico** - Identificar o decisor real
5. **💬 Primeira Reunião** - Como conduzir o primeiro encontro
6. **📋 Proposta de Valor** - Estruturar propostas completas

---

## 🔧 Personalização Rápida

### Modificar System Prompt:
Edite `server.js` linha ~20 para personalizar a metodologia.

### Adicionar Cenários:
Edite `public/index.html` linha ~30 para adicionar novos cenários.

### Mudar Visual:
Use classes Tailwind em `public/index.html` para personalizar cores e layout.

---

## 💰 Custos

- **Setup**: Gratuito
- **Uso leve**: $5-15/mês  
- **Uso intenso**: $20-50/mês

---

## 🆘 Problemas?

### API Desconectada?
1. Verifique se `ANTHROPIC_API_KEY` está no `.env`
2. Confirme que tem créditos na Anthropic
3. Reinicie o servidor: `Ctrl+C` e `npm run dev`

### Porta em Uso?
```bash
# Linux/Mac
kill -9 $(lsof -ti:3001)

# Windows  
netstat -ano | findstr :3001
taskkill /PID <PID> /F
```

### Outras Dúvidas?
- 📚 [Documentação Completa](README.md)
- 🤖 [Guia Cursor AI](docs/cursor-ai-guide.md)  
- 📖 [Metodologia Alan Weiss](docs/metodologia.md)
- 🔌 [API Reference](docs/api.md)

---

**🚀 Em 5 minutos suas sócias terão acesso ao "Agente Alan Weiss" 24/7!**