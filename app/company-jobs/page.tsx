"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { useRouter } from "next/navigation"
import { 
  Users, 
  Eye, 
  ArrowUpRight,
  ArrowDownRight,
  MapPin,
  Briefcase,
  Plus,
  Search,
  Filter,
  Edit,
  MoreHorizontal,
  XCircle,
  Target,
  ChevronRight,
  FileText,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Clock,
  Building2,
  Settings
} from "lucide-react"

export default function CompanyJobs() {
  const router = useRouter()
  const [showNewJobForm, setShowNewJobForm] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [salaryRange, setSalaryRange] = useState([50000, 200000])
  const [showActiveJobsPopup, setShowActiveJobsPopup] = useState(false)
  const [showDraftJobsPopup, setShowDraftJobsPopup] = useState(false)
  const [showClosedJobsPopup, setShowClosedJobsPopup] = useState(false)
  const [showCompanyProfilePopup, setShowCompanyProfilePopup] = useState(false)
  const [showJobPreferencesPopup, setShowJobPreferencesPopup] = useState(false)
  const [showSettingsPopup, setShowSettingsPopup] = useState(false)
  const [showJobDetailsPopup, setShowJobDetailsPopup] = useState(false)
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    location: "",
    type: "",
    salary: "",
    experience: "",
    department: "",
    skillsRequired: "",
    requirements: "",
    responsibilities: ""
  })

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (showNewJobForm) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showNewJobForm])

  const handleJobClick = (jobId: number) => {
    const job = jobs.find(j => j.id === jobId)
    if (job) {
      setSelectedJob(job)
      setShowJobDetailsPopup(true)
    }
  }

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating job:", jobData)
    setShowNewJobForm(false)
    setJobData({
      title: "",
      description: "",
      location: "",
      type: "",
      salary: "",
      experience: "",
      department: "",
      skillsRequired: "",
      requirements: "",
      responsibilities: ""
    })
  }

  const jobMetrics = [
    {
      title: "Total Job Posts",
      value: "12",
      change: "+3",
      isPositive: true,
      icon: Briefcase,
      period: "vs last month"
    },
    {
      title: "Total Applications", 
      value: "342",
      change: "+18.2%",
      isPositive: true,
      icon: Users,
      period: "vs last month"
    },
    {
      title: "Average Views per Job",
      value: "1,247", 
      change: "+12.5%",
      isPositive: true,
      icon: Eye,
      period: "vs last month"
    },
    {
      title: "Application Rate",
      value: "4.8%",
      change: "+0.3%",
      isPositive: true,
      icon: Target,
      period: "vs last month"
    }
  ]

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120K - $150K",
      experience: "Senior Level (5+ years)",
      status: "Active",
      applicants: 45,
      views: 892,
      posted: "5 days ago",
      description: "We are looking for a skilled Frontend Developer to join our engineering team. You will be responsible for developing user-facing features, ensuring cross-browser compatibility, and collaborating with designers and backend developers.",
      skillsRequired: "React, TypeScript, Next.js, Tailwind CSS, GraphQL, Jest, Cypress",
      requirements: "• 5+ years of experience with React and TypeScript\n• Strong understanding of modern frontend technologies\n• Experience with state management libraries (Redux, Zustand)\n• Knowledge of testing frameworks (Jest, Cypress)\n• Excellent communication skills",
      responsibilities: "• Develop and maintain user-facing features\n• Optimize applications for maximum speed and scalability\n• Collaborate with cross-functional teams\n• Participate in code reviews and technical discussions\n• Mentor junior developers",
      applications: [
        { name: "Sarah Johnson", match: 95, status: "new" },
        { name: "Michael Chen", match: 88, status: "reviewing" },
        { name: "David Kim", match: 97, status: "shortlisted" }
      ]
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time", 
      salary: "$130K - $160K",
      experience: "Mid Level (2-5 years)",
      status: "Active",
      applicants: 28,
      views: 654,
      posted: "1 week ago",
      description: "Join our product team to drive product strategy and execution. You'll work closely with engineering, design, and marketing teams to deliver exceptional user experiences.",
      skillsRequired: "Product Strategy, User Research, Data Analysis, Agile Methodologies, Wireframing",
      requirements: "• 3+ years of product management experience\n• Strong analytical and problem-solving skills\n• Experience with user research and data analysis\n• Knowledge of agile development methodologies\n• Excellent communication and leadership skills",
      responsibilities: "• Define product roadmap and strategy\n• Conduct user research and market analysis\n• Collaborate with engineering and design teams\n• Monitor product performance and metrics\n• Lead product launches and go-to-market strategies",
      applications: [
        { name: "Emily Rodriguez", match: 92, status: "interviewed" },
        { name: "Lisa Wang", match: 85, status: "reviewing" }
      ]
    },
    {
      id: 3,
      title: "UX Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90K - $120K",
      experience: "Mid Level (2-5 years)",
      status: "Draft",
      applicants: 0,
      views: 0,
      posted: "Draft",
      description: "We're seeking a talented UX Designer to create intuitive and engaging user experiences. You'll be responsible for user research, wireframing, prototyping, and collaborating with our product and engineering teams.",
      skillsRequired: "Figma, Sketch, Adobe Creative Suite, User Research, Prototyping, Wireframing",
      requirements: "• 3+ years of UX design experience\n• Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)\n• Strong understanding of user-centered design principles\n• Experience with user research and usability testing\n• Portfolio demonstrating design process and outcomes",
      responsibilities: "• Conduct user research and usability testing\n• Create wireframes, prototypes, and high-fidelity designs\n• Collaborate with product and engineering teams\n• Maintain design systems and style guides\n• Present design concepts to stakeholders",
      applications: []
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-50 text-green-600 border-green-200"
      case "Draft":
        return "bg-yellow-50 text-yellow-600 border-yellow-200"
      case "Closed":
        return "bg-red-50 text-red-600 border-red-200"
      default:
        return "bg-slate-50 text-slate-600 border-slate-200"
    }
  }

  const getApplicationStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-50 text-blue-600 border-blue-200"
      case "reviewing":
        return "bg-yellow-50 text-yellow-600 border-yellow-200"
      case "shortlisted":
        return "bg-green-50 text-green-600 border-green-200"
      case "interviewed":
        return "bg-purple-50 text-purple-600 border-purple-200"
      default:
        return "bg-slate-50 text-slate-600 border-slate-200"
    }
  }

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.department.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading text-primary-navy mb-1 sm:mb-2">Job Management</h1>
            <p className="text-base sm:text-lg md:text-xl font-subheading text-slate-600">
              Manage your job postings, track applications, and analyze performance.
            </p>
          </div>
          <Button 
            onClick={() => setShowNewJobForm(true)}
            className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto"
          >
            <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Post New Job
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {jobMetrics.map((metric, index) => (
          <Card key={index} className="border-slate-200 shadow-sm">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-xl">
                  <metric.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div className={`flex items-center space-x-1 text-sm sm:text-base font-subheading ${
                  metric.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.isPositive ? (
                    <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  )}
                  <span>{metric.change}</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-heading text-primary-navy mb-1">{metric.value}</h3>
                <p className="text-sm sm:text-base font-subheading text-slate-600">{metric.title}</p>
                <p className="text-xs sm:text-sm font-subheading text-slate-400">{metric.period}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content with Responsive Layout */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Sidebar - Hidden on mobile, collapsible on tablet */}
        <div className="lg:w-64 lg:flex-shrink-0">
          {/* Mobile: Show filters as collapsible section */}
          <div className="lg:hidden mb-6">
            <Button 
              onClick={() => setShowFilters(!showFilters)}
              variant="outline" 
              className="w-full border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading text-sm"
            >
              <Filter className="h-4 w-4 mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          {/* Sidebar Content */}
          <div className={`space-y-4 sm:space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            {/* Job Management */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl font-heading text-primary-navy flex items-center">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Job Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 px-4 sm:px-6">
                <Button 
                  variant="outline" 
                  className="w-full justify-between border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading text-sm"
                  onClick={() => setShowActiveJobsPopup(true)}
                >
                  <span className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Active Jobs
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-between border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading text-sm"
                  onClick={() => setShowDraftJobsPopup(true)}
                >
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Draft Jobs
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-between border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading text-sm"
                  onClick={() => setShowClosedJobsPopup(true)}
                >
                  <span className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Closed Jobs
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <div className="text-sm text-slate-500 font-subheading text-center py-2">
                  <p>12 total job posts</p>
                  <p>342 applications</p>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Filters - Always show full filters on mobile when expanded */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl font-heading text-primary-navy flex items-center justify-between">
                  <span className="flex items-center">
                    <Filter className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Advanced Filters
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="text-[#0056B3] hover:text-primary-navy hover:bg-primary-navy/5 rounded-lg font-subheading lg:block hidden"
                  >
                    {showFilters ? 'Hide' : 'Show'}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                {/* Job Status */}
                <div>
                  <h4 className="font-heading text-primary-navy mb-2 sm:mb-3 text-sm">Job Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="active-jobs" />
                      <label htmlFor="active-jobs" className="text-sm font-subheading text-slate-600">Active</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="draft-jobs" />
                      <label htmlFor="draft-jobs" className="text-sm font-subheading text-slate-600">Draft</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="closed-jobs" />
                      <label htmlFor="closed-jobs" className="text-sm font-subheading text-slate-600">Closed</label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Department */}
                <div>
                  <h4 className="font-heading text-primary-navy mb-2 sm:mb-3 text-sm">Department</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="engineering" />
                      <label htmlFor="engineering" className="text-sm font-subheading text-slate-600">Engineering</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="product" />
                      <label htmlFor="product" className="text-sm font-subheading text-slate-600">Product</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="design" />
                      <label htmlFor="design" className="text-sm font-subheading text-slate-600">Design</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marketing" />
                      <label htmlFor="marketing" className="text-sm font-subheading text-slate-600">Marketing</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sales" />
                      <label htmlFor="sales" className="text-sm font-subheading text-slate-600">Sales</label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Job Type */}
                <div>
                  <h4 className="font-heading text-primary-navy mb-2 sm:mb-3 text-sm">Job Type</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="full-time" />
                      <label htmlFor="full-time" className="text-sm font-subheading text-slate-600">Full-time</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="part-time" />
                      <label htmlFor="part-time" className="text-sm font-subheading text-slate-600">Part-time</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="contract" />
                      <label htmlFor="contract" className="text-sm font-subheading text-slate-600">Contract</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remote" />
                      <label htmlFor="remote" className="text-sm font-subheading text-slate-600">Remote</label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Experience Level */}
                <div>
                  <h4 className="font-heading text-primary-navy mb-2 sm:mb-3 text-sm">Experience Level</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="entry-level" />
                      <label htmlFor="entry-level" className="text-sm font-subheading text-slate-600">Entry Level</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mid-level" />
                      <label htmlFor="mid-level" className="text-sm font-subheading text-slate-600">Mid Level</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="senior-level" />
                      <label htmlFor="senior-level" className="text-sm font-subheading text-slate-600">Senior Level</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="lead-principal" />
                      <label htmlFor="lead-principal" className="text-sm font-subheading text-slate-600">Lead/Principal</label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Application Count */}
                <div>
                  <h4 className="font-heading text-primary-navy mb-2 sm:mb-3 text-sm">Application Count</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="high-volume" />
                      <label htmlFor="high-volume" className="text-sm font-subheading text-slate-600">50+ applications</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="medium-volume" />
                      <label htmlFor="medium-volume" className="text-sm font-subheading text-slate-600">10-49 applications</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="low-volume" />
                      <label htmlFor="low-volume" className="text-sm font-subheading text-slate-600">1-9 applications</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="no-applications" />
                      <label htmlFor="no-applications" className="text-sm font-subheading text-slate-600">No applications</label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Settings */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl font-heading text-primary-navy flex items-center">
                  <Settings className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 px-4 sm:px-6">
                <Button 
                  variant="outline" 
                  className="w-full justify-between border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading text-sm"
                  onClick={() => setShowCompanyProfilePopup(true)}
                >
                  <span className="flex items-center">
                    <Building2 className="h-4 w-4 mr-2" />
                    Company Profile
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-between border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading text-sm"
                  onClick={() => setShowJobPreferencesPopup(true)}
                >
                  <span className="flex items-center">
                    <Settings className="h-4 w-4 mr-2" />
                    Job Preferences
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search and Filter */}
          <Card className="mb-6 sm:mb-8 border border-slate-200 rounded-lg">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex-1 relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Search jobs by title or department..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 rounded-lg font-subheading text-sm"
                  />
                </div>
                <Button variant="outline" className="font-subheading text-sm px-4 py-2 w-full sm:w-auto lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Jobs List */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="border border-slate-200 rounded-lg hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleJobClick(job.id)}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-3 sm:space-y-0">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy truncate">{job.title}</h3>
                        <Badge className={`${getStatusColor(job.status)} text-xs sm:text-sm font-subheading px-2 sm:px-3 py-1 w-fit`}>
                          {job.status}
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm sm:text-base font-subheading text-slate-600 mb-2 sm:mb-3">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-1 flex-shrink-0" />
                          <span className="truncate">{job.location}</span>
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span>{job.department}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{job.type}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="font-heading text-primary-navy">{job.salary}</span>
                      </div>
                      <p className="text-sm sm:text-base font-subheading text-slate-500">Posted {job.posted}</p>
                    </div>
                    <div className="flex items-center space-x-2 self-start">
                      <Button variant="ghost" size="sm" className="font-subheading" onClick={(e) => { e.stopPropagation(); }}>
                        <Edit className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                      <Button variant="ghost" size="sm" className="font-subheading" onClick={(e) => { e.stopPropagation(); }}>
                        <MoreHorizontal className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Job Stats */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-4">
                    <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1 sm:mb-2">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 mr-1 sm:mr-2" />
                        <span className="text-lg sm:text-2xl font-heading text-slate-900">{job.applicants}</span>
                      </div>
                      <p className="text-xs sm:text-sm font-subheading text-slate-600">Applicants</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1 sm:mb-2">
                        <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 mr-1 sm:mr-2" />
                        <span className="text-lg sm:text-2xl font-heading text-slate-900">{job.views}</span>
                      </div>
                      <p className="text-xs sm:text-sm font-subheading text-slate-600">Views</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1 sm:mb-2">
                        <Target className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 mr-1 sm:mr-2" />
                        <span className="text-lg sm:text-2xl font-heading text-slate-900">{job.views > 0 ? ((job.applicants / job.views) * 100).toFixed(1) : '0'}%</span>
                      </div>
                      <p className="text-xs sm:text-sm font-subheading text-slate-600">Conversion</p>
                    </div>
                  </div>

                  {/* Recent Applications */}
                  {job.applications.length > 0 && (
                    <div>
                      <h4 className="text-sm sm:text-base font-heading text-slate-900 mb-2 sm:mb-3">Recent Applications</h4>
                      <div className="space-y-2">
                        {job.applications.slice(0, 3).map((application, index) => (
                          <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-slate-50 rounded space-y-2 sm:space-y-0">
                            <span className="text-sm sm:text-base font-subheading text-slate-900 truncate">{application.name}</span>
                            <div className="flex items-center justify-between sm:justify-end space-x-2">
                              <span className="text-xs sm:text-sm font-heading text-slate-900">{application.match}% match</span>
                              <Badge className={`${getApplicationStatusColor(application.status)} text-xs font-subheading px-2 py-1`}>
                                {application.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Active Jobs Popup */}
      {showActiveJobsPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading text-primary-navy">Active Jobs</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowActiveJobsPopup(false)}
                  className="rounded-xl"
                >
                  <XCircle className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="grid gap-4">
                  {jobs.filter(job => job.status === "Active").map((job) => (
                    <div key={job.id} className="p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-heading text-primary-navy">{job.title}</h3>
                          <p className="text-base font-subheading text-slate-600">{job.department} • {job.location}</p>
                          <p className="text-sm font-subheading text-slate-500">Posted {job.posted}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-heading text-slate-900">{job.applicants} applicants</p>
                          <p className="text-sm font-subheading text-green-600">Active</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Draft Jobs Popup */}
      {showDraftJobsPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading text-primary-navy">Draft Jobs</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowDraftJobsPopup(false)}
                  className="rounded-xl"
                >
                  <XCircle className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="grid gap-4">
                  {jobs.filter(job => job.status === "Draft").map((job) => (
                    <div key={job.id} className="p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-heading text-primary-navy">{job.title}</h3>
                          <p className="text-base font-subheading text-slate-600">{job.department} • {job.location}</p>
                          <p className="text-sm font-subheading text-slate-500">Draft</p>
                        </div>
                        <div className="text-right">
                          <Button className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-sm px-4 py-2">
                            Publish
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
      )}

      {/* Closed Jobs Popup */}
      {showClosedJobsPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading text-primary-navy">Closed Jobs</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowClosedJobsPopup(false)}
                  className="rounded-xl"
                >
                  <XCircle className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-heading text-slate-600 mb-2">No Closed Jobs</h3>
                <p className="font-subheading text-slate-500">Jobs that are closed will appear here for reference.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Company Profile Popup */}
      {showCompanyProfilePopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading text-primary-navy">Company Profile Settings</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowCompanyProfilePopup(false)}
                  className="rounded-xl"
                >
                  <XCircle className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="font-heading text-primary-navy text-base">Company Name</Label>
                  <Input className="rounded-xl font-subheading text-base py-3 mt-2" defaultValue="TechCorp Inc." />
                </div>
                <div>
                  <Label className="font-heading text-primary-navy text-base">Company Description</Label>
                  <Textarea className="rounded-xl font-subheading text-base mt-2" rows={4} defaultValue="Leading technology company focused on innovation..." />
                </div>
                <div>
                  <Label className="font-heading text-primary-navy text-base">Industry</Label>
                  <Select defaultValue="technology">
                    <SelectTrigger className="rounded-xl font-subheading text-base py-3 mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="technology" className="font-subheading">Technology</SelectItem>
                      <SelectItem value="finance" className="font-subheading">Finance</SelectItem>
                      <SelectItem value="healthcare" className="font-subheading">Healthcare</SelectItem>
                      <SelectItem value="education" className="font-subheading">Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="font-heading text-primary-navy text-base">Company Size</Label>
                  <Select defaultValue="100-500">
                    <SelectTrigger className="rounded-xl font-subheading text-base py-3 mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="1-10" className="font-subheading">1-10 employees</SelectItem>
                      <SelectItem value="11-50" className="font-subheading">11-50 employees</SelectItem>
                      <SelectItem value="51-100" className="font-subheading">51-100 employees</SelectItem>
                      <SelectItem value="100-500" className="font-subheading">100-500 employees</SelectItem>
                      <SelectItem value="500+" className="font-subheading">500+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex gap-4 pt-6">
                <Button 
                  variant="outline"
                  className="flex-1 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading text-base py-3"
                  onClick={() => setShowCompanyProfilePopup(false)}
                >
                  Cancel
                </Button>
                <Button className="flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading text-base py-3">
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Job Preferences Popup */}
      {showJobPreferencesPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading text-primary-navy">Job Preferences</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowJobPreferencesPopup(false)}
                  className="rounded-xl"
                >
                  <XCircle className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-primary-navy text-lg mb-3">Default Job Settings</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="auto-screening" />
                      <label htmlFor="auto-screening" className="font-subheading text-slate-700">Enable automatic candidate screening</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="email-notifications" defaultChecked />
                      <label htmlFor="email-notifications" className="font-subheading text-slate-700">Email notifications for new applications</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="public-listing" defaultChecked />
                      <label htmlFor="public-listing" className="font-subheading text-slate-700">Make jobs publicly searchable</label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-heading text-primary-navy text-lg mb-3">Application Requirements</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="require-cover-letter" />
                      <label htmlFor="require-cover-letter" className="font-subheading text-slate-700">Require cover letter</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="require-portfolio" />
                      <label htmlFor="require-portfolio" className="font-subheading text-slate-700">Require portfolio/work samples</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="require-references" />
                      <label htmlFor="require-references" className="font-subheading text-slate-700">Require professional references</label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-heading text-primary-navy text-lg mb-3">Posting Duration</h3>
                  <Select defaultValue="30">
                    <SelectTrigger className="rounded-xl font-subheading text-base py-3">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="7" className="font-subheading">7 days</SelectItem>
                      <SelectItem value="14" className="font-subheading">14 days</SelectItem>
                      <SelectItem value="30" className="font-subheading">30 days</SelectItem>
                      <SelectItem value="60" className="font-subheading">60 days</SelectItem>
                      <SelectItem value="90" className="font-subheading">90 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex gap-4 pt-6">
                <Button 
                  variant="outline"
                  className="flex-1 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading text-base py-3"
                  onClick={() => setShowJobPreferencesPopup(false)}
                >
                  Cancel
                </Button>
                <Button className="flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading text-base py-3">
                  Save Preferences
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Job Modal */}
      {showNewJobForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl h-[90vh] bg-white rounded-xl flex flex-col shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex-shrink-0 p-4 sm:p-6 border-b border-slate-200 bg-white rounded-t-xl">
              <div className="flex items-center justify-between">
                <h2 className="text-lg sm:text-2xl font-heading text-primary-navy">Post New Job</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowNewJobForm(false)}
                  className="rounded-lg h-8 w-8 sm:h-10 sm:w-10 hover:bg-slate-100"
                >
                  <XCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </div>
            </div>
            
            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0">
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="job-title" className="font-heading text-primary-navy text-sm">Job Title *</Label>
                    <Input
                      id="job-title"
                      placeholder="e.g. Software Engineer, Product Designer, etc."
                      value={jobData.title}
                      onChange={(e) => setJobData({...jobData, title: e.target.value})}
                      className="rounded-lg font-subheading text-sm h-10 sm:h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department" className="font-heading text-primary-navy text-sm">Department</Label>
                    <Select value={jobData.department} onValueChange={(value) => setJobData({...jobData, department: value})}>
                      <SelectTrigger className="rounded-lg font-subheading text-sm h-10 sm:h-12">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent className="rounded-lg">
                        <SelectItem value="engineering" className="font-subheading">Engineering</SelectItem>
                        <SelectItem value="product" className="font-subheading">Product</SelectItem>
                        <SelectItem value="design" className="font-subheading">Design</SelectItem>
                        <SelectItem value="marketing" className="font-subheading">Marketing</SelectItem>
                        <SelectItem value="sales" className="font-subheading">Sales</SelectItem>
                        <SelectItem value="operations" className="font-subheading">Operations</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="font-heading text-primary-navy text-sm">Location *</Label>
                    <Input
                      id="location"
                      placeholder="e.g. San Francisco, CA or Remote"
                      value={jobData.location}
                      onChange={(e) => setJobData({...jobData, location: e.target.value})}
                      className="rounded-lg font-subheading text-sm h-10 sm:h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="job-type" className="font-heading text-primary-navy text-sm">Job Type *</Label>
                    <Select value={jobData.type} onValueChange={(value) => setJobData({...jobData, type: value})}>
                      <SelectTrigger className="rounded-lg font-subheading text-sm h-10 sm:h-12">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent className="rounded-lg">
                        <SelectItem value="full-time" className="font-subheading">Full-time</SelectItem>
                        <SelectItem value="part-time" className="font-subheading">Part-time</SelectItem>
                        <SelectItem value="contract" className="font-subheading">Contract</SelectItem>
                        <SelectItem value="freelance" className="font-subheading">Freelance</SelectItem>
                        <SelectItem value="internship" className="font-subheading">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary" className="font-heading text-primary-navy text-sm">Salary Range</Label>
                    <Input
                      id="salary"
                      placeholder="e.g. $80K - $120K"
                      value={jobData.salary}
                      onChange={(e) => setJobData({...jobData, salary: e.target.value})}
                      className="rounded-lg font-subheading text-sm h-10 sm:h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience" className="font-heading text-primary-navy text-sm">Experience Level</Label>
                    <Select value={jobData.experience} onValueChange={(value) => setJobData({...jobData, experience: value})}>
                      <SelectTrigger className="rounded-lg font-subheading text-sm h-10 sm:h-12">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent className="rounded-lg">
                        <SelectItem value="entry" className="font-subheading">Entry Level (0-2 years)</SelectItem>
                        <SelectItem value="mid" className="font-subheading">Mid Level (2-5 years)</SelectItem>
                        <SelectItem value="senior" className="font-subheading">Senior Level (5+ years)</SelectItem>
                        <SelectItem value="lead" className="font-subheading">Lead/Principal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="font-heading text-primary-navy text-sm">Job Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the responsibilities of the position. You can always change this later."
                    value={jobData.description}
                    onChange={(e) => setJobData({...jobData, description: e.target.value})}
                    className="min-h-20 sm:min-h-32 rounded-lg font-subheading text-sm resize-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills-required" className="font-heading text-primary-navy text-sm">Skills Required</Label>
                  <Textarea
                    id="skills-required"
                    placeholder="List the key skills required for this position (e.g., React, TypeScript, Node.js)"
                    value={jobData.skillsRequired}
                    onChange={(e) => setJobData({...jobData, skillsRequired: e.target.value})}
                    className="min-h-16 sm:min-h-24 rounded-lg font-subheading text-sm resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements" className="font-heading text-primary-navy text-sm">Requirements</Label>
                  <Textarea
                    id="requirements"
                    placeholder="• 5+ years of experience with React and TypeScript&#10;• Strong understanding of modern frontend technologies&#10;• Experience with state management libraries"
                    value={jobData.requirements}
                    onChange={(e) => setJobData({...jobData, requirements: e.target.value})}
                    className="min-h-20 sm:min-h-32 rounded-lg font-subheading text-sm resize-none"
                  />
                  <p className="text-xs text-slate-500 font-subheading">Format as bullet points using "•" for better readability</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="responsibilities" className="font-heading text-primary-navy text-sm">Responsibilities</Label>
                  <Textarea
                    id="responsibilities"
                    placeholder="• Develop and maintain user-facing features&#10;• Optimize applications for maximum speed and scalability&#10;• Collaborate with cross-functional teams"
                    value={jobData.responsibilities}
                    onChange={(e) => setJobData({...jobData, responsibilities: e.target.value})}
                    className="min-h-20 sm:min-h-32 rounded-lg font-subheading text-sm resize-none"
                  />
                  <p className="text-xs text-slate-500 font-subheading">Format as bullet points using "•" for better readability</p>
                </div>

                {/* Extra padding at bottom to ensure content doesn't get hidden behind footer */}
                <div className="h-8"></div>
              </div>
            </div>

            {/* Prominent Footer with Action Buttons */}
            <div className="flex-shrink-0 p-4 sm:p-6 border-t-2 border-slate-300 bg-white rounded-b-xl shadow-xl">
              <div className="flex gap-3">
                <Button 
                  type="button" 
                  variant="outline"
                  className="flex-1 border-2 border-slate-400 text-slate-700 hover:bg-slate-100 hover:border-slate-500 rounded-lg font-subheading text-sm h-12 sm:h-12 transition-all duration-200"
                  onClick={() => setShowNewJobForm(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-sm h-12 sm:h-12 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  onClick={handleCreateJob}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Post Job
                </Button>
              </div>
              
              {/* Visual indicator that this is the action area */}
              <div className="mt-3 text-center">
                <p className="text-xs text-slate-500 font-subheading">Click "Post Job" to publish your job listing</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Job Details Modal */}
      {showJobDetailsPopup && selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-heading text-primary-navy">{selectedJob.title}</h2>
                  <div className="flex items-center space-x-4 text-slate-600 font-subheading mt-2 text-lg">
                    <span className="flex items-center">
                      <Building2 className="h-5 w-5 mr-1" />
                      {selectedJob.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="h-5 w-5 mr-1" />
                      {selectedJob.location}
                    </span>
                    <span className="flex items-center">
                      <Briefcase className="h-5 w-5 mr-1" />
                      {selectedJob.type}
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowJobDetailsPopup(false)}
                  className="rounded-xl"
                >
                  <XCircle className="h-6 w-6" />
                </Button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="font-heading text-primary-navy text-base">Job Title *</Label>
                    <p className="font-subheading text-slate-700 mt-1">{selectedJob.title}</p>
                  </div>
                  
                  <div>
                    <Label className="font-heading text-primary-navy text-base">Department</Label>
                    <p className="font-subheading text-slate-700 mt-1">{selectedJob.department}</p>
                  </div>
                  
                  <div>
                    <Label className="font-heading text-primary-navy text-base">Location *</Label>
                    <p className="font-subheading text-slate-700 mt-1">{selectedJob.location}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label className="font-heading text-primary-navy text-base">Job Type *</Label>
                    <p className="font-subheading text-slate-700 mt-1">{selectedJob.type}</p>
                  </div>
                  
                  <div>
                    <Label className="font-heading text-primary-navy text-base">Salary Range</Label>
                    <p className="font-subheading text-slate-700 mt-1">{selectedJob.salary}</p>
                  </div>
                  
                  <div>
                    <Label className="font-heading text-primary-navy text-base">Experience Level</Label>
                    <p className="font-subheading text-slate-700 mt-1">{selectedJob.experience}</p>
                  </div>
                </div>
              </div>

              <div>
                <Label className="font-heading text-primary-navy text-base">Job Description *</Label>
                <p className="font-subheading text-slate-700 mt-2 leading-relaxed">{selectedJob.description}</p>
              </div>

              {selectedJob.skillsRequired && (
                <div>
                  <Label className="font-heading text-primary-navy text-base">Skills Required</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedJob.skillsRequired.split(', ').map((skill: string, index: number) => (
                      <Badge key={index} variant="outline" className="font-subheading">
                        {skill.trim()}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {selectedJob.requirements && (
                <div>
                  <Label className="font-heading text-primary-navy text-base">Requirements</Label>
                  <div className="mt-2 space-y-2">
                    {selectedJob.requirements.split('\n').filter((req: string) => req.trim()).map((requirement: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="font-subheading text-slate-700">{requirement.replace('• ', '')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedJob.responsibilities && (
                <div>
                  <Label className="font-heading text-primary-navy text-base">Responsibilities</Label>
                  <div className="mt-2 space-y-2">
                    {selectedJob.responsibilities.split('\n').filter((resp: string) => resp.trim()).map((responsibility: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <Target className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="font-subheading text-slate-700">{responsibility.replace('• ', '')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Separator />

              <div>
                <Label className="font-heading text-primary-navy text-lg">About the Company</Label>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-navy rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading text-primary-navy text-lg">TechCorp Inc.</h4>
                      <p className="font-subheading text-slate-600">Technology & Software Development</p>
                    </div>
                  </div>
                  <p className="font-subheading text-slate-700 leading-relaxed">
                    TechCorp Inc. is a leading technology company specializing in innovative software solutions. 
                    We're passionate about creating products that make a difference in people's lives and are 
                    committed to fostering a collaborative, inclusive work environment where talented individuals 
                    can thrive and grow their careers.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-heading text-primary-navy">Founded:</span>
                      <span className="font-subheading text-slate-700 ml-2">2015</span>
                    </div>
                    <div>
                      <span className="font-heading text-primary-navy">Company Size:</span>
                      <span className="font-subheading text-slate-700 ml-2">500-1000 employees</span>
                    </div>
                    <div>
                      <span className="font-heading text-primary-navy">Industry:</span>
                      <span className="font-subheading text-slate-700 ml-2">Technology</span>
                    </div>
                    <div>
                      <span className="font-heading text-primary-navy">Location:</span>
                      <span className="font-subheading text-slate-700 ml-2">San Francisco, CA</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button 
                  variant="outline"
                  className="flex-1 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading text-base py-3"
                  onClick={() => setShowJobDetailsPopup(false)}
                >
                  Close
                </Button>
                <Button className="flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading text-base py-3">
                  Edit Job
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
 
 
