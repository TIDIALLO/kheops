'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Paperclip, Image as ImageIcon, X, Loader2, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './button'
import { Input } from './input'
import { cn } from '@/lib/utils'

// Types pour les messages
interface Message {
  id: string
  content: string
  sender: 'user' | 'agent'
  timestamp: Date
  status: 'sending' | 'sent' | 'error'
}

export function Chat() {
  // États
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Défilement automatique vers le bas
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Gestion de l'envoi des messages
  const handleSend = async () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
      status: 'sending'
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue('')
    setIsTyping(true)

    // Simuler une réponse de l'agent (à remplacer par votre logique d'API)
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        content: "Merci pour votre message. Un agent vous répondra bientôt.",
        sender: 'agent',
        timestamp: new Date(),
        status: 'sent'
      }
      setMessages(prev => [...prev, response])
      setIsTyping(false)
    }, 1000)
  }

  // Gestion des fichiers
  const handleFileClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    
    // Traitement des fichiers (à implémenter selon vos besoins)
    console.log('Fichiers sélectionnés:', files)
  }

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-24 right-6 w-14 h-14 rounded-full bg-[#8B0000] text-white shadow-lg",
          "hover:bg-[#700000] transition-all duration-300",
          "flex items-center justify-center",
          "hover:scale-110 active:scale-95",
          isOpen ? "opacity-0" : "opacity-100",
          "z-50"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          rotate: isOpen ? 90 : 0,
          scale: isOpen ? 0 : 1
        }}
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 z-50"
          >
            {/* En-tête */}
            <div className="bg-[#8B0000] text-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Support KHEOPS</h3>
                <p className="text-sm opacity-90">Agent commercial</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Zone des messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex flex-col",
                    message.sender === 'user' ? "items-end" : "items-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg p-3",
                      message.sender === 'user' 
                        ? "bg-[#8B0000] text-white"
                        : "bg-gray-100 text-gray-900"
                    )}
                  >
                    {message.content}
                  </div>
                  <span className="text-xs text-gray-500 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                    {message.sender === 'user' && (
                      <span className="ml-2">
                        {message.status === 'sending' && '⋯'}
                        {message.status === 'sent' && '✓'}
                        {message.status === 'error' && '⚠'}
                      </span>
                    )}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-gray-500">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">L'agent est en train d'écrire...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Zone de saisie */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Écrivez votre message..."
                  className="flex-1"
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  multiple
                />
                <Button
                  onClick={handleFileClick}
                  variant="outline"
                  size="icon"
                  className="flex-shrink-0"
                >
                  <Paperclip className="w-4 h-4" />
                </Button>
                <Button
                  onClick={handleSend}
                  variant="default"
                  size="icon"
                  className="flex-shrink-0 bg-[#8B0000] hover:bg-[#700000]"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 