"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MoreHorizontal, Circle, Star, Archive, Trash2, Send, ArrowLeft, Phone, Video, Info, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// TypeScript interfaces
interface Message {
  id: number
  sender: string
  senderInitials: string
  message: string
  timestamp: string
  isMe: boolean
}

interface InboxMessage {
  id: number
  name: string
  initials: string
  avatar?: string | null
  date: string
  preview: string
  category: string
  messageCount: number
  isPriority: boolean
  isOnline: boolean
  isArchived: boolean
  isStarred: boolean
  conversation: Message[]
}

// Sample message data
const messages: InboxMessage[] = [
  {
    id: 1,
    name: "Dr. Catrenia McLendon",
    initials: "CM",
    avatar: "/placeholder.svg?height=56&width=56",
    date: "May 12",
    preview: "Hello! Just a quick reminder to RSVP for tomorrow's networking event. Looking forward to seeing you there and discussing potential collaboration opportunities.",
    category: "Event Reminder",
    messageCount: 2,
    isPriority: true,
    isOnline: true,
    isArchived: false,
    isStarred: true,
    conversation: [
      {
        id: 1,
        sender: "Dr. Catrenia McLendon",
        senderInitials: "CM",
        message: "Hello! Just a quick reminder to RSVP for tomorrow's networking event. Looking forward to seeing you there and discussing potential collaboration opportunities.",
        timestamp: "9:05 AM",
        isMe: false
      },
      {
        id: 2,
        sender: "You",
        senderInitials: "ME",
        message: "Thank you for the reminder! I'll definitely be there. Looking forward to connecting with everyone.",
        timestamp: "9:15 AM",
        isMe: true
      }
    ]
  },
  {
    id: 2,
    name: "Nicole Rosales",
    initials: "NR",
    avatar: null,
    date: "Mar 25",
    preview: "Don't miss out on the opportunity to join our exclusive mentorship program...",
    category: "Mentorship",
    messageCount: 1,
    isPriority: false,
    isOnline: false,
    isArchived: true,
    isStarred: false,
    conversation: [
      {
        id: 1,
        sender: "Nicole Rosales",
        senderInitials: "NR",
        message: "Don't miss out on the opportunity to join our exclusive mentorship program. We have some amazing mentors who can help accelerate your career growth.",
        timestamp: "2:30 PM",
        isMe: false
      }
    ]
  },
  {
    id: 3,
    name: "Courtney Aldaco",
    initials: "CA",
    avatar: "/placeholder.svg?height=48&width=48",
    date: "Mar 11",
    preview: "Are you ready to take your career to the next level? I have some exciting opportunities...",
    category: "Career",
    messageCount: 1,
    isPriority: false,
    isOnline: true,
    isArchived: false,
    isStarred: true,
    conversation: [
      {
        id: 1,
        sender: "Courtney Aldaco",
        senderInitials: "CA",
        message: "Are you ready to take your career to the next level? I have some exciting opportunities that might be perfect for your skill set.",
        timestamp: "11:45 AM",
        isMe: false
      }
    ]
  },
  {
    id: 4,
    name: "Corey Marasco",
    initials: "CM",
    avatar: null,
    date: "Mar 5",
    preview: "Are you ready to take the next step in your professional journey? Let's follow each other...",
    category: "Networking",
    messageCount: 1,
    isPriority: false,
    isOnline: false,
    isArchived: true,
    isStarred: false,
    conversation: [
      {
        id: 1,
        sender: "Corey Marasco",
        senderInitials: "CM",
        message: "Are you ready to take the next step in your professional journey? Let's follow each other and stay connected.",
        timestamp: "4:20 PM",
        isMe: false
      }
    ]
  },
  {
    id: 5,
    name: "Karen Adjaye",
    initials: "KA",
    avatar: null,
    date: "Feb 7",
    preview: "I am reaching out to let you know about an exciting job opportunity that matches your skills...",
    category: "Job Opportunity",
    messageCount: 1,
    isPriority: false,
    isOnline: false,
    isArchived: false,
    isStarred: false,
    conversation: [
      {
        id: 1,
        sender: "Karen Adjaye",
        senderInitials: "KA",
        message: "I am reaching out to let you know about an exciting job opportunity that matches your skills and experience. Would you be interested in learning more?",
        timestamp: "10:15 AM",
        isMe: false
      }
    ]
  },
  {
    id: 6,
    name: "Navi Singh",
    initials: "NS",
    avatar: "/placeholder.svg?height=48&width=48",
    date: "Feb 5",
    preview: "Want to master the art of AI prompting? Join our exclusive workshop series...",
    category: "Graduate Program",
    messageCount: 1,
    isPriority: false,
    isOnline: true,
    isArchived: false,
    isStarred: true,
    conversation: [
      {
        id: 1,
        sender: "Navi Singh",
        senderInitials: "NS",
        message: "Want to master the art of AI prompting? Join our exclusive workshop series designed specifically for graduate students.",
        timestamp: "3:45 PM",
        isMe: false
      }
    ]
  }
]

