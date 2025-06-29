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
  Settings,
  X,
  Zap
} from "lucide-react"

export default function CompanyInternships() {
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
    router.push(`/company-internships/${jobId}`)
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

  const internshipMetrics = [
    {
      title: "Total Internship Posts",
      value: "5",
      change: "+2",
      isPositive: true,
      icon: Briefcase,
      period: "vs last month"
    },
    {
      title: "Total Applications", 
      value: "103",
      change: "+24.1%",
      isPositive: true,
      icon: Users,
      period: "vs last month"
    },
    {
      title: "Average Views per Internship",
      value: "369", 
      change: "+18.3%",
      isPositive: true,
      icon: Eye,
      period: "vs last month"
    },
    {
      title: "Application Rate",
      value: "5.6%",
      change: "+0.8%",
      isPositive: true,
      icon: Target,
      period: "vs last month"
    }
  ]

  const internships = [
    {
      id: 1,
      title: "Software Engineering Intern",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Internship",
      salary: "$5,000 - $7,000/month",
      experience: "Student/Entry Level",
      status: "Active",
      applicants: 28,
      views: 542,
      posted: "3 days ago",
      description: "Join our engineering team for a 12-week summer internship program. You'll work on real projects alongside experienced engineers and contribute to products used by millions of users.",
      skillsRequired: "React, JavaScript, Python, Git, SQL, HTML/CSS",
      requirements: "• Currently pursuing a degree in Computer Science or related field\n• Basic knowledge of programming languages (JavaScript, Python, Java)\n• Understanding of web development fundamentals\n• Experience with version control (Git)\n• Strong problem-solving skills and eagerness to learn",
      responsibilities: "• Work on frontend development using React and JavaScript\n• Contribute to backend services and APIs\n• Participate in code reviews and engineering discussions\n• Learn about software development best practices\n• Present your work to the engineering team",
      applications: [
        { name: "Emma Thompson", match: 89, status: "new" },
        { name: "Alex Martinez", match: 92, status: "reviewing" },
        { name: "Jordan Lee", match: 85, status: "shortlisted" }
      ]
    },
    {
      id: 2,
      title: "Product Management Intern",
      department: "Product",
      location: "Remote",
      type: "Internship", 
      salary: "$4,500 - $6,000/month",
      experience: "Student/Entry Level",
      status: "Active",
      applicants: 22,
      views: 387,
      posted: "5 days ago",
      description: "Join our product team to learn product strategy and execution. You'll work with cross-functional teams and gain hands-on experience in product management.",
      skillsRequired: "Product Research, Data Analysis, User Experience, Presentation Skills, Excel/Sheets",
      requirements: "• Currently pursuing a degree in Business, Computer Science, or related field\n• Interest in product management and technology\n• Strong analytical and communication skills\n• Experience with data analysis tools (Excel, Google Sheets)\n• Curious mindset and ability to learn quickly",
      responsibilities: "• Conduct user research and competitive analysis\n• Assist with product roadmap planning\n• Collaborate with engineering and design teams\n• Analyze product metrics and user feedback\n• Support product launches and feature releases",
      applications: [
        { name: "Sophia Chen", match: 88, status: "interviewed" },
        { name: "Marcus Johnson", match: 81, status: "reviewing" }
      ]
    },
    {
      id: 3,
      title: "UX Design Intern",
      department: "Design",
      location: "New York, NY",
      type: "Internship",
      salary: "$4,000 - $5,500/month",
      experience: "Student/Entry Level",
      status: "Active",
      applicants: 35,
      views: 623,
      posted: "1 week ago",
      description: "Join our design team to create intuitive and engaging user experiences. You'll work on real design projects and learn from experienced UX designers.",
      skillsRequired: "Figma, Sketch, Adobe Creative Suite, User Research, Prototyping, Design Thinking",
      requirements: "• Currently pursuing a degree in Design, HCI, or related field\n• Portfolio demonstrating design projects and process\n• Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)\n• Basic understanding of user-centered design principles\n• Strong visual communication skills",
      responsibilities: "• Create wireframes, prototypes, and visual designs\n• Conduct user research and usability testing\n• Collaborate with product and engineering teams\n• Participate in design critiques and feedback sessions\n• Contribute to design system documentation",
      applications: [
        { name: "Maya Patel", match: 94, status: "shortlisted" },
        { name: "David Kim", match: 87, status: "new" },
        { name: "Lisa Zhang", match: 90, status: "reviewing" }
      ]
    },
    {
      id: 4,
      title: "Marketing Intern",
      department: "Marketing",
      location: "Austin, TX",
      type: "Internship",
      salary: "$3,500 - $5,000/month",
      experience: "Student/Entry Level",
      status: "Active",
      applicants: 18,
      views: 294,
      posted: "4 days ago",
      description: "Join our marketing team to gain hands-on experience in digital marketing, content creation, and campaign management. Perfect for students interested in marketing careers.",
      skillsRequired: "Content Creation, Social Media, Marketing Analytics, Adobe Creative Suite, Communication",
      requirements: "• Currently pursuing a degree in Marketing, Communications, or related field\n• Strong writing and communication skills\n• Familiarity with social media platforms\n• Basic knowledge of marketing analytics\n• Creative mindset and attention to detail",
      responsibilities: "• Create content for social media and marketing campaigns\n• Assist with market research and competitive analysis\n• Support email marketing and lead generation efforts\n• Analyze marketing metrics and campaign performance\n• Coordinate marketing events and partnerships",
      applications: [
        { name: "Jessica Wu", match: 86, status: "new" },
        { name: "Ryan Torres", match: 82, status: "reviewing" }
      ]
    },
    {
      id: 5,
      title: "Data Science Intern",
      department: "Analytics",
      location: "Seattle, WA",
      type: "Internship",
      salary: "$5,500 - $7,500/month",
      experience: "Student/Entry Level",
      status: "Draft",
      applicants: 0,
      views: 0,
      posted: "Draft",
      description: "Join our data science team to work on machine learning projects and data analysis. You'll gain experience with real-world data and contribute to data-driven decision making.",
      skillsRequired: "Python, R, SQL, Machine Learning, Statistics, Data Visualization",
      requirements: "• Currently pursuing a degree in Data Science, Statistics, Computer Science, or related field\n• Programming experience in Python or R\n• Understanding of statistics and data analysis\n• Familiarity with SQL and databases\n• Strong analytical and problem-solving skills",
      responsibilities: "• Analyze large datasets to identify trends and insights\n• Build and test machine learning models\n• Create data visualizations and reports\n• Collaborate with product and engineering teams\n• Present findings to stakeholders",
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

  const filteredInternships = internships.filter(internship => 
    internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    internship.department.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading text-primary-navy mb-1 sm:mb-2">Internship Management</h1>
            <p className="text-base sm:text-lg md:text-xl font-subheading text-slate-600">
              Manage your internship postings, track applications, and analyze performance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Button 
              onClick={() => setShowNewJobForm(true)}
              className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto"
            >
              <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Post New Internship
            </Button>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <Button 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-subheading text-sm px-4 py-2"
              >
                <Target className="h-4 w-4 mr-2" />
                ATS Dashboard
              </Button>
              <div className="relative group">
                <Button 
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 font-subheading text-sm px-4 py-2"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  AI Candidate Ranking
                </Button>
                <div className="absolute top-full left-0 mt-2 p-3 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 w-64">
                  Automatically rank internship candidates using AI-powered matching and screening.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        {internshipMetrics.map((metric, index) => (
          <Card key={index} className="p-3 sm:p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-1.5 rounded-lg ${metric.isPositive ? 'bg-green-50' : 'bg-red-50'}`}>
                  <metric.icon className={`h-3 w-3 sm:h-4 sm:w-4 ${metric.isPositive ? 'text-green-600' : 'text-red-600'}`} />
                </div>
                <div className={`flex items-center text-xs font-subheading ${metric.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.isPositive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  <span className="ml-1">{metric.change}</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-heading text-slate-900 mb-1">{metric.value}</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-subheading leading-tight">{metric.title}</p>
              <p className="text-xs text-slate-500 font-subheading mt-1">{metric.period}</p>
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
            {/* Internship Management */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl font-heading text-primary-navy flex items-center">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Internship Management
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
                    Active Internships
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
                    Draft Internships
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
                    Closed Internships
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <div className="text-sm text-slate-500 font-subheading text-center py-2">
                  <p>5 total internship posts</p>
                  <p>103 applications</p>
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
                {/* Internship Status */}
                <div>
                  <h4 className="font-heading text-primary-navy mb-2 sm:mb-3 text-sm">Internship Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="active-internships" />
                      <label htmlFor="active-internships" className="text-sm font-subheading text-slate-600">Active</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="draft-internships" />
                      <label htmlFor="draft-internships" className="text-sm font-subheading text-slate-600">Draft</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="closed-internships" />
                      <label htmlFor="closed-internships" className="text-sm font-subheading text-slate-600">Closed</label>
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
                      <Checkbox id="analytics" />
                      <label htmlFor="analytics" className="text-sm font-subheading text-slate-600">Analytics</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="business" />
                      <label htmlFor="business" className="text-sm font-subheading text-slate-600">Business</label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Internship Type */}
                <div>
                  <h4 className="font-heading text-primary-navy mb-2 sm:mb-3 text-sm">Internship Type</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="summer-internship" />
                      <label htmlFor="summer-internship" className="text-sm font-subheading text-slate-600">Summer Internship</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="winter-internship" />
                      <label htmlFor="winter-internship" className="text-sm font-subheading text-slate-600">Winter Internship</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="semester-long" />
                      <label htmlFor="semester-long" className="text-sm font-subheading text-slate-600">Semester-long</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remote-internship" />
                      <label htmlFor="remote-internship" className="text-sm font-subheading text-slate-600">Remote</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hybrid-internship" />
                      <label htmlFor="hybrid-internship" className="text-sm font-subheading text-slate-600">Hybrid</label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Academic Level */}
                <div>
                  <h4 className="font-heading text-primary-navy mb-2 sm:mb-3 text-sm">Academic Level</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="undergraduate" />
                      <label htmlFor="undergraduate" className="text-sm font-subheading text-slate-600">Undergraduate</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="graduate" />
                      <label htmlFor="graduate" className="text-sm font-subheading text-slate-600">Graduate</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="phd-student" />
                      <label htmlFor="phd-student" className="text-sm font-subheading text-slate-600">PhD Student</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="recent-graduate" />
                      <label htmlFor="recent-graduate" className="text-sm font-subheading text-slate-600">Recent Graduate</label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Duration */}
                <div>
                  <h4 className="font-heading text-primary-navy mb-2 sm:mb-3 text-sm">Duration</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="8-12-weeks" />
                      <label htmlFor="8-12-weeks" className="text-sm font-subheading text-slate-600">8-12 weeks</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="3-6-months" />
                      <label htmlFor="3-6-months" className="text-sm font-subheading text-slate-600">3-6 months</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="6-months-plus" />
                      <label htmlFor="6-months-plus" className="text-sm font-subheading text-slate-600">6+ months</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="flexible-duration" />
                      <label htmlFor="flexible-duration" className="text-sm font-subheading text-slate-600">Flexible</label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Compensation Type */}
                <div>
                  <h4 className="font-heading text-primary-navy mb-2 sm:mb-3 text-sm">Compensation</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="paid-internship" />
                      <label htmlFor="paid-internship" className="text-sm font-subheading text-slate-600">Paid</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="unpaid-internship" />
                      <label htmlFor="unpaid-internship" className="text-sm font-subheading text-slate-600">Unpaid</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="credit-eligible" />
                      <label htmlFor="credit-eligible" className="text-sm font-subheading text-slate-600">Credit Eligible</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="stipend-only" />
                      <label htmlFor="stipend-only" className="text-sm font-subheading text-slate-600">Stipend Only</label>
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
                      <label htmlFor="high-volume" className="text-sm font-subheading text-slate-600">30+ applications</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="medium-volume" />
                      <label htmlFor="medium-volume" className="text-sm font-subheading text-slate-600">10-29 applications</label>
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
                    Internship Preferences
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
                    placeholder="Search internships by title or department..."
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

          {/* Internships List */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {filteredInternships.map((job) => (
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
                <h2 className="text-2xl font-heading text-primary-navy">Active Internships</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowActiveJobsPopup(false)}
                  className="rounded-xl"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="grid gap-4">
                  {internships.filter(job => job.status === "Active").map((job) => (
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
                <h2 className="text-2xl font-heading text-primary-navy">Draft Internships</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowDraftJobsPopup(false)}
                  className="rounded-xl"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="grid gap-4">
                  {internships.filter(job => job.status === "Draft").map((job) => (
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
                <h2 className="text-2xl font-heading text-primary-navy">Closed Internships</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowClosedJobsPopup(false)}
                  className="rounded-xl"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="p-6 flex-1 bg-slate-50">
              <p className="text-slate-500 font-subheading text-center text-sm">No Closed Internships</p>
              <p className="text-slate-400 font-subheading text-center text-xs mt-1">
                Internships that are closed will appear here
              </p>
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
                  <X className="h-6 w-6" />
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

      {/* Internship Preferences Popup */}
      {showJobPreferencesPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading text-primary-navy">Internship Preferences</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowJobPreferencesPopup(false)}
                  className="rounded-xl"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-primary-navy text-lg mb-3">Default Internship Settings</h3>
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
                      <label htmlFor="public-listing" className="font-subheading text-slate-700">Make internships publicly searchable</label>
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
                <h2 className="text-lg sm:text-2xl font-heading text-primary-navy">Post New Internship</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowNewJobForm(false)}
                  className="rounded-lg h-8 w-8 sm:h-10 sm:w-10 hover:bg-slate-100"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </div>
            </div>
            
            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0">
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="job-title" className="font-heading text-primary-navy text-sm">Internship Title *</Label>
                    <Input
                      id="job-title"
                      placeholder="e.g. Software Engineer Intern, Product Design Intern, etc."
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
                    <Label htmlFor="job-type" className="font-heading text-primary-navy text-sm">Internship Type *</Label>
                    <Select value={jobData.type} onValueChange={(value) => setJobData({...jobData, type: value})}>
                      <SelectTrigger className="rounded-lg font-subheading text-sm h-10 sm:h-12">
                        <SelectValue placeholder="Select internship type" />
                      </SelectTrigger>
                      <SelectContent className="rounded-lg">
                        <SelectItem value="full-time" className="font-subheading">Full-time</SelectItem>
                        <SelectItem value="part-time" className="font-subheading">Part-time</SelectItem>
                        <SelectItem value="summer" className="font-subheading">Summer Internship</SelectItem>
                        <SelectItem value="winter" className="font-subheading">Winter Internship</SelectItem>
                        <SelectItem value="remote" className="font-subheading">Remote Internship</SelectItem>
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
                  <Label htmlFor="description" className="font-heading text-primary-navy text-sm">Internship Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the responsibilities and learning opportunities of this internship. You can always change this later."
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
                  className="w-full bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-sm h-10 sm:h-12"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Post Internship
                </Button>
              </div>
              
              {/* Visual indicator that this is the action area */}
              <div className="mt-3 text-center">
                <p className="text-xs text-slate-500 font-subheading">
                  Click "Post Internship" to publish your internship listing. 
                </p>
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
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="font-heading text-primary-navy text-base">Internship Title *</Label>
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
                    <Label className="font-heading text-primary-navy text-base">Internship Type *</Label>
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
                <Label className="font-heading text-primary-navy text-base">Internship Description *</Label>
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
 
 
