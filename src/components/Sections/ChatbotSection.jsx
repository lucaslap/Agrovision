import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ChatbotSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Olá! Sou o AgroBot, seu assistente virtual da AgroVision. Como posso ajudá-lo hoje?",
      isBot: true,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickResponses = [
    "Quais são os seus serviços?",
    "Como funciona o monitoramento por satélite?",
    "Preços das soluções",
    "Agendar demonstração"
  ];

  const botResponses = {
    "quais são os seus serviços": "Oferecemos três principais serviços: 1️⃣ Monitoramento por Satélite com análise NDVI, 2️⃣ Análise de Dados Agrícolas com IA, e 3️⃣ Agricultura de Precisão com drones. Gostaria de saber mais sobre algum específico?",
    "como funciona o monitoramento por satélite": "Nosso monitoramento utiliza imagens de satélite de alta resolução para analisar índices de vegetação (NDVI), detectar problemas precocemente e mapear sua propriedade. Você recebe relatórios em tempo real sobre o desenvolvimento das culturas.",
    "preços das soluções": "Nossos planos começam em R$ 50 por hectare/ano. Temos três modalidades: Básico, Avançado e Premium. Para um orçamento personalizado, posso conectá-lo com nossa equipe comercial. Gostaria?",
    "agendar demonstração": "Perfeito! Para agendar uma demonstração gratuita, você pode: 📞 Ligar para (11) 1234-5678, 📧 Enviar email para contato@agrovision.com, ou 🌐 Preencher o formulário na página de contato. Qual opção prefere?",
    "ola": "Olá! Seja bem-vindo à AgroVision! 🌱 Estou aqui para ajudá-lo com informações sobre nossas soluções tecnológicas para o agronegócio. O que gostaria de saber?",
    "obrigado": "De nada! Foi um prazer ajudá-lo! 😊 Se tiver mais dúvidas sobre nossas soluções agrícolas, estarei sempre aqui. Tenha um ótimo dia!",
    "default": "Entendo sua pergunta! Para informações mais detalhadas, recomendo entrar em contato com nossa equipe especializada através do telefone (11) 1234-5678 ou email contato@agrovision.com. Eles poderão ajudá-lo melhor! 🚀"
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simular resposta do bot
    setTimeout(() => {
      const messageKey = inputMessage.toLowerCase();
      let botResponse = botResponses.default;

      for (const key in botResponses) {
        if (messageKey.includes(key)) {
          botResponse = botResponses[key];
          break;
        }
      }

      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickResponse = (response) => {
    setInputMessage(response);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages) {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Chat Window */}
      <motion.div
        id="chat-window-container"
        className={`chat-window ${isOpen ? 'open' : ''}`}
        initial={false}
        animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div className="card shadow-lg">
          <div className="card-header bg-success text-white d-flex justify-content-between align-items-center p-3">
            <div className="d-flex align-items-center">
              <div className="chat-avatar me-2">
                <i className="bi bi-robot"></i>
              </div>
              <div>
                <h5 className="mb-0 text-white">AgroBot</h5>
                <small className="text-white-50">Assistente Virtual</small>
              </div>
            </div>
            <motion.button
              onClick={toggleChat}
              className="btn-close btn-close-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </div>
          
          <div id="chat-messages" className="card-body chat-messages">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="message-content">
                  <p>{message.text}</p>
                  <small className="message-time">{message.time}</small>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                className="message bot-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </motion.div>
            )}
            
            {messages.length === 1 && (
              <div className="quick-responses mt-3">
                <p className="small text-muted mb-2">Respostas rápidas:</p>
                {quickResponses.map((response, index) => (
                  <motion.button
                    key={index}
                    className="btn btn-outline-success btn-sm me-2 mb-2"
                    onClick={() => handleQuickResponse(response)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {response}
                  </motion.button>
                ))}
              </div>
            )}
          </div>
          
          <div className="card-footer d-flex align-items-center p-2">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Digite sua mensagem..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <motion.button
              className="btn btn-success"
              onClick={handleSendMessage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={!inputMessage.trim()}
            >
              <i className="bi bi-send-fill"></i>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Floating Action Button */}
      <motion.button
        id="fab-chat-button"
        className="btn btn-success btn-lg rounded-circle fab-chat"
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.i
          className={`bi ${isOpen ? 'bi-x-lg' : 'bi-chat-dots-fill'}`}
          key={isOpen ? 'close' : 'chat'}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>
    </>
  );
};

export default ChatbotSection;