// Typing indicator component
const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-1 px-4 py-2">
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
      <span className="text-sm text-slate-500 ml-2">is typing...</span>
    </div>
  )
}

export default function InboxPage() {
  const [selectedMessage, setSelectedMessage] = useState<InboxMessage | null>(null)
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showArchiveModal, setShowArchiveModal] = useState(false)
  const [showStarredModal, setShowStarredModal] = useState(false)
  const [messageList, setMessageList] = useState<InboxMessage[]>(messages)

  // Simulate someone typing after opening a conversation
  useEffect(() => {
    if (selectedMessage) {
      const timer = setTimeout(() => {
        setIsTyping(true)
        const stopTyping = setTimeout(() => {
          setIsTyping(false)
        }, 3000) // Stop typing after 3 seconds
        
        return () => clearTimeout(stopTyping)
      }, 2000) // Start typing 2 seconds after opening conversation
      
      return () => clearTimeout(timer)
    }
  }, [selectedMessage])

  const handleMessageClick = (message: InboxMessage) => {
    setSelectedMessage(message)
    setIsTyping(false)
  }

  const handleBackToList = () => {
    setSelectedMessage(null)
    setIsTyping(false)
  }

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedMessage) {
      // Add new message to conversation
      const updatedMessage = {
        ...selectedMessage,
        conversation: [...selectedMessage.conversation, {
          id: selectedMessage.conversation.length + 1,
          sender: "You",
          senderInitials: "YO",
          message: newMessage,
          timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
          isMe: true
        }]
      }
      setSelectedMessage(updatedMessage)
      setNewMessage("")
      
      // Simulate typing response
      setTimeout(() => {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
        }, 3000)
      }, 1000)
    }
  }

  const handleArchive = (messageId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setMessageList(prev => 
      prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, isArchived: !msg.isArchived }
          : msg
      )
    )
  }

  const handleStar = (messageId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setMessageList(prev => 
      prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, isStarred: !msg.isStarred }
          : msg
      )
    )
  }

  const handleDelete = (messageId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setMessageList(prev => prev.filter(msg => msg.id !== messageId))
    // If currently viewing the deleted message, go back to list
    if (selectedMessage && selectedMessage.id === messageId) {
      setSelectedMessage(null)
    }
  }

  const handleShowArchived = () => {
    setShowArchiveModal(true)
  }

  const handleShowStarred = () => {
    setShowStarredModal(true)
  }

  const archivedMessages = messageList.filter(message => message.isArchived)
  const starredMessages = messageList.filter(message => message.isStarred)
  const activeMessages = messageList.filter(message => !message.isArchived)

  // If a message is selected, show the conversation view
  if (selectedMessage) {
    return (
      <div className="min-h-full">
          <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-4">
          {/* Conversation Header */}
            <div className="flex items-center justify-between mb-4 sm:mb-6 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-sm">
              <div className="flex items-center space-x-2 sm:space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleBackToList}
                  className="rounded-xl h-8 w-8 sm:h-10 sm:w-10"
              >
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <div className="relative">
                  <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                  <AvatarImage src={selectedMessage.avatar || undefined} alt={selectedMessage.name} />
                    <AvatarFallback className="bg-[#0056B3]/10 text-[#0056B3] font-medium text-sm sm:text-base">
                    {selectedMessage.initials}
                  </AvatarFallback>
          </Avatar>
                {selectedMessage.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
                <div className="min-w-0 flex-1">
                  <h1 className="text-base sm:text-xl font-heading text-primary-navy truncate">{selectedMessage.name}</h1>
                  <p className="text-xs sm:text-sm font-subheading text-slate-600 truncate">
                  {selectedMessage.isOnline ? "Active now" : `Last seen ${selectedMessage.date}`}
                </p>
              </div>
            </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Button variant="ghost" size="icon" className="rounded-xl h-8 w-8 sm:h-10 sm:w-10 hidden sm:flex">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
                <Button variant="ghost" size="icon" className="rounded-xl h-8 w-8 sm:h-10 sm:w-10 hidden sm:flex">
                  <Video className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
                <Button variant="ghost" size="icon" className="rounded-xl h-8 w-8 sm:h-10 sm:w-10">
                  <Info className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>

          {/* Conversation Messages */}
            <Card className="border-0 shadow-sm rounded-xl sm:rounded-2xl bg-white mb-3 sm:mb-4">
              <CardContent className="p-3 sm:p-6">
                <div className="space-y-4 sm:space-y-6 max-h-[50vh] overflow-y-auto">
                {selectedMessage.conversation.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start space-x-2 sm:space-x-3 max-w-[85%] sm:max-w-[70%] ${msg.isMe ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <Avatar className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0">
                        <AvatarFallback className={`${msg.isMe ? 'bg-primary-navy text-white' : 'bg-slate-100 text-slate-600'} font-medium text-xs sm:text-sm`}>
                          {msg.senderInitials}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`rounded-xl sm:rounded-2xl p-3 sm:p-4 ${msg.isMe ? 'bg-slate-50 text-slate-700 border border-slate-200' : 'bg-slate-100 text-slate-700'}`}>
                        <p className="font-subheading text-xs sm:text-sm leading-relaxed">{msg.message}</p>
                        <span className={`text-xs mt-1 sm:mt-2 block ${msg.isMe ? 'text-slate-500' : 'text-slate-500'}`}>
                          {msg.timestamp}
                        </span>
                      </div>
          </div>
        </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2 sm:space-x-3 max-w-[85%] sm:max-w-[70%]">
                      <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                        <AvatarFallback className="bg-slate-100 text-slate-600 font-medium text-xs sm:text-sm">
                          {selectedMessage.initials}
                        </AvatarFallback>
          </Avatar>
                      <div className="rounded-xl sm:rounded-2xl p-3 sm:p-4 bg-slate-100">
                        <TypingIndicator />
            </div>
          </div>
        </div>
                )}
            </div>
            </CardContent>
          </Card>

          {/* Message Input */}
          <Card className="border-0 shadow-sm rounded-xl sm:rounded-2xl bg-white">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Input 
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 border-slate-200 focus:border-primary-navy/30 focus:ring-primary-navy/10 rounded-xl font-subheading py-2 sm:py-3"
                  style={{ fontSize: '16px' }}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl h-10 w-10 sm:h-12 sm:w-12"
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
          </div>
            </CardContent>
                  </Card>
      </div>

      {/* Archive Modal */}
      <Dialog open={showArchiveModal} onOpenChange={setShowArchiveModal}>
          <DialogContent className="max-w-[95%] sm:max-w-4xl max-h-[85vh] sm:max-h-[80vh] overflow-y-auto mx-3 sm:mx-auto">
          <DialogHeader>
              <DialogTitle className="text-lg sm:text-2xl font-heading text-primary-navy flex items-center">
                <Archive className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
              Archived Messages ({archivedMessages.length})
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            {archivedMessages.length === 0 ? (
                <div className="text-center py-6 sm:py-8">
                  <Archive className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-slate-300 mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-heading text-slate-600 mb-2">No archived messages</h3>
                  <p className="text-sm sm:text-base text-slate-500 font-subheading">Messages you archive will appear here.</p>
              </div>
            ) : (
              archivedMessages.map((message) => (
                <Card 
                  key={message.id}
                    className="border-0 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl sm:rounded-2xl bg-white cursor-pointer"
                  onClick={() => {
                    setShowArchiveModal(false)
                    handleMessageClick(message)
                  }}
                >
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <Avatar className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                        <AvatarImage src={message.avatar || undefined} alt={message.name} />
                          <AvatarFallback className="bg-slate-100 text-slate-600 font-medium text-sm">
                          {message.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                            <h3 className="font-heading text-sm sm:text-base text-primary-navy truncate">
                            {message.name}
                          </h3>
                            <span className="text-xs sm:text-sm text-slate-500 font-subheading whitespace-nowrap ml-2">{message.date}</span>
                        </div>
                          <p className="text-slate-600 font-subheading text-xs sm:text-sm line-clamp-2">
                          {message.preview}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs px-2 py-1 rounded-full font-medium bg-slate-100 text-slate-600">
                            {message.category}
                          </span>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleArchive(message.id, e)
                              }}
                              className="text-xs px-2 py-1 h-auto text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                            >
                              Unarchive
                            </Button>
                              <span className="text-xs text-slate-500 hidden sm:inline">Archived</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Starred Modal */}
      <Dialog open={showStarredModal} onOpenChange={setShowStarredModal}>
          <DialogContent className="max-w-[95%] sm:max-w-4xl max-h-[85vh] sm:max-h-[80vh] overflow-y-auto mx-3 sm:mx-auto">
          <DialogHeader>
              <DialogTitle className="text-lg sm:text-2xl font-heading text-primary-navy flex items-center">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
              Starred Messages ({starredMessages.length})
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            {starredMessages.length === 0 ? (
                <div className="text-center py-6 sm:py-8">
                  <Star className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-slate-300 mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-heading text-slate-600 mb-2">No starred messages</h3>
                  <p className="text-sm sm:text-base text-slate-500 font-subheading">Messages you star will appear here.</p>
              </div>
            ) : (
              starredMessages.map((message) => (
                <Card 
                  key={message.id}
                    className="border-0 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl sm:rounded-2xl bg-white cursor-pointer"
                  onClick={() => {
                    setShowStarredModal(false)
                    handleMessageClick(message)
                  }}
                >
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <Avatar className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                        <AvatarImage src={message.avatar || undefined} alt={message.name} />
                          <AvatarFallback className="bg-slate-100 text-slate-600 font-medium text-sm">
                          {message.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                            <h3 className="font-heading text-sm sm:text-base text-primary-navy truncate">
                            {message.name}
                          </h3>
                            <span className="text-xs sm:text-sm text-slate-500 font-subheading whitespace-nowrap ml-2">{message.date}</span>
                        </div>
                          <p className="text-slate-600 font-subheading text-xs sm:text-sm line-clamp-2">
                          {message.preview}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs px-2 py-1 rounded-full font-medium bg-slate-100 text-slate-600">
                            {message.category}
                          </span>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleStar(message.id, e)
                              }}
                              className="text-xs px-2 py-1 h-auto text-amber-600 hover:text-amber-800 hover:bg-amber-50"
                            >
                              Unstar
                            </Button>
                            <div className="flex items-center space-x-1">
                              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                                <span className="text-xs text-slate-500 hidden sm:inline">Starred</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

  // Default inbox list view
  return (
    <div className="min-h-full">
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-4">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-4xl font-heading text-primary-navy mb-1 sm:mb-2">Messages</h1>
            <p className="text-slate-600 font-subheading text-base sm:text-xl">Stay in touch with your professional network</p>
            </div>
          <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading whitespace-nowrap text-xs sm:text-sm px-3 sm:px-4"
              onClick={handleShowArchived}
            >
              <Archive className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Archive ({archivedMessages.length})
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading whitespace-nowrap text-xs sm:text-sm px-3 sm:px-4"
              onClick={handleShowStarred}
            >
              <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Starred ({starredMessages.length})
            </Button>
          </div>
        </div>

        {/* Search Section */}
        <Card className="border-0 shadow-sm rounded-xl sm:rounded-2xl bg-white mb-4 sm:mb-6">
          <CardContent className="p-3 sm:p-4">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
              <Input 
                placeholder="Search conversations..." 
                className="pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border-slate-200 focus:border-primary-navy/30 focus:ring-primary-navy/10 rounded-xl font-subheading text-sm sm:text-base"
              />
            </div>
          </CardContent>
        </Card>

        {/* Messages List */}
        <div className="space-y-0">
          {activeMessages.length === 0 ? (
            <div className="p-8 sm:p-12 text-center bg-white rounded-xl sm:rounded-2xl border border-slate-100">
              <Circle className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-slate-300 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-heading text-slate-600 mb-2">No active messages</h3>
              <p className="text-slate-500 font-subheading mb-4 text-sm sm:text-base">All your messages have been archived.</p>
                <Button 
                  variant="outline" 
                  onClick={handleShowArchived}
                  className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
                >
                  <Archive className="h-4 w-4 mr-2" />
                  View Archived ({archivedMessages.length})
                </Button>
            </div>
          ) : (
            activeMessages.map((message) => (
              <div 
              key={message.id}
                className="w-full bg-white hover:bg-slate-50 transition-all duration-200 cursor-pointer border-b border-slate-100 last:border-b-0"
              onClick={() => handleMessageClick(message)}
            >
                <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 group">
                  <div className="relative flex-shrink-0">
                    <Avatar className="w-12 h-12 sm:w-14 sm:h-14">
                      <AvatarImage src={message.avatar || undefined} alt={message.name} />
                      <AvatarFallback className={`${message.isPriority ? 'bg-[#0056B3]/10 text-[#0056B3]' : 'bg-slate-100 text-slate-600'} font-medium text-sm sm:text-base`}>
                        {message.initials}
                      </AvatarFallback>
                    </Avatar>
                    {message.isOnline && (
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 ${message.isPriority ? 'bg-[#0056B3]' : 'bg-green-500'} rounded-full border-2 border-white`}></div>
                    )}
        </div>

          <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-heading text-base sm:text-lg text-primary-navy truncate">
                        {message.name}
                      </h3>
                      <div className="flex items-center space-x-1 sm:space-x-2 ml-2">
                        <span className="text-xs sm:text-sm text-slate-500 font-subheading whitespace-nowrap">{message.date}</span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 sm:h-7 sm:w-7">
                              <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-32 sm:w-40">
                            <DropdownMenuItem onClick={(e) => handleArchive(message.id, e)}>
                              <Archive className="h-4 w-4 mr-2" />
                              {message.isArchived ? 'Unarchive' : 'Archive'}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={(e) => handleStar(message.id, e)}>
                              <Star className={`h-4 w-4 mr-2 ${message.isStarred ? 'fill-amber-400 text-amber-400' : ''}`} />
                              {message.isStarred ? 'Unstar' : 'Star'}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={(e) => handleDelete(message.id, e)} className="text-red-600 focus:text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <p className="text-slate-600 font-subheading leading-relaxed line-clamp-2 text-xs sm:text-sm mb-2 sm:mb-3">
                      {message.preview}
                    </p>
                                <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${message.isPriority ? 'bg-[#0056B3]/10 text-[#0056B3]' : 'bg-slate-100 text-slate-600'}`}>
                          {message.category}
                        </span>
                        {message.messageCount > 1 && (
                          <span className="text-xs text-slate-500 hidden sm:inline">{message.messageCount} messages</span>
                        )}
                      </div>
                      {message.isStarred && (
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                      )}
                    </div>
            </div>
          </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Message */}
        <Card className="border-0 shadow-sm rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary-navy to-[#0056B3] text-white mt-6 sm:mt-8">
          <CardContent className="p-4 sm:p-6">
            <div className="text-center">
              <h3 className="font-heading text-lg sm:text-xl mb-2">Stay Connected</h3>
              <p className="text-blue-200 font-subheading leading-relaxed text-sm sm:text-base">
                Keep the conversation going with your professional network. Every message is an opportunity to grow.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
