import React, { useState, useRef, useEffect } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I'm Tescra's AI assistant. How can I help you today?",
      sender: 'bot',
      time: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  
  // NEW: Refs for click outside functionality
  const chatWindowRef = useRef(null);
  const chatButtonRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  // NEW: Handle click outside to close chat
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside chat window and not on chat button
      if (
        isOpen && 
        chatWindowRef.current && 
        !chatWindowRef.current.contains(event.target) &&
        chatButtonRef.current &&
        !chatButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener when chat is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // NEW: Handle ESC key to close chat
  useEffect(() => {
    const handleEscKey = (event) => {
      if (isOpen && event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  // Bot responses based on user input
  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hello! Welcome to Tescra. How can I assist you today?";
    }
    else if (msg.includes('service') || msg.includes('solution')) {
      return "We offer AI solutions, Cloud Computing, Data Analytics, Cybersecurity, DevOps, and Digital Transformation services. Which one interests you?";
    }
    else if (msg.includes('ai') || msg.includes('artificial intelligence')) {
      return "Our AI solutions include machine learning, generative AI, computer vision, and intelligent automation. Would you like to schedule a demo?";
    }
    else if (msg.includes('cloud')) {
      return "We provide cloud migration, cloud-native development, and multi-cloud management across AWS, Azure, and GCP. Need specific details?";
    }
    else if (msg.includes('price') || msg.includes('cost') || msg.includes('pricing')) {
      return "Our pricing is customized based on your specific requirements. Could you share your project details so we can provide an accurate quote?";
    }
    else if (msg.includes('contact') || msg.includes('reach')) {
      return "You can reach us at info@tescra.com, call +1 (555) 123-4567, or fill out the contact form on our website. Would you like me to connect you with a sales representative?";
    }
    else if (msg.includes('demo')) {
      return "I'd be happy to schedule a demo for you! Please share your name, email, and preferred date/time, and our team will reach out to you.";
    }
    else if (msg.includes('career') || msg.includes('job')) {
      return "Visit our Careers page at www.tescra.com/careers to view current openings. You can also email your resume to careers@tescra.com";
    }
    else if (msg.includes('thank')) {
      return "You're welcome! 😊 Is there anything else I can help you with?";
    }
    else if (msg.includes('bye') || msg.includes('goodbye')) {
      return "Thank you for chatting with us! Have a great day! 👋";
    }
    else {
      return "Thank you for your message. Our team will get back to you shortly. For immediate assistance, please call us at +1 (555) 123-4567 or email info@tescra.com";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        time: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // NEW: Toggle chat function (opens/closes when clicking the button)
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const quickReplies = [
    "Our Services",
    "Pricing Info",
    "Schedule Demo",
    "Contact Support"
  ];

  return (
    <>
      {/* Chat Button - MODIFIED: Added ref and toggleChat */}
      <button 
        ref={chatButtonRef}
        className={`chat-button ${isOpen ? 'hidden' : ''}`}
        onClick={toggleChat}
      >
        <div className="chat-icon">
          <i className="fas fa-comment-dots"></i>
        </div>
        <div className="chat-pulse"></div>
      </button>

      {/* Chat Window - MODIFIED: Added ref */}
      <div 
        ref={chatWindowRef}
        className={`chat-window ${isOpen ? 'open' : ''}`}
      >
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar">
              <i className="fas fa-robot"></i>
            </div>
            <div>
              <h3>Tescra Assistant</h3>
              <p>Online • Usually replies instantly</p>
            </div>
          </div>
          {/* MODIFIED: Close button also uses toggleChat */}
          <button className="chat-close" onClick={toggleChat}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-content">
                {message.sender === 'bot' && (
                  <div className="message-avatar">
                    <i className="fas fa-robot"></i>
                  </div>
                )}
                <div className="message-bubble">
                  <p>{message.text}</p>
                  <span className="message-time">{message.time}</span>
                </div>
                {message.sender === 'user' && (
                  <div className="message-avatar user-avatar">
                    <i className="fas fa-user"></i>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot">
              <div className="message-content">
                <div className="message-avatar">
                  <i className="fas fa-robot"></i>
                </div>
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {quickReplies.length > 0 && !isTyping && messages.length > 1 && (
          <div className="quick-replies">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                className="quick-reply-btn"
                onClick={() => {
                  setInputMessage(reply);
                  setTimeout(() => handleSendMessage(), 100);
                }}
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        <div className="chat-input">
          <textarea
            ref={inputRef}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            rows="1"
          />
          <button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>

      <style>{`
        /* Chat Button */
        .chat-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border: none;
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .chat-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
        
        .chat-button.hidden {
          display: none;
        }
        
        .chat-icon {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: white;
        }
        
        .chat-pulse {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(43, 203, 186, 0.6);
          animation: pulse 1.5s infinite;
          z-index: -1;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        /* Chat Window */
        .chat-window {
          position: fixed;
          bottom: 85px;
          right: 20px;
          width: 350px;
          height: 420px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transform: scale(0);
          opacity: 0;
          transform-origin: bottom right;
          transition: all 0.3s ease;
          z-index: 1000;
        }
        
        .chat-window.open {
          transform: scale(1);
          opacity: 1;
        }
        
        /* Chat Header */
        .chat-header {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .chat-avatar {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
        
        .chat-header-info h3 {
          font-size: 16px;
          margin: 0;
        }
        
        .chat-header-info p {
          font-size: 12px;
          margin: 2px 0 0;
          opacity: 0.8;
        }
        
        .chat-close {
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .chat-close:hover {
          background: rgba(255,255,255,0.3);
          transform: rotate(90deg);
        }
        
        /* Chat Messages */
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          background: #f8f9fa;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .chat-messages::-webkit-scrollbar {
          width: 5px;
        }
        
        .chat-messages::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        .chat-messages::-webkit-scrollbar-thumb {
          background: var(--primary);
          border-radius: 5px;
        }
        
        .message {
          display: flex;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .message.user {
          justify-content: flex-end;
        }
        
        .message-content {
          display: flex;
          gap: 10px;
          max-width: 80%;
        }
        
        .message.user .message-content {
          flex-direction: row-reverse;
        }
        
        .message-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          flex-shrink: 0;
        }
        
        .user-avatar {
          background: linear-gradient(135deg, #667eea, #764ba2);
        }
        
        .message-bubble {
          background: white;
          padding: 10px 14px;
          border-radius: 18px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        
        .message.user .message-bubble {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
        }
        
        .message-bubble p {
          margin: 0;
          font-size: 14px;
          line-height: 1.4;
        }
        
        .message-time {
          font-size: 10px;
          color: #999;
          display: block;
          margin-top: 4px;
        }
        
        .message.user .message-time {
          color: rgba(255,255,255,0.7);
        }
        
        /* Typing Indicator */
        .typing-indicator {
          background: white;
          padding: 12px 16px;
          border-radius: 18px;
          display: flex;
          gap: 4px;
        }
        
        .typing-indicator span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #999;
          animation: typing 1.4s infinite;
        }
        
        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }
        
        /* Quick Replies */
        .quick-replies {
          padding: 12px 20px;
          background: white;
          border-top: 1px solid #eee;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        
        .quick-reply-btn {
          padding: 6px 14px;
          background: #f0f4f9;
          border: none;
          border-radius: 20px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--primary);
        }
        
        .quick-reply-btn:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
        }
        
        /* Chat Input */
        .chat-input {
          padding: 16px 20px;
          background: white;
          border-top: 1px solid #eee;
          display: flex;
          gap: 10px;
          align-items: flex-end;
        }
        
        .chat-input textarea {
          flex: 1;
          border: 1px solid #e0e0e0;
          border-radius: 20px;
          padding: 10px 16px;
          font-family: inherit;
          font-size: 14px;
          resize: none;
          max-height: 100px;
          outline: none;
          transition: border-color 0.3s ease;
        }
        
        .chat-input textarea:focus {
          border-color: var(--primary);
        }
        
        .chat-input button {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .chat-input button:hover:not(:disabled) {
          transform: scale(1.05);
        }
        
        .chat-input button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .chat-window {
            width: calc(100vw - 40px);
            right: 20px;
            bottom: 80px;
            height: 500px;
          }
          
          .chat-button {
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
          }
          
          .chat-icon {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default ChatBot;