"use client"

import type React from "react"
import { useRouter } from "next/navigation"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { BookmarkIcon, Heart, MessageCircle, MoreHorizontal, X, Plus, Building, TrendingUp, Award, Users, Share, Trash2, Flag, CornerUpRight } from "lucide-react"
import { useState } from "react"

export default function CompanyFeedPage() {
  const router = useRouter()
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set())
  const [savedPosts, setSavedPosts] = useState<Set<string>>(new Set())
  const [selectedPost, setSelectedPost] = useState<any>(null)
  const [showPostMenu, setShowPostMenu] = useState<string | null>(null)

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

  const handlePostClick = (post: any) => {
    setSelectedPost(post)
  }

  const handleShare = (post: any) => {
    console.log('Sharing post:', post)
    setShowPostMenu(null)
  }

  const handleDelete = (post: any) => {
    console.log('Deleting post:', post)
    setShowPostMenu(null)
  }

  const handleReport = (post: any) => {
    console.log('Reporting post:', post)
    setShowPostMenu(null)
  }

  const handleCreatePost = () => {
    router.push('/create-company-post')
  }

  // Sample company posts data
  const posts = [
    {
      id: 'company-post-1',
      author: 'TechCorp Solutions',
      title: 'Software Development • Fortune 500',
      timeAgo: '3 hours ago',
      avatar: '/placeholder-company.jpg',
      content: `🚀 We're thrilled to announce that TechCorp has been recognized as one of the "Best Places to Work in Tech 2024"! 

This achievement reflects our commitment to:
• Innovation-driven culture
• Work-life balance and remote flexibility
• Continuous learning opportunities
• Competitive compensation and benefits

We're actively hiring for 15+ positions across engineering, product, and design. Join our mission to build the future of technology! 💙`,
      image: '/campus-walk.png',
      imageTitle: 'Best Places to Work 2024',
      imageDescription: 'TechCorp recognized for exceptional workplace culture and employee satisfaction...',
      imageSource: 'techcorp.com/careers',
      likes: 184,
      commentsCount: 37,
      comments: []
    },
    {
      id: 'company-post-2',
      author: 'DataStream Analytics',
      title: 'AI & Machine Learning • Series B Startup',
      timeAgo: '1 day ago',
      avatar: '/placeholder-company.jpg',
      content: `🎯 We're looking for passionate AI Engineers to join our growing team!

What we offer:
• Competitive salary: $120k - $180k
• Equity package with high growth potential
• Flexible remote work policy
• $5k annual learning budget

Requirements: 3+ years Python, TensorFlow/PyTorch, and a passion for solving real-world problems with AI.

Ready to shape the future of data analytics? Apply now! 🔗`,
      likes: 92,
      commentsCount: 28,
      comments: []
    },
    {
      id: 'company-post-3',
      author: 'GrowthVentures Capital',
      title: 'Venture Capital • Investment Firm',
      timeAgo: '2 days ago',
      avatar: '/placeholder-company.jpg',
      content: `📈 Market Update: The tech hiring landscape is evolving rapidly in 2024.

Key trends we're seeing:
• 40% increase in AI/ML role demand
• Remote-first policies becoming standard
• Companies prioritizing diverse talent pipelines
• Emphasis on full-stack capabilities

For job seekers: Focus on upskilling and demonstrating adaptability. 
For companies: Competitive packages and culture are more important than ever.

What trends are you seeing in your industry? 🤔`,
      likes: 156,
      commentsCount: 42,
      comments: []
    }
  ]

  return (
    <div className="min-h-full">
      <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[75%] xl:max-w-[65%] mx-auto px-2 sm:px-6 py-4">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading text-primary-navy mb-2">Company Feed</h1>
            <p className="text-base sm:text-lg md:text-xl font-subheading text-slate-600">
              Connect with the professional community and share your company updates
            </p>
          </div>

          {/* New Post Button */}
          <Button 
            onClick={handleCreatePost}
            className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-full w-10 h-10 sm:w-auto sm:h-auto sm:px-6 sm:py-2 shadow-lg hover:shadow-xl transition-all duration-200 font-subheading text-xs sm:text-base flex-shrink-0 flex items-center justify-center"
          >
            <Plus className="h-4 w-4 sm:h-4 sm:w-4 sm:mr-2" />
            <span className="hidden sm:inline">New Post</span>
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="hidden sm:flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto pb-2">
          <Button variant="default" className="rounded-lg bg-primary-navy hover:bg-primary-navy/90 text-white shadow-sm font-subheading text-xs sm:text-sm whitespace-nowrap">
            All Posts
          </Button>
          <Button variant="outline" className="rounded-lg border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-subheading text-xs sm:text-sm whitespace-nowrap">
            <Building className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Companies
          </Button>
          <Button variant="outline" className="rounded-lg border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-subheading text-xs sm:text-sm whitespace-nowrap">
            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Industry News
          </Button>
          <Button variant="outline" className="rounded-lg border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-subheading text-xs sm:text-sm whitespace-nowrap">
            <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Hiring Updates
          </Button>
          <Button variant="outline" className="rounded-lg border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-subheading text-xs sm:text-sm whitespace-nowrap">
            <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Company Culture
          </Button>
        </div>

        {/* Feed Posts */}
        <div className="space-y-6 sm:space-y-8">
          {posts.map((post, index) => (
            <div key={post.id} className="bg-white hover:bg-slate-50/50 transition-all duration-200 cursor-pointer border-b border-slate-100 pb-6 sm:pb-8">
              <div className="p-0" onClick={() => handlePostClick(post)}>
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="flex space-x-3 sm:space-x-4 flex-1 min-w-0">
                    <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0">
                      <AvatarImage src={post.avatar} alt="Company" />
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
                  <span className="text-2xl sm:text-3xl">🏢</span>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">Welcome to the Company Feed!</h3>
                  <p className="text-white/80 font-subheading leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
                    Connect with businesses, discover opportunities, and share your company's story with the professional community.
                  </p>
                  <Button 
                    variant="secondary" 
                    className="bg-white text-primary-navy hover:bg-primary-navy hover:text-white rounded-full font-subheading border border-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base w-full sm:w-auto"
                    onClick={handleCreatePost}
                  >
                    Share Your Story
                  </Button>
                </div>
                <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10 self-end sm:self-start flex-shrink-0">
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 