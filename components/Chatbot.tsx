import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hế lô các nhà khoa học nhí! 👋 Cô Nhiên có mặt rồi đây! Hôm nay mình "mổ xẻ" kiến thức nào của KHTN 8 đây ta? Hóa, Lý hay Sinh? 😎' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputText };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    const replyText = await sendMessageToGemini(inputText);
    
    const botMsg: ChatMessage = { role: 'model', text: replyText };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div 
        className={`bg-white w-80 md:w-96 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right pointer-events-auto border-2 border-indigo-200 ${
          isOpen ? 'opacity-100 scale-100 mb-4 translate-y-0' : 'opacity-0 scale-95 translate-y-10 h-0 mb-0'
        }`}
        style={{ maxHeight: '600px', display: isOpen ? 'flex' : 'none', flexDirection: 'column' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 text-white flex justify-between items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="bg-white p-1.5 rounded-full border-2 border-yellow-300 shadow-md">
              <span className="text-2xl">👩‍🔬</span>
            </div>
            <div>
              <h3 className="font-extrabold text-lg leading-none flex items-center gap-1">
                Cô Nhiên <Sparkles size={14} className="text-yellow-300 animate-pulse"/>
              </h3>
              <p className="text-xs text-indigo-100 font-bold">KHTN 8 - Vui hết nấc!</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition relative z-10">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-indigo-50 space-y-4 h-[400px]">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm whitespace-pre-wrap leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-800 border-2 border-indigo-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border-2 border-indigo-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-indigo-100 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Hỏi cô Nhiên đi, đừng ngại..."
            className="flex-1 bg-indigo-50 text-slate-800 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition font-medium placeholder-indigo-300"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !inputText.trim()}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-full hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 transition shadow-lg"
          >
            <Send size={18} />
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white p-4 rounded-full shadow-xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group border-4 border-white animate-bounce"
      >
        {isOpen ? <X size={32} /> : <div className="relative"><MessageCircle size={32} /><span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse"></span></div>}
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-white text-indigo-900 px-4 py-2 rounded-xl text-sm font-extrabold shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border-2 border-yellow-400">
            Hỏi Cô Nhiên KHTN 8 nè! 🚀
          </span>
        )}
      </button>
    </div>
  );
};

export default Chatbot;