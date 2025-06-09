# 🌱 AgroVision - Soluções Tecnológicas para o Agronegócio

<div align="center">
  <img src="assets/img/LogoFooter.svg" alt="AgroVision Logo" width="200"/>
  
  [![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
</div>

## 📋 Sobre o Projeto

A **AgroVision** é um protótipo web desenvolvido como parte da **Fase 3** do curso de Engenharia de Software da FIAP. O projeto simula uma empresa de tecnologia especializada em soluções inovadoras para o agronegócio, apresentando serviços como monitoramento por satélite, análise de dados agrícolas e agricultura de precisão com drones.

### 🎯 Objetivo Acadêmico

Desenvolver uma interface web completa que demonstre:
- Navegabilidade intuitiva e responsiva
- Identidade visual coerente e profissional
- Validação de formulários com JavaScript
- Boas práticas de desenvolvimento frontend
- Layout moderno com Bootstrap 5

## ✨ Funcionalidades Principais

### 🏠 Página Inicial (Home)
- Hero section com vídeo de background
- Apresentação dos diferenciais da empresa
- Seção de tecnologias interativa com abas
- Estatísticas e resultados comprovados
- Depoimentos de clientes em carrossel
- Call-to-action para contato

### 👥 Sobre Nós
- História e missão da empresa
- Apresentação da equipe com fotos e perfis
- Valores e diferenciais competitivos
- Timeline de marcos da empresa

### 🔧 Serviços
- Detalhamento completo dos serviços oferecidos:
  - Monitoramento por satélite
  - Análise de dados agrícolas com IA
  - Agricultura de precisão com drones
- Soluções complementares (irrigação inteligente, previsão climática)
- Planos de preços (Básico, Avançado, Premium)
- FAQ interativo com accordion
- Depoimentos específicos de clientes

### 📞 Fale Conosco
- Formulário de contato com validação JavaScript completa
- Campos: nome, email, telefone, empresa, tipo de propriedade, mensagem
- Validação em tempo real e feedback visual
- Informações de contato e localização
- Mapa integrado do Google Maps

## 🛠️ Tecnologias e Ferramentas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **HTML5** | - | Estrutura semântica e acessível |
| **CSS3** | - | Estilização customizada e responsiva |
| **Bootstrap** | 5.1.3 | Framework CSS para layout responsivo |
| **JavaScript** | ES6+ | Interatividade e validação de formulários |
| **Bootstrap Icons** | 1.11.3 | Biblioteca de ícones |
| **Google Fonts** | - | Tipografia (Poppins, Roboto) |

### 📱 Características Técnicas

- **Responsivo**: Layout adaptável para desktop, tablet e mobile
- **Performance**: Otimizado com lazy loading e compressão de imagens
- **Acessibilidade**: Seguindo padrões WCAG para navegação inclusiva
- **SEO Friendly**: Estrutura HTML semântica e meta tags otimizadas
- **Cross-browser**: Compatível com navegadores modernos

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para carregar dependências do Bootstrap e fontes)

### 📋 Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/lucaslap/Agrovision.git
   ```

2. **Acesse o diretório do projeto**
   ```bash
   cd Agrovision
   ```

3. **Execute o projeto**
   
   **Opção 1: Navegador simples**
   - Clique duas vezes no arquivo `index.html`
   
   **Opção 2: Live Server (Recomendado)**
   - Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code
   - Clique com o botão direito em `index.html` → "Open with Live Server"
   - O projeto será aberto em `http://localhost:5500`

   **Opção 3: Python (se disponível)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Ou Python 2
   python -m SimpleHTTPServer 8000
   ```
   Acesse: `http://localhost:8000`

## 📁 Estrutura do Projeto

```
AgroVision/
├── 📄 index.html              # Página inicial
├── 📄 sobre.html              # Página sobre nós
├── 📄 servicos.html           # Página de serviços
├── 📄 contato.html            # Página de contato
├── 📁 assets/
│   ├── 📁 img/                # Imagens e logos
│   │   ├── logo.svg
│   │   ├── LogoFooter.svg
│   │   ├── Profile*.jpg       # Fotos da equipe
│   │   ├── depoimento*.png    # Fotos depoimentos
│   │   └── imgFeature*.jpg    # Imagens dos serviços
│   └── 📁 Videos/
│       └── bannervideo.mp4    # Vídeo do hero
├── 📁 css/
│   └── style.css              # Estilos customizados
├── 📁 js/
│   ├── main.js                # Scripts principais
│   └── contato.js             # Validação do formulário
├── 📄 README.md               # Este arquivo
└── 📄 LICENSE                 # Licença do projeto
```

## 🎨 Design e Layout

### Paleta de Cores
- **Primary**: `#2c7744` (Verde Escuro)
- **Secondary**: `#4caf50` (Verde Médio)
- **Accent**: `#8bc34a` (Verde Claro)
- **Text**: `#333` (Cinza Escuro)
- **Background**: `#f9f9f9` (Cinza Claro)

### Tipografia
- **Principal**: Poppins (400, 600, 700)
- **Secundária**: Roboto (400, 700)

### Componentes Visuais
- Navegação fixa com efeito blur
- Cards com sombras suaves
- Botões com gradientes e hover effects
- Animações CSS3 (typewriter, fade-in)
- Carrossel de depoimentos
- Formulários com validação visual

## 🔧 Funcionalidades JavaScript

### Validação de Formulário (`contato.js`)
```javascript
// Validação em tempo real
- Campos obrigatórios
- Formato de email
- Feedback visual imediato
- Prevenção de envio inválido
```

### Interatividade (`main.js`)
```javascript
// Recursos implementados
- Efeito typewriter no hero
- Navbar com scroll effect
- Accordion FAQ
- Carrossel de depoimentos
- Newsletter subscription
```

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Se você quiser sugerir melhorias, corrigir bugs ou adicionar novas funcionalidades, siga este guia:

### 🔄 Processo de Contribuição

1. **Fork o projeto**
   - Clique no botão "Fork" no GitHub
   - Clone seu fork localmente

2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/nome-da-sua-feature
   ```

3. **Faça suas alterações**
   - Implemente sua feature ou correção
   - Teste em diferentes navegadores e tamanhos de tela
   - Certifique-se de que o código está bem comentado

4. **Commit suas mudanças**
   ```bash
   git add .
   git commit -m "feat: adiciona nova funcionalidade"
   ```
   
   **Padrão de commits:**
   - `feat:` nova funcionalidade
   - `fix:` correção de bug
   - `docs:` documentação
   - `style:` formatação, estilos
   - `refactor:` refatoração de código
   - `test:` testes

5. **Push para seu fork**
   ```bash
   git push origin feature/nome-da-sua-feature
   ```

6. **Abra um Pull Request**
   - Vá para o repositório original no GitHub
   - Clique em "New Pull Request"
   - Descreva suas alterações detalhadamente

### 📋 Diretrizes de Contribuição

- Mantenha o código limpo e bem documentado
- Siga os padrões de nomenclatura existentes
- Teste em diferentes navegadores
- Otimize imagens antes de adicionar
- Mantenha a responsividade em todos os dispositivos

## 📱 Responsividade

O projeto foi desenvolvido com abordagem **Mobile First** e é totalmente responsivo:

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Funcionalidades Responsivas
- Navegação mobile com hamburger menu
- Grid system do Bootstrap adaptativo
- Imagens responsivas com lazy loading
- Tipografia escalável
- Cards que se adaptam ao tamanho da tela

## 🌟 Demonstração

### 📽️ Vídeo de Apresentação
[![Vídeo Demo](https://img.youtube.com/vi/KHW60BkhiLw/maxresdefault.jpg)](https://youtu.be/KHW60BkhiLw)

**No vídeo você verá:**
- Navegação completa pelas páginas
- Layout responsivo em ação
- Funcionalidades interativas
- Validação de formulários
- Design e identidade visual

### 🖼️ Principais Telas

#### Página Inicial
- Hero section com vídeo background
- Apresentação dos serviços
- Tecnologias com tabs interativas
- Depoimentos de clientes

#### Página de Serviços
- Detalhamento completo dos serviços
- Planos de preços
- FAQ com accordion
- Soluções complementares

#### Formulário de Contato
- Validação JavaScript completa
- Feedback visual imediato
- Campos obrigatórios e opcionais
- Integração com Google Maps

## 🎓 Contexto Acadêmico

### Disciplina: Engenharia de Software - FIAP
**Fase 3** - Desenvolvimento de Protótipo Web

### Objetivos de Aprendizado Alcançados
- ✅ Desenvolvimento de interface responsiva
- ✅ Implementação de validação de formulários
- ✅ Criação de identidade visual consistente
- ✅ Aplicação de boas práticas de UX/UI
- ✅ Estruturação de código limpo e organizado
- ✅ Utilização de frameworks modernos (Bootstrap)
- ✅ Implementação de interatividade com JavaScript

### Critérios de Avaliação Atendidos
- [x] Navegabilidade intuitiva
- [x] Design coerente e profissional
- [x] Formulário com validação
- [x] Responsividade completa
- [x] Código bem estruturado
- [x] Documentação adequada

## 👥 Equipe de Desenvolvimento

- Diego Motoike Kanamori
- Lucas Alves Pereira
- Victor Melo Peres
- Lara Hellen de Paula
- Joao Silva Portugal Guimarães

### 🔗 Links Úteis
- [🌐 Site do Projeto](https://lucaslap.github.io/Agrovision)
- [📹 Vídeo Demonstração](https://youtu.be/KHW60BkhiLw)
- [📝 Issues no GitHub](https://github.com/lucaslap/Agrovision/issues)
- [🔄 Pull Requests](https://github.com/lucaslap/Agrovision/pulls)
