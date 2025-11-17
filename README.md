# 🌾 Agrovision

<div align="center">

![Agrovision Logo](./public/assets/img/logo.svg)

**Transformando o Agronegócio com Tecnologia de Ponta**

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.7-7952B3?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

</div>

---

## 📋 Sobre o Projeto

**Agrovision** é uma plataforma inovadora de agricultura de precisão que utiliza inteligência artificial, sensoriamento remoto e IoT para otimizar a produção agrícola. Nossa solução oferece monitoramento em tempo real, análise preditiva e insights acionáveis para maximizar a produtividade e sustentabilidade no campo.

### 🎯 Objetivos

- **Aumentar a Produtividade**: Até 35% de incremento na produção através de decisões baseadas em dados
- **Reduzir Custos**: Economia de até 40% em insumos agrícolas com aplicação precisa
- **Sustentabilidade**: Redução de 30% no uso de água e defensivos agrícolas
- **Tecnologia Acessível**: Democratizar o acesso à agricultura de precisão

---

## ✨ Funcionalidades

### 🛰️ Monitoramento por Satélite
- Imagens de satélite atualizadas
- Análise NDVI (Índice de Vegetação por Diferença Normalizada)
- Mapeamento térmico para detecção de stress hídrico
- Visualização RGB, NDVI e termal
- Detecção automática de anomalias nas lavouras

### 🤖 Inteligência Artificial
- Detecção precoce de pragas e doenças
- Previsão de produtividade por talhão
- Recomendações personalizadas de manejo
- Análise de solo automatizada
- Otimização de irrigação com IA

### 📊 Dashboard Interativo
- Métricas em tempo real
- Gráficos e visualizações dinâmicas
- Alertas e notificações inteligentes
- Histórico de dados e análise de tendências
- Relatórios customizáveis

### 🚁 Integração com Drones
- Mapeamento aéreo de alta resolução
- Pulverização precisa
- Monitoramento de áreas de difícil acesso
- Contagem de plantas via IA

### 🌡️ Sensores IoT
- Monitoramento de temperatura e umidade
- Sensores de solo em tempo real
- Estações meteorológicas conectadas
- Automação de irrigação

### 💬 Chatbot Inteligente
- Assistente virtual 24/7
- Suporte técnico automatizado
- Recomendações baseadas em histórico
- Interface conversacional natural

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca JavaScript para interfaces
- **Vite 7.1.0** - Build tool e dev server ultrarrápido
- **React Router DOM 7.8.0** - Navegação e roteamento
- **Framer Motion 12.23.12** - Animações fluidas e modernas
- **Bootstrap 5.3.7** - Framework CSS responsivo
- **Bootstrap Icons 1.13.1** - Biblioteca de ícones

### Mapas & Geolocalização
- **Leaflet 1.9.4** - Biblioteca de mapas interativos
- **React Leaflet 5.0.0** - Componentes React para Leaflet

### Autenticação
- **Clerk React 5.43.1** - Autenticação e gerenciamento de usuários

### Ferramentas de Desenvolvimento
- **ESLint 9.32.0** - Linter para qualidade de código
- **Vite Plugin React 4.7.0** - Plugin oficial React para Vite

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Git

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/lucaslap/Agrovision.git
cd Agrovision
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
# Crie um arquivo .env na raiz do projeto
cp .env.example .env
```

Adicione suas chaves de API:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
VITE_API_URL=your_api_url_here
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse a aplicação**
```
http://localhost:5173
```

---

## 🏗️ Estrutura do Projeto

```
Agrovision/
├── public/
│   └── assets/
│       ├── img/          # Imagens e ícones
│       └── Videos/       # Vídeos promocionais
├── src/
│   ├── components/
│   │   ├── About/        # Componentes da página Sobre
│   │   ├── Contact/      # Componentes da página Contato
│   │   ├── Demo/         # Demos interativas
│   │   │   ├── AIAnalysisDemo.jsx
│   │   │   ├── AnalyticsDemo.jsx
│   │   │   ├── DashboardDemo.jsx
│   │   │   ├── DroneDemo.jsx
│   │   │   └── SatelliteDemo.jsx
│   │   ├── Layout/       # Layout e estrutura
│   │   │   ├── Header/
│   │   │   └── Footer/
│   │   ├── Sections/     # Seções da home
│   │   └── Services/     # Componentes de serviços
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Sobre.jsx
│   │   ├── Servicos.jsx
│   │   ├── Contato.jsx
│   │   └── Demo.jsx
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Entry point
│   └── index.css         # Estilos globais
├── legacy/               # Versão HTML/CSS/JS anterior
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção

# Preview
npm run preview      # Visualiza build de produção localmente

# Lint
npm run lint         # Executa verificação de código
```

---

## 📱 Páginas e Rotas

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | Home | Página inicial com hero, features e call-to-action |
| `/sobre` | Sobre | Informações sobre a empresa, missão e equipe |
| `/servicos` | Serviços | Detalhes dos serviços oferecidos e planos |
| `/demo` | Demo | Demonstrações interativas das tecnologias |
| `/contato` | Contato | Formulário de contato e informações |

---

## 🎯 Funcionalidades por Página

### 🏠 Home
- Hero Section com vídeo background
- Features cards interativos
- Tecnologias utilizadas
- Estatísticas de impacto
- Depoimentos de clientes
- Calculadora de ROI
- Chatbot integrado

### 🌟 Demo
- Dashboard de monitoramento
- Análise de dados em tempo real
- Demo de IA para detecção de pragas
- Simulação de voo de drone
- Mapa satelital com NDVI
- Análise preditiva

### 🛠️ Serviços
- Serviços principais detalhados
- Planos e precificação
- Comparador de funcionalidades
- FAQ interativo
- Métricas de performance
- Depoimentos de clientes

### 👥 Sobre
- História da empresa
- Missão, visão e valores
- Equipe de desenvolvimento
- Diferenciais competitivos

### 📞 Contato
- Formulário de contato
- Métodos de comunicação
- Estatísticas de atendimento
- Informações de localização

---

## 🎨 Recursos Visuais

### Animações
- Transições suaves com Framer Motion
- Hover effects em cards e botões
- Scroll animations
- Loading states

### Responsividade
- Mobile-first design
- Breakpoints otimizados
- Imagens responsivas
- Menu hamburger em mobile

### Acessibilidade
- Semantic HTML
- ARIA labels
- Contraste de cores adequado
- Navegação por teclado

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Diretrizes de Contribuição
- Siga os padrões de código do projeto
- Adicione testes quando necessário
- Atualize a documentação
- Mantenha commits semânticos

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🚀 Roadmap

- [ ] Integração com API de dados meteorológicos
- [ ] App mobile (React Native)
- [ ] Sistema de notificações push
- [ ] Integração com sensores IoT reais
- [ ] Machine Learning para previsão de safra
- [ ] Marketplace de insumos
- [ ] Comunidade de agricultores

---
