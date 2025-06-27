"use client"

import type React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { BookmarkIcon, Heart, MessageCircle, MoreHorizontal, X, Send, ImageIcon, Plus, Smile, AtSign, Hash, Share, Trash2, Flag, Copy, LinkIcon, Facebook, Twitter, Users, Check, ArrowRight, CornerUpRight } from "lucide-react"
import { useState } from "react"

export default function FeedPage() {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set())
  const [savedPosts, setSavedPosts] = useState<Set<string>>(new Set())
  const [selectedPost, setSelectedPost] = useState<any>(null)
  const [newComment, setNewComment] = useState("")
  const [showPostMenu, setShowPostMenu] = useState<string | null>(null)
  const [shareModalPost, setShareModalPost] = useState<any>(null)
  const [deleteModalPost, setDeleteModalPost] = useState<any>(null)
  const [reportModalPost, setReportModalPost] = useState<any>(null)
  const [reportReason, setReportReason] = useState("")
  const [selectedMutualFollowers, setSelectedMutualFollowers] = useState<string[]>([])
  const [shareMessage, setShareMessage] = useState("")

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newLikedPosts = new Set(prev)
      if (newLikedPosts.has(postId)) {
        newLikedPosts.delete(postId)
      } else {
        newLikedPosts.add(postId)
      }
      return newLikedPosts
    })
  }

  const toggleSave = (postId: string) => {
    setSavedPosts(prev => {
      const newSavedPosts = new Set(prev)
      if (newSavedPosts.has(postId)) {
        newSavedPosts.delete(postId)
      } else {
        newSavedPosts.add(postId)
      }
      return newSavedPosts
    })
  }

  // Sample post data
  const posts = [
    {
      id: 'post-1',
      author: 'Carl Livingston',
      title: 'Computer Science · Stanford University · 2024',
      timeAgo: '2 hours ago',
      avatar: '/placeholder-user.jpg',
      content: `Just finished my final interview round at Google! 🎉 The preparation was intense, but these interview tips from the 100 Networks community were game-changers. 
      
Key takeaways that helped me:
• Research the company culture deeply
• Practice behavioral questions with real examples
• Ask thoughtful questions about the role

Grateful for this amazing community! 💙`,
      image: '/campus-walk.png',
      imageTitle: '5 Interview Tips That Actually Work',
      imageDescription: 'Transform your interview game with research-backed strategies...',
      imageSource: '100networks.com',
      likes: 127,
      commentsCount: 23,
      comments: [
        {
          id: 1,
          author: 'Sarah Johnson',
          avatar: '/placeholder-user.jpg',
          content: 'Congratulations Carl! Your journey has been so inspiring to follow. Google is lucky to have you!',
          timeAgo: '1 hour ago',
          likes: 8
        },
        {
          id: 2,
          author: 'Mike Chen',
          avatar: '/placeholder-user.jpg',
          content: 'Those tips are gold! Especially the one about asking thoughtful questions. It really shows you\'re genuinely interested.',
          timeAgo: '45 minutes ago',
          likes: 12
        },
        {
          id: 3,
          author: 'Emily Rodriguez',
          avatar: '/placeholder-user.jpg',
          content: 'This community really is amazing. Thank you for sharing your experience - it helps all of us learn!',
          timeAgo: '30 minutes ago',
          likes: 5
        }
      ]
    },
    {
      id: 'post-2',
      author: 'Ian Arruda, MPM, CAPM',
      title: 'Arizona State University · Project Management',
      timeAgo: '1 day ago',
      avatar: '/placeholder.svg?height=40&width=40',
      content: `🎓 I finally did it! After two years of balancing work, studies, and life, I've earned my Master of Project Management degree from Arizona State University.

This journey taught me that persistence pays off. Thank you to everyone who supported me along the way – mentors, classmates, and the incredible 100 Networks community! 

Next chapter: Leading impactful projects and helping others achieve their goals. 🚀`,
      likes: 89,
      commentsCount: 12,
      comments: [
        {
          id: 1,
          author: 'Jessica Williams',
          avatar: '/placeholder-user.jpg',
          content: 'Amazing achievement Ian! Your dedication really paid off. Excited to see what projects you lead next!',
          timeAgo: '20 hours ago',
          likes: 6
        },
        {
          id: 2,
          author: 'David Park',
          avatar: '/placeholder-user.jpg',
          content: 'Congratulations! Project management is such a valuable skill. Any advice for someone just starting their PM journey?',
          timeAgo: '18 hours ago',
          likes: 4
        }
      ]
    }
  ]

  const handlePostClick = (post: any) => {
    setSelectedPost(post)
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      // In a real app, this would make an API call
      console.log('Adding comment:', newComment)
      setNewComment("")
    }
  }

  const handleShare = (post: any) => {
    setShareModalPost(post)
    setSelectedMutualFollowers([])
    setShareMessage("")
    setShowPostMenu(null)
  }

  // Sample mutual followers data
  const mutualFollowers = [
    {
      id: 'user-1',
      name: 'Sarah Johnson',
      avatar: '/placeholder-user.jpg',
      title: 'Software Engineer at Meta',
      isOnline: true
    },
    {
      id: 'user-2', 
      name: 'Mike Chen',
      avatar: '/placeholder-user.jpg',
      title: 'Product Manager at Google',
      isOnline: false
    },
    {
      id: 'user-3',
      name: 'Emily Rodriguez',
      avatar: '/placeholder-user.jpg',
      title: 'UX Designer at Apple',
      isOnline: true
    },
    {
      id: 'user-4',
      name: 'David Park',
      avatar: '/placeholder-user.jpg',
      title: 'Data Scientist at Netflix',
      isOnline: false
    },
    {
      id: 'user-5',
      name: 'Jessica Williams',
      avatar: '/placeholder-user.jpg',
      title: 'Marketing Director at Spotify',
      isOnline: true
    }
  ]

  const toggleMutualFollower = (userId: string) => {
    setSelectedMutualFollowers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    )
  }

  const shareWithFollowers = () => {
    if (selectedMutualFollowers.length > 0) {
      console.log('Sharing post with:', selectedMutualFollowers, 'Message:', shareMessage)
      setShareModalPost(null)
      setSelectedMutualFollowers([])
      setShareMessage("")
    }
  }

  const handleDelete = (post: any) => {
    setDeleteModalPost(post)
    setShowPostMenu(null)
  }

  const handleReport = (post: any) => {
    setReportModalPost(post)
    setShowPostMenu(null)
  }

  const confirmDelete = () => {
    // In a real app, this would make an API call to delete the post
    console.log('Deleting post:', deleteModalPost?.id)
    setDeleteModalPost(null)
  }

  const submitReport = () => {
    // In a real app, this would make an API call to report the post
    console.log('Reporting post:', reportModalPost?.id, 'Reason:', reportReason)
    setReportModalPost(null)
    setReportReason("")
  }

  return (
            <div className="min-h-full">
      <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[75%] xl:max-w-[65%] mx-auto px-2 sm:px-6 py-4">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading text-primary-navy mb-2">What's Happening Today?</h1>
      </div>

          {/* New Post Button */}
          <Link href="/create-post">
            <Button 
              className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-full w-10 h-10 sm:w-auto sm:h-auto sm:px-6 sm:py-2 shadow-lg hover:shadow-xl transition-all duration-200 font-subheading text-xs sm:text-base flex-shrink-0 flex items-center justify-center"
            >
              <Plus className="h-4 w-4 sm:h-4 sm:w-4 sm:mr-2" />
              <span className="hidden sm:inline">New Post</span>
            </Button>
          </Link>
        </div>



        {/* Feed Posts */}
        <div className="space-y-6 sm:space-y-8">
          {posts.map((post, index) => (
            <div key={post.id} className="bg-white hover:bg-slate-50/50 transition-all duration-200 cursor-pointer border-b border-slate-100 pb-6 sm:pb-8">
              <div className="p-0" onClick={() => handlePostClick(post)}>
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="flex space-x-3 sm:space-x-4 flex-1 min-w-0">
                    <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0">
                      <AvatarImage src={post.avatar} alt="User" />
                      <AvatarFallback className="bg-[#0056B3]/10 text-[#0056B3] font-medium text-sm sm:text-base md:text-lg">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
              </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="font-heading text-base sm:text-lg md:text-xl text-primary-navy truncate">{post.author}</div>
                      <div className="text-xs sm:text-sm md:text-base text-slate-500 font-subheading line-clamp-2">{post.title}</div>
                      <div className="text-xs sm:text-sm text-slate-400 mt-1">{post.timeAgo}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-slate-400 hover:text-[#0056B3] transition-all duration-200 h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0" 
                      onClick={(e) => {
                        e.stopPropagation()
                        handleShare(post)
                      }}
                    >
                      <CornerUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                          <MoreHorizontal className="h-5 w-5 sm:h-6 sm:w-6" />
                        </Button>
                      </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48 sm:w-52">
                      <DropdownMenuItem onClick={(e) => { e.stopPropagation(); handleShare(post); }} className="cursor-pointer">
                        <Share className="h-4 w-4 mr-2" />
                        Share post
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={(e) => { e.stopPropagation(); handleDelete(post); }} className="cursor-pointer text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete post
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={(e) => { e.stopPropagation(); handleReport(post); }} className="cursor-pointer">
                        <Flag className="h-4 w-4 mr-2" />
                        Report post
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <p className="text-slate-700 font-subheading leading-relaxed text-sm sm:text-base">
                    {post.content.length > 200 ? `${post.content.substring(0, 200)}...` : post.content}
                </p>
            </div>

                {post.image && (
                  <div className="rounded-xl overflow-hidden border border-slate-100 mb-4 sm:mb-6">
                    <img src={post.image} alt="Post content" className="w-full h-40 sm:h-48 md:h-52 object-cover" />
                    {post.imageTitle && (
                      <div className="p-3 sm:p-4 md:p-6 bg-slate-50">
                        <h3 className="font-heading text-base sm:text-lg text-primary-navy mb-1 sm:mb-2">{post.imageTitle}</h3>
                        <p className="text-xs sm:text-sm md:text-base text-slate-600 font-subheading line-clamp-2">{post.imageDescription}</p>
                        <p className="text-xs sm:text-sm text-[#0056B3] mt-1 sm:mt-2 font-medium">{post.imageSource}</p>
          </div>
                    )}
              </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                <div className="flex items-center space-x-6 text-slate-500">
                    <span className="text-xs sm:text-sm md:text-base font-subheading">{post.likes} likes • {post.commentsCount} comments</span>
            </div>
                  <div className="flex space-x-4 sm:space-x-6 justify-center sm:justify-end">
                    <Button 
                      variant="ghost" 
                      size="lg" 
                      className={`hover:bg-transparent transition-all duration-200 p-3 sm:p-4 ${
                        likedPosts.has(post.id) 
                          ? 'text-red-500' 
                          : 'text-slate-600 hover:text-red-500'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLike(post.id)
                      }}
                    >
                      <Heart className={`h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-all duration-200 stroke-[2.5] ${
                        likedPosts.has(post.id) ? 'fill-red-500' : ''
                      }`} />
                </Button>
                    <Button 
                      variant="ghost" 
                      size="lg" 
                      className="text-slate-600 hover:text-primary-navy hover:bg-transparent transition-all duration-200 p-3 sm:p-4"
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePostClick(post)
                      }}
                    >
                      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 stroke-[2.5]" />
                </Button>
                    <Button 
                      variant="ghost" 
                      size="lg" 
                      className={`hover:bg-transparent transition-all duration-200 p-3 sm:p-4 ${
                        savedPosts.has(post.id) 
                          ? 'text-[#0056B3]' 
                          : 'text-slate-600 hover:text-[#0056B3]'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleSave(post.id)
                      }}
                    >
                      <BookmarkIcon className={`h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-all duration-200 stroke-[2.5] ${
                        savedPosts.has(post.id) ? 'fill-[#0056B3]' : ''
                      }`} />
                </Button>
              </div>
            </div>
              </div>
            </div>
          ))}

          {/* Community Spotlight Card */}
          <div className="rounded-2xl bg-gradient-to-r from-primary-navy to-[#0056B3] text-white mt-8 sm:mt-12">
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
                <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl self-center sm:self-start flex-shrink-0">
                  <span className="text-2xl sm:text-3xl">✨</span>
            </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">Welcome to the Community Feed!</h3>
                  <p className="text-white/80 font-subheading leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
                    Follow thousands of students and professionals. Share your journey, get advice, and discover opportunities that align with your goals.
                  </p>
                  <Link href="/create-post">
                    <Button 
                      variant="secondary" 
                      className="bg-white text-primary-navy hover:bg-primary-navy hover:text-white rounded-full font-subheading border border-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base w-full sm:w-auto"
                    >
                      Share Your Story
                    </Button>
                  </Link>
            </div>
                <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10 self-end sm:self-start flex-shrink-0">
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {shareModalPost && (
        <Dialog open={!!shareModalPost} onOpenChange={() => setShareModalPost(null)}>
          <DialogContent className="max-w-[92%] sm:max-w-[85%] md:max-w-[500px] max-h-[80vh] sm:max-h-[85vh] p-0 bg-white rounded-xl sm:rounded-2xl shadow-2xl border-0 overflow-hidden mx-auto [&>button]:!outline-none [&>button]:!ring-0 [&>button]:!shadow-none [&>button]:focus:!outline-none [&>button]:focus:!ring-0 [&>button]:focus:!shadow-none">
            <DialogHeader className="p-3 sm:p-4 border-b border-slate-100 flex-shrink-0">
              <DialogTitle className="font-heading text-sm sm:text-base md:text-lg text-primary-navy">Share Post</DialogTitle>
            </DialogHeader>
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                {/* Post Preview */}
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-slate-50 rounded-lg sm:rounded-xl">
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                    <AvatarImage src={shareModalPost.avatar} alt={shareModalPost.author} />
                    <AvatarFallback className="bg-[#0056B3]/10 text-[#0056B3] font-medium text-xs sm:text-sm">
                      {shareModalPost.author.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-primary-navy text-sm sm:text-base truncate">{shareModalPost.author}</p>
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2">{shareModalPost.content.substring(0, 60)}...</p>
                  </div>
                </div>
                
                {/* Share with Mutual Followers */}
                <div>
                  <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[#0056B3]" />
                    <h3 className="font-heading text-sm sm:text-base md:text-lg text-primary-navy">Share with followers</h3>
                  </div>
                  
                  {/* Message Input */}
                  <Textarea
                    placeholder="Add a message (optional)"
                    value={shareMessage}
                    onChange={(e) => setShareMessage(e.target.value)}
                    className="mb-3 sm:mb-4 min-h-[45px] sm:min-h-[50px] resize-none border-slate-200 !outline-none !ring-0 !shadow-none focus:!outline-none focus:!ring-0 focus:!shadow-none focus:!border-slate-300 text-xs sm:text-sm font-subheading rounded-lg"
                    autoFocus={false}
                  />
                  
                  {/* Mutual Followers List */}
                  <div className="space-y-1 sm:space-y-1.5 max-h-32 sm:max-h-36 overflow-y-auto scrollbar-hide">
                    {mutualFollowers.map((follower) => (
                      <div
                        key={follower.id}
                        onClick={() => toggleMutualFollower(follower.id)}
                        className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedMutualFollowers.includes(follower.id)
                            ? 'bg-[#0056B3]/10 border border-[#0056B3]/20'
                            : 'bg-slate-50 hover:bg-slate-100'
                        }`}
                      >
                        <Avatar className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                          <AvatarImage src={follower.avatar} alt={follower.name} />
                          <AvatarFallback className="bg-[#0056B3]/10 text-[#0056B3] font-medium text-xs">
                            {follower.name.split(' ').map((n: string) => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-1.5">
                            <p className="font-medium text-primary-navy text-xs sm:text-sm truncate">{follower.name}</p>
                            {follower.isOnline && (
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 truncate">{follower.title}</p>
                        </div>
                        {selectedMutualFollowers.includes(follower.id) && (
                          <Check className="h-4 w-4 text-[#0056B3] flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {selectedMutualFollowers.length > 0 && (
                    <div className="mt-2 sm:mt-3 flex flex-col gap-2">
                      <Button
                        variant="outline"
                        onClick={() => setSelectedMutualFollowers([])}
                        className="w-full h-9 sm:h-10 text-xs"
                      >
                        Clear Selection
                      </Button>
                      <Button
                        onClick={shareWithFollowers}
                        className="w-full h-9 sm:h-10 bg-[#0056B3] hover:bg-[#0056B3]/90 text-xs"
                      >
                        Share with {selectedMutualFollowers.length} {selectedMutualFollowers.length === 1 ? 'person' : 'people'}
                      </Button>
                    </div>
                  )}
                </div>
                
                {/* External Share Options */}
                <div>
                  <h3 className="font-heading text-sm sm:text-base text-primary-navy mb-2">Share on other platforms</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="w-full justify-start space-x-1.5 h-9 sm:h-10 text-xs">
                      <Copy className="h-3 w-3" />
                      <span className="truncate">Copy link</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start space-x-1.5 h-9 sm:h-10 text-xs">
                      <LinkIcon className="h-3 w-3" />
                      <span className="truncate">Share link</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start space-x-1.5 h-9 sm:h-10 text-xs">
                      <Facebook className="h-3 w-3" />
                      <span className="truncate">Facebook</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start space-x-1.5 h-9 sm:h-10 text-xs">
                      <Twitter className="h-3 w-3" />
                      <span className="truncate">Twitter</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Modal */}
      {deleteModalPost && (
        <Dialog open={!!deleteModalPost} onOpenChange={() => setDeleteModalPost(null)}>
          <DialogContent className="max-w-[95%] sm:max-w-[400px] p-0 bg-white rounded-2xl shadow-2xl border-0 [&>button]:!outline-none [&>button]:!ring-0 [&>button]:!shadow-none [&>button]:focus:!outline-none [&>button]:focus:!ring-0 [&>button]:focus:!shadow-none">
            <DialogHeader className="p-4 sm:p-6 border-b border-slate-100">
              <DialogTitle className="font-heading text-lg sm:text-xl text-red-600">Delete Post</DialogTitle>
            </DialogHeader>
            <div className="p-4 sm:p-6">
              <p className="text-slate-700 mb-6 text-sm sm:text-base">
                Are you sure you want to delete this post? This action cannot be undone.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  variant="outline"
                  onClick={() => setDeleteModalPost(null)}
                  className="flex-1 h-11"
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={confirmDelete}
                  className="flex-1 h-11"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Report Modal */}
      {reportModalPost && (
        <Dialog open={!!reportModalPost} onOpenChange={() => setReportModalPost(null)}>
          <DialogContent className="max-w-[95%] sm:max-w-[500px] p-0 bg-white rounded-2xl shadow-2xl border-0 [&>button]:!outline-none [&>button]:!ring-0 [&>button]:!shadow-none [&>button]:focus:!outline-none [&>button]:focus:!ring-0 [&>button]:focus:!shadow-none">
            <DialogHeader className="p-4 sm:p-6 border-b border-slate-100">
              <DialogTitle className="font-heading text-lg sm:text-xl text-primary-navy">Report Post</DialogTitle>
            </DialogHeader>
            <div className="p-4 sm:p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl">
                  <Avatar className="w-10 h-10 flex-shrink-0">
                    <AvatarImage src={reportModalPost.avatar} alt={reportModalPost.author} />
                    <AvatarFallback className="bg-[#0056B3]/10 text-[#0056B3] font-medium text-sm">
                      {reportModalPost.author.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-primary-navy text-sm sm:text-base truncate">{reportModalPost.author}</p>
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2">{reportModalPost.content.substring(0, 80)}...</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">Why are you reporting this post?</label>
                  <div className="space-y-2">
                    {[
                      'Inappropriate content',
                      'Spam or misleading',
                      'Harassment or bullying',
                      'False information',
                      'Intellectual property violation',
                      'Other'
                    ].map((reason) => (
                      <label key={reason} className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-slate-50">
                        <input
                          type="radio"
                          name="reportReason"
                          value={reason}
                          checked={reportReason === reason}
                          onChange={(e) => setReportReason(e.target.value)}
                          className="text-[#0056B3] focus:ring-[#0056B3]"
                        />
                        <span className="text-sm sm:text-base text-slate-700">{reason}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setReportModalPost(null)}
                    className="flex-1 h-11"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={submitReport}
                    disabled={!reportReason}
                    className="flex-1 h-11 bg-[#0056B3] hover:bg-[#0056B3]/90"
                  >
                    <Flag className="h-4 w-4 mr-2" />
                    Submit Report
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Post Detail Modal */}
      {selectedPost && (
        <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
          <DialogContent className="max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] max-h-[90vh] p-0 bg-white rounded-2xl shadow-2xl border-0 overflow-hidden [&>button]:!outline-none [&>button]:!ring-0 [&>button]:!shadow-none [&>button]:focus:!outline-none [&>button]:focus:!ring-0 [&>button]:focus:!shadow-none">
            <div className="flex flex-col h-full max-h-[90vh]">
              {/* Header */}
              <DialogHeader className="p-4 sm:p-6 border-b border-slate-100 flex-shrink-0">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Avatar className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                    <AvatarImage src={selectedPost.avatar} alt="User" />
                    <AvatarFallback className="bg-[#0056B3]/10 text-[#0056B3] font-medium">
                      {selectedPost.author.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <DialogTitle className="font-heading text-lg sm:text-xl text-primary-navy truncate">{selectedPost.author}</DialogTitle>
                    <p className="text-sm sm:text-base text-slate-500 font-subheading line-clamp-2">{selectedPost.title}</p>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">{selectedPost.timeAgo}</p>
                  </div>
                </div>
              </DialogHeader>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 sm:p-6">
                  {/* Post Content */}
                  <div className="mb-6">
                    <p className="text-slate-700 font-subheading leading-relaxed text-sm sm:text-base whitespace-pre-line">
                      {selectedPost.content}
                    </p>
                  </div>

                  {/* Post Image */}
                  {selectedPost.image && (
                    <div className="rounded-xl overflow-hidden border border-slate-100 mb-6">
                      <img src={selectedPost.image} alt="Post content" className="w-full h-48 sm:h-64 md:h-72 object-cover" />
                      {selectedPost.imageTitle && (
                        <div className="p-4 bg-slate-50">
                          <h3 className="font-heading text-lg sm:text-xl text-primary-navy mb-2">{selectedPost.imageTitle}</h3>
                          <p className="text-sm sm:text-base text-slate-600 font-subheading">{selectedPost.imageDescription}</p>
                          <p className="text-sm text-[#0056B3] mt-2 font-medium">{selectedPost.imageSource}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                    <span className="text-slate-500 font-subheading text-sm sm:text-base">{selectedPost.likes} likes • {selectedPost.commentsCount} comments</span>
                    <div className="flex space-x-4">
                      <Button 
                        variant="ghost" 
                        size="lg" 
                        className={`hover:bg-transparent transition-all duration-200 p-2 sm:p-3 ${
                          likedPosts.has(selectedPost.id) 
                            ? 'text-red-500' 
                            : 'text-slate-600 hover:text-red-500'
                        }`}
                        onClick={() => toggleLike(selectedPost.id)}
                      >
                        <Heart className={`h-6 w-6 sm:h-7 sm:w-7 transition-all duration-200 stroke-[2.5] ${
                          likedPosts.has(selectedPost.id) ? 'fill-red-500' : ''
                        }`} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="lg" 
                        className={`hover:bg-transparent transition-all duration-200 p-2 sm:p-3 ${
                          savedPosts.has(selectedPost.id) 
                            ? 'text-[#0056B3]' 
                            : 'text-slate-600 hover:text-[#0056B3]'
                        }`}
                        onClick={() => toggleSave(selectedPost.id)}
                      >
                        <BookmarkIcon className={`h-6 w-6 sm:h-7 sm:w-7 transition-all duration-200 stroke-[2.5] ${
                          savedPosts.has(selectedPost.id) ? 'fill-[#0056B3]' : ''
                        }`} />
                      </Button>
                    </div>
                  </div>

                  {/* Comments Section */}
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl text-primary-navy mb-4">Comments</h3>
                    
                    {/* Add Comment */}
                    <div className="flex space-x-3 mb-6">
                      <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                        <AvatarImage src="/placeholder-user.jpg" alt="You" />
                        <AvatarFallback className="bg-[#0056B3]/10 text-[#0056B3] font-medium text-xs sm:text-sm">YU</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Textarea
                          placeholder="Write a comment..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className="min-h-[60px] sm:min-h-[80px] resize-none border-slate-200 !outline-none !ring-0 !shadow-none focus:!outline-none focus:!ring-0 focus:!shadow-none focus:!border-slate-300 text-sm sm:text-base font-subheading rounded-xl"
                        />
                        <div className="flex justify-end mt-2">
                          <Button
                            onClick={handleAddComment}
                            disabled={!newComment.trim()}
                            size="sm"
                            className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-full px-4 py-2 text-xs sm:text-sm"
                          >
                            Comment
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-4">
                      {selectedPost.comments.map((comment: any) => (
                        <div key={comment.id} className="flex space-x-3">
                          <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                            <AvatarImage src={comment.avatar} alt={comment.author} />
                            <AvatarFallback className="bg-[#0056B3]/10 text-[#0056B3] font-medium text-xs sm:text-sm">
                              {comment.author.split(' ').map((n: string) => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 bg-slate-50 rounded-xl p-3 sm:p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-medium text-primary-navy text-sm sm:text-base">{comment.author}</div>
                              <div className="text-xs sm:text-sm text-slate-400">{comment.timeAgo}</div>
                            </div>
                            <p className="text-slate-700 font-subheading text-sm sm:text-base leading-relaxed mb-2">
                              {comment.content}
                            </p>
                            <div className="flex items-center space-x-4">
                              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-red-500 hover:bg-transparent p-1">
                                <Heart className="h-4 w-4 mr-1" />
                                <span className="text-xs">{comment.likes}</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-primary-navy hover:bg-transparent p-1 text-xs">
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
