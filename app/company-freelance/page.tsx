"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
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
  Clock,
  DollarSign,
  Calendar,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  FileText,
  CheckCircle,
  Settings
} from "lucide-react"

export default function CompanyFreelance() {
  const router = useRouter()
  const [showNewProjectForm, setShowNewProjectForm] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    category: "all",
    status: "all",
    experience: "all",
    duration: "all",
    budgetRange: [1000, 50000],
    skills: [] as string[],
    activeOnly: false
  })
  const [showFilters, setShowFilters] = useState(true)
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    duration: "",
    budget: "",
    experience: "",
    skills: "",
    category: "",
    timeline: ""
  })

  const handleProjectClick = (projectId: number) => {
    router.push(`/company-freelance/${projectId}`)
  }

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating project:", projectData)
    setShowNewProjectForm(false)
    setProjectData({
      title: "",
      description: "",
      duration: "",
      budget: "",
      experience: "",
      skills: "",
      category: "",
      timeline: ""
    })
  }

  const freelanceMetrics = [
    {
      title: "Active Projects",
      value: "8",
      change: "+2",
      isPositive: true,
      icon: Briefcase,
      period: "vs last month"
    },
    {
      title: "Total Proposals", 
      value: "156",
      change: "+23.4%",
      isPositive: true,
      icon: Users,
      period: "vs last month"
    },
    {
      title: "Average Views per Project",
      value: "847", 
      change: "+15.8%",
      isPositive: true,
      icon: Eye,
      period: "vs last month"
    },
    {
      title: "Proposal Rate",
      value: "12.3%",
      change: "+1.2%",
      isPositive: true,
      icon: Target,
      period: "vs last month"
    }
  ]

  const projects = [
    {
      id: 1,
      title: "React Native Mobile App Development",
      category: "Mobile Development",
      duration: "2-3 months",
      budget: "$8,000 - $12,000",
      budgetValue: 10000,
      experience: "Expert",
      status: "Active",
      proposals: 24,
      views: 456,
      posted: "3 days ago",
      timeline: "ASAP",
      skills: ["React Native", "TypeScript", "API Integration"],
      proposals_data: [
        { name: "Alex Rivera", rating: 4.9, proposal_amount: "$9,500", status: "new" },
        { name: "Sarah Kim", rating: 4.8, proposal_amount: "$10,200", status: "reviewing" },
        { name: "James Chen", rating: 5.0, proposal_amount: "$8,800", status: "shortlisted" }
      ]
    },
    {
      id: 2,
      title: "Brand Identity Design Package",
      category: "Graphic Design",
      duration: "4-6 weeks",
      budget: "$3,000 - $5,000", 
      budgetValue: 4000,
      experience: "Intermediate",
      status: "Active",
      proposals: 18,
      views: 324,
      posted: "1 week ago",
      timeline: "2 weeks",
      skills: ["Logo Design", "Brand Strategy", "Adobe Creative Suite"],
      proposals_data: [
        { name: "Maria Rodriguez", rating: 4.9, proposal_amount: "$3,800", status: "interviewed" },
        { name: "David Park", rating: 4.7, proposal_amount: "$4,200", status: "reviewing" }
      ]
    },
    {
      id: 3,
      title: "WordPress E-commerce Website",
      category: "Web Development",
      duration: "6-8 weeks",
      budget: "$5,000 - $8,000",
      budgetValue: 6500,
      experience: "Intermediate",
      status: "Draft",
      proposals: 0,
      views: 0,
      posted: "Draft",
      timeline: "1 month",
      skills: ["WordPress", "WooCommerce", "PHP", "UI/UX"],
      proposals_data: []
    },
    {
      id: 4,
      title: "Social Media Content Creation",
      category: "Content Marketing",
      duration: "Ongoing",
      budget: "$2,000/month",
      budgetValue: 2000,
      experience: "Intermediate", 
      status: "Active",
      proposals: 31,
      views: 567,
      posted: "5 days ago",
      timeline: "Ongoing",
      skills: ["Content Strategy", "Social Media", "Copywriting"],
      proposals_data: [
        { name: "Emma Wilson", rating: 4.8, proposal_amount: "$1,800", status: "new" },
        { name: "Lucas Taylor", rating: 4.9, proposal_amount: "$2,100", status: "reviewing" }
      ]
    },
    {
      id: 5,
      title: "Machine Learning Data Analysis",
      category: "Data Science",
      duration: "3-4 months",
      budget: "$15,000 - $20,000",
      budgetValue: 17500,
      experience: "Expert",
      status: "Completed",
      proposals: 42,
      views: 789,
      posted: "2 months ago",
      timeline: "Flexible",
      skills: ["Python", "Machine Learning", "TensorFlow", "Data Analysis"],
      proposals_data: []
    },
    {
      id: 6,
      title: "iOS Swift App Development",
      category: "Mobile Development",
      duration: "8-10 weeks",
      budget: "$12,000 - $18,000",
      budgetValue: 15000,
      experience: "Expert",
      status: "Closed",
      proposals: 38,
      views: 623,
      posted: "6 weeks ago",
      timeline: "ASAP",
      skills: ["Swift", "iOS", "Core Data", "SwiftUI"],
      proposals_data: []
    }
  ]

  // Skills for filter options
  const allSkills = ["React Native", "TypeScript", "API Integration", "Logo Design", "Brand Strategy", "Adobe Creative Suite", "WordPress", "WooCommerce", "PHP", "UI/UX", "Content Strategy", "Social Media", "Copywriting", "Python", "Machine Learning", "TensorFlow", "Data Analysis", "Swift", "iOS", "Core Data", "SwiftUI"]

  const categories = ["Mobile Development", "Graphic Design", "Web Development", "Content Marketing", "Data Science"]

  const handleSkillToggle = (skill: string) => {
    setFilters(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }))
  }

  const clearFilters = () => {
    setFilters({
      category: "all",
      status: "all",
      experience: "all",
      duration: "all",
      budgetRange: [1000, 50000],
      skills: [],
      activeOnly: false
    })
    setSearchQuery("")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-50 text-green-600 border-green-200"
      case "Draft":
        return "bg-yellow-50 text-yellow-600 border-yellow-200"
      case "Completed":
        return "bg-blue-50 text-blue-600 border-blue-200"
      case "Closed":
        return "bg-red-50 text-red-600 border-red-200"
      default:
        return "bg-slate-50 text-slate-600 border-slate-200"
    }
  }

  const getProposalStatusColor = (status: string) => {
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

  // Apply filters
  const filteredProjects = projects.filter(project => {
    // Search filter
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    // Category filter
    const matchesCategory = filters.category === "all" || project.category === filters.category

    // Status filter
    const matchesStatus = filters.status === "all" || project.status === filters.status

    // Experience filter
    const matchesExperience = filters.experience === "all" || project.experience === filters.experience

    // Duration filter
    const matchesDuration = filters.duration === "all" || 
      (filters.duration === "short" && project.duration.includes("weeks")) ||
      (filters.duration === "medium" && (project.duration.includes("2-3 months") || project.duration.includes("3-4 months"))) ||
      (filters.duration === "long" && (project.duration.includes("6+") || project.duration.includes("Ongoing")))

    // Budget filter
    const matchesBudget = project.budgetValue >= filters.budgetRange[0] && project.budgetValue <= filters.budgetRange[1]

    // Skills filter
    const matchesSkills = filters.skills.length === 0 || 
      filters.skills.some(skill => project.skills.includes(skill))

    // Active only filter
    const matchesActiveOnly = !filters.activeOnly || project.status === "Active"

    return matchesSearch && matchesCategory && matchesStatus && matchesExperience && 
           matchesDuration && matchesBudget && matchesSkills && matchesActiveOnly
  })

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading text-primary-navy mb-1 sm:mb-2">Freelance Projects</h1>
            <p className="text-base sm:text-lg md:text-xl font-subheading text-slate-600">
              Manage your freelance projects and review proposals from talented professionals.
            </p>
          </div>
          <Button 
            onClick={() => setShowNewProjectForm(true)}
            className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto"
          >
            <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {freelanceMetrics.map((metric, index) => (
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
        {/* Minimized Sidebar - Reduced width */}
        <div className="lg:w-56 lg:flex-shrink-0">
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

          {/* Sidebar Content - Minimized */}
          <div className={`space-y-3 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            {/* Project Management - Compact */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-2 px-3">
                <CardTitle className="text-sm font-heading text-primary-navy flex items-center">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 px-3 pb-3">
                <div className="text-xs text-slate-500 font-subheading space-y-1">
                  <div className="flex justify-between">
                    <span>Active:</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Proposals:</span>
                    <span className="font-medium">156</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Filters - Compact */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-2 px-3">
                <CardTitle className="text-sm font-heading text-primary-navy flex items-center justify-between">
                  <span className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-3 pb-3">
                {/* Compact Search */}
                <div className="relative">
                  <Search className="h-3 w-3 absolute left-2 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-7 h-8 rounded text-xs"
                  />
                </div>

                {/* Quick Status Filters - Compact */}
                <div>
                  <h4 className="font-heading text-primary-navy mb-1 text-xs">Status</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1">
                      <Checkbox id="active-status" className="h-3 w-3" />
                      <label htmlFor="active-status" className="text-xs font-subheading text-slate-600">Active</label>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Checkbox id="draft-status" className="h-3 w-3" />
                      <label htmlFor="draft-status" className="text-xs font-subheading text-slate-600">Draft</label>
                    </div>
                  </div>
                </div>

                {/* Compact Category */}
                <div>
                  <h4 className="font-heading text-primary-navy mb-1 text-xs">Category</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1">
                      <Checkbox id="web-dev" className="h-3 w-3" />
                      <label htmlFor="web-dev" className="text-xs font-subheading text-slate-600">Web Dev</label>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Checkbox id="mobile-dev" className="h-3 w-3" />
                      <label htmlFor="mobile-dev" className="text-xs font-subheading text-slate-600">Mobile</label>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Checkbox id="design" className="h-3 w-3" />
                      <label htmlFor="design" className="text-xs font-subheading text-slate-600">Design</label>
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={clearFilters}
                  className="w-full h-7 text-xs border-slate-200 hover:border-primary-navy hover:text-primary-navy"
                >
                  Clear All
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search Bar */}
          <Card className="mb-6 sm:mb-8 border border-slate-200 rounded-lg">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex-1 relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Search projects by title, category, or skills..."
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

          {/* Projects List */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="border border-slate-200 rounded-lg hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleProjectClick(project.id)}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-3 sm:space-y-0">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy truncate">{project.title}</h3>
                        <Badge className={`${getStatusColor(project.status)} text-xs sm:text-sm font-subheading px-2 sm:px-3 py-1 w-fit`}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm sm:text-base font-subheading text-slate-600 mb-2 sm:mb-3">
                        <span>{project.category}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{project.duration}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="font-heading text-primary-navy">{project.budget}</span>
                      </div>
                      <p className="text-sm sm:text-base font-subheading text-slate-500">Posted {project.posted}</p>
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

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-4">
                    <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1 sm:mb-2">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 mr-1 sm:mr-2" />
                        <span className="text-lg sm:text-2xl font-heading text-slate-900">{project.proposals}</span>
                      </div>
                      <p className="text-xs sm:text-sm font-subheading text-slate-600">Proposals</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1 sm:mb-2">
                        <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 mr-1 sm:mr-2" />
                        <span className="text-lg sm:text-2xl font-heading text-slate-900">{project.views}</span>
                      </div>
                      <p className="text-xs sm:text-sm font-subheading text-slate-600">Views</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1 sm:mb-2">
                        <Target className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 mr-1 sm:mr-2" />
                        <span className="text-lg sm:text-2xl font-heading text-slate-900">{project.views > 0 ? ((project.proposals / project.views) * 100).toFixed(1) : '0'}%</span>
                      </div>
                      <p className="text-xs sm:text-sm font-subheading text-slate-600">Rate</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-sm sm:text-base font-heading text-slate-900 mb-2">Skills Required</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs sm:text-sm font-subheading">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Recent Proposals */}
                  {project.proposals_data.length > 0 && (
                    <div>
                      <h4 className="text-sm sm:text-base font-heading text-slate-900 mb-2 sm:mb-3">Recent Proposals</h4>
                      <div className="space-y-2">
                        {project.proposals_data.slice(0, 3).map((proposal, index) => (
                          <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-slate-50 rounded space-y-2 sm:space-y-0">
                            <span className="text-sm sm:text-base font-subheading text-slate-900 truncate">{proposal.name}</span>
                            <div className="flex items-center justify-between sm:justify-end space-x-2">
                              <span className="text-xs sm:text-sm font-heading text-slate-900">{proposal.proposal_amount}</span>
                              <Badge className={`${getProposalStatusColor(proposal.status)} text-xs font-subheading px-2 py-1`}>
                                {proposal.status}
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

      {/* New Project Modal */}
      {showNewProjectForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-heading text-primary-navy">Post New Project</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowNewProjectForm(false)}
                  className="rounded-xl"
                >
                  <XCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </div>
            </div>
            
            <form onSubmit={handleCreateProject} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="project-title" className="font-heading text-primary-navy text-sm sm:text-base">Project Title *</Label>
                  <Input
                    id="project-title"
                    placeholder="e.g. React Native App Development"
                    value={projectData.title}
                    onChange={(e) => setProjectData({...projectData, title: e.target.value})}
                    className="rounded-xl font-subheading text-sm sm:text-base py-2 sm:py-3"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="font-heading text-primary-navy text-sm sm:text-base">Category</Label>
                  <Select value={projectData.category} onValueChange={(value) => setProjectData({...projectData, category: value})}>
                    <SelectTrigger className="rounded-xl font-subheading text-sm sm:text-base py-2 sm:py-3">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="web-development" className="font-subheading">Web Development</SelectItem>
                      <SelectItem value="mobile-development" className="font-subheading">Mobile Development</SelectItem>
                      <SelectItem value="design" className="font-subheading">Design & Creative</SelectItem>
                      <SelectItem value="content-marketing" className="font-subheading">Content & Marketing</SelectItem>
                      <SelectItem value="data-science" className="font-subheading">Data Science</SelectItem>
                      <SelectItem value="consulting" className="font-subheading">Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="font-heading text-primary-navy text-sm sm:text-base">Budget Range *</Label>
                  <Input
                    id="budget"
                    placeholder="e.g. $5,000 - $10,000"
                    value={projectData.budget}
                    onChange={(e) => setProjectData({...projectData, budget: e.target.value})}
                    className="rounded-xl font-subheading text-sm sm:text-base py-2 sm:py-3"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration" className="font-heading text-primary-navy text-sm sm:text-base">Project Duration *</Label>
                  <Select value={projectData.duration} onValueChange={(value) => setProjectData({...projectData, duration: value})}>
                    <SelectTrigger className="rounded-xl font-subheading text-sm sm:text-base py-2 sm:py-3">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="1-2-weeks" className="font-subheading">1-2 weeks</SelectItem>
                      <SelectItem value="3-4-weeks" className="font-subheading">3-4 weeks</SelectItem>
                      <SelectItem value="1-2-months" className="font-subheading">1-2 months</SelectItem>
                      <SelectItem value="3-6-months" className="font-subheading">3-6 months</SelectItem>
                      <SelectItem value="6-months+" className="font-subheading">6+ months</SelectItem>
                      <SelectItem value="ongoing" className="font-subheading">Ongoing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience" className="font-heading text-primary-navy text-sm sm:text-base">Experience Level</Label>
                  <Select value={projectData.experience} onValueChange={(value) => setProjectData({...projectData, experience: value})}>
                    <SelectTrigger className="rounded-xl font-subheading text-sm sm:text-base py-2 sm:py-3">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="beginner" className="font-subheading">Beginner</SelectItem>
                      <SelectItem value="intermediate" className="font-subheading">Intermediate</SelectItem>
                      <SelectItem value="expert" className="font-subheading">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline" className="font-heading text-primary-navy text-sm sm:text-base">Timeline</Label>
                  <Input
                    id="timeline"
                    placeholder="e.g. ASAP, 2 weeks, Flexible"
                    value={projectData.timeline}
                    onChange={(e) => setProjectData({...projectData, timeline: e.target.value})}
                    className="rounded-xl font-subheading text-sm sm:text-base py-2 sm:py-3"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="font-heading text-primary-navy text-sm sm:text-base">Project Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your project requirements, goals, and expectations in detail..."
                  value={projectData.description}
                  onChange={(e) => setProjectData({...projectData, description: e.target.value})}
                  className="min-h-24 sm:min-h-32 rounded-xl font-subheading text-sm sm:text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills" className="font-heading text-primary-navy text-sm sm:text-base">Skills Required</Label>
                <Textarea
                  id="skills"
                  placeholder="List the key skills required for this project (e.g., React Native, TypeScript, Firebase, UI/UX Design)"
                  value={projectData.skills}
                  onChange={(e) => setProjectData({...projectData, skills: e.target.value})}
                  className="min-h-16 sm:min-h-24 rounded-xl font-subheading text-sm sm:text-base"
                />
                <p className="text-xs sm:text-sm text-slate-500 font-subheading">Separate skills with commas for better visibility</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                <Button 
                  type="button" 
                  variant="outline"
                  className="flex-1 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading text-sm sm:text-base py-2 sm:py-3"
                  onClick={() => setShowNewProjectForm(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading text-sm sm:text-base py-2 sm:py-3"
                >
                  Post Project
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}