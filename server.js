const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// System Prompt do Alan Weiss
const SYSTEM_PROMPT = `Você é um Consultor Estratégico Sênior especializado na metodologia de Alan Weiss para consultoria baseada em valor. Com profundo conhecimento dos princípios de "A Bíblia da Consultoria", você auxilia consultores independentes e donos de boutiques de consultoria a construir negócios lucrativos e sustentáveis.

FILOSOFIA FUNDAMENTAL:
- Consultoria é negócio de marketing e relacionamentos, não de venda de tempo
- Valor precede honorários, não o contrário
- Clientes sabem o que querem, mas raramente o que precisam
- O objetivo é melhorar as condições do cliente de forma sustentável
- ROI mínimo de 10:1 para clientes

FRAMEWORKS PRINCIPAIS:
- Sistema O-M-V: Objetivos → Métricas → Valor
- Curva de Aceleração: baixa barreira/baixo valor para alta intimidade/alto valor
- Pirâmide de Confiança: cinco níveis de construção de relacionamento
- Propostas de 2,5 páginas com opções afirmativas

PRINCÍPIOS INEGOCIÁVEIS:
- Nunca recomendar cobrança por hora
- Sempre priorizar valor sobre volume
- Focar no comprador econômico verdadeiro
- Rejeitar oportunidades inadequadas rapidamente

IMPORTANTE: Você está ajudando consultoras que estão fazendo a transição de um modelo de agência (cobrança por hora, foco em operação) para consultoria estratégica baseada em valor. Seja direto, pragmático e focado em quebrar mentalidades limitantes.`;

// Função para chamar a API da Anthropic
async function callAnthropicAPI(messages) {
  const API_KEY = process.env.ANTHROPIC_API_KEY;
  
  if (!API_KEY) {
    throw new Error('ANTHROPIC_API_KEY não configurada no arquivo .env');
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: messages.map(msg => ({
          role: msg.role === 'assistant' ? 'assistant' : 'user',
          content: msg.content
        }))
      })
    });

    if (!response.ok) {
      throw new Error(`Erro na API da Anthropic: ${response.status}`);
    }

    const data = await response.json();
    return data.content[0].text;
  } catch (error) {
    console.error('Erro ao chamar API da Anthropic:', error);
    throw error;
  }
}

// Rotas da API

// Rota de health check
app.get('/api/health', (req, res) => {
  const hasApiKey = !!process.env.ANTHROPIC_API_KEY;
  res.json({ 
    status: hasApiKey ? 'ok' : 'error',
    message: hasApiKey ? 'API configurada' : 'ANTHROPIC_API_KEY não encontrada'
  });
});

// Rota principal do chat
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array é obrigatório' });
    }

    // Filtrar apenas mensagens do usuário e assistente
    const validMessages = messages.filter(msg => 
      msg.role && msg.content && ['user', 'assistant'].includes(msg.role)
    );

    if (validMessages.length === 0) {
      return res.status(400).json({ error: 'Nenhuma mensagem válida encontrada' });
    }

    const response = await callAnthropicAPI(validMessages);
    
    res.json({ response });
  } catch (error) {
    console.error('Erro no endpoint /api/chat:', error);
    res.status(500).json({ 
      error: 'Erro interno do servidor',
      details: error.message 
    });
  }
});

// Servir o frontend em produção
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🤖 Assistente Alan Weiss: http://localhost:${PORT}`);
  
  if (!process.env.ANTHROPIC_API_KEY) {
    console.log('⚠️  AVISO: ANTHROPIC_API_KEY não configurada!');
    console.log('💡 Crie um arquivo .env com: ANTHROPIC_API_KEY=sua_chave_aqui');
  }
});