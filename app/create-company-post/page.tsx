"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, X, ImageIcon, Smile, AtSign, MapPin, Users, Globe, Building, Hash } from "lucide-react"

export default function CreateCompanyPostPage() {
  const router = useRouter()
  const [postText, setPostText] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [audience, setAudience] = useState("everyone") // everyone, partners, private

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePost = () => {
    // Handle posting logic here
    console.log("Posting:", { text: postText, image: selectedImage, audience })
    // Redirect back to company feed after posting
    router.push("/company-feed")
  }

  const removeImage = () => {
    setSelectedImage(null)
  }

  const audienceOptions = [
    { value: "everyone", label: "Everyone", icon: Globe },
    { value: "partners", label: "Partners only", icon: Users },
    { value: "private", label: "Only company", icon: Building }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-slate-200 z-10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
              className="rounded-full h-10 w-10 text-slate-600 hover:bg-slate-100"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-heading text-primary-navy">Create Company Post</h1>
          </div>
          <Button
            onClick={handlePost}
            disabled={!postText.trim() && !selectedImage}
            className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-full px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            Post
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-w-2xl mx-auto">
        {/* Company Info */}
        <div className="flex items-center space-x-3 mb-6">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/company-logo.png" alt="Company" />
            <AvatarFallback className="bg-[#0056B3]/10 text-[#0056B3] font-medium">TC</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-heading text-primary-navy">Your Company</p>
            <div className="flex items-center space-x-2">
              <select 
                value={audience} 
                onChange={(e) => setAudience(e.target.value)}
                className="text-sm text-slate-600 bg-transparent border-0 focus:outline-none cursor-pointer"
              >
                {audienceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Text Input */}
        <div className="mb-6">
          <Textarea
            placeholder="Share company updates, job openings, or industry insights..."
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="min-h-[200px] resize-none border-0 p-0 text-xl placeholder:text-slate-400 focus:outline-none focus:ring-0 font-normal"
            autoFocus
          />
        </div>

        {/* Image Preview */}
        {selectedImage && (
          <div className="relative mb-6">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-96 object-cover rounded-2xl border border-slate-200"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-3 right-3 h-10 w-10 rounded-full bg-black/70 hover:bg-black/80 text-white border-0"
              onClick={removeImage}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Add Media Section */}
        <div className="flex items-center space-x-4 mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label htmlFor="image-upload">
            <Button variant="ghost" size="lg" className="cursor-pointer text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-xl p-3" asChild>
              <span>
                <ImageIcon className="h-6 w-6" />
              </span>
            </Button>
          </label>
          
          <Button variant="ghost" size="lg" className="text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-xl p-3">
            <Hash className="h-6 w-6" />
          </Button>
          
          <Button variant="ghost" size="lg" className="text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-xl p-3">
            <MapPin className="h-6 w-6" />
          </Button>
        </div>

        {/* Additional Options */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer">
            <div className="flex items-center space-x-3">
              <AtSign className="h-5 w-5 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Tag companies</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer">
            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Share with specific partners</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Spacing for Mobile */}
      <div className="h-20"></div>
    </div>
  )
} 