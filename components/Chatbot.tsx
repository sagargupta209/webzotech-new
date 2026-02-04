import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! 👋 I'm the Webzo bot. Ask me about our pricing, services, or how to contact us!", sender: 'bot' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const generateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('plan') || lowerInput.includes('package')) {
      return "Our 'Business Website' plans start at ₹3,999/- (Startup) up to ₹9,999/- (Premium). For E-commerce, plans range from ₹9,999/- to ₹17,999/-. All plans include a free SSL and 1 year of support!";
    }
    if (lowerInput.includes('service') || lowerInput.includes('offer') || lowerInput.includes('design') || lowerInput.includes('develop')) {
      return "We offer Professional Web Design, E-Commerce Development, and Digital Marketing (SEO, PPC) services to help grow your business online.";
    }
    if (lowerInput.includes('contact') || lowerInput.includes('call') || lowerInput.includes('email') || lowerInput.includes('reach')) {
      return "You can reach our sales team at +91 8962921153 or email us at info@webzotech.in. We are available to help!";
    }
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! How can I help you build your dream website today?";
    }
    if (lowerInput.includes('thank')) {
      return "You're welcome! Let us know if you need anything else.";
    }
    if (lowerInput.includes('location') || lowerInput.includes('where')) {
      return "We are based in Rajnandgaon, Chhattisgarh but serve clients globally with our digital solutions.";
    }
    
    return "I'm just a bot, but our experts can answer that better! Please contact us at +91 8962921153 for detailed information.";
  };

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: Message = { id: Date.now(), text: inputText, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    setTimeout(() => {
      const botResponse: Message = { 
        id: Date.now() + 1, 
        text: generateResponse(userMsg.text), 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${isOpen ? 'bg-gray-800 rotate-90' : 'bg-gradient-to-r from-orange-400 to-orange-600 animate-bounce'}`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageCircle size={28} className="text-white fill-current" />}
      </button>

      <div 
        className={`fixed bottom-20 right-4 z-40 w-[calc(100vw-2rem)] max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col transition-all duration-300 transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'
        }`}
        style={{ height: 'clamp(400px, 70vh, 500px)' }}
        role="dialog"
        aria-hidden={!isOpen}
      >
        <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-4 flex justify-between items-center text-white shadow-md flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-1.5 rounded-full">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm">Webzo Assistant</h3>
              <p className="text-xs text-orange-100 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white" aria-label="Minimize chat">
            <Minimize2 size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900 space-y-4">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'user' 
                    ? 'bg-orange-500 text-white rounded-tr-none' 
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-600 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSend} className="p-3 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex gap-2 flex-shrink-0">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-200 transition-all"
            aria-label="Chat message input"
          />
          <button 
            type="submit"
            className="bg-orange-500 text-white p-2.5 rounded-full hover:bg-orange-600 transition-colors shadow-sm disabled:opacity-50"
            disabled={!inputText.trim()}
            aria-label="Send message"
          >
            <Send size={18} className={inputText.trim() ? "translate-x-0.5" : ""} />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;