"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Edit,
  Plus,
  Award,
  Briefcase,
  GraduationCap,
  Users,
  Eye,
  MessageCircle,
  Star,
  Calendar,
  ExternalLink,
  Download,
  Camera,
  Verified,
  X
} from "lucide-react"

export default function ProfilePage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    title: "Senior Software Engineer at TechCorp",
    location: "San Francisco, CA",
    email: "alex.johnson@email.com",
    phone: "(555) 123-4567",
    website: "alexjohnson.dev",
    bio: "Passionate software engineer with 7+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. I love solving complex problems and mentoring junior developers. Currently focused on building AI-powered solutions that make a positive impact on people's lives."
  })

  // Prevent hydration mismatches by only rendering client-specific content after hydration
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleEditProfile = () => {
    router.push("/edit-profile")
  }

  // Helper function to get initials safely
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  // Show loading state until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="w-full min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-pulse text-slate-400">Loading...</div>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-slate-50">
      {/* Enhanced Header Card - Full Width */}
      <div className="w-full sm:bg-white sm:border-b sm:border-slate-200 sm:shadow-sm">
        <div className="max-w-4xl mx-auto px-0 sm:px-3 md:px-4 lg:px-6">
          <div className="relative">
            {/* Modern Cover Photo - Hidden on mobile */}
            <div className="hidden sm:block h-40 md:h-48 lg:h-56 bg-gradient-to-br from-primary-navy via-[#0056B3] to-slate-600 relative rounded-b-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <Button
                size="sm"
                variant="secondary"
                className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 hover:bg-white text-slate-700 rounded-lg font-subheading text-xs sm:text-sm"
              >
                <Camera className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Edit Cover</span>
              </Button>
            </div>

            {/* Enhanced Profile Section */}
            <div className="relative pb-6 sm:pb-8 pt-4 sm:pt-0">
              <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-4 md:space-x-6 lg:space-x-8">
                {/* Profile Picture */}
                <div className="relative mb-4 sm:mb-0 sm:-mt-12 md:-mt-14 lg:-mt-16 flex-shrink-0">
                  <Avatar className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 sm:border-4 sm:border-white sm:shadow-xl">
                    <AvatarImage src="/professional-user-avatar.png" alt={profileData.name} />
                    <AvatarFallback className="text-lg sm:text-xl md:text-2xl font-heading bg-gradient-to-br from-primary-navy to-[#0056B3] text-white">
                      {getInitials(profileData.name)}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full bg-white shadow-lg hover:shadow-xl border-2 border-slate-100"
                  >
                    <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>

                {/* Profile Info */}
                <div className="flex-1 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
                  <div className="flex flex-col">
                    <div className="mb-3 sm:mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3">
                        <div className="mb-3 sm:mb-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2">
                            <div className="flex items-center space-x-2 mb-1 sm:mb-0">
                              <h1 className="text-xl sm:text-2xl md:text-3xl font-heading text-primary-navy">{profileData.name}</h1>
                              <Verified className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#0056B3]" />
                            </div>
                            <Badge className="bg-green-50 text-green-700 border-green-200 font-subheading text-xs w-fit">
                              Open to work
                            </Badge>
                          </div>
                          <p className="text-base sm:text-lg md:text-xl font-subheading text-slate-600 mb-2">{profileData.title}</p>
                          <div className="flex flex-col sm:flex-row sm:items-center text-slate-500 font-subheading text-sm space-y-1 sm:space-y-0">
                            <div className="flex items-center">
                              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                              {profileData.location}
                            </div>
                            <span className="hidden sm:inline mx-2">•</span>
                            <span>Available for opportunities</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 flex-shrink-0">
                          <Button variant="outline" className="border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading text-sm w-full sm:w-auto">
                            <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                            Resume
                          </Button>
                          <Button className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-sm w-full sm:w-auto" onClick={handleEditProfile}>
                            <Edit className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                            <span className="hidden sm:inline">Edit Profile</span>
                            <span className="sm:hidden">Edit</span>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Contact & Links */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 md:gap-6 text-sm mb-4">
                      <a href={`mailto:${profileData.email}`} className="flex items-center text-[#0056B3] hover:text-primary-navy transition-colors font-subheading">
                        <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{profileData.email}</span>
                      </a>
                      <div className="flex items-center text-slate-500 font-subheading">
                        <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                        {profileData.phone}
                      </div>
                      <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#0056B3] hover:text-primary-navy transition-colors font-subheading">
                        <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                        {profileData.website}
                        <ExternalLink className="h-2 w-2 sm:h-3 sm:w-3 ml-1" />
                      </a>
                    </div>

                    {/* Enhanced Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[#0056B3]" />
                        <div>
                          <span className="font-heading text-sm sm:text-base md:text-lg text-primary-navy">500+</span>
                          <span className="text-slate-500 font-subheading ml-1 text-xs sm:text-sm">followers</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-[#0056B3]" />
                        <div>
                          <span className="font-heading text-sm sm:text-base md:text-lg text-primary-navy">1,234</span>
                          <span className="text-slate-500 font-subheading ml-1 text-xs sm:text-sm">profile views</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                        <div>
                          <span className="font-heading text-sm sm:text-base md:text-lg text-primary-navy">4.9</span>
                          <span className="text-slate-500 font-subheading ml-1 text-xs sm:text-sm">rating</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Full Width Single Column */}
      <div className="w-full py-4 sm:py-6">
        <div className="max-w-6xl mx-auto px-0 sm:px-4 md:px-6">
          <div className="space-y-0 sm:space-y-6">
            {/* Enhanced About Section - Full Width */}
            <div className="w-full sm:bg-white sm:rounded-lg sm:border sm:border-slate-200 sm:shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:border-b sm:border-slate-100 p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy mb-2 sm:mb-0">About</h2>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-primary-navy hover:bg-primary-navy/5 rounded-full self-start sm:self-auto">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-slate-600 font-subheading leading-relaxed text-sm sm:text-base md:text-lg mb-4">
                  {profileData.bio}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                  <Badge className="bg-[#0056B3]/10 text-[#0056B3] border-[#0056B3]/20 font-subheading text-xs">Open to work</Badge>
                  <Badge className="bg-green-50 text-green-700 border-green-200 font-subheading text-xs">Remote friendly</Badge>
                  <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200 font-subheading text-xs">Mentor available</Badge>
                </div>
              </div>
            </div>

            {/* Enhanced Experience Section - Full Width */}
            <div className="w-full sm:bg-white sm:rounded-lg sm:border sm:border-slate-200 sm:shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:border-b sm:border-slate-100 p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy mb-2 sm:mb-0">Experience</h2>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-primary-navy hover:bg-primary-navy/5 rounded-full self-start sm:self-auto">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
                <div className="flex flex-col sm:flex-row sm:space-x-4 md:space-x-6">
                  <div className="flex-shrink-0 mb-3 sm:mb-0">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 bg-gradient-to-br from-primary-navy to-[#0056B3] rounded-xl flex items-center justify-center shadow-lg">
                      <Briefcase className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div className="mb-2 sm:mb-0">
                        <h3 className="text-lg sm:text-xl font-heading text-primary-navy">Senior Software Engineer</h3>
                        <p className="text-slate-600 font-subheading text-base sm:text-lg">TechCorp • Full-time</p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-1 text-xs sm:text-sm text-slate-500 space-y-1 sm:space-y-0">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            <span className="font-subheading">Jan 2022 - Present • 3 yrs</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            <span className="font-subheading">San Francisco, CA</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-slate-400 hover:text-primary-navy hover:bg-primary-navy/5 rounded-full self-start">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-slate-600 font-subheading leading-relaxed text-sm sm:text-base mb-4">
                      Lead development of microservices architecture serving 1M+ users. Mentored 5 junior developers and
                      improved team productivity by 40%. Built scalable solutions using modern tech stack.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">React</Badge>
                      <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">Node.js</Badge>
                      <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">AWS</Badge>
                      <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">TypeScript</Badge>
                      <Badge className="bg-[#0056B3]/10 text-[#0056B3] font-subheading text-xs">Leadership</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:space-x-4 md:space-x-6">
                  <div className="flex-shrink-0 mb-3 sm:mb-0">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Briefcase className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div className="mb-2 sm:mb-0">
                        <h3 className="text-lg sm:text-xl font-heading text-primary-navy">Software Engineer</h3>
                        <p className="text-slate-600 font-subheading text-base sm:text-lg">StartupXYZ • Full-time</p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-1 text-xs sm:text-sm text-slate-500 space-y-1 sm:space-y-0">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            <span className="font-subheading">Jun 2019 - Dec 2021 • 2 yrs 7 mos</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            <span className="font-subheading">Remote</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-slate-400 hover:text-primary-navy hover:bg-primary-navy/5 rounded-full self-start">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-slate-600 font-subheading leading-relaxed text-sm sm:text-base mb-4">
                      Built and maintained e-commerce platform handling $10M+ in annual revenue. Implemented CI/CD
                      pipelines and reduced deployment time by 60%. Worked in fast-paced startup environment.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">Vue.js</Badge>
                      <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">Python</Badge>
                      <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">Docker</Badge>
                      <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">PostgreSQL</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Education Section - Full Width */}
            <div className="w-full sm:bg-white sm:rounded-lg sm:border sm:border-slate-200 sm:shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:border-b sm:border-slate-100 p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy mb-2 sm:mb-0">Education</h2>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-primary-navy hover:bg-primary-navy/5 rounded-full self-start sm:self-auto">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:space-x-4 md:space-x-6">
                  <div className="flex-shrink-0 mb-3 sm:mb-0">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-heading text-primary-navy mb-1">Bachelor of Science in Computer Science</h3>
                    <p className="text-slate-600 font-subheading text-base sm:text-lg mb-2">University of California, Berkeley</p>
                    <p className="text-slate-500 font-subheading text-sm sm:text-base mb-3">2015 - 2019 • Magna Cum Laude</p>
                    <p className="text-slate-600 font-subheading leading-relaxed text-sm sm:text-base">
                      Graduated Magna Cum Laude with focus on software engineering and data structures. Active in computer science organizations and hackathons.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Projects Section - Full Width */}
            <div className="w-full sm:bg-white sm:rounded-lg sm:border sm:border-slate-200 sm:shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:border-b sm:border-slate-100 p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy mb-2 sm:mb-0">Featured Projects</h2>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-primary-navy hover:bg-primary-navy/5 rounded-full self-start sm:self-auto">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div className="border border-slate-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-base sm:text-lg font-heading text-primary-navy">AI-Powered Task Manager</h3>
                      <p className="text-slate-500 font-subheading text-sm">Personal Project • 2024</p>
                    </div>
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 hover:text-primary-navy cursor-pointer self-start" />
                  </div>
                  <p className="text-slate-600 font-subheading leading-relaxed text-sm sm:text-base mb-4">
                    Built a smart task management app using React and OpenAI API that automatically categorizes and
                    prioritizes tasks based on user behavior. Features real-time collaboration and AI-driven insights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">React</Badge>
                    <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">OpenAI API</Badge>
                    <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">Node.js</Badge>
                    <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">MongoDB</Badge>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-base sm:text-lg font-heading text-primary-navy">E-commerce Platform</h3>
                      <p className="text-slate-500 font-subheading text-sm">Team Project • 2023</p>
                    </div>
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 hover:text-primary-navy cursor-pointer self-start" />
                  </div>
                  <p className="text-slate-600 font-subheading leading-relaxed text-sm sm:text-base mb-4">
                    Developed a full-stack e-commerce solution with advanced search, payment integration, and real-time
                    inventory management. Scaled to handle 50,000+ concurrent users.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">Vue.js</Badge>
                    <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">Express</Badge>
                    <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">Redis</Badge>
                    <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">Stripe</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Skills Section - Full Width */}
            <div className="w-full sm:bg-white sm:rounded-lg sm:border sm:border-slate-200 sm:shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:border-b sm:border-slate-100 p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy mb-2 sm:mb-0">Skills & Technologies</h2>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-primary-navy hover:bg-primary-navy/5 rounded-full self-start sm:self-auto">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 sm:p-6">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-3">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#0056B3]/10 text-[#0056B3] border-[#0056B3]/20 font-subheading text-xs">JavaScript</Badge>
                      <Badge className="bg-[#0056B3]/10 text-[#0056B3] border-[#0056B3]/20 font-subheading text-xs">TypeScript</Badge>
                      <Badge className="bg-[#0056B3]/10 text-[#0056B3] border-[#0056B3]/20 font-subheading text-xs">Python</Badge>
                      <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">Java</Badge>
                      <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">Go</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-3">Frameworks & Libraries</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#0056B3]/10 text-[#0056B3] border-[#0056B3]/20 font-subheading text-xs">React</Badge>
                      <Badge className="bg-[#0056B3]/10 text-[#0056B3] border-[#0056B3]/20 font-subheading text-xs">Node.js</Badge>
                      <Badge className="bg-[#0056B3]/10 text-[#0056B3] border-[#0056B3]/20 font-subheading text-xs">Next.js</Badge>
                      <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">Vue.js</Badge>
                      <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">Express</Badge>
                      <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">Django</Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-3">Cloud & DevOps</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#0056B3]/10 text-[#0056B3] border-[#0056B3]/20 font-subheading text-xs">AWS</Badge>
                      <Badge className="bg-[#0056B3]/10 text-[#0056B3] border-[#0056B3]/20 font-subheading text-xs">Docker</Badge>
                      <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">Kubernetes</Badge>
                      <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">CI/CD</Badge>
                      <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">Terraform</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Certifications Section - Full Width */}
            <div className="w-full sm:bg-white sm:rounded-lg sm:border sm:border-slate-200 sm:shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:border-b sm:border-slate-100 p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy mb-2 sm:mb-0">Certifications</h2>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-primary-navy hover:bg-primary-navy/5 rounded-full self-start sm:self-auto">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:space-x-4 md:space-x-6">
                  <div className="flex-shrink-0 mb-3 sm:mb-0">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-heading text-primary-navy mb-1">AWS Certified Solutions Architect</h3>
                    <p className="text-slate-600 font-subheading text-base sm:text-lg mb-2">Amazon Web Services</p>
                    <p className="text-slate-500 font-subheading text-sm sm:text-base mb-3">Issued: March 2023 • Valid until: March 2026</p>
                    <p className="text-slate-600 font-subheading leading-relaxed text-sm sm:text-base">
                      Demonstrates expertise in designing distributed systems on AWS cloud platform with focus on scalability, security, and cost optimization.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:space-x-4 md:space-x-6">
                  <div className="flex-shrink-0 mb-3 sm:mb-0">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-heading text-primary-navy mb-1">Certified Kubernetes Administrator</h3>
                    <p className="text-slate-600 font-subheading text-base sm:text-lg mb-2">Cloud Native Computing Foundation</p>
                    <p className="text-slate-500 font-subheading text-sm sm:text-base mb-3">Issued: January 2023 • Valid until: January 2026</p>
                    <p className="text-slate-600 font-subheading leading-relaxed text-sm sm:text-base">
                      Validates skills in deploying, managing, and troubleshooting Kubernetes clusters in production environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Recommendations Section - Full Width */}
            <div className="w-full sm:bg-white sm:rounded-lg sm:border sm:border-slate-200 sm:shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:border-b sm:border-slate-100 p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy mb-2 sm:mb-0">Recommendations</h2>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-primary-navy hover:bg-primary-navy/5 rounded-full self-start sm:self-auto">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div className="border-l-4 border-[#0056B3] pl-4 sm:pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                      <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                        <AvatarImage src="/api/placeholder/40/40" />
                        <AvatarFallback className="bg-primary-navy text-white font-heading text-sm">SJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-heading text-sm sm:text-base text-primary-navy">Sarah Johnson</h4>
                        <p className="text-slate-500 font-subheading text-xs sm:text-sm">Engineering Manager at TechCorp</p>
                      </div>
                    </div>
                    <p className="text-slate-400 font-subheading text-xs sm:text-sm">3 months ago</p>
                  </div>
                  <p className="text-slate-600 font-subheading leading-relaxed text-sm sm:text-base italic">
                    "Alex is an exceptional engineer who consistently delivers high-quality solutions. His mentorship
                    skills have been invaluable to our team's growth. I highly recommend him for any senior engineering role."
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 sm:pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                      <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                        <AvatarImage src="/api/placeholder/40/40" />
                        <AvatarFallback className="bg-green-600 text-white font-heading text-sm">MC</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-heading text-sm sm:text-base text-primary-navy">Mike Chen</h4>
                        <p className="text-slate-500 font-subheading text-xs sm:text-sm">Product Manager at StartupXYZ</p>
                      </div>
                    </div>
                    <p className="text-slate-400 font-subheading text-xs sm:text-sm">6 months ago</p>
                  </div>
                  <p className="text-slate-600 font-subheading leading-relaxed text-sm sm:text-base italic">
                    "Working with Alex was a pleasure. His technical expertise and collaborative approach made our
                    product launches successful. He's a problem-solver who thinks beyond code."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
