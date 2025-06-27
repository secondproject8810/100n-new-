"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { BookmarkIcon, ArrowLeft, X, Send, MessageCircle, Building2, MapPin, Calendar, DollarSign, Clock, Users, Star, Award, CheckCircle, Target, Upload } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExplorePage() {
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [selectedCompany, setSelectedCompany] = useState<any>(null)
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  const [showProjectApplicationModal, setShowProjectApplicationModal] = useState(false)
  const [showJobsModal, setShowJobsModal] = useState(false)
  const [followedCompanies, setFollowedCompanies] = useState<number[]>([])
  const [applicationData, setApplicationData] = useState({
    coverLetter: "",
    expectedSalary: "",
    startDate: "",
    resume: null,
    portfolio: null
  })
  const [projectApplicationData, setProjectApplicationData] = useState({
    proposal: "",
    estimatedBudget: "",
    timeline: "",
    portfolio: null,
    experience: ""
  })

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Atreyus Ai",
      industry: "Information Technology",
      logo: "/abstract-tech-logo.png",
      type: "Full-time",
      location: "Remote",
      salaryRange: "$120,000 - $150,000",
      posted: "3 days ago",
      description: "We're looking for an experienced Frontend Developer to join our AI-driven platform team. You'll be responsible for building beautiful, responsive user interfaces that make complex AI tools accessible to everyone.",
      requirements: ["5+ years React experience", "TypeScript proficiency", "Experience with modern build tools", "Strong UI/UX design sense"],
      responsibilities: ["Build responsive web applications", "Collaborate with AI/ML teams", "Optimize for performance", "Code reviews and mentoring"],
      companyInfo: {
        size: "50-200 employees",
        founded: 2019,
        website: "atreyus.ai",
        description: "Atreyus AI is building the future of artificial intelligence platforms for businesses."
      },
      benefits: ["Health Insurance", "Stock Options", "Remote Work", "Flexible Hours", "Learning Budget"]
    },
    {
      id: 2,
      title: "Python AI Engineer",
      company: "Flexbone",
      industry: "Healthcare",
      logo: "/flexbone-logo.png",
      type: "Contract",
      location: "Hybrid",
      salaryRange: "$90,000 - $110,000",
      posted: "1 week ago",
      description: "Join our healthcare innovation team to develop AI-powered solutions that improve patient outcomes. We're building the next generation of medical diagnostic tools.",
      requirements: ["3+ years Python experience", "Machine Learning expertise", "Healthcare domain knowledge preferred", "Experience with TensorFlow/PyTorch"],
      responsibilities: ["Develop ML models for medical diagnosis", "Work with healthcare professionals", "Ensure regulatory compliance", "Data analysis and visualization"],
      companyInfo: {
        size: "200-500 employees",
        founded: 2015,
        website: "flexbone.com",
        description: "Flexbone is revolutionizing healthcare through innovative technology solutions."
      },
      benefits: ["Health Insurance", "Dental & Vision", "401(k)", "Professional Development", "Health Savings Account"]
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Source",
      industry: "Engineering & Construction",
      logo: "/generic-company-logo.png",
      type: "Full-time",
      location: "On-site",
      salaryRange: "$85,000 - $105,000",
      posted: "2 weeks ago",
      description: "We're seeking a Full Stack Developer to help build project management tools for the construction industry. You'll work on both frontend and backend systems.",
      requirements: ["4+ years full-stack experience", "Node.js and React", "Database design experience", "API development"],
      responsibilities: ["Full-stack web development", "Database architecture", "API design and implementation", "Code quality and testing"],
      companyInfo: {
        size: "100-300 employees",
        founded: 2010,
        website: "source-eng.com",
        description: "Source provides innovative software solutions for the engineering and construction industry."
      },
      benefits: ["Health Insurance", "401(k) Matching", "Paid Time Off", "Professional Development", "Company Events"]
    }
  ]

  const freelanceProjects = [
    {
      id: 1,
      title: "E-commerce Website Redesign",
      company: "Ra Labs",
      industry: "Internet & Software",
      logo: "/placeholder.svg?height=40&width=40",
      budget: "$3,000-5,000",
      duration: "4 weeks",
      posted: "2 days ago",
      description: "We need a complete redesign of our e-commerce platform. The project involves modernizing the UI/UX, improving conversion rates, and implementing responsive design across all devices.",
      requirements: ["React/Next.js experience", "E-commerce platform knowledge", "UI/UX design skills", "Responsive design expertise"],
      deliverables: ["Complete website redesign", "Mobile-responsive layouts", "Shopping cart optimization", "Payment gateway integration"],
      companyInfo: {
        size: "10-50 employees",
        founded: 2018,
        website: "ralabs.com",
        description: "Ra Labs creates innovative software solutions for modern businesses."
      },
      skills: ["React", "Next.js", "Figma", "Shopify", "CSS/Sass"]
    },
    {
      id: 2,
      title: "React Dashboard Development",
      company: "Instalify, Inc.",
      industry: "Internet & Software",
      logo: "/placeholder.svg?height=40&width=40",
      budget: "$50/hr",
      duration: "2-3 months",
      posted: "5 days ago",
      description: "Build a comprehensive admin dashboard for our SaaS platform. The dashboard will include analytics, user management, reporting features, and real-time data visualization.",
      requirements: ["Advanced React skills", "Data visualization experience", "API integration", "Real-time features"],
      deliverables: ["Admin dashboard interface", "Data visualization components", "User management system", "Real-time notifications"],
      companyInfo: {
        size: "20-100 employees",
        founded: 2020,
        website: "instalify.com",
        description: "Instalify provides installation and maintenance software for service companies."
      },
      skills: ["React", "D3.js", "Chart.js", "WebSockets", "Material-UI"]
    },
    {
      id: 3,
      title: "Financial App UI/UX Design",
      company: "Dynex Capital",
      industry: "Investment / Portfolio Management",
      logo: "/placeholder.svg?height=40&width=40",
      budget: "$2,500-4,000",
      duration: "3 weeks",
      posted: "1 week ago",
      description: "Design a modern, intuitive interface for our financial portfolio management app. Focus on clean design, data visualization, and user experience for financial professionals.",
      requirements: ["Financial app design experience", "Figma/Sketch proficiency", "Data visualization design", "Mobile design"],
      deliverables: ["Complete UI/UX design", "Interactive prototypes", "Design system", "Mobile app designs"],
      companyInfo: {
        size: "50-200 employees",
        founded: 2012,
        website: "dynexcapital.com",
        description: "Dynex Capital provides innovative investment and portfolio management solutions."
      },
      skills: ["Figma", "Sketch", "Principle", "InVision", "Adobe Creative Suite"]
    }
  ]

  const companies = [
    {
      id: 1,
      name: "TechFlow Solutions",
      industry: "Web Development & Design",
      logo: "/placeholder.svg?height=60&width=60",
      size: "50-200 employees",
      location: "San Francisco, CA",
      founded: 2018,
      verified: true,
      companyType: "Startup",
      description: "Leading web development agency specializing in modern React applications and e-commerce solutions.",
      mission: "To empower businesses with cutting-edge web technologies that drive growth and innovation.",
      vision: "Becoming the go-to partner for companies seeking exceptional digital experiences.",
      values: ["Innovation", "Quality", "Collaboration", "Continuous Learning"],
      benefits: ["Flexible Work Hours", "Health Insurance", "Stock Options", "Professional Development", "Remote Work Options"],
      culture: "We foster a collaborative environment where creativity meets technical excellence. Our team values work-life balance and continuous learning.",
      recentNews: [
        "Launched AI-powered web analytics platform",
        "Expanded team by 40% in Q3 2024",
        "Partnership with major e-commerce brands"
      ],
      website: "techflowsolutions.com",
      email: "careers@techflowsolutions.com",
      phone: "+1 (555) 123-4567",
      jobOpenings: [
        {
          id: 101,
          title: "Senior React Developer",
          department: "Engineering",
          location: "San Francisco, CA / Remote",
          type: "Full-time",
          salary: "$120,000 - $150,000",
          experience: "5+ years",
          postedDate: "2024-01-15",
          description: "Lead development of next-generation React applications for enterprise clients."
        },
        {
          id: 102,
          title: "UI/UX Designer",
          department: "Design",
          location: "San Francisco, CA",
          type: "Full-time",
          salary: "$90,000 - $120,000",
          experience: "3+ years",
          postedDate: "2024-01-20",
          description: "Design beautiful and intuitive user interfaces for web applications."
        }
      ]
    },
    {
      id: 2,
      name: "WebCraft Studios",
      industry: "Digital Agency",
      logo: "/placeholder.svg?height=60&width=60",
      size: "20-50 employees",
      location: "Austin, TX",
      founded: 2020,
      verified: true,
      companyType: "Agency",
      description: "Creative digital agency focused on building exceptional web experiences for startups and established brands.",
      mission: "Crafting digital experiences that tell your brand's story and drive meaningful connections.",
      vision: "To be recognized as the most innovative digital agency in the creative industry.",
      values: ["Creativity", "Authenticity", "Excellence", "Partnership"],
      benefits: ["Creative Freedom", "Health & Dental", "Flexible PTO", "Team Retreats", "Learning Stipend"],
      culture: "A creative playground where designers and developers collaborate to push the boundaries of what's possible on the web.",
      recentNews: [
        "Won 3 Webby Awards for client projects",
        "Opened new office in Denver",
        "Featured in Design Week Magazine"
      ],
      website: "webcraftstudios.com",
      email: "hello@webcraftstudios.com",
      phone: "+1 (555) 234-5678",
      jobOpenings: [
        {
          id: 201,
          title: "Full Stack Developer",
          department: "Development",
          location: "Austin, TX / Remote",
          type: "Full-time",
          salary: "$95,000 - $125,000",
          experience: "4+ years",
          postedDate: "2024-01-18",
          description: "Build end-to-end web solutions using modern JavaScript frameworks."
        }
      ]
    },
    {
      id: 3,
      name: "DevForge Technologies",
      industry: "Software Development",
      logo: "/placeholder.svg?height=60&width=60",
      size: "100-500 employees",
      location: "Seattle, WA",
      founded: 2015,
      verified: true,
      companyType: "Tech Company",
      description: "Enterprise software development company specializing in scalable web applications and cloud solutions.",
      mission: "Forging the future of enterprise software through innovative development practices and cutting-edge technology.",
      vision: "To be the leading provider of enterprise web solutions that transform how businesses operate.",
      values: ["Innovation", "Reliability", "Scalability", "Team Excellence"],
      benefits: ["Comprehensive Health Coverage", "401(k) Matching", "Sabbatical Program", "Professional Certifications", "Gym Membership"],
      culture: "We believe in empowering our developers with the latest tools and technologies while maintaining a supportive team environment.",
      recentNews: [
        "Completed Series B funding round",
        "Launched new cloud platform",
        "Acquired two smaller tech companies"
      ],
      website: "devforge.tech",
      email: "careers@devforge.tech",
      phone: "+1 (555) 345-6789",
      jobOpenings: [
        {
          id: 301,
          title: "Backend Developer",
          department: "Engineering",
          location: "Seattle, WA",
          type: "Full-time",
          salary: "$110,000 - $140,000",
          experience: "3+ years",
          postedDate: "2024-01-22",
          description: "Develop robust backend systems for enterprise-level applications."
        },
        {
          id: 302,
          title: "DevOps Engineer",
          department: "Infrastructure",
          location: "Seattle, WA / Remote",
          type: "Full-time",
          salary: "$125,000 - $155,000",
          experience: "5+ years",
          postedDate: "2024-01-25",
          description: "Manage cloud infrastructure and deployment pipelines."
        }
      ]
    }
  ]

  const handleJobClick = (job: any) => {
    setSelectedJob(job)
  }

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
  }

  const handleApplyClick = () => {
    setShowApplicationModal(true)
  }

  const handleProjectApplyClick = () => {
    setShowProjectApplicationModal(true)
  }

  const handleSubmitApplication = () => {
    console.log("Job application submitted:", { job: selectedJob?.title, ...applicationData })
    setShowApplicationModal(false)
    setApplicationData({ coverLetter: "", expectedSalary: "", startDate: "", resume: null, portfolio: null })
  }

  const handleSubmitProjectApplication = () => {
    console.log("Project application submitted:", { project: selectedProject?.title, ...projectApplicationData })
    setShowProjectApplicationModal(false)
    setProjectApplicationData({ proposal: "", estimatedBudget: "", timeline: "", portfolio: null, experience: "" })
  }

  const handleCompanyClick = (company: any) => {
    setSelectedCompany(company)
  }

  const handleViewJobsClick = () => {
    setShowJobsModal(true)
  }

  const handleFollowClick = (companyId: number) => {
    setFollowedCompanies(prev => 
      prev.includes(companyId) 
        ? prev.filter(id => id !== companyId)
        : [...prev, companyId]
    )
  }

  const isFollowed = (companyId: number) => {
    return followedCompanies.includes(companyId)
  }

  return (
    <>
      <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[75%] xl:max-w-[65%] mx-auto px-4 sm:px-6">
      {/* Centered Logo and Search Section */}
      <div className="text-center mb-6 sm:mb-8 md:mb-12 mt-8 sm:mt-12 md:mt-16">
        {/* Logo */}
        <div className="mb-3 sm:mb-4">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{fontFamily: 'Paradose, sans-serif'}}>
                          <span style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontStyle: 'italic'}}>100<span className="text-[#0056B3]">Networks</span></span>
          </span>
        </div>
        
        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-body font-bold mb-4 sm:mb-6 md:mb-8 px-4">
          Connect with opportunities that match your ambitions
        </p>

                {/* Search Bar */}
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-full shadow-lg p-3 sm:p-2">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 md:gap-0">
              {/* Skills Input */}
              <div className="flex-1 relative">
                <div className="flex items-center h-12 sm:h-16 px-4 sm:px-6">
                  <div className="flex items-center gap-2 sm:gap-3 w-full">
                    <div className="text-slate-400">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <Input 
                      placeholder="Skills / companies" 
                      className="border-0 shadow-none focus-visible:ring-0 p-0 text-xs sm:text-sm placeholder:text-slate-400 bg-transparent font-body font-bold"
                    />
                  </div>
                </div>
                <div className="hidden md:block absolute right-0 top-3 bottom-3 w-px bg-slate-200"></div>
              </div>
              
              {/* Experience Dropdown */}
              <div className="flex-1 relative">
                <div className="flex items-center h-12 sm:h-16 px-4 sm:px-6">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs sm:text-sm text-slate-400 font-body font-bold">Experience</span>
                    <div className="text-slate-400">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block absolute right-0 top-3 bottom-3 w-px bg-slate-200"></div>
              </div>
              
              {/* Location Input */}
              <div className="flex-1 relative">
                <div className="flex items-center h-12 sm:h-16 px-4 sm:px-6">
                  <Input 
                    placeholder="Location" 
                    className="border-0 shadow-none focus-visible:ring-0 p-0 text-xs sm:text-sm placeholder:text-slate-400 bg-transparent w-full font-body font-bold"
                  />
                </div>
                <div className="hidden md:block absolute right-0 top-3 bottom-3 w-px bg-slate-200"></div>
              </div>
              
              {/* Job Type Toggle */}
              <div className="flex-1 relative flex items-center justify-center h-12 sm:h-16 px-2 sm:px-4">
                <div className="flex gap-1 bg-slate-100 p-1 rounded-full w-full sm:w-auto">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 sm:flex-initial px-2 sm:px-4 py-1.5 text-xs font-subheading font-bold bg-white border-0 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200 rounded-full"
                  >
                    Jobs
              </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="flex-1 sm:flex-initial px-2 sm:px-4 py-1.5 text-xs font-subheading font-bold text-slate-600 hover:bg-white hover:shadow-md transition-all duration-200 rounded-full"
                  >
                    Freelance
              </Button>
            </div>
                <div className="hidden md:block absolute right-0 top-3 bottom-3 w-px bg-slate-200"></div>
              </div>
              
              {/* Search Button */}
              <div className="flex-shrink-0 w-full sm:w-auto">
                <Button className="h-12 sm:h-16 px-4 sm:px-8 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-2xl sm:rounded-full font-subheading font-bold text-sm w-full sm:w-auto" variant="outline">
                  Search
            </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-xl sm:text-2xl md:text-4xl font-heading text-primary-navy mb-3 sm:mb-4 md:mb-6 px-2">Explore</h1>

      <Tabs defaultValue="recommended" className="mb-4 sm:mb-6 md:mb-8">
        <TabsList className="grid w-full grid-cols-3 mb-3 sm:mb-4 md:mb-6 h-auto">
          <TabsTrigger value="recommended" className="font-subheading font-bold data-[state=active]:bg-primary-navy data-[state=active]:text-white text-xs sm:text-sm py-2 sm:py-3">Recommended</TabsTrigger>
          <TabsTrigger value="trending" className="font-subheading font-bold data-[state=active]:bg-primary-navy data-[state=active]:text-white text-xs sm:text-sm py-2 sm:py-3">Trending</TabsTrigger>
          <TabsTrigger value="nearby" className="font-subheading font-bold data-[state=active]:bg-primary-navy data-[state=active]:text-white text-xs sm:text-sm py-2 sm:py-3">Nearby</TabsTrigger>
        </TabsList>

        <TabsContent value="recommended">
          <div className="mb-4 sm:mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 md:mb-6 gap-2 px-2">
              <h2 className="text-base sm:text-lg md:text-xl font-heading text-primary-navy">
                Opportunities for <span className="text-[#0056B3]">software developers</span>
              </h2>
            <Link href="/jobs" className="text-sm md:text-base text-[#0056B3] hover:underline font-body font-bold self-start sm:self-auto">
                View more
              </Link>
            </div>

            <div className="overflow-x-auto pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="flex space-x-3 sm:space-x-4" style={{ width: 'max-content' }}>
                {jobs.map((job) => (
                  <Card 
                    key={job.id} 
                    className="cursor-pointer hover:shadow-md transition-shadow border border-gray-200 flex-shrink-0 w-72 sm:w-80"
                    onClick={() => handleJobClick(job)}
                  >
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex justify-between items-start mb-3 sm:mb-4 md:mb-6">
                      <div className="flex items-start space-x-2 sm:space-x-3 flex-1 min-w-0">
                        <img src={job.logo} alt={job.company} className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="font-subheading font-medium font-bold text-xs sm:text-sm md:text-base truncate">{job.company}</p>
                          <p className="text-xs md:text-sm text-muted-foreground font-bold truncate">{job.industry}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 hover:bg-primary-navy/10 flex-shrink-0"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          // Handle bookmark logic
                        }}
                      >
                        <BookmarkIcon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                      </Button>
                    </div>
                    <h3 className="font-heading text-primary-navy mb-2 text-sm sm:text-base md:text-lg font-bold line-clamp-2">{job.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2 md:mb-3 font-subheading font-bold">{job.type} • {job.location}</p>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 font-bold">{job.salaryRange} • Posted {job.posted}</p>
                  </CardContent>
                </Card>
              ))}
              </div>
            </div>
          </div>

          <div className="mb-4 sm:mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 md:mb-6 gap-2 px-2">
              <h2 className="text-base sm:text-lg md:text-xl font-heading text-primary-navy">
                Freelance projects in <span className="text-[#0056B3]">web development</span>
              </h2>
              <Link href="/jobs/freelance" className="text-sm md:text-base text-[#0056B3] hover:underline font-subheading font-bold self-start sm:self-auto">
                View more
              </Link>
            </div>

            <div className="overflow-x-auto pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="flex space-x-3 sm:space-x-4" style={{ width: 'max-content' }}>
                {freelanceProjects.map((project) => (
                  <Card 
                    key={project.id} 
                    className="border border-gray-200 hover:shadow-md transition-shadow cursor-pointer flex-shrink-0 w-72 sm:w-80"
                    onClick={() => handleProjectClick(project)}
                  >
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex justify-between items-start mb-3 sm:mb-4 md:mb-6">
                      <div className="flex items-start space-x-2 sm:space-x-3 flex-1 min-w-0">
                        <img src={project.logo} alt={project.company} className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="font-subheading font-medium text-xs sm:text-sm md:text-base font-bold truncate">{project.company}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground font-bold truncate">{project.industry}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 hover:bg-primary-navy/10 flex-shrink-0"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          // Handle bookmark logic
                        }}
                      >
                        <BookmarkIcon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                      </Button>
                    </div>
                    <h3 className="font-heading text-primary-navy mb-2 text-sm sm:text-base md:text-lg font-bold line-clamp-2">{project.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 font-subheading font-bold">{project.budget} • {project.duration}</p>
                    <p className="text-sm text-muted-foreground mb-4 font-bold">Posted {project.posted}</p>
                  </CardContent>
                </Card>
              ))}
              </div>
            </div>
          </div>

          <div className="mb-4 sm:mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 md:mb-6 gap-2 px-2">
              <h2 className="text-base sm:text-lg md:text-xl font-heading text-primary-navy">
                Top companies for <span className="text-[#0056B3]">web development</span>
              </h2>
              <Link href="/employers" className="text-sm md:text-base text-[#0056B3] hover:underline font-subheading font-bold self-start sm:self-auto">
                View more
              </Link>
            </div>

            <div className="overflow-x-auto pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="flex space-x-3 sm:space-x-4" style={{ width: 'max-content' }}>
                {companies.map((company) => (
                  <Card 
                    key={company.id} 
                    className="border border-gray-200 hover:shadow-md transition-shadow cursor-pointer flex-shrink-0 w-72 sm:w-80"
                    onClick={() => handleCompanyClick(company)}
                  >
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex justify-between items-start mb-3 sm:mb-4 md:mb-6">
                      <div className="flex items-start space-x-2 sm:space-x-3 sm:space-x-4 flex-1 min-w-0">
                        <img src={company.logo} alt={company.name} className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                            <p className="font-subheading font-medium text-sm sm:text-base font-bold truncate">{company.name}</p>
                            {company.verified && (
                              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                              </div>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground font-bold truncate">{company.industry}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 hover:bg-primary-navy/10 flex-shrink-0"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          // Handle bookmark logic
                        }}
                      >
                        <BookmarkIcon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                      </Button>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span className="font-bold truncate">{company.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                        <Users className="h-3 w-3 flex-shrink-0" />
                        <span className="font-bold truncate">{company.size}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Building2 className="h-3 w-3 flex-shrink-0" />
                        <span className="font-bold truncate">{company.jobOpenings.length} open position{company.jobOpenings.length !== 1 ? 's' : ''}</span>
                      </div>
                    </div>
                </CardContent>
              </Card>
              ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="trending">
          <div className="text-center py-12">
            <h3 className="text-lg font-heading text-primary-navy mb-2 font-bold">Trending content coming soon</h3>
            <p className="text-muted-foreground font-subheading font-bold">We're gathering the most popular opportunities for you</p>
          </div>
        </TabsContent>

        <TabsContent value="nearby">
          <div className="text-center py-12">
            <h3 className="text-lg font-heading text-primary-navy mb-2 font-bold">Enable location services</h3>
            <p className="text-muted-foreground font-subheading mb-4 font-bold">Allow location access to see opportunities near you</p>
            <Button className="bg-primary-navy hover:bg-primary-navy/90 font-subheading font-bold">Enable Location</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>

    {/* Job Details Modal */}
    {selectedJob && !showApplicationModal && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
        <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[75vh] sm:max-h-[70vh] overflow-y-auto">
          <div className="p-2 sm:p-3">
            {/* Header */}
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center space-x-2 flex-1 min-w-0">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedJob(null)}
                  className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading font-bold h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0"
                >
                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <h1 className="text-base sm:text-lg md:text-xl font-heading text-primary-navy font-bold truncate">Job Details</h1>
              </div>
            </div>

            {/* Job Content */}
            <div className="space-y-2 sm:space-y-3">
              {/* Basic Info */}
              <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                <img src={selectedJob.logo} alt={selectedJob.company} className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl self-center sm:self-start flex-shrink-0" />
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-base sm:text-lg md:text-xl font-heading text-primary-navy mb-1 font-bold">{selectedJob.title}</h2>
                  <p className="text-sm sm:text-base text-slate-600 font-subheading mb-1 sm:mb-2 font-bold">{selectedJob.company}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 text-slate-600 font-subheading mb-2 font-bold text-xs sm:text-sm">
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Building2 className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="font-bold truncate">{selectedJob.industry}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="font-bold truncate">{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="font-bold text-xs sm:text-sm truncate">{selectedJob.salaryRange}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="font-bold">{selectedJob.type}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="font-bold text-xs sm:text-sm">Posted {selectedJob.posted}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="font-bold text-xs sm:text-sm">{selectedJob.companyInfo.size}</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2 font-bold">Job Description</h3>
                <p className="text-sm sm:text-base text-slate-600 font-subheading leading-relaxed font-bold">{selectedJob.description}</p>
              </div>

              {/* Requirements & Responsibilities Combined */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Requirements */}
                <div>
                  <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2 font-bold">Requirements</h3>
                  <div className="space-y-1.5">
                    {selectedJob.requirements.map((req: string, index: number) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-600 font-subheading font-bold">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2 font-bold">Responsibilities</h3>
                  <div className="space-y-1.5">
                    {selectedJob.responsibilities.map((resp: string, index: number) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0056B3] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-slate-600 font-subheading font-bold">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Company Info & Benefits Combined */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Company Info */}
                <div>
                  <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2 font-bold">About {selectedJob.company}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-subheading leading-relaxed mb-2 font-bold">{selectedJob.companyInfo.description}</p>
                  <div className="grid grid-cols-1 gap-1 text-xs">
                    <div className="text-center sm:text-left">
                      <span className="text-slate-500 font-bold">Founded:</span>
                      <span className="ml-2 text-slate-700 font-subheading font-bold">{selectedJob.companyInfo.founded}</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="text-slate-500 font-bold">Size:</span>
                      <span className="ml-2 text-slate-700 font-subheading font-bold">{selectedJob.companyInfo.size}</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="text-slate-500 font-bold">Website:</span>
                      <span className="ml-2 text-slate-700 font-subheading font-bold">{selectedJob.companyInfo.website}</span>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2 font-bold">Benefits</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedJob.benefits.map((benefit: string, index: number) => (
                      <Badge key={index} className="bg-green-100 text-green-700 font-subheading font-bold text-xs">
                        <Award className="h-2.5 w-2.5 mr-1" />
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <div className="pt-3">
                <Button 
                  className="w-full bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading font-bold text-sm sm:text-base py-2.5"
                  onClick={handleApplyClick}
                >
                  <Target className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Apply for this Position
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Freelance Project Details Modal */}
    {selectedProject && !showProjectApplicationModal && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
        <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[75vh] sm:max-h-[70vh] overflow-y-auto">
          <div className="p-2 sm:p-3">
            {/* Header */}
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center space-x-2 flex-1 min-w-0">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                  className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading font-bold h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0"
                >
                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <h1 className="text-base sm:text-lg md:text-xl font-heading text-primary-navy font-bold truncate">Project Details</h1>
              </div>
            </div>

            {/* Project Content */}
            <div className="space-y-2 sm:space-y-3">
              {/* Basic Info */}
              <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <img src={selectedProject.logo} alt={selectedProject.company} className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl self-center sm:self-start flex-shrink-0" />
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy mb-1">{selectedProject.title}</h2>
                  <p className="text-base sm:text-lg text-slate-600 font-subheading mb-2 sm:mb-3">{selectedProject.company}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 text-slate-600 font-subheading mb-4 text-xs sm:text-sm md:text-base">
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Building2 className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="truncate">{selectedProject.industry}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="truncate">{selectedProject.budget}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="truncate">{selectedProject.duration}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">Posted {selectedProject.posted}</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2">Project Description</h3>
                <p className="text-sm sm:text-base text-slate-600 font-subheading leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Requirements & Deliverables Combined */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Requirements */}
                <div>
                  <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2">Requirements</h3>
                  <div className="space-y-1.5">
                    {selectedProject.requirements.map((req: string, index: number) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-600 font-subheading">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2">Deliverables</h3>
                  <div className="space-y-1.5">
                    {selectedProject.deliverables.map((deliverable: string, index: number) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0056B3] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-slate-600 font-subheading">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills & Company Info Combined */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Required Skills */}
                <div>
                  <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2">Required Skills</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.skills.map((skill: string, index: number) => (
                      <Badge key={index} className="bg-blue-100 text-blue-700 font-subheading text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Company Info */}
                <div>
                  <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2">About {selectedProject.company}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-subheading leading-relaxed mb-2">{selectedProject.companyInfo.description}</p>
                  <div className="grid grid-cols-1 gap-1 text-xs">
                    <div className="text-center sm:text-left">
                      <span className="text-slate-500">Founded:</span>
                      <span className="ml-2 text-slate-700 font-subheading">{selectedProject.companyInfo.founded}</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="text-slate-500">Size:</span>
                      <span className="ml-2 text-slate-700 font-subheading">{selectedProject.companyInfo.size}</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="text-slate-500">Website:</span>
                      <span className="ml-2 text-slate-700 font-subheading">{selectedProject.companyInfo.website}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <div className="pt-3">
                <Button 
                  className="w-full bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading font-bold text-sm sm:text-base py-2.5"
                  onClick={handleProjectApplyClick}
                >
                  <Send className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Submit Proposal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Job Application Modal */}
    <Dialog open={showApplicationModal} onOpenChange={setShowApplicationModal}>
      <DialogContent className="max-w-lg sm:max-w-2xl max-h-[80vh] sm:max-h-[75vh] overflow-y-auto mx-2 sm:mx-auto p-3 sm:p-4">
        <DialogHeader className="pb-2">
          <DialogTitle className="font-heading text-primary-navy text-base sm:text-lg">
            Apply for {selectedJob?.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-3 mt-2">
          {/* Job Info */}
          {selectedJob && (
            <Card className="border-slate-200 bg-slate-50">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <img src={selectedJob.logo} alt={selectedJob.company} className="h-12 w-12 rounded" />
                  <div>
                    <h4 className="font-heading text-primary-navy">{selectedJob.title}</h4>
                    <p className="text-slate-600 font-subheading text-sm">{selectedJob.company} • {selectedJob.location}</p>
                  </div>
                </div>
            </CardContent>
          </Card>
          )}

          {/* Cover Letter */}
          <div>
            <Label htmlFor="coverLetter" className="font-subheading text-primary-navy text-xs sm:text-sm">Cover Letter</Label>
            <Textarea
              id="coverLetter"
              placeholder="Tell us why you're the perfect fit for this role..."
              value={applicationData.coverLetter}
              onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
              className="mt-1 min-h-[60px] sm:min-h-[80px] rounded-lg font-subheading text-xs sm:text-sm"
            />
          </div>

          {/* Salary & Date Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Expected Salary */}
            <div>
              <Label htmlFor="salary" className="font-subheading text-primary-navy text-xs sm:text-sm">Expected Salary</Label>
              <Input
                id="salary"
                placeholder="e.g., $120,000"
                value={applicationData.expectedSalary}
                onChange={(e) => setApplicationData({...applicationData, expectedSalary: e.target.value})}
                className="mt-1 rounded-lg font-subheading text-xs sm:text-sm py-1.5 sm:py-2"
              />
            </div>

            {/* Start Date */}
            <div>
              <Label htmlFor="startDate" className="font-subheading text-primary-navy text-xs sm:text-sm">Available Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={applicationData.startDate}
                onChange={(e) => setApplicationData({...applicationData, startDate: e.target.value})}
                className="mt-1 rounded-lg font-subheading text-xs sm:text-sm py-1.5 sm:py-2"
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <Label className="font-subheading text-primary-navy text-xs sm:text-sm">Resume</Label>
            <div className="mt-1 border-2 border-dashed border-slate-200 rounded-lg p-3 sm:p-4 text-center">
              <Upload className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 mx-auto mb-1" />
              <p className="text-slate-600 font-subheading text-xs sm:text-sm">Upload resume</p>
              <p className="text-slate-400 font-subheading text-xs">PDF, DOC, DOCX (max 5MB)</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-3">
            <Button 
              variant="outline" 
              className="flex-1 rounded-lg font-subheading font-bold text-xs sm:text-sm py-2"
              onClick={() => setShowApplicationModal(false)}
            >
              Cancel
            </Button>
            <Button 
              className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-lg font-subheading font-bold text-xs sm:text-sm py-2"
              onClick={handleSubmitApplication}
            >
              <Send className="h-3 w-3 mr-1" />
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>

    {/* Project Application Modal */}
    <Dialog open={showProjectApplicationModal} onOpenChange={setShowProjectApplicationModal}>
      <DialogContent className="max-w-lg sm:max-w-2xl max-h-[80vh] sm:max-h-[75vh] overflow-y-auto mx-2 sm:mx-auto p-3 sm:p-4">
        <DialogHeader className="pb-2">
          <DialogTitle className="font-heading text-primary-navy text-base sm:text-lg">
            Submit Proposal for {selectedProject?.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-3 mt-2">
          {/* Project Info */}
          {selectedProject && (
            <Card className="border-slate-200 bg-slate-50">
            <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <img src={selectedProject.logo} alt={selectedProject.company} className="h-12 w-12 rounded" />
                  <div>
                    <h4 className="font-heading text-primary-navy">{selectedProject.title}</h4>
                    <p className="text-slate-600 font-subheading text-sm">{selectedProject.company} • {selectedProject.budget}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Proposal */}
          <div>
            <Label htmlFor="proposal" className="font-subheading text-primary-navy text-xs sm:text-sm">Project Proposal</Label>
            <Textarea
              id="proposal"
              placeholder="Describe your approach to this project..."
              value={projectApplicationData.proposal}
              onChange={(e) => setProjectApplicationData({...projectApplicationData, proposal: e.target.value})}
              className="mt-1 min-h-[60px] sm:min-h-[80px] rounded-lg font-subheading text-xs sm:text-sm"
            />
          </div>

          {/* Budget & Timeline Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Budget */}
            <div>
              <Label htmlFor="budget" className="font-subheading text-primary-navy text-xs sm:text-sm">Budget Estimate</Label>
              <Input
                id="budget"
                placeholder="e.g., $4,500"
                value={projectApplicationData.estimatedBudget}
                onChange={(e) => setProjectApplicationData({...projectApplicationData, estimatedBudget: e.target.value})}
                className="mt-1 rounded-lg font-subheading text-xs sm:text-sm py-1.5 sm:py-2"
              />
            </div>

            {/* Timeline */}
            <div>
              <Label htmlFor="timeline" className="font-subheading text-primary-navy text-xs sm:text-sm">Timeline</Label>
              <Input
                id="timeline"
                placeholder="e.g., 3-4 weeks"
                value={projectApplicationData.timeline}
                onChange={(e) => setProjectApplicationData({...projectApplicationData, timeline: e.target.value})}
                className="mt-1 rounded-lg font-subheading text-xs sm:text-sm py-1.5 sm:py-2"
              />
            </div>
          </div>

          {/* Portfolio Upload */}
          <div>
            <Label className="font-subheading text-primary-navy text-xs sm:text-sm">Portfolio</Label>
            <div className="mt-1 border-2 border-dashed border-slate-200 rounded-lg p-3 sm:p-4 text-center">
              <Upload className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 mx-auto mb-1" />
              <p className="text-slate-600 font-subheading text-xs sm:text-sm">Upload portfolio</p>
              <p className="text-slate-400 font-subheading text-xs">PDF, Images, ZIP (max 10MB)</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-3">
            <Button 
              variant="outline" 
              className="flex-1 rounded-lg font-subheading font-bold text-xs sm:text-sm py-2"
              onClick={() => setShowProjectApplicationModal(false)}
            >
              Cancel
            </Button>
            <Button 
              className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-lg font-subheading font-bold text-xs sm:text-sm py-2"
              onClick={handleSubmitProjectApplication}
            >
              <Send className="h-3 w-3 mr-1" />
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>

    {/* Company Details Modal */}
    {selectedCompany && !showJobsModal && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
        <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[75vh] sm:max-h-[70vh] overflow-y-auto">
          <div className="p-2 sm:p-3">
            {/* Header */}
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedCompany(null)}
                  className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading font-bold h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <h1 className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy truncate">Company Profile</h1>
              </div>
            </div>

            {/* Company Content */}
            <div className="space-y-3 sm:space-y-4">
              {/* Basic Info */}
              <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <img src={selectedCompany.logo} alt={selectedCompany.name} className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl self-center sm:self-start flex-shrink-0" />
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-2">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy">{selectedCompany.name}</h2>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      {selectedCompany.verified && (
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        </div>
                      )}
                      <Badge 
                        className={`${
                          selectedCompany.companyType === 'Startup' ? 'bg-green-100 text-green-700' :
                          selectedCompany.companyType === 'Agency' ? 'bg-purple-100 text-purple-700' :
                          'bg-blue-100 text-blue-700'
                        } font-subheading text-xs sm:text-sm`}
                      >
                        {selectedCompany.companyType}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-slate-600 font-subheading mb-3">{selectedCompany.industry}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 text-slate-600 font-subheading text-xs sm:text-sm md:text-base">
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="truncate">{selectedCompany.location}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="truncate">{selectedCompany.size}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="truncate">Founded {selectedCompany.founded}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Building2 className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm truncate">{selectedCompany.jobOpenings.length} open positions</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* About */}
              <div>
                <h3 className="text-lg font-heading text-primary-navy mb-3">About {selectedCompany.name}</h3>
                <p className="text-slate-600 font-subheading leading-relaxed">{selectedCompany.description}</p>
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-heading text-primary-navy mb-2">Mission</h4>
                  <p className="text-slate-600 font-subheading text-sm sm:text-base">{selectedCompany.mission}</p>
                </div>
                <div>
                  <h4 className="font-heading text-primary-navy mb-2">Vision</h4>
                  <p className="text-slate-600 font-subheading text-sm sm:text-base">{selectedCompany.vision}</p>
                </div>
              </div>

              {/* Values */}
              <div>
                <h3 className="text-lg font-heading text-primary-navy mb-3">Our Values</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCompany.values.map((value: string, index: number) => (
                    <Badge key={index} className="bg-blue-100 text-blue-700 font-subheading">
                      <Star className="h-3 w-3 mr-1" />
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-lg font-heading text-primary-navy mb-3">Benefits & Perks</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCompany.benefits.map((benefit: string, index: number) => (
                    <Badge key={index} className="bg-green-100 text-green-700 font-subheading">
                      <Award className="h-3 w-3 mr-1" />
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Culture */}
              <div>
                <h3 className="text-lg font-heading text-primary-navy mb-3">Company Culture</h3>
                <p className="text-slate-600 font-subheading leading-relaxed">{selectedCompany.culture}</p>
              </div>

              {/* Recent News */}
              <div>
                <h3 className="text-lg font-heading text-primary-navy mb-3">Recent News</h3>
                <div className="space-y-2">
                  {selectedCompany.recentNews.map((news: string, index: number) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#0056B3] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600 font-subheading">{news}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-heading text-primary-navy mb-3">Contact Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm">
                  <div className="text-center sm:text-left">
                    <span className="text-slate-500">Website:</span>
                    <span className="ml-2 text-slate-700 font-subheading break-all">{selectedCompany.website}</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="text-slate-500">Email:</span>
                    <span className="ml-2 text-slate-700 font-subheading break-all">{selectedCompany.email}</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="text-slate-500">Phone:</span>
                    <span className="ml-2 text-slate-700 font-subheading">{selectedCompany.phone}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <Button 
                  className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading font-bold text-sm sm:text-base py-2 sm:py-3"
                  onClick={handleViewJobsClick}
                >
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  <span className="hidden sm:inline">View Open Positions ({selectedCompany.jobOpenings.length})</span>
                  <span className="sm:hidden">View Jobs ({selectedCompany.jobOpenings.length})</span>
                </Button>
                <Button 
                  variant="outline" 
                  className={`sm:flex-shrink-0 rounded-xl font-subheading font-bold text-sm sm:text-base py-2 sm:py-3 ${
                    isFollowed(selectedCompany.id) 
                      ? 'bg-[#0056B3] text-white border-[#0056B3] hover:bg-primary-navy' 
                      : 'border-[#0056B3] text-[#0056B3] hover:bg-primary-navy hover:text-white'
                  }`}
                  onClick={() => handleFollowClick(selectedCompany.id)}
                >
                  {isFollowed(selectedCompany.id) ? (
                    <>
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Following
                    </>
                  ) : (
                    <>
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Follow
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Jobs Modal */}
    <Dialog open={showJobsModal} onOpenChange={setShowJobsModal}>
      <DialogContent className="max-w-4xl max-h-[85vh] sm:max-h-[80vh] overflow-y-auto mx-2 sm:mx-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-primary-navy text-lg sm:text-xl">
            Open Positions at {selectedCompany?.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 mt-3">
          {/* Company Info Header */}
          {selectedCompany && (
            <Card className="border-slate-200 bg-slate-50">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <img src={selectedCompany.logo} alt={selectedCompany.name} className="h-12 w-12 rounded" />
                  <div>
                    <h4 className="font-heading text-primary-navy">{selectedCompany.name}</h4>
                    <p className="text-slate-600 font-subheading text-sm">{selectedCompany.industry} • {selectedCompany.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Job Listings */}
          <div className="space-y-4">
            {selectedCompany?.jobOpenings.map((job: any) => (
              <Card key={job.id} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-heading text-primary-navy mb-2">{job.title}</h3>
                      <p className="text-slate-600 font-subheading mb-3">{job.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 font-subheading mb-4">
                        <div className="flex items-center space-x-2">
                          <Building2 className="h-4 w-4 text-slate-500" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-slate-500" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-slate-500" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-slate-500" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-slate-500" />
                          <span>{job.experience} experience</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-slate-500" />
                          <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading font-bold">
                      <Target className="h-4 w-4 mr-2" />
                      Apply Now
              </Button>
                  </div>
            </CardContent>
          </Card>
            ))}
        </div>

          {/* Back Button */}
          <div className="flex justify-center pt-4">
            <Button 
              variant="outline" 
              className="rounded-xl font-subheading font-bold"
              onClick={() => setShowJobsModal(false)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Company Profile
            </Button>
      </div>
    </div>
      </DialogContent>
    </Dialog>
    </>
  )
}
