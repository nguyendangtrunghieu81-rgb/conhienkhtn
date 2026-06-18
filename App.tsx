import React from 'react';
import { MessageCircle, Sparkles, Zap, Brain, FlaskConical } from 'lucide-react';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-indigo-50 font-sans text-slate-800 bg-[url('https://www.transparenttextures.com/patterns/geometry.png')] flex flex-col items-center overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-10 left-1/3 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl px-6 py-12 text-center relative z-10">
        
        {/* Hero Badge */}
        <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full font-bold text-indigo-600 shadow-md mb-8 border-2 border-indigo-100 animate-in slide-in-from-top-4 fade-in duration-700">
          <Sparkles size={20} className="text-yellow-500" />
          <span>Khoa Học Tự Nhiên 8</span>
          <Sparkles size={20} className="text-yellow-500" />
        </div>

        {/* Hero Title */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-6 drop-shadow-sm animate-in zoom-in duration-700">
          Học cùng <br/> Cô Nhiên
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium animate-in slide-in-from-bottom-4 fade-in duration-1000">
          Chào mừng các em đến với thế giới KHTN 8 đầy màu sắc! 🌈 <br/>
          Không còn áp lực, không còn khô khan. Chỉ có niềm vui và những kiến thức <span className="text-indigo-600 font-bold">"đỉnh của chóp"</span>.
        </p>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 w-full mb-16 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-200">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border-b-4 border-yellow-400 hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-yellow-600">
              <Zap size={32} fill="currentColor" />
            </div>
            <h3 className="text-xl font-bold mb-2">Hỏi đáp siêu tốc</h3>
            <p className="text-slate-500">Thắc mắc gì hỏi nấy, Cô Nhiên trả lời trong "một nốt nhạc".</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border-b-4 border-purple-400 hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-600">
              <Brain size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Kiến thức dí dỏm</h3>
            <p className="text-slate-500">Học mà như chơi, cười "té ghế" mà vẫn thuộc bài là có thật!</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border-b-4 border-pink-400 hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-pink-600">
              <FlaskConical size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Chinh phục KHTN 8</h3>
            <p className="text-slate-500">Từ Hóa học, Vật lý đến Sinh học, cân tất mọi bài khó.</p>
          </div>
        </div>

        {/* Call to Action pointing to Chatbot */}
        <div className="relative animate-bounce">
            <p className="text-indigo-600 font-bold text-lg mb-2">👇 Bấm vào góc phải để "tám" chuyện học hành với cô nhé! 👇</p>
        </div>

      </main>

      {/* Global Chatbot */}
      <Chatbot />

      {/* Footer */}
      <footer className="py-6 text-center text-slate-400 text-sm w-full bg-white/50 backdrop-blur-sm border-t border-indigo-100">
        <p className="flex items-center justify-center gap-2 font-semibold">
          © 2024 Học cùng Cô Nhiên <span className="text-red-500">❤️</span> Chinh phục KHTN 8
        </p>
      </footer>
    </div>
  );
};

export default App;