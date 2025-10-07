import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const faqResponses: Record<string, string> = {
  hello: "Hello! Welcome to SyncX Technologies. How can I help you today?",
  hi: "Hi there! I'm your AI assistant. Feel free to ask me anything about our services.",
  services:
    "We offer Web Development (MERN, .NET, Django), Mobile App Development (Flutter, Firebase), UI/UX Design, AI & ML Solutions, Data Science, Power BI, Microsoft Power Platform, and Intelligent Integration.",
  pricing:
    "Our pricing varies based on project requirements. Please contact us at +91 87804 88532 or alokpatel41001@gmail.com for a custom quote.",
  contact:
    "You can reach us at:\n📞 +91 87804 88532 / +91 88490 78514\n📧 alokpatel41001@gmail.com / krishapatel4774@gmail.com\n📍 India",
  timeline:
    "Project timelines depend on complexity. Typically, web projects take 2-6 weeks, mobile apps 4-12 weeks. Contact us for accurate estimates.",
  technologies:
    "We work with: React, Node.js, MongoDB, .NET, Python, Django, Next.js, Angular, Flutter, Firebase, AI/ML frameworks, Power BI, and Power Platform.",
};

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI assistant for SyncX Technologies. Ask me about our services, pricing, or contact information!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simple keyword matching for responses
    const lowerInput = input.toLowerCase();
    let botResponse = "I can help with information about our services, pricing, technologies, contact details, and project timelines. For specific inquiries, please contact us at:\n📞 +91 87804 88532\n📧 alokpatel41001@gmail.com";

    for (const [keyword, response] of Object.entries(faqResponses)) {
      if (lowerInput.includes(keyword)) {
        botResponse = response;
        break;
      }
    }

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-primary to-accent shadow-[var(--shadow-glow)] hover:scale-110 transition-all duration-300 animate-float"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-card border-2 border-primary/20 rounded-2xl shadow-2xl animate-scale-in flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent text-white p-4 rounded-t-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold">AI Assistant</h3>
              <p className="text-xs opacity-90">Always here to help</p>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-primary to-accent text-white"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
