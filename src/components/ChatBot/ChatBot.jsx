/**
 * Componente: Chatbot
 * Descrição: Componente para o assistente virtual.
 */
const Chatbot = () => {
    return (
        <>
            <div id="chat-window-container">
                <div className="card shadow-lg">
                    <div id="chat-header" className="card-header bg-success text-white d-flex justify-content-between align-items-center p-3">
                        <div className="d-flex align-items-center">
                            <h5 className="mb-0 text-white">Assistente Virtual AgroBot</h5>
                        </div>
                        <button id="close-chat-btn" type="button" className="btn-close btn-close-white" aria-label="Fechar"></button>
                    </div>
                    <div id="chat-messages" className="card-body"></div>
                    <div id="chat-input-area" className="card-footer d-flex align-items-center p-2">
                        <input type="text" id="user-input" className="form-control me-2" placeholder="Digite sua mensagem..." />
                        <button id="send-button" className="btn btn-success">
                            <i className="bi bi-send-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
            <button id="fab-chat-button" className="btn btn-success btn-lg rounded-circle" type="button" aria-label="Abrir chat">
                <i id="fab-icon" className="bi bi-chat-dots-fill"></i>
            </button>
        </>
    );
};
