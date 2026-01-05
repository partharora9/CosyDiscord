"use client";

import { useEffect, useState, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Hash, Users, Volume2 } from "lucide-react";
import { useUser } from "@/components/providers/user-provider";

interface Message {
    id: string;
    user: string;
    text: string;
    time: string;
}



export const WorldChat = () => {
    const { username: globalUsername } = useUser();
    const [socket, setSocket] = useState<Socket | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    // Use local state for socket operations, synced with global
    const [username, setUsername] = useState(globalUsername || "Guest");
    const [onlineCount, setOnlineCount] = useState(0);
    const [isConnected, setIsConnected] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Sync username and connect/disconnect based on login
    useEffect(() => {
        if (globalUsername) {
            setUsername(globalUsername);
        }
    }, [globalUsername]);

    useEffect(() => {
        // Only connect if we have a valid username (i.e. logged in)
        if (!globalUsername) return;

        // Connect to the same server, specifically the socket path
        const newSocket = io({
            path: "/api/socket/io",
            addTrailingSlash: false,
        });
        setSocket(newSocket);

        newSocket.on("connect", () => {
            setIsConnected(true);
            console.log("Connected to chat server");
        });

        newSocket.on("users", (count: number) => {
            setOnlineCount(count);
        });

        // Handle initial load of persistent messages
        newSocket.on("init_messages", (history: Message[]) => {
            setMessages(history);
        });

        newSocket.on("message", (msg: Message) => {
            setMessages((prev) => [...prev, msg]);
        });

        return () => {
            newSocket.disconnect();
        };
    }, [globalUsername]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    // Auto-delete messages after 15 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            setMessages((prev) => prev.filter((msg) => now - new Date(msg.time).getTime() < 15000));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const sendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || !socket) return;

        // Basic abusive word filter
        const badWords = ["fuck", "shit", "bitch", "asshole", "cunt", "dick", "pussy", "bastard", "idiot", "stupid"];
        if (badWords.some(word => input.toLowerCase().includes(word))) {
            // Silently block or you could add UI feedback
            setInput("");
            return;
        }

        socket.emit("message", { user: username, text: input });
        setInput("");
    };

    return (
        <div className="bg-[#313338] rounded-xl overflow-hidden shadow-2xl border border-[#1e1f22] h-[500px] flex flex-col md:flex-row relative font-[family-name:var(--font-outfit)]">

            {/* Sidebar - Channels (Hidden on mobile) */}
            <div className="hidden md:flex flex-col w-60 bg-[#2b2d31] p-3 gap-2">
                <div className="px-2 mb-2">
                    <h3 className="text-zinc-100 font-bold px-2 py-1 truncat">Cosy World</h3>
                </div>

                <div className="space-y-0.5">
                    <div className="flex items-center gap-2 px-2 py-1.5 bg-[#404249] text-white rounded cursor-pointer">
                        <Hash className="w-4 h-4 text-zinc-400" />
                        <span className="font-medium text-sm">world-chat</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-400 hover:bg-[#35373c] hover:text-zinc-300 rounded cursor-pointer transition-colors">
                        <Volume2 className="w-4 h-4" />
                        <span className="font-medium text-sm">Gaming Lounge</span>
                    </div>
                </div>

                <div className="mt-auto px-2">
                    <div className="bg-[#232428] rounded p-2 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white">
                            {username.slice(0, 1)}
                        </div>
                        <div className="overflow-hidden">
                            <div className="text-xs font-bold text-white truncate">{username}</div>
                            <div className="text-[10px] text-zinc-400">Online</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col bg-[#313338] relative">
                {/* Chat Header */}
                <div className="h-12 border-b border-[#26272d] flex items-center px-4 shadow-sm z-10 shrink-0">
                    <Hash className="w-5 h-5 text-zinc-400 mr-2" />
                    <span className="font-bold text-white text-sm">world-chat</span>
                    <div className="bg-zinc-700/50 w-px h-6 mx-4"></div>
                    <span className="text-xs text-zinc-400 truncate">The official world chat for everyone visiting!</span>
                    <div className="ml-auto flex items-center gap-2 text-zinc-400 text-xs">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="hidden sm:inline">{onlineCount} Online</span>
                    </div>
                </div>

                {/* Messages List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar" ref={scrollRef}>
                    {messages.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center opacity-50 select-none pb-10">
                            <div className="bg-[#404249] p-4 rounded-full mb-4">
                                <Hash className="w-8 h-8 text-zinc-400" />
                            </div>
                            <h3 className="text-white font-bold text-xl mb-2">Welcome to #world-chat!</h3>
                            <p className="text-zinc-400 max-w-sm">This is the start of the #world-chat channel. Say hello to the world!</p>
                        </div>
                    ) : (
                        messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="group flex gap-3 hover:bg-[#2e3035] -mx-4 px-4 py-1"
                            >
                                <div className="w-10 h-10 rounded-full bg-indigo-500 shrink-0 flex items-center justify-center text-white font-bold text-sm mt-0.5 select-none">
                                    {msg.user.slice(0, 1)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-white font-medium text-sm hover:underline cursor-pointer">{msg.user}</span>
                                        <span className="text-[10px] text-zinc-500">{new Date(msg.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                    </div>
                                    <p className="text-zinc-300 text-sm whitespace-pre-wrap break-words leading-relaxed">{msg.text}</p>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>

                {/* Message Input */}
                <div className="p-4 pt-0 shrink-0">
                    <form onSubmit={sendMessage} className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={`Message #${username}`}
                            className="w-full bg-[#383a40] text-zinc-200 placeholder-zinc-500 rounded-lg py-2.5 px-4 pr-10 text-sm focus:outline-none focus:ring-0"
                        />
                        <button
                            type="submit"
                            disabled={!isConnected || !input.trim()}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-zinc-400 hover:text-indigo-400 disabled:opacity-50 transition-colors"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Members Sidebar (Desktop only) */}
            <div className="hidden lg:flex flex-col w-60 bg-[#2b2d31] p-3 border-l border-[#1e1f22]">
                <h3 className="text-xs font-bold text-zinc-500 uppercase mb-3 px-2">Online - {onlineCount}</h3>
                <div className="space-y-1 overflow-y-auto flex-1">
                    {/* Me */}
                    <div className="flex items-center gap-2 px-2 py-1.5 opacity-100 bg-[#35373c]/50 rounded cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white relative">
                            {username.slice(0, 1)}
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#2b2d31]"></div>
                        </div>
                        <span className="text-zinc-300 text-sm font-medium truncate">{username} (You)</span>
                    </div>

                    {/* Mock Users */}
                    {['SkyHigh', 'Pixel', 'CosyBot', 'Mod_Sarah'].map((name, i) => (
                        <div key={name} className="flex items-center gap-2 px-2 py-1.5 opacity-50 hover:opacity-100 hover:bg-[#35373c] rounded cursor-pointer transition-all">
                            <div className={`w-8 h-8 rounded-full ${i % 2 === 0 ? 'bg-emerald-600' : 'bg-rose-500'} flex items-center justify-center text-xs font-bold text-white relative`}>
                                {name.slice(0, 1)}
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#2b2d31]"></div>
                            </div>
                            <span className="text-zinc-400 text-sm font-medium truncate">{name}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};
