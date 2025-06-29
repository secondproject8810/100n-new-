"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  ArrowLeft,
  Eye,
  Users,
  Target,
  Clock,
  DollarSign,
  Calendar,
  MapPin,
  Star,
  MessageCircle,
  UserCheck,
  UserX,
  Download,
  ExternalLink,
  Briefcase,
  Award,
  Globe,
  Mail,
  Phone,
  XCircle,
  Building2,
  Edit,
  Zap,
  Filter,
  BarChart3,
  Brain
} from "lucide-react"

export default function InternshipDetails() {
  const router = useRouter()
  const params = useParams()
  const internshipId = params.id as string
  const [selectedApplicant, setSelectedApplicant] = useState<any>(null)
  const [showApplicantDetails, setShowApplicantDetails] = useState(false)
  const [showCompanyProfilePopup, setShowCompanyProfilePopup] = useState(false)

  // Mock internship data - in real app, this would be fetched based on internshipId
  const internship = {
    id: parseInt(internshipId),
    title: "Software Engineering Intern",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time Internship",
    salary: "$5,000 - $7,000/month",
    experience: "Student/Entry Level",
    status: "Active",
    applicants: 28,
    views: 542,
    posted: "3 days ago",
    deadline: "January 15, 2025",
    skills: ["React", "JavaScript", "Python", "Git", "SQL", "HTML/CSS"],
    description: `We are looking for a motivated Software Engineering Intern to join our engineering team for a 12-week summer internship program. You will work alongside experienced engineers on real projects that impact millions of users.

What You'll Do:
• Work on frontend development using React and JavaScript
• Contribute to backend services and APIs
• Participate in code reviews and engineering discussions
• Learn about software development best practices and methodologies
• Collaborate with cross-functional teams including design and product
• Present your work to the engineering team at the end of the internship

What We're Looking For:
• Currently pursuing a degree in Computer Science, Software Engineering, or related field
• Basic knowledge of programming languages (JavaScript, Python, Java, etc.)
• Understanding of web development fundamentals (HTML, CSS, JavaScript)
• Experience with version control (Git)
• Strong problem-solving skills and eagerness to learn
• Excellent communication and teamwork abilities

What We Offer:
• Competitive internship stipend ($5,000 - $7,000/month)
• Mentorship from senior engineers
• Real-world project experience
• Professional development opportunities
• Team events and networking opportunities
• Potential for full-time offer upon graduation`,
    company: "TechCorp Inc.",
    postedBy: "Sarah Johnson",
    applications: [
      {
        id: 1,
        name: "Emma Thompson",
        title: "Computer Science Student",
        currentCompany: "Stanford University",
        rating: 4.7,
        reviews: 45,
        experience: "Student (Junior Year)",
        expectedSalary: "$6,000/month",
        location: "Palo Alto, CA",
        profileImage: "/api/placeholder/64/64",
        status: "new",
        appliedDate: "1 day ago",
        availability: "May 2025",
        responseTime: "2 hours",
        coverLetter: "I'm a junior at Stanford studying Computer Science with a passion for full-stack development. I've completed several personal projects using React and Python, and I'm excited about the opportunity to gain real-world experience at TechCorp. I'm eager to learn from experienced engineers and contribute to meaningful projects.",
        skills: ["React", "JavaScript", "Python", "SQL", "Git", "Node.js"],
        currentRole: "Computer Science Student at Stanford University",
        education: "B.S. Computer Science, Stanford University (Expected 2026)",
        languages: ["English (Native)", "French (Conversational)"],
        certifications: ["Google Developer Student Challenge Winner", "React Fundamentals Certificate"],
        portfolio: [
          { title: "Personal Portfolio Website", description: "React-based portfolio", link: "#" },
          { title: "Task Management App", description: "Full-stack web application", link: "#" },
        ],
        email: "emma.thompson@stanford.edu",
        phone: "+1 (555) 111-2222"
      },
      {
        id: 2,
        name: "Alex Martinez",
        title: "Software Engineering Student",
        currentCompany: "UC Berkeley",
        rating: 4.8,
        reviews: 32,
        experience: "Student (Senior Year)",
        expectedSalary: "$6,500/month",
        location: "Berkeley, CA",
        profileImage: "/api/placeholder/64/64",
        status: "reviewing",
        appliedDate: "2 days ago",
        availability: "June 2025",
        responseTime: "1 hour",
        coverLetter: "As a senior Computer Science student at UC Berkeley, I have strong foundations in algorithms, data structures, and software engineering. I've worked on several team projects and have internship experience at a local startup. I'm looking forward to applying my skills in a larger tech environment and learning from TechCorp's engineering culture.",
        skills: ["Java", "Python", "React", "Spring Boot", "Docker", "AWS"],
        currentRole: "Software Engineering Student at UC Berkeley",
        education: "B.S. Computer Science, UC Berkeley (Expected 2025)",
        languages: ["English (Native)", "Spanish (Native)"],
        certifications: ["AWS Cloud Practitioner", "Oracle Java Certified"],
        portfolio: [
          { title: "Social Media Platform", description: "Java Spring Boot application", link: "#" },
          { title: "Machine Learning Project", description: "Python-based recommendation system", link: "#" },
        ],
        email: "alex.martinez@berkeley.edu",
        phone: "+1 (555) 222-3333"
      },
      {
        id: 3,
        name: "Sarah Chen",
        title: "CS & Math Double Major",
        currentCompany: "MIT",
        rating: 4.9,
        reviews: 28,
        experience: "Student (Sophomore Year)",
        expectedSalary: "$5,500/month",
        location: "Cambridge, MA",
        profileImage: "/api/placeholder/64/64",
        status: "shortlisted",
        appliedDate: "3 days ago",
        availability: "June 2025",
        responseTime: "30 minutes",
        coverLetter: "I'm a sophomore at MIT double majoring in Computer Science and Mathematics. Despite being early in my academic career, I've already contributed to open-source projects and built several full-stack applications. I'm passionate about clean code and algorithmic problem-solving, and I would love to contribute to TechCorp's innovative projects.",
        skills: ["Python", "JavaScript", "C++", "React", "TensorFlow", "Linux"],
        currentRole: "CS & Math Student at MIT",
        education: "B.S. Computer Science & Mathematics, MIT (Expected 2027)",
        languages: ["English (Native)", "Mandarin (Fluent)", "German (Basic)"],
        certifications: ["MIT Introduction to Algorithms Certificate", "Deep Learning Specialization"],
        portfolio: [
          { title: "Algorithm Visualizer", description: "Interactive algorithm learning tool", link: "#" },
          { title: "ML Stock Predictor", description: "TensorFlow-based prediction model", link: "#" },
        ],
        email: "sarah.chen@mit.edu",
        phone: "+1 (555) 333-4444"
      }
    ]
  }

  const handleAction = (applicantId: number, action: 'interview' | 'reject' | 'message') => {
    const applicant = internship.applications.find(a => a.id === applicantId)
    console.log(`${action} applicant:`, applicant?.name)
    // Here you would implement the actual action logic
  }

  const openApplicantDetails = (applicant: any) => {
    setSelectedApplicant(applicant)
    setShowApplicantDetails(true)
  }

  const getStatusColor = (status: string) => {
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

  const getJobStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-50 text-green-600 border-green-200"
      case "Draft":
        return "bg-yellow-50 text-yellow-600 border-yellow-200"
      case "Closed":
        return "bg-red-50 text-red-600 border-red-200"
      case "Paused":
        return "bg-orange-50 text-orange-600 border-orange-200"
      default:
        return "bg-slate-50 text-slate-600 border-slate-200"
    }
  }

  return (
    <div className="w-[65%] mx-auto py-8">
      {/* Header with Back Button */}
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-4 font-subheading text-primary-navy hover:bg-primary-navy/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Internships
        </Button>
        
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <h1 className="text-3xl font-heading text-primary-navy">{internship.title}</h1>
              <Badge className={`${getJobStatusColor(internship.status)} font-subheading px-3 py-1`}>
                {internship.status}
              </Badge>
            </div>
            <div className="flex items-center space-x-4 text-lg font-subheading text-slate-600 mb-4">
              <span className="flex items-center">
                <Building2 className="h-5 w-5 mr-2" />
                {internship.department}
              </span>
              <span>•</span>
              <span className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {internship.location}
              </span>
              <span>•</span>
              <span className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                <span className="font-heading text-green-600">{internship.salary}</span>
              </span>
            </div>
            <div className="flex items-center space-x-4 text-base font-subheading text-slate-500">
              <span>Posted by {internship.postedBy}</span>
              <span>•</span>
              <span>{internship.posted}</span>
              <span>•</span>
              <span>{internship.experience}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-subheading">
              Edit Internship
            </Button>
            <Button className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading">
              Promote Internship
            </Button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border-slate-200">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Users className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-2xl font-heading text-slate-900">{internship.applicants}</span>
            </div>
            <p className="font-subheading text-slate-600">Total Applications</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Eye className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-2xl font-heading text-slate-900">{internship.views}</span>
            </div>
            <p className="font-subheading text-slate-600">Internship Views</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Target className="h-6 w-6 text-purple-600 mr-2" />
              <span className="text-2xl font-heading text-slate-900">{((internship.applicants / internship.views) * 100).toFixed(1)}%</span>
            </div>
            <p className="font-subheading text-slate-600">Application Rate</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Calendar className="h-6 w-6 text-orange-600 mr-2" />
              <span className="text-2xl font-heading text-slate-900">22</span>
            </div>
            <p className="font-subheading text-slate-600">Days Left</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview" className="font-subheading">Overview</TabsTrigger>
          <TabsTrigger value="applicants" className="font-subheading">Applicants ({internship.applications.length})</TabsTrigger>
          <TabsTrigger value="analytics" className="font-subheading">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Internship Description */}
            <div className="lg:col-span-2">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="font-heading text-primary-navy">Internship Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-line font-subheading text-slate-700 leading-relaxed">
                      {internship.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Internship Details Sidebar */}
            <div className="space-y-6">
              {/* Skills Required */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="font-heading text-primary-navy">Skills Required</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="font-subheading border-slate-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="font-heading text-primary-navy">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-subheading">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message All Applicants
                  </Button>
                  <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 font-subheading">
                    <Download className="h-4 w-4 mr-2" />
                    Export Applications
                  </Button>
                  <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 font-subheading">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Share Internship
                  </Button>
                </CardContent>
              </Card>

              {/* Internship Timeline */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="font-heading text-primary-navy">Internship Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 font-subheading">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Posted</span>
                      <span className="font-heading text-slate-900">{internship.posted}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Internship Type</span>
                      <span className="font-heading text-slate-900">{internship.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Application Deadline</span>
                      <span className="font-heading text-slate-900">{internship.deadline}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Stipend Range</span>
                      <span className="font-heading text-green-600">{internship.salary}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="applicants" className="space-y-6">
          <div className="space-y-4">
            {internship.applications.map((applicant) => (
              <Card key={applicant.id} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4 flex-1">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={applicant.profileImage} />
                        <AvatarFallback className="bg-primary-navy text-white font-heading">
                          {applicant.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-heading text-primary-navy">{applicant.name}</h3>
                          <div className="flex items-center space-x-2">
                            <Badge className={`${getStatusColor(applicant.status)} font-subheading px-3 py-1`}>
                              {applicant.status}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="font-subheading text-slate-600 mb-2">{applicant.title}</p>
                        
                        <div className="flex items-center space-x-4 text-sm font-subheading text-slate-500 mb-3">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="font-heading">{applicant.rating}</span>
                            <span className="ml-1">({applicant.reviews} reviews)</span>
                          </div>
                          <span>•</span>
                          <span>{applicant.experience}</span>
                          <span>•</span>
                          <span>{applicant.currentCompany}</span>
                          <span>•</span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {applicant.location}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-6 mb-4">
                          <div>
                            <span className="text-sm font-subheading text-slate-500">Expected Stipend</span>
                            <p className="text-lg font-heading text-green-600">{applicant.expectedSalary}</p>
                          </div>
                          <div>
                            <span className="text-sm font-subheading text-slate-500">Experience</span>
                            <p className="text-lg font-heading text-slate-900">{applicant.experience}</p>
                          </div>
                          <div>
                            <span className="text-sm font-subheading text-slate-500">Response Time</span>
                            <p className="text-lg font-heading text-slate-900">{applicant.responseTime}</p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-heading text-slate-900 mb-2">Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {applicant.skills.slice(0, 4).map((skill, index) => (
                              <Badge key={index} variant="outline" className="font-subheading text-xs border-slate-300">
                                {skill}
                              </Badge>
                            ))}
                            {applicant.skills.length > 4 && (
                              <Badge variant="outline" className="font-subheading text-xs border-slate-300">
                                +{applicant.skills.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Button 
                            className="bg-green-600 hover:bg-green-700 text-white rounded-lg font-subheading"
                            onClick={() => handleAction(applicant.id, 'interview')}
                          >
                            <UserCheck className="h-4 w-4 mr-2" />
                            Interview
                          </Button>
                          <Button 
                            variant="outline" 
                            className="border-red-300 text-red-600 hover:bg-red-50 rounded-lg font-subheading"
                            onClick={() => handleAction(applicant.id, 'reject')}
                          >
                            <UserX className="h-4 w-4 mr-2" />
                            Reject
                          </Button>
                          <Button 
                            variant="outline" 
                            className="border-blue-300 text-blue-600 hover:bg-blue-50 rounded-lg font-subheading"
                            onClick={() => handleAction(applicant.id, 'message')}
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                          <Button 
                            variant="outline" 
                            className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg font-subheading"
                            onClick={() => openApplicantDetails(applicant)}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="font-heading text-primary-navy">Application Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-subheading text-slate-600">Total Applications</span>
                    <span className="font-heading text-2xl text-slate-900">{internship.applicants}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-subheading text-slate-600">Average Academic Year</span>
                    <span className="font-heading text-2xl text-green-600">Junior</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-subheading text-slate-600">Stipend Range</span>
                    <span className="font-heading text-lg text-slate-900">$5.5K - $6.5K/mo</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="font-heading text-primary-navy">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-subheading text-slate-600">Views</span>
                    <span className="font-heading text-2xl text-slate-900">{internship.views}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-subheading text-slate-600">Application Rate</span>
                    <span className="font-heading text-2xl text-blue-600">{((internship.applicants / internship.views) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-subheading text-slate-600">Response Time</span>
                    <span className="font-heading text-lg text-slate-900">1.1 hours avg</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Applicant Details Modal */}
      {showApplicantDetails && selectedApplicant && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading text-primary-navy">Applicant Details</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowApplicantDetails(false)}
                  className="rounded-xl"
                >
                  <XCircle className="h-6 w-6" />
                </Button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Profile Info */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={selectedApplicant.profileImage} />
                      <AvatarFallback className="bg-primary-navy text-white font-heading text-2xl">
                        {selectedApplicant.name.split(' ').map((n: string) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-2xl font-heading text-primary-navy">{selectedApplicant.name}</h3>
                    <p className="font-subheading text-slate-600 mb-2">{selectedApplicant.title}</p>
                    <div className="flex items-center justify-center mb-4">
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <span className="font-heading text-lg">{selectedApplicant.rating}</span>
                      <span className="font-subheading text-slate-500 ml-1">({selectedApplicant.reviews} reviews)</span>
                    </div>
                  </div>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="font-heading text-primary-navy text-lg">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-slate-500 mr-3" />
                        <span className="font-subheading text-slate-700">{selectedApplicant.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-slate-500 mr-3" />
                        <span className="font-subheading text-slate-700">{selectedApplicant.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-slate-500 mr-3" />
                        <span className="font-subheading text-slate-700">{selectedApplicant.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 text-slate-500 mr-3" />
                        <span className="font-subheading text-slate-700">{selectedApplicant.availability}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="font-heading text-primary-navy text-lg">Quick Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-subheading text-slate-600">Academic Level</span>
                        <span className="font-heading text-slate-900">{selectedApplicant.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-subheading text-slate-600">University</span>
                        <span className="font-heading text-slate-900">{selectedApplicant.currentCompany}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-subheading text-slate-600">Response Time</span>
                        <span className="font-heading text-slate-900">{selectedApplicant.responseTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-subheading text-slate-600">Expected Stipend</span>
                        <span className="font-heading text-green-600">{selectedApplicant.expectedSalary}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Detailed Info */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="font-heading text-primary-navy">Cover Letter</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-subheading text-slate-700 leading-relaxed">{selectedApplicant.coverLetter}</p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="font-heading text-primary-navy">Skills & Expertise</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {selectedApplicant.skills.map((skill: string, index: number) => (
                          <Badge key={index} variant="outline" className="font-subheading border-slate-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="font-heading text-primary-navy">Portfolio</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {selectedApplicant.portfolio.map((item: any, index: number) => (
                          <div key={index} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                            <div>
                              <h4 className="font-heading text-slate-900">{item.title}</h4>
                              <p className="font-subheading text-slate-600 text-sm">{item.description}</p>
                            </div>
                            <Button variant="outline" size="sm" className="font-subheading">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-slate-200">
                      <CardHeader>
                        <CardTitle className="font-heading text-primary-navy">Education</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-subheading text-slate-700">{selectedApplicant.education}</p>
                      </CardContent>
                    </Card>

                    <Card className="border-slate-200">
                      <CardHeader>
                        <CardTitle className="font-heading text-primary-navy">Current Role</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-subheading text-slate-700">{selectedApplicant.currentRole}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="font-heading text-primary-navy">Languages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {selectedApplicant.languages.map((language: string, index: number) => (
                          <Badge key={index} variant="outline" className="font-subheading border-slate-300">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="font-heading text-primary-navy">Certifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {selectedApplicant.certifications.map((cert: string, index: number) => (
                          <div key={index} className="flex items-center">
                            <Award className="h-4 w-4 text-blue-600 mr-2" />
                            <span className="font-subheading text-slate-700">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4 mt-8 pt-6 border-t border-slate-200">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white rounded-lg font-subheading px-8 py-3"
                  onClick={() => {
                    handleAction(selectedApplicant.id, 'interview')
                    setShowApplicantDetails(false)
                  }}
                >
                  <UserCheck className="h-4 w-4 mr-2" />
                  Interview {selectedApplicant.name}
                </Button>
                <Button 
                  variant="outline" 
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 rounded-lg font-subheading px-8 py-3"
                  onClick={() => {
                    handleAction(selectedApplicant.id, 'message')
                    setShowApplicantDetails(false)
                  }}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button 
                  variant="outline" 
                  className="border-red-300 text-red-600 hover:bg-red-50 rounded-lg font-subheading px-8 py-3"
                  onClick={() => {
                    handleAction(selectedApplicant.id, 'reject')
                    setShowApplicantDetails(false)
                  }}
                >
                  <UserX className="h-4 w-4 mr-2" />
                  Reject Application
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 