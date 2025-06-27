"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookmarkIcon, Search, Briefcase, Users, PlusCircle, Filter, FolderOpen, Star, Clock, DollarSign, MapPin, Users2, Calendar, ChevronRight, FileText, CheckCircle, X, ArrowLeft, Upload, Send, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function FreelancePage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("gigs")
  const [showFilters, setShowFilters] = useState(false)
  const [showGigsFilters, setShowGigsFilters] = useState(false)
  const [budgetRange, setBudgetRange] = useState([0, 5000])
  const [projectBudgetRange, setProjectBudgetRange] = useState([0, 10000])

  // Handle URL tab parameter
  useEffect(() => {
    const tabParam = searchParams.get('tab')
    if (tabParam && (tabParam === 'gigs' || tabParam === 'freelancers')) {
      setActiveTab(tabParam)
    }
  }, [searchParams])
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [showApplyModal, setShowApplyModal] = useState(false)
  const [applicationData, setApplicationData] = useState({
    coverLetter: "",
    proposedRate: "",
    timeline: "",
    portfolio: null
  })
  const [selectedFreelancer, setSelectedFreelancer] = useState<any>(null)
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [messageData, setMessageData] = useState({
    subject: "",
    message: "",
    projectBudget: "",
    timeline: ""
  })

  const projects = [
    {
      id: 1,
      title: "React Native Developer for Fitness App",
      category: "Mobile Development",
      description: "Looking for an experienced React Native developer to build a fitness tracking app with workout plans, progress tracking, and social features.",
      fullDescription: "We are developing a comprehensive fitness tracking application that will revolutionize how users approach their workout routines. The app needs to include workout plans, progress tracking, social features for community engagement, and integration with wearable devices. The ideal candidate should have extensive experience with React Native, Firebase backend integration, and mobile UI/UX best practices.",
      skills: ["React Native", "Firebase", "UI/UX", "API Integration"],
      budgetType: "Fixed Price",
      minBudget: 2000,
      maxBudget: 3000,
      budget: "$2,000-3,000 fixed price",
      duration: "2-4 weeks",
      postedDate: "2 days ago",
      icon: Briefcase,
      attachments: [
        { name: "App_Wireframes.pdf", size: "2.5 MB", type: "PDF" },
        { name: "Brand_Guidelines.docx", size: "1.8 MB", type: "DOCX" }
      ],
      requirements: "• 3+ years of React Native development experience\n• Experience with Firebase and real-time databases\n• Portfolio of published mobile applications\n• Understanding of fitness/health app requirements\n• Ability to work in US timezone",
      responsibilities: "• Develop cross-platform mobile application using React Native\n• Implement user authentication and profile management\n• Create workout tracking and progress visualization features\n• Integrate with wearable devices and health APIs\n• Collaborate with design team for UI/UX implementation\n• Conduct testing and debugging across iOS and Android platforms\n• Provide regular progress updates and technical documentation",
      client: {
        name: "FitTech Solutions",
        rating: 4.8,
        reviews: 23,
        jobsPosted: 15,
        memberSince: "2022"
      }
    },
    {
      id: 2,
      title: "Content Writer for SaaS Blog Articles",
      category: "Content Writing",
      description: "We need a skilled content writer to create engaging, SEO-optimized blog articles for our SaaS clients in the marketing technology space.",
      fullDescription: "Our content marketing agency is seeking a talented writer who can create compelling, SEO-optimized blog articles for our SaaS clients. You'll be responsible for researching industry trends, creating outlines, and writing high-quality articles that drive engagement and conversions. This is an ongoing opportunity with potential for 8-12 articles per month.",
      skills: ["SEO", "B2B", "SaaS", "Marketing"],
      budgetType: "Hourly Rate",
      minBudget: 50,
      maxBudget: 75,
      budget: "$50-75 per article",
      duration: "Ongoing project",
      postedDate: "1 week ago",
      icon: Users,
      attachments: [
        { name: "Content_Strategy.pdf", size: "3.2 MB", type: "PDF" }
      ],
      requirements: "• Proven experience in SaaS/B2B content writing\n• Strong SEO knowledge and keyword research skills\n• Ability to write in different tones and styles\n• Experience with content management systems\n• Native English speaker preferred",
      responsibilities: "• Research and write 8-12 high-quality blog articles per month\n• Conduct keyword research and implement SEO best practices\n• Collaborate with marketing team on content strategy\n• Edit and proofread content for accuracy and engagement\n• Track content performance and suggest improvements\n• Meet deadlines consistently and maintain editorial calendar",
      client: {
        name: "ContentPro Agency",
        rating: 4.9,
        reviews: 67,
        jobsPosted: 45,
        memberSince: "2020"
      }
    },
    {
      id: 3,
      title: "Data Visualization Expert for Financial Dashboard",
      category: "Data Analysis",
      description: "We are seeking a skilled data visualization expert to create an interactive financial dashboard using tools like Tableau or Power BI.",
      fullDescription: "Our financial services company needs a data visualization expert to create a comprehensive dashboard that will help our clients make informed investment decisions. The dashboard should integrate multiple data sources, provide real-time updates, and offer interactive features for data exploration. You'll work closely with our data science team to ensure accurate representation of complex financial data.",
      skills: ["Tableau", "Power BI", "Data Visualization", "Financial Analysis"],
      budgetType: "Hourly Rate",
      minBudget: 100,
      maxBudget: 200,
      budget: "$100 - $200/hr",
      duration: "1-3 months",
      postedDate: "3 days ago",
      icon: Search,
      attachments: [],
      requirements: "",
      responsibilities: "",
      client: {
        name: "InvestWise Analytics",
        rating: 4.7,
        reviews: 34,
        jobsPosted: 12,
        memberSince: "2021"
      }
    }
  ]

  const freelancers = [
    {
      id: 1,
      name: "David Chen",
      initials: "DC",
      title: "Full Stack Developer | React | Node.js | AWS",
      rate: 65,
      rating: 4.9,
      reviews: 42,
      location: "San Francisco, CA",
      availability: "Available Now",
      shortBio: "I build scalable web applications with modern JavaScript frameworks. Specialized in React, Node.js, and cloud infrastructure.",
      // Professional Summary
      professionalSummary: "Passionate full-stack developer with 8+ years of experience building scalable web applications. I specialize in modern JavaScript frameworks, cloud infrastructure, and delivering high-quality solutions that drive business growth. My mission is to transform complex business requirements into elegant, user-friendly applications.",
      // Recent Work & Portfolio
      recentWork: [
        {
          projectTitle: "E-commerce Platform",
          client: "TechMart Solutions",
          projectUrl: "https://techmart.example.com",
          description: "Built a comprehensive e-commerce platform serving 100k+ users with real-time inventory management, payment processing, and advanced analytics dashboard.",
          technologies: "React, Node.js, MongoDB, Stripe API, AWS",
          completedDate: "2024-01"
        },
        {
          projectTitle: "FinTech Dashboard",
          client: "InvestPro Analytics",
          projectUrl: "https://investpro.example.com",
          description: "Developed a real-time financial analytics platform with advanced charting, portfolio tracking, and automated reporting features.",
          technologies: "React, TypeScript, D3.js, Node.js, PostgreSQL",
          completedDate: "2023-11"
        }
      ],
      // Pricing & Availability
      currency: "USD",
      paymentType: "both",
      responseTime: "within-1-hour",
      // Work Preferences
      workPreferences: {
        workingHours: "9 AM - 6 PM PST",
        timezone: "Pacific Standard Time (PST)",
        projectTypes: ["Web Development", "E-commerce", "SaaS"],
        industries: ["Technology", "Finance", "E-commerce"]
      },
      // Awards & Certifications
      awards: [
        {
          title: "AWS Solutions Architect Professional",
          organization: "Amazon Web Services",
          dateReceived: "2023-06",
          credentialId: "AWS-SAP-123456",
          credentialUrl: "https://aws.amazon.com/verification/123456",
          description: "Advanced certification in designing distributed systems on AWS"
        },
        {
          title: "MongoDB Developer Certification",
          organization: "MongoDB Inc.",
          dateReceived: "2023-03",
          credentialId: "MONGO-DEV-789",
          credentialUrl: "https://university.mongodb.com/verify/789",
          description: "Expertise in MongoDB database design and optimization"
        }
      ],
      // Existing fields
      fullBio: "I'm a full-stack developer with 8+ years of experience building scalable web applications for startups and enterprise companies. I specialize in React, Node.js, and AWS cloud infrastructure. I've successfully delivered 50+ projects ranging from MVP development to large-scale enterprise applications.",
      skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Docker", "GraphQL", "PostgreSQL"],
      experience: "8+ years",
      completedProjects: 127,
      clientRetention: "95%",
      languages: ["English (Native)", "Mandarin (Fluent)", "Spanish (Basic)"],
      certifications: ["AWS Solutions Architect", "MongoDB Developer"],
      portfolio: [
        { name: "E-commerce Platform", description: "Built scalable marketplace serving 100k+ users" },
        { name: "FinTech Dashboard", description: "Real-time financial analytics platform" },
        { name: "Healthcare Management System", description: "HIPAA-compliant patient management system" }
      ],
      testimonials: [
        { client: "TechStart Inc.", text: "David delivered exceptional work on time and within budget. His technical expertise is outstanding." },
        { client: "InnovateCorp", text: "Working with David was a game-changer for our project. Highly recommend!" }
      ]
    },
    {
      id: 2,
      name: "Sarah Johnson",
      initials: "SJ",
      title: "UI/UX Designer | Brand Identity | Mobile Apps",
      rate: 75,
      rating: 4.8,
      reviews: 36,
      location: "Austin, TX",
      availability: "Available in 1 week",
      shortBio: "I create beautiful, intuitive interfaces for web and mobile applications with a focus on user experience and conversion.",
      fullBio: "I'm a UI/UX designer with 6+ years of experience creating digital experiences that users love. I specialize in user research, interface design, and conversion optimization. I've worked with Fortune 500 companies and fast-growing startups to design products that drive business results. My design philosophy centers around user-centered design and data-driven decisions.",
      skills: ["UI Design", "UX Research", "Figma", "Adobe XD", "Prototyping"],
      experience: "6+ years",
      completedProjects: 89,
      clientRetention: "92%",
      responseTime: "< 2 hours",
      languages: ["English (Native)", "Spanish (Conversational)"],
      certifications: ["Google UX Design Professional", "Adobe Certified Expert"],
      portfolio: [
        { name: "Mobile Banking App", description: "Complete UX redesign increasing user engagement by 40%" },
        { name: "SaaS Dashboard", description: "B2B platform design serving 10k+ businesses" },
        { name: "E-learning Platform", description: "Educational app with 50k+ active users" }
      ],
      testimonials: [
        { client: "DesignCorp", text: "Sarah's design transformed our user experience completely. Conversion rates increased by 35%." },
        { client: "AppFlow Inc.", text: "Outstanding designer with great communication skills. Delivered beyond expectations." }
      ]
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      initials: "MR",
      title: "Content Strategist | SEO Writer | B2B SaaS",
      rate: 45,
      rating: 4.7,
      reviews: 29,
      location: "Remote",
      availability: "Available Now",
      shortBio: "I help B2B SaaS companies increase organic traffic and conversions with strategic content that ranks and converts.",
      fullBio: "I'm a content strategist and SEO writer with 5+ years of experience helping B2B SaaS companies grow through content marketing. I've helped companies increase organic traffic by 300%+ and generate millions in revenue through strategic content. I specialize in technical writing, SEO optimization, and content that converts prospects into customers.",
      skills: ["SEO", "Content Strategy", "Blog Writing", "Copywriting", "SaaS"],
      experience: "5+ years",
      completedProjects: 156,
      clientRetention: "88%",
      responseTime: "< 4 hours",
      languages: ["English (Native)", "Spanish (Native)"],
      certifications: ["Google Analytics", "HubSpot Content Marketing", "SEMrush SEO Toolkit"],
      portfolio: [
        { name: "SaaS Content Strategy", description: "300% organic traffic growth for B2B SaaS platform" },
        { name: "Technical Blog Series", description: "Developer-focused content driving 100k+ monthly visits" },
        { name: "Lead Magnet Campaign", description: "Content series generating 5000+ qualified leads" }
      ],
      testimonials: [
        { client: "GrowthSaaS", text: "Michael's content strategy transformed our inbound marketing. ROI exceeded expectations." },
        { client: "TechTools Pro", text: "Exceptional writer who understands both technical concepts and marketing strategy." }
      ]
    }
  ]

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
  }

  const handleApplyClick = (e: any, project: any) => {
    e.stopPropagation()
    setSelectedProject(project)
    setShowApplyModal(true)
  }

  const handleSubmitApplication = () => {
    // Handle application submission logic here
    console.log("Application submitted:", { project: selectedProject?.title, ...applicationData })
    setShowApplyModal(false)
    setApplicationData({ coverLetter: "", proposedRate: "", timeline: "", portfolio: null })
  }

  const handleFreelancerClick = (freelancer: any) => {
    setSelectedFreelancer(freelancer)
  }

  const handleContactClick = (e: any, freelancer: any) => {
    e.stopPropagation()
    setSelectedFreelancer(freelancer)
    setShowMessageModal(true)
  }

  const handleSendMessage = () => {
    // Handle message sending here - this would integrate with your messaging system
    console.log("Sending message to:", selectedFreelancer.name, messageData)
    setShowMessageModal(false)
    setSelectedFreelancer(null)
    setMessageData({
      subject: "",
      message: "",
      projectBudget: "",
      timeline: ""
    })
  }

  return (
    <div className="min-h-full">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
        <div>
            <h1 className="text-2xl sm:text-4xl font-heading text-primary-navy mb-1 sm:mb-2">Freelance Marketplace</h1>
            <p className="text-slate-600 font-subheading text-base sm:text-xl">Find work or hire talented professionals</p>
        </div>
        {activeTab === "freelancers" && (
        <Link href="/jobs/freelance/post">
              <Button className="bg-primary-navy hover:bg-slate-800 text-white rounded-full px-4 sm:px-6 py-2 sm:py-3 font-subheading text-sm sm:text-base">
            <PlusCircle className="h-4 w-4 mr-2" />
            Post a Project
          </Button>
        </Link>
        )}
      </div>

        <Tabs value={activeTab} className="mb-6 sm:mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8 bg-slate-100 p-1 sm:p-2 rounded-xl sm:rounded-2xl">
            <TabsTrigger value="gigs" className="text-sm sm:text-base py-2 sm:py-3 font-subheading rounded-lg sm:rounded-xl data-[state=active]:bg-primary-navy data-[state=active]:text-white">
              <Briefcase className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Gigs & Projects</span>
              <span className="sm:hidden">Gigs</span>
          </TabsTrigger>
            <TabsTrigger value="freelancers" className="text-sm sm:text-base py-2 sm:py-3 font-subheading rounded-lg sm:rounded-xl data-[state=active]:bg-primary-navy data-[state=active]:text-white">
              <Users className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Hire Freelancers</span>
              <span className="sm:hidden">Freelancers</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="gigs">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              {/* Enhanced Sidebar for Gigs */}
              <div className="w-full lg:w-64 lg:flex-shrink-0">
                {/* Mobile: Horizontal small buttons */}
                <div className="lg:hidden mb-4">
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    <Link href="/jobs/freelance/my-applications">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-subheading text-xs whitespace-nowrap px-3 py-1.5"
                      >
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Applied Projects
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setShowGigsFilters(!showGigsFilters)}
                      className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-subheading text-xs whitespace-nowrap px-3 py-1.5"
                    >
                      <Filter className="h-3 w-3 mr-1" />
                      Filters
                    </Button>
                    <Link href="/jobs/freelance/complete-profile">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-subheading text-xs whitespace-nowrap px-3 py-1.5"
                      >
                        <FileText className="h-3 w-3 mr-1" />
                        Complete Profile
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Desktop: Card layout (unchanged) */}
                <div className="hidden lg:block space-y-4 lg:space-y-6">
                  {/* Applied Projects */}
                  <Card className="border-slate-200 shadow-sm">
                    <CardHeader className="pb-3 sm:pb-4">
                      <CardTitle className="text-lg sm:text-xl font-heading text-primary-navy flex items-center">
                        <FileText className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        My Applications
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Link href="/jobs/freelance/my-applications">
                        <Button 
                          variant="outline" 
                          className="w-full justify-between border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading text-sm sm:text-base"
                        >
                          <span className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Applied Projects
                          </span>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                      <div className="text-xs sm:text-sm text-slate-500 font-subheading text-center py-2">
                        <p>8 active applications</p>
                        <p>3 interviews pending</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Advanced Filters */}
                  <Card className="border-slate-200 shadow-sm">
                    <CardHeader className="pb-3 sm:pb-4">
                      <CardTitle className="text-lg sm:text-xl font-heading text-primary-navy flex items-center justify-between">
                        <span className="flex items-center">
                          <Filter className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                          <span className="hidden sm:inline">Advanced Filters</span>
                          <span className="sm:hidden">Filters</span>
                        </span>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setShowGigsFilters(!showGigsFilters)}
                          className="text-[#0056B3] hover:text-primary-navy hover:bg-primary-navy/5 rounded-lg text-xs sm:text-sm"
                        >
                          {showGigsFilters ? 'Hide' : 'Show'}
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    {showGigsFilters && (
                      <CardContent className="space-y-4 sm:space-y-6">
                        {/* Project Type */}
                        <div>
                          <h4 className="font-subheading font-medium text-primary-navy mb-2 sm:mb-3 text-sm sm:text-base">Project Type</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="fixed-price" />
                              <label htmlFor="fixed-price" className="text-xs sm:text-sm font-subheading text-slate-600">Fixed Price</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="hourly" />
                              <label htmlFor="hourly" className="text-xs sm:text-sm font-subheading text-slate-600">Hourly Rate</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="milestone" />
                              <label htmlFor="milestone" className="text-xs sm:text-sm font-subheading text-slate-600">Milestone Based</label>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Budget Range */}
                        <div>
                          <h4 className="font-subheading font-medium text-primary-navy mb-2 sm:mb-3 text-sm sm:text-base">Budget Range</h4>
                          <div className="px-2">
                            <Slider
                              value={projectBudgetRange}
                              onValueChange={setProjectBudgetRange}
                              max={10000}
                              min={100}
                              step={100}
                              className="mb-3"
                            />
                            <div className="flex justify-between text-xs sm:text-sm font-subheading text-slate-500">
                              <span>${projectBudgetRange[0]}</span>
                              <span>${projectBudgetRange[1]}</span>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Project Duration */}
                        <div>
                          <h4 className="font-subheading font-medium text-primary-navy mb-2 sm:mb-3 text-sm sm:text-base">Project Duration</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="short-term" />
                              <label htmlFor="short-term" className="text-xs sm:text-sm font-subheading text-slate-600">Less than 1 month</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="medium-term" />
                              <label htmlFor="medium-term" className="text-xs sm:text-sm font-subheading text-slate-600">1-3 months</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="long-term" />
                              <label htmlFor="long-term" className="text-xs sm:text-sm font-subheading text-slate-600">3+ months</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="ongoing" />
                              <label htmlFor="ongoing" className="text-xs sm:text-sm font-subheading text-slate-600">Ongoing</label>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Client Rating */}
                        <div>
                          <h4 className="font-subheading font-medium text-primary-navy mb-2 sm:mb-3 text-sm sm:text-base">Client Rating</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="rating-5" />
                              <label htmlFor="rating-5" className="text-xs sm:text-sm font-subheading text-slate-600">5.0 stars</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="rating-4" />
                              <label htmlFor="rating-4" className="text-xs sm:text-sm font-subheading text-slate-600">4.0+ stars</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="rating-3" />
                              <label htmlFor="rating-3" className="text-xs sm:text-sm font-subheading text-slate-600">3.0+ stars</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="no-rating" />
                              <label htmlFor="no-rating" className="text-xs sm:text-sm font-subheading text-slate-600">No rating yet</label>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Skills Required */}
                        <div>
                          <h4 className="font-subheading font-medium text-primary-navy mb-2 sm:mb-3 text-sm sm:text-base">Skills Required</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="react-proj" />
                              <label htmlFor="react-proj" className="text-xs sm:text-sm font-subheading text-slate-600">React</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="nodejs-proj" />
                              <label htmlFor="nodejs-proj" className="text-xs sm:text-sm font-subheading text-slate-600">Node.js</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="python-proj" />
                              <label htmlFor="python-proj" className="text-xs sm:text-sm font-subheading text-slate-600">Python</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="design-proj" />
                              <label htmlFor="design-proj" className="text-xs sm:text-sm font-subheading text-slate-600">UI/UX Design</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-proj" />
                              <label htmlFor="mobile-proj" className="text-xs sm:text-sm font-subheading text-slate-600">Mobile Development</label>
                            </div>
                          </div>
                        </div>

                        <Button className="w-full bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-sm sm:text-base">
                          Apply Filters
                        </Button>
                      </CardContent>
                    )}
                  </Card>

                  {/* Complete Profile */}
                  <Card className="border-slate-200 shadow-sm">
                    <CardHeader className="pb-3 sm:pb-4">
                      <CardTitle className="text-lg sm:text-xl font-heading text-primary-navy flex items-center">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        <span className="hidden sm:inline">Profile Enhancement</span>
                        <span className="sm:hidden">Profile</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Link href="/jobs/freelance/complete-profile">
                        <Button 
                          variant="outline" 
                          className="w-full justify-between border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading text-sm sm:text-base"
                        >
                          <span className="flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            Complete Profile
                          </span>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                      <div className="text-xs sm:text-sm text-slate-500 font-subheading text-center py-2">
                        <p>Enhance your profile</p>
                        <p>Get more opportunities</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Mobile: Show filters panel when toggled */}
                {showGigsFilters && (
                  <div className="lg:hidden mb-4">
                    <Card className="border-slate-200 shadow-sm">
                      <CardHeader className="pb-3 sm:pb-4">
                        <CardTitle className="text-lg font-heading text-primary-navy flex items-center">
                          <Filter className="h-4 w-4 mr-2" />
                          Filters
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Project Type */}
                        <div>
                          <h4 className="font-subheading font-medium text-primary-navy mb-2 text-sm">Project Type</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="fixed-price-mobile" />
                              <label htmlFor="fixed-price-mobile" className="text-xs font-subheading text-slate-600">Fixed Price</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="hourly-mobile" />
                              <label htmlFor="hourly-mobile" className="text-xs font-subheading text-slate-600">Hourly Rate</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="milestone-mobile" />
                              <label htmlFor="milestone-mobile" className="text-xs font-subheading text-slate-600">Milestone Based</label>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Budget Range */}
                        <div>
                          <h4 className="font-subheading font-medium text-primary-navy mb-2 text-sm">Budget Range</h4>
                          <div className="px-2">
                            <Slider
                              value={projectBudgetRange}
                              onValueChange={setProjectBudgetRange}
                              max={10000}
                              min={100}
                              step={100}
                              className="mb-3"
                            />
                            <div className="flex justify-between text-xs font-subheading text-slate-500">
                              <span>${projectBudgetRange[0]}</span>
                              <span>${projectBudgetRange[1]}</span>
                            </div>
                          </div>
                        </div>

                        <Button className="w-full bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-sm">
                          Apply Filters
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>

              {/* Main Content Area */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
            <div className="relative flex-1">
                    <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
                    <Input 
                      placeholder="Search projects by title, skills..."
                      className="pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border-slate-200 focus:border-slate-400 focus:ring-slate-100 rounded-xl font-subheading text-sm sm:text-base"
                    />
            </div>
            <Select>
                    <SelectTrigger className="w-full sm:w-[180px] border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading focus:ring-0 focus:outline-none text-sm sm:text-base">
                      <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="border-primary-navy">
                      <SelectItem value="newest" className="focus:bg-primary-navy focus:text-white">Newest First</SelectItem>
                      <SelectItem value="budget-high" className="focus:bg-primary-navy focus:text-white">Highest Budget</SelectItem>
                      <SelectItem value="budget-low" className="focus:bg-primary-navy focus:text-white">Lowest Budget</SelectItem>
                      <SelectItem value="deadline" className="focus:bg-primary-navy focus:text-white">Deadline</SelectItem>
                      <SelectItem value="applications" className="focus:bg-primary-navy focus:text-white">Fewest Applications</SelectItem>
              </SelectContent>
            </Select>
          </div>

                <div className="space-y-3 sm:space-y-4">
            {projects.map((project) => {
              const IconComponent = project.icon
              return (
                <Card 
                  key={project.id}
                        className="border-0 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl sm:rounded-2xl bg-white cursor-pointer overflow-hidden"
                  onClick={() => handleProjectClick(project)}
                >
                        <CardContent className="p-4 sm:p-6 lg:p-8 overflow-hidden">
                          <div className="flex items-start w-full">
                            <div className="flex-1 min-w-0 w-full">
                              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4">
                                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                                  <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary-navy" />
                          </div>
                                <div className="flex-1 min-w-0 w-full">
                                  <h3 className="font-heading text-lg sm:text-xl text-primary-navy truncate w-full">{project.title}</h3>
                                  <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 mt-1 sm:mt-2">
                                    <p className="text-sm sm:text-base text-slate-600 font-subheading truncate">{project.budget}</p>
                                    <span className="text-xs sm:text-sm bg-[#0056B3]/10 text-[#0056B3] px-2 sm:px-3 py-1 rounded-full font-medium self-start flex-shrink-0">{project.category}</span>
                      </div>
                    </div>
                  </div>
                              <div className="text-slate-600 font-subheading leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                          {project.description}
                              </div>
                              <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-5 overflow-hidden">
                          {project.skills.map((skill, index) => (
                                  <span key={index} className="text-xs sm:text-sm bg-slate-100 text-slate-700 px-2 sm:px-3 py-1 rounded-full font-medium flex-shrink-0">{skill}</span>
                          ))}
                  </div>
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0 w-full">
                                <p className="text-xs sm:text-sm text-slate-500 font-subheading truncate flex-1 min-w-0">Estimated duration: {project.duration} • Posted {project.postedDate}</p>
                                <div className="flex space-x-2 sm:space-x-3 flex-shrink-0">
                                  <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 text-slate-400 hover:text-primary-navy hover:bg-slate-50">
                                    <BookmarkIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                            <Button 
                              size="sm" 
                                    className="bg-primary-navy hover:bg-slate-800 text-white rounded-lg px-3 sm:px-4 font-subheading text-xs sm:text-sm"
                              onClick={(e) => handleApplyClick(e, project)}
                            >
                              Apply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
                  </div>

                <div className="mt-6 sm:mt-8 flex justify-center">
                  <Button variant="outline" className="rounded-full border-slate-200 text-slate-600 hover:border-primary-navy hover:text-primary-navy font-subheading px-4 sm:px-6 text-sm sm:text-base">
                    Load More Projects
                  </Button>
                </div>
              </div>
            </div>
        </TabsContent>

        <TabsContent value="freelancers">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              {/* Enhanced Sidebar */}
              <div className="w-full lg:w-64 lg:flex-shrink-0">
                {/* Mobile: Horizontal small buttons */}
                <div className="lg:hidden mb-4">
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    <Link href="/jobs/freelance/my-projects">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-subheading text-xs whitespace-nowrap px-3 py-1.5"
                      >
                        <FolderOpen className="h-3 w-3 mr-1" />
                        Posted Projects
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setShowFilters(!showFilters)}
                      className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-subheading text-xs whitespace-nowrap px-3 py-1.5"
                    >
                      <Filter className="h-3 w-3 mr-1" />
                      Filters
                    </Button>
                  </div>
                </div>

                {/* Desktop: Card layout (unchanged) */}
                <div className="hidden lg:block space-y-4 lg:space-y-6">
                  {/* Posted Projects */}
                  <Card className="border-slate-200 shadow-sm">
                    <CardHeader className="pb-3 sm:pb-4">
                      <CardTitle className="text-lg sm:text-xl font-heading text-primary-navy flex items-center">
                        <FolderOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        <span className="hidden sm:inline">My Projects</span>
                        <span className="sm:hidden">Projects</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Link href="/jobs/freelance/my-projects">
                        <Button 
                          variant="outline" 
                          className="w-full justify-between border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading text-sm sm:text-base"
                        >
                          <span className="flex items-center">
                            <FolderOpen className="h-4 w-4 mr-2" />
                            Posted Projects
                          </span>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                      <div className="text-xs sm:text-sm text-slate-500 font-subheading text-center py-2">
                        <p>3 active projects</p>
                        <p>12 total applications</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Advanced Filters */}
                  <Card className="border-slate-200 shadow-sm">
                    <CardHeader className="pb-3 sm:pb-4">
                      <CardTitle className="text-lg sm:text-xl font-heading text-primary-navy flex items-center justify-between">
                        <span className="flex items-center">
                          <Filter className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                          <span className="hidden sm:inline">Advanced Filters</span>
                          <span className="sm:hidden">Filters</span>
                        </span>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setShowFilters(!showFilters)}
                          className="text-[#0056B3] hover:text-primary-navy hover:bg-primary-navy/5 rounded-lg text-xs sm:text-sm"
                        >
                          {showFilters ? 'Hide' : 'Show'}
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    {showFilters && (
                      <CardContent className="space-y-4 sm:space-y-6">
                        {/* Experience Level */}
                        <div>
                          <h4 className="font-subheading font-medium text-primary-navy mb-2 sm:mb-3 text-sm sm:text-base">Experience Level</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="entry" />
                              <label htmlFor="entry" className="text-xs sm:text-sm font-subheading text-slate-600">Entry Level</label>
                    </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="intermediate" />
                              <label htmlFor="intermediate" className="text-xs sm:text-sm font-subheading text-slate-600">Intermediate</label>
                  </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="expert" />
                              <label htmlFor="expert" className="text-xs sm:text-sm font-subheading text-slate-600">Expert</label>
                    </div>
                  </div>
                        </div>

                        <Separator />

                        {/* Hourly Rate */}
                        <div>
                          <h4 className="font-subheading font-medium text-primary-navy mb-2 sm:mb-3 text-sm sm:text-base">Hourly Rate Range</h4>
                          <div className="px-2">
                            <Slider
                              value={budgetRange}
                              onValueChange={setBudgetRange}
                              max={200}
                              min={10}
                              step={5}
                              className="mb-3"
                            />
                            <div className="flex justify-between text-xs sm:text-sm font-subheading text-slate-500">
                              <span>${budgetRange[0]}/hr</span>
                              <span>${budgetRange[1]}/hr</span>
                </div>
              </div>
            </div>

                        <Separator />

                        {/* Location */}
                    <div>
                          <h4 className="font-subheading font-medium text-primary-navy mb-2 sm:mb-3 text-sm sm:text-base">Location</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="anywhere" />
                              <label htmlFor="anywhere" className="text-xs sm:text-sm font-subheading text-slate-600">Anywhere</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="us" />
                              <label htmlFor="us" className="text-xs sm:text-sm font-subheading text-slate-600">United States</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="eu" />
                              <label htmlFor="eu" className="text-xs sm:text-sm font-subheading text-slate-600">Europe</label>
                            </div>
                      <div className="flex items-center space-x-2">
                              <Checkbox id="timezone" />
                              <label htmlFor="timezone" className="text-xs sm:text-sm font-subheading text-slate-600">My Timezone</label>
                      </div>
                    </div>
                  </div>

                        <Separator />

                        {/* Availability */}
                        <div>
                          <h4 className="font-subheading font-medium text-primary-navy mb-2 sm:mb-3 text-sm sm:text-base">Availability</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="available" />
                              <label htmlFor="available" className="text-xs sm:text-sm font-subheading text-slate-600">Available Now</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="week" />
                              <label htmlFor="week" className="text-xs sm:text-sm font-subheading text-slate-600">Within a Week</label>
                  </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="month" />
                              <label htmlFor="month" className="text-xs sm:text-sm font-subheading text-slate-600">Within a Month</label>
                    </div>
                  </div>
                </div>

                        <Separator />

                        {/* Skills */}
                        <div>
                          <h4 className="font-subheading font-medium text-primary-navy mb-2 sm:mb-3 text-sm sm:text-base">Required Skills</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="react" />
                              <label htmlFor="react" className="text-xs sm:text-sm font-subheading text-slate-600">React</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="nodejs" />
                              <label htmlFor="nodejs" className="text-xs sm:text-sm font-subheading text-slate-600">Node.js</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="python" />
                              <label htmlFor="python" className="text-xs sm:text-sm font-subheading text-slate-600">Python</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="design" />
                              <label htmlFor="design" className="text-xs sm:text-sm font-subheading text-slate-600">UI/UX Design</label>
              </div>
            </div>
          </div>

                        <Button className="w-full bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-sm sm:text-base">
                          Apply Filters
                        </Button>
                      </CardContent>
                    )}
                  </Card>
                </div>
                
                {/* Mobile: Show filters panel when toggled */}
                {showFilters && (
                  <div className="lg:hidden mb-4">
                    <Card className="border-slate-200 shadow-sm">
                      <CardHeader className="pb-3 sm:pb-4">
                        <CardTitle className="text-lg font-heading text-primary-navy flex items-center">
                          <Filter className="h-4 w-4 mr-2" />
                          Filters
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Experience Level */}
                        <div>
                          <h4 className="font-subheading font-medium text-primary-navy mb-2 text-sm">Experience Level</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="entry-mobile" />
                              <label htmlFor="entry-mobile" className="text-xs font-subheading text-slate-600">Entry Level</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="intermediate-mobile" />
                              <label htmlFor="intermediate-mobile" className="text-xs font-subheading text-slate-600">Intermediate</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="expert-mobile" />
                              <label htmlFor="expert-mobile" className="text-xs font-subheading text-slate-600">Expert</label>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Hourly Rate */}
                        <div>
                          <h4 className="font-subheading font-medium text-primary-navy mb-2 text-sm">Hourly Rate Range</h4>
                          <div className="px-2">
                            <Slider
                              value={budgetRange}
                              onValueChange={setBudgetRange}
                              max={200}
                              min={10}
                              step={5}
                              className="mb-3"
                            />
                            <div className="flex justify-between text-xs font-subheading text-slate-500">
                              <span>${budgetRange[0]}/hr</span>
                              <span>${budgetRange[1]}/hr</span>
                            </div>
                          </div>
                        </div>

                        <Button className="w-full bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-sm">
                          Apply Filters
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>

              {/* Main Content Area */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
            <div className="relative flex-1">
                    <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
                    <Input 
                      placeholder="Search freelancers by name, skills..."
                      className="pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border-slate-200 focus:border-slate-400 focus:ring-slate-100 rounded-xl font-subheading text-sm sm:text-base"
                    />
            </div>
            <Select>
                    <SelectTrigger className="w-full sm:w-[180px] border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading focus:ring-0 focus:outline-none text-sm sm:text-base">
                      <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="border-primary-navy">
                      <SelectItem value="rating" className="focus:bg-primary-navy focus:text-white">Highest Rating</SelectItem>
                      <SelectItem value="reviews" className="focus:bg-primary-navy focus:text-white">Most Reviews</SelectItem>
                      <SelectItem value="recent" className="focus:bg-primary-navy focus:text-white">Recently Active</SelectItem>
                      <SelectItem value="price-low" className="focus:bg-primary-navy focus:text-white">Price: Low to High</SelectItem>
                      <SelectItem value="price-high" className="focus:bg-primary-navy focus:text-white">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

                <div className="space-y-3 sm:space-y-4">
            {freelancers.map((freelancer) => (
              <Card 
                key={freelancer.id}
                      className="border-0 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl sm:rounded-2xl bg-white cursor-pointer overflow-hidden"
                onClick={() => handleFreelancerClick(freelancer)}
              >
                      <CardContent className="p-4 sm:p-6 lg:p-8 overflow-hidden">
                        <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 w-full">
                          <div className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-navy to-slate-700 flex items-center justify-center text-white text-xl sm:text-2xl lg:text-3xl font-heading flex-shrink-0 mx-auto sm:mx-0">
                      {freelancer.initials}
                    </div>
                          <div className="flex-1 min-w-0 w-full">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 sm:mb-3 space-y-2 sm:space-y-0">
                              <h3 className="font-heading text-lg sm:text-xl lg:text-2xl text-primary-navy truncate flex-1 min-w-0">{freelancer.name}</h3>
                              <div className="flex items-center space-x-1 justify-center sm:justify-start flex-shrink-0">
                                <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                                <span className="font-subheading font-medium text-primary-navy text-sm sm:text-base">{freelancer.rating}</span>
                                <span className="text-slate-500 text-xs sm:text-base font-subheading whitespace-nowrap">/5 ({freelancer.reviews} reviews)</span>
                        </div>
                      </div>
                            <div className="font-subheading text-slate-600 mb-3 sm:mb-4 text-base sm:text-lg text-center sm:text-left overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                        {freelancer.title}
                            </div>
                            <div className="text-slate-600 font-subheading leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base text-center sm:text-left overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                        {freelancer.shortBio}
                            </div>
                            <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-5 justify-center sm:justify-start overflow-hidden">
                        {freelancer.skills.map((skill, index) => (
                                <Badge key={index} className="bg-slate-100 text-slate-700 font-subheading text-xs sm:text-sm px-2 sm:px-3 py-1 flex-shrink-0">{skill}</Badge>
                        ))}
                      </div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0 w-full">
                              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4 flex-1 min-w-0">
                                <div className="flex items-center text-primary-navy flex-shrink-0">
                                  <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
                                  <span className="font-heading text-lg sm:text-xl">${freelancer.rate}/hr</span>
                          </div>
                                <div className="flex items-center text-slate-500 flex-shrink-0">
                                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
                                  <span className="text-sm sm:text-base font-subheading truncate">{freelancer.availability}</span>
                          </div>
                                <div className="flex items-center text-slate-500 flex-shrink-0">
                                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
                                  <span className="text-sm sm:text-base font-subheading truncate">{freelancer.location}</span>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                                className="bg-primary-navy hover:bg-slate-800 text-white rounded-lg px-4 sm:px-6 font-subheading text-sm sm:text-base flex-shrink-0"
                          onClick={(e) => handleContactClick(e, freelancer)}
                        >
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

                <div className="mt-6 sm:mt-8 flex justify-center">
                  <Button variant="outline" className="rounded-full border-slate-200 text-slate-600 hover:border-primary-navy hover:text-primary-navy font-subheading px-4 sm:px-6 text-sm sm:text-base">
                    Load More Freelancers
                  </Button>
                </div>
              </div>
          </div>
        </TabsContent>
      </Tabs>
      </div>

      {/* Project Details Modal */}
      {selectedProject && !showApplyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedProject(null)}
                    className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-8 w-8 sm:h-10 sm:w-10"
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <h1 className="text-lg sm:text-2xl font-heading text-primary-navy">Project Details</h1>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4 sm:space-y-6">
                {/* Project Header */}
                <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl bg-slate-100 flex items-center justify-center mx-auto sm:mx-0">
                    <selectedProject.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-navy" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl font-heading text-primary-navy mb-1 sm:mb-2">{selectedProject.title}</h2>
                    <p className="text-slate-500 font-subheading text-sm sm:text-base">Posted {selectedProject.postedDate}</p>
                  </div>
                </div>

                <Separator />

                {/* Project Details Form Layout */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Project Title */}
                  <div className="space-y-2">
                    <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Project Title</Label>
                    <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="font-subheading text-slate-900 text-sm sm:text-base">{selectedProject.title}</p>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Category</Label>
                    <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="font-subheading text-slate-900 text-sm sm:text-base">{selectedProject.category}</p>
                    </div>
                  </div>

                {/* Project Description */}
                  <div className="space-y-2">
                    <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Project Description</Label>
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="font-subheading text-slate-700 leading-relaxed text-sm sm:text-base">{selectedProject.fullDescription}</p>
                    </div>
                </div>

                  {/* Required Skills */}
                  <div className="space-y-2">
                    <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Required Skills</Label>
                    <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="font-subheading text-slate-900 text-sm sm:text-base">{selectedProject.skills.join(", ")}</p>
                    </div>
                  </div>

                  {/* Project Budget */}
                  <div className="space-y-2 sm:space-y-3">
                    <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Project Budget</Label>
                    <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex items-center space-x-2 mb-1 sm:mb-2">
                        <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-primary-navy bg-primary-navy"></div>
                        <span className="font-subheading text-slate-700 text-sm sm:text-base">{selectedProject.budgetType}</span>
                      </div>
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                    <div className="space-y-2">
                      <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Minimum Budget</Label>
                      <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <p className="font-subheading text-slate-900 text-sm sm:text-base">${selectedProject.minBudget.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Maximum Budget</Label>
                      <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <p className="font-subheading text-slate-900 text-sm sm:text-base">${selectedProject.maxBudget.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  {/* Estimated Duration */}
                  <div className="space-y-2">
                    <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Estimated Duration</Label>
                    <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="font-subheading text-slate-900 text-sm sm:text-base">{selectedProject.duration}</p>
                    </div>
                  </div>

                  {/* Attachments */}
                  <div className="space-y-2">
                    <Label className="text-sm font-subheading font-medium text-primary-navy">Attachments {selectedProject.attachments.length === 0 && "(Optional)"}</Label>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      {selectedProject.attachments.length > 0 ? (
                        <div className="space-y-2">
                          {selectedProject.attachments.map((attachment: any, index: number) => (
                            <div key={index} className="flex items-center space-x-3 p-2 bg-white rounded-lg border border-slate-200">
                              <div className="h-8 w-8 bg-primary-navy/10 rounded-lg flex items-center justify-center">
                                <span className="text-xs font-bold text-primary-navy">{attachment.type}</span>
                              </div>
                              <div className="flex-1">
                                <p className="font-subheading text-sm text-slate-900">{attachment.name}</p>
                                <p className="text-xs text-slate-500">{attachment.size}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="font-subheading text-slate-500 text-center py-2">No attachments provided</p>
                      )}
                  </div>
                </div>

                  {/* Requirements */}
                  {selectedProject.requirements && selectedProject.requirements.trim() !== "" && (
                    <div className="space-y-2">
                      <Label className="text-sm font-subheading font-medium text-primary-navy">Requirements</Label>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="space-y-2">
                          {selectedProject.requirements.split('\n').map((requirement: string, index: number) => (
                            <div key={index} className="flex items-start space-x-2">
                              <span className="font-subheading text-slate-700">{requirement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Responsibilities */}
                  {selectedProject.responsibilities && selectedProject.responsibilities.trim() !== "" && (
                    <div className="space-y-2">
                      <Label className="text-sm font-subheading font-medium text-primary-navy">Responsibilities</Label>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="space-y-2">
                          {selectedProject.responsibilities.split('\n').map((responsibility: string, index: number) => (
                            <div key={index} className="flex items-start space-x-2">
                              <span className="font-subheading text-slate-700">{responsibility}</span>
                            </div>
                    ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Client Information */}
                <div>
                  <h3 className="text-lg font-heading text-primary-navy mb-3">About the Client</h3>
                  <Card className="border-slate-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-heading text-primary-navy">{selectedProject.client.name}</h4>
                          <div className="flex items-center space-x-4 mt-1">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                              <span className="font-subheading text-sm">{selectedProject.client.rating}/5</span>
                              <span className="text-xs text-slate-500">({selectedProject.client.reviews} reviews)</span>
                            </div>
                            <span className="text-xs text-slate-500">{selectedProject.client.jobsPosted} jobs posted</span>
                            <span className="text-xs text-slate-500">Member since {selectedProject.client.memberSince}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button 
                    className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading"
                    onClick={() => setShowApplyModal(true)}
                  >
                    Apply to Project
                  </Button>
                  <Button variant="outline" className="rounded-xl font-subheading">
                    <BookmarkIcon className="h-4 w-4 mr-2" />
                    Save Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Apply Modal */}
      <Dialog open={showApplyModal} onOpenChange={setShowApplyModal}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-primary-navy">
              Apply to: {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            {/* Cover Letter */}
            <div>
              <Label htmlFor="coverLetter" className="font-subheading text-primary-navy">Cover Letter</Label>
              <Textarea
                id="coverLetter"
                placeholder="Explain why you're the perfect fit for this project..."
                value={applicationData.coverLetter}
                onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                className="mt-2 min-h-[120px] rounded-xl font-subheading"
              />
            </div>

            {/* Proposed Rate */}
            <div>
              <Label htmlFor="proposedRate" className="font-subheading text-primary-navy">Your Proposed Rate</Label>
              <Input
                id="proposedRate"
                placeholder="Enter your rate (e.g., $50/hour or $2000 fixed)"
                value={applicationData.proposedRate}
                onChange={(e) => setApplicationData({...applicationData, proposedRate: e.target.value})}
                className="mt-2 rounded-xl font-subheading"
              />
            </div>

            {/* Timeline */}
            <div>
              <Label htmlFor="timeline" className="font-subheading text-primary-navy">Estimated Timeline</Label>
              <Input
                id="timeline"
                placeholder="How long will this project take? (e.g., 2-3 weeks)"
                value={applicationData.timeline}
                onChange={(e) => setApplicationData({...applicationData, timeline: e.target.value})}
                className="mt-2 rounded-xl font-subheading"
              />
            </div>

            {/* Portfolio/Attachments */}
            <div>
              <Label htmlFor="portfolio" className="font-subheading text-primary-navy">Portfolio/Relevant Work (Optional)</Label>
              <div className="mt-2 border-2 border-dashed border-slate-300 rounded-xl p-6 text-center">
                <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm text-slate-600 font-subheading">
                  Drop files here or click to upload
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  PDF, DOC, or image files up to 10MB
                </p>
              </div>
            </div>

            {/* Project Budget Information */}
            {selectedProject && (
              <Card className="border-slate-200 bg-slate-50">
                <CardContent className="p-4">
                  <h4 className="font-heading text-primary-navy mb-2">Project Budget: {selectedProject.budget}</h4>
                  <p className="text-sm text-slate-600 font-subheading">
                    Make sure your proposed rate aligns with the client's budget range.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4">
              <Button 
                variant="outline" 
                className="flex-1 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
                onClick={() => setShowApplyModal(false)}
              >
                Cancel
              </Button>
              <Button 
                className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading"
                onClick={handleSubmitApplication}
              >
                <Send className="h-4 w-4 mr-2" />
                Submit Application
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Freelancer Details Modal */}
      {selectedFreelancer && !showMessageModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedFreelancer(null)}
                    className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-8 w-8 sm:h-10 sm:w-10"
                  >
                    <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <h1 className="text-lg sm:text-2xl font-heading text-primary-navy">Freelancer Profile</h1>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedFreelancer(null)}
                  className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-8 w-8 sm:h-10 sm:w-10"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>

              {/* Freelancer Profile Content */}
              <div className="space-y-4 sm:space-y-6">
                {/* Basic Info */}
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-navy to-slate-700 flex items-center justify-center text-white text-2xl sm:text-3xl font-heading mx-auto sm:mx-0">
                    {selectedFreelancer.initials}
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 space-y-2 sm:space-y-0">
                      <h2 className="text-xl sm:text-2xl font-heading text-primary-navy">{selectedFreelancer.name}</h2>
                      <div className="flex items-center space-x-1 justify-center sm:justify-start">
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                        <span className="font-subheading font-medium text-primary-navy text-base sm:text-lg">{selectedFreelancer.rating}</span>
                        <span className="text-slate-500 font-subheading text-sm sm:text-base">/5 ({selectedFreelancer.reviews} reviews)</span>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg font-subheading text-slate-600 mb-3">{selectedFreelancer.title}</p>
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-slate-500 font-subheading text-sm sm:text-base">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{selectedFreelancer.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{selectedFreelancer.availability}</span>
                      </div>
                    <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        <span className="font-heading text-primary-navy">${selectedFreelancer.rate}/hr</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
                    <div className="text-lg sm:text-2xl font-heading text-primary-navy">{selectedFreelancer.completedProjects}</div>
                    <div className="text-xs sm:text-sm font-subheading text-slate-600">Projects Completed</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
                    <div className="text-lg sm:text-2xl font-heading text-primary-navy">{selectedFreelancer.clientRetention}</div>
                    <div className="text-xs sm:text-sm font-subheading text-slate-600">Client Retention</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
                    <div className="text-lg sm:text-2xl font-heading text-primary-navy">{selectedFreelancer.experience}</div>
                    <div className="text-xs sm:text-sm font-subheading text-slate-600">Experience</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
                    <div className="text-lg sm:text-2xl font-heading text-primary-navy">{selectedFreelancer.responseTime}</div>
                    <div className="text-xs sm:text-sm font-subheading text-slate-600">Response Time</div>
                  </div>
                </div>

                {/* Professional Summary */}
                {selectedFreelancer.professionalSummary && (
                <div>
                    <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2 sm:mb-3">Professional Summary</h3>
                    <p className="text-slate-600 font-subheading leading-relaxed text-sm sm:text-base">{selectedFreelancer.professionalSummary}</p>
                </div>
                )}

                {/* Recent Work & Portfolio */}
                {selectedFreelancer.recentWork && selectedFreelancer.recentWork.length > 0 && (
                <div>
                    <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2 sm:mb-3">Recent Work & Portfolio</h3>
                    <div className="space-y-3 sm:space-y-4">
                      {selectedFreelancer.recentWork.map((work: any, index: number) => (
                        <Card key={index} className="border-slate-200">
                          <CardContent className="p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 space-y-2 sm:space-y-0">
                              <div className="flex-1">
                                <h4 className="font-heading text-primary-navy text-base sm:text-lg mb-1">{work.projectTitle}</h4>
                                <p className="text-xs sm:text-sm font-subheading text-slate-500">{work.client} • Completed: {work.completedDate}</p>
                              </div>
                              {work.projectUrl && (
                                <a 
                                  href={work.projectUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-primary-navy hover:underline text-xs sm:text-sm font-subheading"
                                >
                                  View Project
                                </a>
                              )}
                            </div>
                            <p className="text-slate-600 font-subheading mb-3 text-sm sm:text-base">{work.description}</p>
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                              {work.technologies.split(', ').map((tech: string, techIndex: number) => (
                                <Badge key={techIndex} className="bg-slate-100 text-slate-700 font-subheading text-xs">{tech}</Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills & Tools */}
                <div>
                  <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2 sm:mb-3">Skills & Tools</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {selectedFreelancer.skills.map((skill: string, index: number) => (
                      <Badge key={index} className="bg-[#0056B3]/10 text-[#0056B3] font-subheading px-2 sm:px-3 py-1 text-xs sm:text-sm">{skill}</Badge>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2 sm:mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {selectedFreelancer.languages.map((language: string, index: number) => (
                      <Badge key={index} className="bg-slate-100 text-slate-700 font-subheading text-xs sm:text-sm">{language}</Badge>
                    ))}
                  </div>
                </div>

                {/* Pricing & Availability */}
                <div>
                  <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2 sm:mb-3">Pricing & Availability</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <div className="bg-slate-50 p-3 sm:p-4 rounded-xl">
                      <div className="text-xs sm:text-sm font-subheading text-slate-500 mb-1">Hourly Rate</div>
                      <div className="font-heading text-primary-navy text-sm sm:text-base">{selectedFreelancer.currency} ${selectedFreelancer.rate}/hr</div>
                      </div>
                    <div className="bg-slate-50 p-3 sm:p-4 rounded-xl">
                      <div className="text-xs sm:text-sm font-subheading text-slate-500 mb-1">Payment Type</div>
                      <div className="font-subheading text-slate-700 capitalize text-sm sm:text-base">
                        {selectedFreelancer.paymentType === 'both' ? 'Hourly & Fixed' : selectedFreelancer.paymentType}
                      </div>
                    </div>
                    <div className="bg-slate-50 p-3 sm:p-4 rounded-xl">
                      <div className="text-xs sm:text-sm font-subheading text-slate-500 mb-1">Availability</div>
                      <div className="font-subheading text-slate-700 text-sm sm:text-base">{selectedFreelancer.availability}</div>
                    </div>
                    <div className="bg-slate-50 p-3 sm:p-4 rounded-xl">
                      <div className="text-xs sm:text-sm font-subheading text-slate-500 mb-1">Response Time</div>
                      <div className="font-subheading text-slate-700 text-sm sm:text-base">
                        {selectedFreelancer.responseTime.replace('within-', '').replace('-', ' ')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Work Preferences */}
                {selectedFreelancer.workPreferences && (
                  <div>
                    <h3 className="text-lg font-heading text-primary-navy mb-3">Work Preferences</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-subheading font-medium text-slate-700 mb-2">Working Hours & Timezone</h4>
                        <p className="text-slate-600 font-subheading">{selectedFreelancer.workPreferences.workingHours}</p>
                        <p className="text-slate-600 font-subheading">{selectedFreelancer.workPreferences.timezone}</p>
                      </div>
                      <div>
                        <h4 className="font-subheading font-medium text-slate-700 mb-2">Preferred Project Types</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedFreelancer.workPreferences.projectTypes.map((type: string, index: number) => (
                            <Badge key={index} className="bg-blue-50 text-blue-700 font-subheading text-xs">{type}</Badge>
                    ))}
                  </div>
                </div>
                      <div>
                        <h4 className="font-subheading font-medium text-slate-700 mb-2">Preferred Industries</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedFreelancer.workPreferences.industries.map((industry: string, index: number) => (
                            <Badge key={index} className="bg-green-50 text-green-700 font-subheading text-xs">{industry}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Awards & Certifications */}
                {selectedFreelancer.awards && selectedFreelancer.awards.length > 0 && (
                <div>
                    <h3 className="text-lg font-heading text-primary-navy mb-3">Awards & Certifications</h3>
                    <div className="space-y-4">
                      {selectedFreelancer.awards.map((award: any, index: number) => (
                        <Card key={index} className="border-slate-200">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="font-heading text-primary-navy mb-1">{award.title}</h4>
                                <p className="text-sm font-subheading text-slate-500">{award.organization} • {award.dateReceived}</p>
                              </div>
                              {award.credentialUrl && (
                                <a 
                                  href={award.credentialUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-primary-navy hover:underline text-sm font-subheading"
                                >
                                  Verify
                                </a>
                              )}
                            </div>
                            {award.description && (
                              <p className="text-slate-600 font-subheading text-sm">{award.description}</p>
                            )}
                            {award.credentialId && (
                              <p className="text-xs font-subheading text-slate-400 mt-2">ID: {award.credentialId}</p>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Legacy Portfolio (if available) */}
                {selectedFreelancer.portfolio && selectedFreelancer.portfolio.length > 0 && (
                  <div>
                    <h3 className="text-lg font-heading text-primary-navy mb-3">Additional Portfolio</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedFreelancer.portfolio.map((project: any, index: number) => (
                      <Card key={index} className="border-slate-200">
                        <CardContent className="p-4">
                          <h4 className="font-heading text-primary-navy mb-2">{project.name}</h4>
                          <p className="text-sm font-subheading text-slate-600">{project.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                )}

                {/* Testimonials */}
                <div>
                  <h3 className="text-lg font-heading text-primary-navy mb-3">Client Testimonials</h3>
                  <div className="space-y-4">
                    {selectedFreelancer.testimonials.map((testimonial: any, index: number) => (
                      <Card key={index} className="border-slate-200">
                        <CardContent className="p-4">
                          <p className="font-subheading text-slate-600 mb-2">"{testimonial.text}"</p>
                          <p className="text-sm font-subheading text-primary-navy">— {testimonial.client}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button 
                    className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading"
                    onClick={() => setShowMessageModal(true)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact & Message
                  </Button>
                  <Button variant="outline" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading">
                    <BookmarkIcon className="h-4 w-4 mr-2" />
                    Save Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Message Modal */}
      {showMessageModal && selectedFreelancer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowMessageModal(false)}
                    className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <div>
                    <h1 className="text-xl font-heading text-primary-navy">Contact {selectedFreelancer.name}</h1>
                    <p className="text-sm font-subheading text-slate-600">Send a message to start the conversation</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowMessageModal(false)}
                  className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Message Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-heading text-primary-navy mb-2">Subject</label>
                  <Input
                    placeholder="Project inquiry - [Brief description]"
                    value={messageData.subject}
                    onChange={(e) => setMessageData({ ...messageData, subject: e.target.value })}
                    className="rounded-xl font-subheading"
                  />
            </div>

                <div>
                  <label className="block text-sm font-heading text-primary-navy mb-2">Message</label>
                  <textarea
                    placeholder={`Hi ${selectedFreelancer.name}, I'm interested in working with you on a project. Here's what I need help with...`}
                    value={messageData.message}
                    onChange={(e) => setMessageData({ ...messageData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-navy focus:border-transparent font-subheading"
                  />
                    </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-heading text-primary-navy mb-2">Project Budget (Optional)</label>
                    <Input
                      placeholder="$5,000 - $10,000"
                      value={messageData.projectBudget}
                      onChange={(e) => setMessageData({ ...messageData, projectBudget: e.target.value })}
                      className="rounded-xl font-subheading"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading text-primary-navy mb-2">Timeline (Optional)</label>
                    <Input
                      placeholder="2-4 weeks"
                      value={messageData.timeline}
                      onChange={(e) => setMessageData({ ...messageData, timeline: e.target.value })}
                      className="rounded-xl font-subheading"
                    />
                  </div>
                </div>

                {/* Quick Templates */}
                <div>
                  <h4 className="text-sm font-heading text-primary-navy mb-3">Quick Templates</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs font-subheading"
                      onClick={() => setMessageData({
                        ...messageData,
                        subject: "Web Development Project Inquiry",
                        message: `Hi ${selectedFreelancer.name}, I came across your profile and I'm impressed by your expertise in ${selectedFreelancer.skills.slice(0, 3).join(', ')}. I have a web development project that I'd like to discuss with you. Would you be available for a quick call to go over the details?`
                      })}
                    >
                      Web Development
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs font-subheading"
                      onClick={() => setMessageData({
                        ...messageData,
                        subject: "Design Project Collaboration",
                        message: `Hello ${selectedFreelancer.name}, I'm looking for a talented designer to help with my project. Your portfolio looks amazing and I think you'd be a great fit. I'd love to discuss the project details with you.`
                      })}
                    >
                      Design Work
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs font-subheading"
                      onClick={() => setMessageData({
                        ...messageData,
                        subject: "Long-term Partnership Opportunity",
                        message: `Hi ${selectedFreelancer.name}, I'm looking for a reliable freelancer for ongoing projects. Based on your experience and excellent reviews, I think we could have a great working relationship. Let's connect!`
                      })}
                    >
                      Long-term
                    </Button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button 
                    className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading"
                    onClick={handleSendMessage}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
                    onClick={() => setShowMessageModal(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
          </div>
      )}
    </div>
  )
}
