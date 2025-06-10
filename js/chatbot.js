document.addEventListener("DOMContentLoaded", () => {
  // Elementos do chat
  const messagesContainer = document.getElementById("chat-messages");
  const userInputField = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");

  //Elementos do botão e janela de chat
  const fabButton = document.getElementById("fab-chat-button");
  const fabIcon = document.getElementById("fab-icon");
  const chatWindowContainer = document.getElementById("chat-window-container");
  const closeChatButton = document.getElementById("close-chat-btn");
  // Mensagem de demonstração do bot
  const botDemoMessage =
    "No momento estou apenas em fase de demonstração, obrigado por testar o meu funcionamento!";
  // URL do avatar do bot - substitua pelo URL da sua imagem
  const botAvatarUrl = "assets/img/agrobot.png";

  // Função para alternar a visibilidade da janela de chat
  function toggleChatWindow() {
    const isOpen = chatWindowContainer.classList.toggle("open");

    if (isOpen) {
      fabIcon.classList.remove("bi-chat-dots-fill");
      fabIcon.classList.add("bi-x-lg");
      fabButton.setAttribute("aria-label", "Fechar chat");
      setTimeout(() => {
        userInputField.focus();
        if (messagesContainer.children.length === 0) {
          addMessageToChat("Olá eu sou o assistente virtual AgroBot!", "bot");
          addMessageToChat(
            "Você possui alguma alguma dúvida sobre o funcionamento do nosso software?",
            "bot"
          );
        }
      }, 100);
    } else {
      fabIcon.classList.remove("bi-x-lg");
      fabIcon.classList.add("bi-chat-dots-fill");
      fabButton.setAttribute("aria-label", "Abrir chat");
    }
  }
  // Adiciona eventos para abrir/fechar o chat
  fabButton.addEventListener("click", toggleChatWindow);
  closeChatButton.addEventListener("click", toggleChatWindow);

  // Função para adicionar mensagem à tela
  function addMessageToChat(text, sender) {
    const messageRow = document.createElement("div");
    messageRow.classList.add("message-row", sender + "-message-row");

    const messageBubble = document.createElement("div");
    messageBubble.classList.add("message", sender + "-message");
    messageBubble.textContent = text;

    if (sender === "bot") {
      const avatarImg = document.createElement("img");
      avatarImg.src = botAvatarUrl;
      avatarImg.alt = "Avatar do Bot";
      avatarImg.classList.add("message-avatar");
      messageRow.appendChild(avatarImg); // Adiciona avatar antes do balão para o bot
    }

    messageRow.appendChild(messageBubble);
    messagesContainer.appendChild(messageRow);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Função para enviar mensagem do usuário
  function handleSendMessage() {
    const userText = userInputField.value.trim();

    if (userText !== "") {
      addMessageToChat(userText, "user");
      userInputField.value = "";
      setTimeout(() => {
        addMessageToChat(botDemoMessage, "bot");
      }, 700);
    }
  }

  sendButton.addEventListener("click", handleSendMessage);
  userInputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  });
});
