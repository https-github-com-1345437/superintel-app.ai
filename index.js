import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const sendPrompt = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    const promptText = input;
    setInput('');
    
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: promptText }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setOutput(data.response);
        // 채팅 기록에 추가
        setHistory(prev => [
          ...prev, 
          { 
            prompt: promptText, 
            response: data.response,
            timestamp: new Date().toLocaleTimeString()
          }
        ]);
      } else {
        setOutput(`오류 발생: ${data.error || '알 수 없는 오류'}`);
      }
    } catch (error) {
      console.error('API 요청 오류:', error);
      setOutput('서버 연결 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendPrompt();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Superintel Chat</h1>
          <p className="text-sm opacity-80">GPT-4 + Claude 초지능 인터페이스</p>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto p-4 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/4 bg-white rounded-lg shadow-md p-4 h-full max-h-[80vh] overflow-y-auto">
          <h2 className="font-bold text-lg mb-3 text-gray-700">채팅 기록</h2>
          {history.length === 0 ? (
            <p className="text-gray-500 text-sm">아직 대화 기록이 없습니다. 메시지를 보내보세요.</p>
          ) : (
            <ul className="space-y-2">
              {history.map((item, index) => (
                <li key={index} className="p-2 hover:bg-gray-100 rounded cursor-pointer text-sm">
                  <span className="font-medium">{item.timestamp}</span>
                  <p className="truncate text-gray-600">{item.prompt}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="w-full md:w-3/4 flex flex-col">
          <div className="flex-grow bg-white rounded-lg shadow-md p-4 mb-4 overflow-y-auto min-h-[50vh] max-h-[60vh]">
            {output ? (
              <pre className="whitespace-pre-wrap font-sans text-gray-800">{output}</pre>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                <p>AI 응답이 여기에 표시됩니다</p>
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4">
            <textarea
              rows={3}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="무엇이든 물어보세요..."
              disabled={loading}
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-gray-500">Enter 키로 전송, Shift+Enter로 줄바꿈</p>
              <button
                className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors disabled:opacity-50"
                onClick={sendPrompt}
                disabled={loading || !input.trim()}
              >
                {loading ? '처리중...' : '전송'}
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white text-center p-3 text-sm">
        <p>Superintel App - Powered by OpenAI GPT-4 and Anthropic Claude</p>
      </footer>
    </div>
  );
}
