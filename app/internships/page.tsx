"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookmarkIcon, Filter, Search, Clock, CheckCircle, XCircle, Calendar, Briefcase, MapPin, DollarSign, Building, FileText, ChevronRight, Star, Users, Award, TrendingUp, Zap, Globe, ArrowLeft, X, Send, Upload, GraduationCap } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const appliedInternships = [
  {
    id: "1",
    title: "Software Engineering Intern",
    company: "TechVision",
    logo: "/abstract-tech-logo.png",
    location: "San Francisco, CA",
    stipend: "$2,500/month",
    type: "Summer Internship",
    remote: "Hybrid",
    appliedDate: "3 days ago",
    status: "under_review",
    statusText: "Under Review",
    description: "Join our engineering team to work on real-world projects and gain hands-on experience.",
    skills: ["JavaScript", "React", "Python", "Student"],
    duration: "12 weeks"
  },
  {
    id: "2",
    title: "Marketing Intern",
    company: "GrowthBoost",
    logo: "/marketing-agency-logo.png",
    location: "New York, NY",
    stipend: "$1,800/month",
    type: "Summer Internship",
    remote: "On-site",
    appliedDate: "1 week ago",
    status: "interview_scheduled",
    statusText: "Interview Scheduled",
    description: "Help create marketing campaigns and learn digital marketing strategies.",
    skills: ["Marketing", "Social Media", "Analytics", "Student"],
    duration: "10 weeks"
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "applied":
      return <Clock className="h-4 w-4 text-primary-navy" />
    case "under_review":
      return <Clock className="h-4 w-4 text-orange-500" />
    case "interview_scheduled":
      return <Calendar className="h-4 w-4 text-green-500" />
    case "rejected":
      return <XCircle className="h-4 w-4 text-red-500" />
    case "accepted":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    default:
      return <Clock className="h-4 w-4 text-slate-400" />
  }
}

const getStatusBadge = (status: string, statusText: string) => {
  const variants = {
    applied: "bg-primary-navy/10 text-primary-navy border-primary-navy/20",
    under_review: "bg-orange-50 text-orange-600 border-orange-200",
    interview_scheduled: "bg-green-50 text-green-600 border-green-200",
    rejected: "bg-red-50 text-red-600 border-red-200",
    accepted: "bg-green-50 text-green-600 border-green-200",
  }

  return <Badge className={`${variants[status as keyof typeof variants]} font-subheading`}>{statusText}</Badge>
}

