import React, { useState } from "react";
import { Send } from "lucide-react"; // Lucide ikonlari uchun

// Asosiy komponent
function App() {
  const [messages, setMessages] = useState([]); // Xabarlar ro'yxati
  const [inputText, setInputText] = useState(""); // Input maydoni uchun state

  // Formani yuborish funksiyasi
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return; // Bo'sh xabarlarni oldini olish

    const now = new Date();
    const formattedDate = now.toLocaleDateString("uz-UZ", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const formattedTime = now.toLocaleTimeString("uz-UZ", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMessage = {
      text: inputText,
      timestamp: `${formattedDate} | ${formattedTime}`,
    };

    // Yangi xabarni ro'yxatga qo'shish
    setMessages([...messages, newMessage]);
    setInputText(""); // Input maydonini tozalash
  };

  return (
        <>
      <main className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white border rounded-lg shadow-sm">
        {/* Sarlavha */}
        <div className="p-4 border-b">
          <h2 className="font-medium">Nicolas Cage</h2>
        </div>

        {/* Xabarlar ro'yxati */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-3">
              <p className="mb-1">{message.text}</p>
              <span className="text-xs text-gray-500">{message.timestamp}</span>
            </div>
          ))}
        </div>

        {/* Input maydoni va tugma */}
        <form onSubmit={handleSubmit} className="border-t p-4 flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Izoh qoldirish"
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </main>
    </>
  );
}

export default App;