export default function InternshipsPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [stipendRange, setStipendRange] = useState([1000, 5000])
  const [selectedInternship, setSelectedInternship] = useState<any>(null)
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  const [applicationData, setApplicationData] = useState({
    coverLetter: "",
    expectedStipend: "",
    availableStartDate: "",
    resume: null,
    transcript: null
  })
  
  const statusCounts = {
    total: appliedInternships.length,
    pending: appliedInternships.filter(internship => internship.status === "applied" || internship.status === "under_review").length,
    interviews: appliedInternships.filter(internship => internship.status === "interview_scheduled").length,
    accepted: appliedInternships.filter(internship => internship.status === "accepted").length,
  }

  const internships = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "TechVision",
      logo: "/abstract-tech-logo.png",
      location: "San Francisco, CA",
      stipend: "$2,500/month",
      type: "Summer Internship",
      remote: "Hybrid",
      posted: "3 days ago",
      duration: "12 weeks",
      description: "Join our engineering team to work on real-world projects and gain hands-on experience with modern web technologies.",
      fullDescription: "This summer internship program at TechVision offers students the opportunity to work alongside experienced engineers on meaningful projects. You'll contribute to our web applications, learn about software development best practices, and gain exposure to the entire software development lifecycle.",
      skills: ["JavaScript", "React", "Python", "Student"],
      requirements: [
        "Currently pursuing Computer Science or related degree",
        "Basic knowledge of JavaScript and web development",
        "Familiarity with React or similar frameworks",
        "Strong problem-solving skills",
        "Excellent communication and teamwork abilities",
        "Available for 12-week summer program"
      ],
      responsibilities: [
        "Develop features for web applications under mentor guidance",
        "Participate in code reviews and team meetings",
        "Learn and apply software development best practices",
        "Collaborate with cross-functional teams",
        "Complete assigned projects and present results",
        "Attend technical workshops and training sessions"
      ],
      companyInfo: {
        name: "TechVision",
        size: "100-500 employees",
        industry: "Technology",
        founded: "2018",
        description: "TechVision is a fast-growing technology company that develops innovative software solutions for businesses worldwide.",
        benefits: ["Mentorship Program", "Learning Budget", "Free Lunch", "Networking Events", "Conversion Opportunity"],
        culture: "Innovation-driven, collaborative, and learning-focused environment for interns"
      },
      applicationDeadline: "2024-03-15",
      programStart: "June 2024",
      mentor: "Sarah Chen, Senior Engineer"
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Flexbone",
      logo: "/flexbone-logo.png",
      location: "Atlanta, GA",
      stipend: "$2,200/month",
      type: "Summer Internship",
      remote: "On-site",
      posted: "1 week ago",
      duration: "10 weeks",
      description: "Work with our data science team to analyze healthcare data and develop machine learning models.",
      fullDescription: "Join Flexbone's data science team for an exciting summer internship where you'll work on healthcare analytics projects. You'll learn about machine learning applications in healthcare, data preprocessing techniques, and how to derive actionable insights from complex datasets.",
      skills: ["Python", "Data Analysis", "Machine Learning", "Student"],
      requirements: [
        "Currently pursuing degree in Data Science, Statistics, or related field",
        "Proficiency in Python and data analysis libraries",
        "Basic understanding of machine learning concepts",
        "Experience with SQL and database queries",
        "Strong analytical and mathematical skills",
        "Interest in healthcare applications"
      ],
      responsibilities: [
        "Analyze healthcare datasets to identify trends and patterns",
        "Develop and test machine learning models",
        "Create data visualizations and reports",
        "Collaborate with data scientists on research projects",
        "Participate in team meetings and present findings",
        "Learn about healthcare data standards and regulations"
      ],
      companyInfo: {
        name: "Flexbone",
        size: "50-100 employees",
        industry: "Healthcare Technology",
        founded: "2020",
        description: "Flexbone develops AI-powered solutions for healthcare providers to improve patient care and operational efficiency.",
        benefits: ["Mentorship Program", "Professional Development", "Health Insurance", "Research Projects"],
        culture: "Mission-driven team focused on improving healthcare through technology and data"
      },
      applicationDeadline: "2024-03-20",
      programStart: "June 2024",
      mentor: "Dr. Michael Torres, Lead Data Scientist"
    },
    {
      id: 3,
      title: "Marketing Intern",
      company: "GrowthBoost",
      logo: "/marketing-agency-logo.png",
      location: "New York, NY",
      stipend: "$1,800/month",
      type: "Summer Internship",
      remote: "Hybrid",
      posted: "5 days ago",
      duration: "12 weeks",
      description: "Learn digital marketing strategies while helping create campaigns for our B2B clients.",
      fullDescription: "This marketing internship at GrowthBoost provides hands-on experience in digital marketing for B2B clients. You'll work on real campaigns, learn about various marketing channels, and gain insights into the marketing agency world.",
      skills: ["Marketing", "Social Media", "Analytics", "Student"],
      requirements: [
        "Currently pursuing degree in Marketing, Business, or related field",
        "Basic understanding of digital marketing concepts",
        "Familiarity with social media platforms",
        "Strong writing and communication skills",
        "Creative thinking and attention to detail",
        "Available for 12-week summer program"
      ],
      responsibilities: [
        "Assist in developing marketing campaigns for clients",
        "Create content for social media and marketing materials",
        "Conduct market research and competitive analysis",
        "Support SEO and content marketing initiatives",
        "Track and analyze campaign performance",
        "Participate in client meetings and presentations"
      ],
      companyInfo: {
        name: "GrowthBoost",
        size: "30-75 employees",
        industry: "Digital Marketing",
        founded: "2017",
        description: "GrowthBoost is a digital marketing agency specializing in B2B growth strategies and lead generation.",
        benefits: ["Mentorship Program", "Flexible Work", "Professional Development", "Portfolio Building"],
        culture: "Creative, data-driven team focused on delivering exceptional results for clients"
      },
      applicationDeadline: "2024-03-18",
      programStart: "June 2024",
      mentor: "Alex Rodriguez, Marketing Director"
    },
    {
      id: 4,
      title: "UX Design Intern",
      company: "DesignCorp",
      logo: "/design-agency-logo.png",
      location: "Austin, TX",
      stipend: "$2,000/month",
      type: "Summer Internship",
      remote: "Remote",
      posted: "2 weeks ago",
      duration: "10 weeks",
      description: "Work with our design team to create user-centered design solutions for mobile and web applications.",
      fullDescription: "Join DesignCorp's UX team for a comprehensive internship program where you'll learn the entire design process from user research to final implementation. Work on real client projects and build a strong portfolio.",
      skills: ["Figma", "UX Design", "User Research", "Student"],
      requirements: [
        "Currently pursuing degree in Design, HCI, or related field",
        "Basic knowledge of design tools (Figma, Sketch, Adobe Creative Suite)",
        "Understanding of UX design principles",
        "Strong visual design skills",
        "Excellent communication and presentation abilities",
        "Portfolio showcasing design work"
      ],
      responsibilities: [
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and design mockups",
        "Collaborate with developers on design implementation",
        "Participate in design reviews and client presentations",
        "Learn about design systems and accessibility",
        "Build and refine design portfolio"
      ],
      companyInfo: {
        name: "DesignCorp",
        size: "20-50 employees",
        industry: "Design Agency",
        founded: "2015",
        description: "DesignCorp creates innovative digital experiences for startups and established companies.",
        benefits: ["Mentorship Program", "Design Tools License", "Portfolio Development", "Networking Events"],
        culture: "Creative and collaborative environment focused on design excellence and innovation"
      },
      applicationDeadline: "2024-03-25",
      programStart: "June 2024",
      mentor: "Jennifer Kim, Senior UX Designer"
    }
  ]

  const handleInternshipClick = (internship: any) => {
    setSelectedInternship(internship)
  }

  const handleApplyClick = () => {
    setShowApplicationModal(true)
  }

  const handleSubmitApplication = () => {
    console.log("Application submitted:", { internship: selectedInternship?.title, ...applicationData })
    setShowApplicationModal(false)
    setApplicationData({ 
      coverLetter: "", 
      expectedStipend: "", 
      availableStartDate: "", 
      resume: null, 
      transcript: null 
    })
  }
  
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-primary-navy mb-2">Internship Opportunities</h1>
        <p className="text-slate-600 font-subheading text-lg sm:text-xl">Launch your career with hands-on experience at leading companies</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Enhanced Sidebar for Internships */}
        <div className="w-full lg:w-64 lg:flex-shrink-0">
          {/* Mobile Horizontal Buttons - Only on Mobile */}
          <div className="lg:hidden mb-6">
            <div className="flex gap-2">
              {/* Applied Internships Button - Mobile */}
              <Link href="/internships/applied" className="flex-1">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-subheading text-xs h-8"
                >
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Applied ({statusCounts.total})
                </Button>
              </Link>
              
              {/* Filters Button - Mobile */}
              <Button 
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                size="sm"
                className="flex-1 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-subheading text-xs h-8"
              >
                <Filter className="h-3 w-3 mr-1" />
                Filters
              </Button>
            </div>
          </div>

          {/* My Applications - Desktop Only */}
          <div className="mb-6 hidden lg:block">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg lg:text-xl font-heading text-primary-navy flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  My Applications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/internships/applied">
                  <Button 
                    variant="outline" 
                    className="w-full justify-between border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading text-sm"
                  >
                    <span className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Applied Internships
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-500 font-subheading">
                  <div className="text-center">
                    <p className="font-semibold text-primary-navy">{statusCounts.total}</p>
                    <p className="text-xs">Total Applied</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-blue-600">{statusCounts.interviews}</p>
                    <p className="text-xs">Interviews</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile Filter Toggle - Hidden (now replaced by horizontal button) */}
          <div className="hidden">
            <Button 
              onClick={() => setShowFilters(!showFilters)}
              className="w-full bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading flex items-center justify-center"
            >
              <Filter className="h-4 w-4 mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>
          
          {/* Advanced Filters */}
          <div className={`${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg lg:text-xl font-heading text-primary-navy flex items-center justify-between">
                  <span className="flex items-center">
                    <Filter className="h-5 w-5 mr-2" />
                    Advanced Filters
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="text-[#0056B3] hover:text-primary-navy hover:bg-primary-navy/5 rounded-lg lg:hidden"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Internship Type */}
                <div>
                  <h4 className="font-subheading font-medium text-primary-navy mb-3">Program Type</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="summer" />
                      <label htmlFor="summer" className="text-sm font-subheading text-slate-600">Summer Internship</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="fall" />
                      <label htmlFor="fall" className="text-sm font-subheading text-slate-600">Fall Internship</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="spring" />
                      <label htmlFor="spring" className="text-sm font-subheading text-slate-600">Spring Internship</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="year-round" />
                      <label htmlFor="year-round" className="text-sm font-subheading text-slate-600">Year-round</label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Education Level */}
                <div>
                  <h4 className="font-subheading font-medium text-primary-navy mb-3">Education Level</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="high-school" />
                      <label htmlFor="high-school" className="text-sm font-subheading text-slate-600">High School</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="undergraduate" />
                      <label htmlFor="undergraduate" className="text-sm font-subheading text-slate-600">Undergraduate</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="graduate" />
                      <label htmlFor="graduate" className="text-sm font-subheading text-slate-600">Graduate</label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Stipend Range */}
                <div>
                  <h4 className="font-subheading font-medium text-primary-navy mb-3">Monthly Stipend</h4>
                  <div className="px-2">
                    <Slider
                      value={stipendRange}
                      onValueChange={setStipendRange}
                      max={5000}
                      min={500}
                      step={100}
                      className="mb-3"
                    />
                    <div className="flex justify-between text-sm font-subheading text-slate-500">
                      <span>${stipendRange[0]}</span>
                      <span>${stipendRange[1]}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Duration */}
                <div>
                  <h4 className="font-subheading font-medium text-primary-navy mb-3">Duration</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="8-weeks" />
                      <label htmlFor="8-weeks" className="text-sm font-subheading text-slate-600">8 weeks</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="10-weeks" />
                      <label htmlFor="10-weeks" className="text-sm font-subheading text-slate-600">10 weeks</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="12-weeks" />
                      <label htmlFor="12-weeks" className="text-sm font-subheading text-slate-600">12 weeks</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="6-months" />
                      <label htmlFor="6-months" className="text-sm font-subheading text-slate-600">6 months</label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Remote Options */}
                <div>
                  <h4 className="font-subheading font-medium text-primary-navy mb-3">Work Location</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="on-site" />
                      <label htmlFor="on-site" className="text-sm font-subheading text-slate-600">On-site</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remote" />
                      <label htmlFor="remote" className="text-sm font-subheading text-slate-600">Remote</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hybrid" />
                      <label htmlFor="hybrid" className="text-sm font-subheading text-slate-600">Hybrid</label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6 lg:space-y-8">
          {/* Search and Filters */}
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="space-y-3 sm:space-y-4">
                {/* Main Search Input */}
                <div className="relative w-full">
                  <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
                  <Input 
                    placeholder="Search internships, companies..." 
                    className="pl-10 sm:pl-12 h-12 sm:h-12 lg:h-12 border-slate-200 focus:border-slate-300 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-subheading rounded-xl w-full text-base sm:text-base lg:text-base"
                  />
                </div>
                
                {/* Mobile Quick Filters */}
                <div className="flex gap-2 lg:hidden overflow-x-auto pb-1">
                  <Button variant="outline" size="sm" className="rounded-full text-xs whitespace-nowrap flex-shrink-0">
                    Remote
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full text-xs whitespace-nowrap flex-shrink-0">
                    Summer
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full text-xs whitespace-nowrap flex-shrink-0">
                    $2K+
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full text-xs whitespace-nowrap flex-shrink-0">
                    Tech
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full text-xs whitespace-nowrap flex-shrink-0">
                    Undergraduate
                  </Button>
                </div>
                
                {/* Results Summary - Mobile Only */}
                <div className="lg:hidden">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-600 font-subheading">
                      Showing {internships.length} internships
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-slate-600 font-subheading">Sort by:</span>
                      <Select defaultValue="newest">
                        <SelectTrigger className="w-auto h-8 text-sm border-none bg-transparent p-0 font-subheading text-primary-navy">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="newest">Newest First</SelectItem>
                          <SelectItem value="stipend-high">Stipend (High to Low)</SelectItem>
                          <SelectItem value="stipend-low">Stipend (Low to High)</SelectItem>
                          <SelectItem value="company">Company (A-Z)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                {/* Desktop Sort Options */}
                <div className="hidden lg:flex items-center justify-between">
                  <p className="text-sm text-slate-600 font-subheading">
                    Showing {internships.length} internship opportunities
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-slate-600 font-subheading">Sort by:</span>
                    <Select defaultValue="newest">
                      <SelectTrigger className="w-40 h-9 text-sm font-subheading">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="stipend-high">Stipend (High to Low)</SelectItem>
                        <SelectItem value="stipend-low">Stipend (Low to High)</SelectItem>
                        <SelectItem value="company">Company (A-Z)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Internship Cards */}
          <div className="space-y-4">
            {internships.map((internship) => {
              const getRemoteColor = (remote: string) => {
                switch (remote) {
                  case "Remote":
                    return "bg-green-100 text-green-700"
                  case "Hybrid":
                    return "bg-blue-100 text-blue-700"
                  case "On-site":
                    return "bg-red-100 text-red-700"
                  default:
                    return "bg-slate-100 text-slate-700"
                }
              }

              return (
                <Card 
                  key={internship.id}
                  className="border-slate-200 hover:shadow-lg hover:border-primary-navy/30 transition-all duration-200 group cursor-pointer"
                  onClick={() => handleInternshipClick(internship)}
                >
                  <CardContent className="p-4 lg:p-6">
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                      <div className="flex-1 min-w-0 w-full">
                        <div className="flex items-start space-x-3 lg:space-x-4 mb-4">
                          <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg overflow-hidden border border-slate-200 flex-shrink-0">
                            <div className="w-full h-full bg-primary-navy flex items-center justify-center">
                              <span className="text-white font-heading text-lg lg:text-xl">{internship.company.charAt(0)}</span>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg lg:text-xl font-heading text-primary-navy group-hover:text-primary-navy transition-colors line-clamp-2">{internship.title}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-slate-600 mt-1 text-sm lg:text-base space-y-1 sm:space-y-0">
                              <div className="flex items-center space-x-1">
                                <Building className="h-4 w-4 flex-shrink-0" />
                                <span className="font-subheading truncate">{internship.company}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4 flex-shrink-0" />
                                <span className="font-subheading truncate">{internship.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {internship.skills.slice(0, 3).map((skill, index) => (
                            <span 
                              key={index}
                              className={`px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-subheading ${
                                skill.includes('Student') 
                                  ? 'bg-primary-navy/10 text-primary-navy' 
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                          {internship.skills.length > 3 && (
                            <span className="px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-subheading bg-slate-100 text-slate-700">
                              +{internship.skills.length - 3} more
                            </span>
                          )}
                        </div>
                        
                        <p className="text-slate-600 font-subheading leading-relaxed mb-4 text-sm lg:text-base line-clamp-2 lg:line-clamp-3">
                          {internship.description}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm lg:text-base space-y-2 sm:space-y-0">
                          <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-slate-500">
                            <div className="flex items-center space-x-1">
                              <DollarSign className="h-4 w-4" />
                              <span className="font-subheading">{internship.stipend}</span>
                            </div>
                            <span className="font-subheading">{internship.duration}</span>
                            <span className={`px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-subheading ${getRemoteColor(internship.remote)}`}>
                              {internship.remote}
                            </span>
                          </div>
                          <span className="text-xs lg:text-sm text-slate-400 font-subheading">Posted {internship.posted}</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-400 hover:text-primary-navy hover:bg-primary-navy/5 rounded-full flex-shrink-0 self-start sm:self-center"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                        }}
                      >
                        <BookmarkIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-xl font-subheading px-8"
            >
              Load More Internships
            </Button>
            <p className="text-slate-500 font-subheading text-sm mt-3">
              Showing {internships.length} of 124 internships
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Internship Details Modal */}
    {selectedInternship && !showApplicationModal && (
      <div 
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 lg:p-4"
        onClick={() => setSelectedInternship(null)}
      >
        <div 
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] lg:max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Fixed Header */}
          <div className="flex-shrink-0 sticky top-0 bg-white z-10 p-4 lg:p-6 border-b border-slate-200 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 lg:space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedInternship(null)}
                  className="rounded-xl"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <h1 className="text-lg lg:text-2xl font-heading text-primary-navy">Internship Details</h1>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedInternship(null)}
                className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 lg:p-6 pt-0">
            {/* Internship Content */}
            <div className="space-y-4 lg:space-y-6">
              {/* Basic Info */}
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0">
                  <div className="w-full h-full bg-primary-navy flex items-center justify-center">
                    <span className="text-white font-heading text-xl lg:text-2xl">{selectedInternship.company.charAt(0)}</span>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-2 sm:space-y-0">
                    <h2 className="text-xl lg:text-2xl font-heading text-primary-navy">{selectedInternship.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-subheading self-start ${
                      selectedInternship.remote === "Remote" ? "bg-green-100 text-green-700" :
                      selectedInternship.remote === "Hybrid" ? "bg-blue-100 text-blue-700" :
                      selectedInternship.remote === "On-site" ? "bg-red-100 text-red-700" :
                      "bg-slate-100 text-slate-700"
                    }`}>
                      {selectedInternship.remote}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-slate-600 font-subheading mb-3 space-y-2 sm:space-y-0 text-sm lg:text-base">
                    <div className="flex items-center space-x-1">
                      <Building className="h-4 w-4" />
                      <span>{selectedInternship.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedInternship.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span className="font-heading text-primary-navy">{selectedInternship.stipend}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-slate-500 font-subheading text-sm">
                    <span>{selectedInternship.duration}</span>
                    <span>•</span>
                    <span>Posted {selectedInternship.posted}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="sm:inline block">Apply by {selectedInternship.applicationDeadline}</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">About This Internship</h3>
                <p className="text-slate-600 font-subheading leading-relaxed text-sm lg:text-base">
                  {selectedInternship.fullDescription}
                </p>
              </div>

              {/* Skills Required */}
              <div>
                <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">Skills Required</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedInternship.skills.map((skill: string, index: number) => (
                    <Badge key={index} className={`font-subheading text-xs lg:text-sm ${
                      skill.includes('Student') 
                        ? 'bg-[#0056B3]/10 text-[#0056B3]' 
                        : 'bg-slate-100 text-slate-700'
                    }`}>{skill}</Badge>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedInternship.requirements.map((requirement: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 font-subheading text-sm lg:text-base">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">What You'll Do</h3>
                <ul className="space-y-2">
                  {selectedInternship.responsibilities.map((responsibility: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary-navy mt-1 flex-shrink-0" />
                      <span className="text-slate-600 font-subheading text-sm lg:text-base">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Information */}
              <div>
                <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">About the Company</h3>
                <Card className="border-slate-200">
                  <CardContent className="p-3 lg:p-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-heading text-primary-navy text-sm lg:text-base">{selectedInternship.companyInfo.name}</h4>
                        <div className="flex flex-wrap items-center gap-2 lg:gap-4 mt-1 text-xs lg:text-sm text-slate-500">
                          <span>{selectedInternship.companyInfo.size}</span>
                          <span>•</span>
                          <span>{selectedInternship.companyInfo.industry}</span>
                          <span>•</span>
                          <span>Founded {selectedInternship.companyInfo.founded}</span>
                        </div>
                      </div>
                      <p className="text-slate-600 font-subheading text-sm lg:text-base">{selectedInternship.companyInfo.description}</p>
                      <div>
                        <h5 className="font-subheading font-medium text-primary-navy mb-2 text-sm lg:text-base">Benefits</h5>
                        <div className="flex flex-wrap gap-2">
                          {selectedInternship.companyInfo.benefits.map((benefit: string, index: number) => (
                            <Badge key={index} className="bg-green-50 text-green-700 font-subheading text-xs">{benefit}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-subheading font-medium text-primary-navy mb-2 text-sm lg:text-base">Program Culture</h5>
                        <p className="text-slate-600 font-subheading text-sm lg:text-base">{selectedInternship.companyInfo.culture}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Mentor */}
              <div>
                <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">Program Mentor</h3>
                <p className="text-slate-600 font-subheading text-sm lg:text-base">{selectedInternship.mentor}</p>
              </div>
            </div>
          </div>

          {/* Fixed Action Buttons */}
          <div className="flex-shrink-0 sticky bottom-0 bg-white p-4 lg:p-6 pt-4 border-t border-slate-200 rounded-b-2xl">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Button 
                className="flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading h-12"
                onClick={handleApplyClick}
              >
                Apply for this Internship
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 sm:flex-none sm:min-w-[140px] border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-12"
                onClick={(e) => {
                  e.stopPropagation()
                  // Handle save internship functionality here
                  console.log("Internship saved:", selectedInternship?.title)
                }}
              >
                <BookmarkIcon className="h-4 w-4 mr-2" />
                Save Internship
              </Button>
            </div>
            
            {/* Quick Close Instructions */}
            <div className="text-center mt-4 pt-2 border-t border-slate-100">
              <p className="text-xs text-slate-500 font-subheading">
                Click outside this window or press the X button to close
              </p>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Application Modal */}
    {showApplicationModal && (
      <Dialog open={showApplicationModal} onOpenChange={setShowApplicationModal}>
        <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-lg lg:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col [&>button]:hidden">
          <DialogHeader className="flex-shrink-0 bg-white z-10 pb-4 border-b border-slate-200 relative">
            <div className="flex items-center justify-between pr-2">
              <DialogTitle className="font-heading text-primary-navy text-base lg:text-lg">
                Apply for: {selectedInternship?.title}
              </DialogTitle>
              <button
                onClick={() => setShowApplicationModal(false)}
                className="flex-shrink-0 p-1.5 rounded-full hover:bg-slate-100 transition-colors z-20"
              >
                <X className="h-4 w-4 text-slate-600 hover:text-slate-900" />
              </button>
            </div>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto space-y-4 mt-4 px-1 pb-4">
            <div>
              <Label htmlFor="cover-letter" className="font-subheading text-primary-navy text-sm lg:text-base">Cover Letter</Label>
              <Textarea
                id="cover-letter"
                placeholder="Tell us why you're interested in this internship and what makes you a great candidate..."
                value={applicationData.coverLetter}
                onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                className="mt-2 font-body text-sm lg:text-base min-h-[120px] resize-none"
                rows={6}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expected-stipend" className="font-subheading text-primary-navy text-sm lg:text-base">Expected Stipend (optional)</Label>
                <Input
                  id="expected-stipend"
                  placeholder="e.g., $2000/month"
                  value={applicationData.expectedStipend}
                  onChange={(e) => setApplicationData({...applicationData, expectedStipend: e.target.value})}
                  className="mt-2 font-body text-sm lg:text-base h-10 lg:h-11"
                />
              </div>
              <div>
                <Label htmlFor="start-date" className="font-subheading text-primary-navy text-sm lg:text-base">Available Start Date</Label>
                <Input
                  id="start-date"
                  type="date"
                  value={applicationData.availableStartDate}
                  onChange={(e) => setApplicationData({...applicationData, availableStartDate: e.target.value})}
                  className="mt-2 font-body text-sm lg:text-base h-10 lg:h-11"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="font-subheading text-primary-navy text-sm lg:text-base">Resume</Label>
                <div className="mt-2 border-2 border-dashed border-slate-200 rounded-lg p-3 lg:p-4 text-center">
                  <Upload className="h-6 w-6 lg:h-8 lg:w-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-xs lg:text-sm font-body text-slate-600 mb-2">Upload your resume</p>
                  <Button variant="outline" size="sm" className="font-subheading text-xs lg:text-sm h-8 lg:h-9">Browse Files</Button>
                </div>
              </div>
              <div>
                <Label className="font-subheading text-primary-navy text-sm lg:text-base">Transcript (optional)</Label>
                <div className="mt-2 border-2 border-dashed border-slate-200 rounded-lg p-3 lg:p-4 text-center">
                  <Upload className="h-6 w-6 lg:h-8 lg:w-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-xs lg:text-sm font-body text-slate-600 mb-2">Upload your transcript</p>
                  <Button variant="outline" size="sm" className="font-subheading text-xs lg:text-sm h-8 lg:h-9">Browse Files</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 sticky bottom-0 bg-white pt-4 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowApplicationModal(false)}
                className="font-subheading text-sm lg:text-base h-10 lg:h-11 w-full sm:w-auto"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmitApplication}
                className="bg-primary-navy hover:bg-primary-navy/90 text-white font-subheading text-sm lg:text-base h-10 lg:h-11 w-full sm:w-auto"
              >
                <Send className="h-4 w-4 mr-2" />
                Submit Application
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )}
    </>
  )
} 