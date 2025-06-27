"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ArrowLeft,
  Camera,
  Save,
  X,
  Upload,
  MapPin,
  Mail,
  Phone,
  Globe,
  User,
  Briefcase,
  FileText,
  Settings,
  Award,
  Code,
  FolderOpen,
  GraduationCap,
  Building,
  Languages,
  Plus,
  Trash2
} from "lucide-react"

export default function EditProfilePage() {
  const router = useRouter()
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    title: "Senior Software Engineer at TechCorp",
    location: "San Francisco, CA",
    email: "alex.johnson@email.com",
    phone: "(555) 123-4567",
    website: "alexjohnson.dev",
    bio: "Passionate software engineer with 7+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. I love solving complex problems and mentoring junior developers. Currently focused on building AI-powered solutions that make a positive impact on people's lives.",
    status: "Open to work",
    company: "TechCorp",
    jobTitle: "Senior Software Engineer",
    yearsExperience: "7+",
    availability: "Available for opportunities"
  })

  const [skills, setSkills] = useState([
    "React", "Node.js", "TypeScript", "Python", "AWS", "Docker"
  ])

  const [certifications, setCertifications] = useState([
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-12345"
    }
  ])

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform using React and Node.js",
      technologies: "React, Node.js, MongoDB",
      link: "https://github.com/alexjohnson/ecommerce"
    }
  ])

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      startYear: "2012",
      endYear: "2016",
      description: "Focused on software engineering and data structures"
    }
  ])

  const [experience, setExperience] = useState([
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp",
      startDate: "2020",
      endDate: "Present",
      description: "Lead development of microservices architecture and mentored junior developers"
    }
  ])

  const [languages, setLanguages] = useState([
    { id: 1, language: "English", proficiency: "Native" },
    { id: 2, language: "Spanish", proficiency: "Conversational" }
  ])

  const [activeTab, setActiveTab] = useState("basic")

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const addSkill = (skill: string) => {
    if (skill.trim() && !skills.includes(skill.trim())) {
      setSkills([...skills, skill.trim()])
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove))
  }

  const addCertification = () => {
    const newCert = {
      id: Date.now(),
      name: "",
      issuer: "",
      date: "",
      credentialId: ""
    }
    setCertifications([...certifications, newCert])
  }

  const updateCertification = (id: number, field: string, value: string) => {
    setCertifications(certifications.map(cert => 
      cert.id === id ? { ...cert, [field]: value } : cert
    ))
  }

  const removeCertification = (id: number) => {
    setCertifications(certifications.filter(cert => cert.id !== id))
  }

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: "",
      description: "",
      technologies: "",
      link: ""
    }
    setProjects([...projects, newProject])
  }

  const updateProject = (id: number, field: string, value: string) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    ))
  }

  const removeProject = (id: number) => {
    setProjects(projects.filter(project => project.id !== id))
  }

  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      degree: "",
      school: "",
      startYear: "",
      endYear: "",
      description: ""
    }
    setEducation([...education, newEducation])
  }

  const updateEducation = (id: number, field: string, value: string) => {
    setEducation(education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ))
  }

  const removeEducation = (id: number) => {
    setEducation(education.filter(edu => edu.id !== id))
  }

  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      description: ""
    }
    setExperience([...experience, newExperience])
  }

  const updateExperience = (id: number, field: string, value: string) => {
    setExperience(experience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ))
  }

  const removeExperience = (id: number) => {
    setExperience(experience.filter(exp => exp.id !== id))
  }

  const addLanguage = () => {
    const newLanguage = {
      id: Date.now(),
      language: "",
      proficiency: "Beginner"
    }
    setLanguages([...languages, newLanguage])
  }

  const updateLanguage = (id: number, field: string, value: string) => {
    setLanguages(languages.map(lang => 
      lang.id === id ? { ...lang, [field]: value } : lang
    ))
  }

  const removeLanguage = (id: number) => {
    setLanguages(languages.filter(lang => lang.id !== id))
  }

  const handleSaveProfile = () => {
    // Here you would typically send the data to your backend API
    console.log("Saving profile data:", {
      profileData,
      skills,
      certifications,
      projects,
      education,
      experience,
      languages
    })
    // Show success message and redirect back to profile
    alert("Profile updated successfully!")
    router.push("/profile")
  }

  const handleCancel = () => {
    router.push("/profile")
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <div className="w-full min-h-screen bg-slate-50">
      {/* Header */}
      <div className="w-full bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleCancel}
                className="rounded-full hover:bg-slate-100 flex-shrink-0"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy truncate">Edit Profile</h1>
                <p className="text-xs sm:text-sm text-slate-600 font-subheading hidden sm:block">Update your professional information</p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-3 flex-shrink-0">
              <Button variant="outline" onClick={handleCancel} className="font-subheading text-sm px-3 sm:px-4">
                Cancel
              </Button>
              <Button onClick={handleSaveProfile} className="bg-primary-navy hover:bg-primary-navy/90 font-subheading text-sm px-3 sm:px-4">
                <Save className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Save Changes</span>
                <span className="sm:hidden">Save</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card className="sticky top-4">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg font-heading text-primary-navy">Edit Sections</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 sm:space-y-2">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-1 sm:gap-2">
                  <Button
                    variant={activeTab === "basic" ? "default" : "ghost"}
                    className={`w-full justify-start font-subheading text-xs sm:text-sm py-2 h-auto ${
                      activeTab === "basic" ? "bg-primary-navy text-white" : "text-slate-600"
                    }`}
                    onClick={() => setActiveTab("basic")}
                  >
                    <User className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="truncate">Basic Info</span>
                  </Button>
                  <Button
                    variant={activeTab === "professional" ? "default" : "ghost"}
                    className={`w-full justify-start font-subheading text-xs sm:text-sm py-2 h-auto ${
                      activeTab === "professional" ? "bg-primary-navy text-white" : "text-slate-600"
                    }`}
                    onClick={() => setActiveTab("professional")}
                  >
                    <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="truncate">Professional</span>
                  </Button>
                  <Button
                    variant={activeTab === "experience" ? "default" : "ghost"}
                    className={`w-full justify-start font-subheading text-xs sm:text-sm py-2 h-auto ${
                      activeTab === "experience" ? "bg-primary-navy text-white" : "text-slate-600"
                    }`}
                    onClick={() => setActiveTab("experience")}
                  >
                    <Building className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="truncate">Experience</span>
                  </Button>
                  <Button
                    variant={activeTab === "education" ? "default" : "ghost"}
                    className={`w-full justify-start font-subheading text-xs sm:text-sm py-2 h-auto ${
                      activeTab === "education" ? "bg-primary-navy text-white" : "text-slate-600"
                    }`}
                    onClick={() => setActiveTab("education")}
                  >
                    <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="truncate">Education</span>
                  </Button>
                  <Button
                    variant={activeTab === "skills" ? "default" : "ghost"}
                    className={`w-full justify-start font-subheading text-xs sm:text-sm py-2 h-auto ${
                      activeTab === "skills" ? "bg-primary-navy text-white" : "text-slate-600"
                    }`}
                    onClick={() => setActiveTab("skills")}
                  >
                    <Code className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="truncate">Skills</span>
                  </Button>
                  <Button
                    variant={activeTab === "projects" ? "default" : "ghost"}
                    className={`w-full justify-start font-subheading text-xs sm:text-sm py-2 h-auto ${
                      activeTab === "projects" ? "bg-primary-navy text-white" : "text-slate-600"
                    }`}
                    onClick={() => setActiveTab("projects")}
                  >
                    <FolderOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="truncate">Projects</span>
                  </Button>
                  <Button
                    variant={activeTab === "certifications" ? "default" : "ghost"}
                    className={`w-full justify-start font-subheading text-xs sm:text-sm py-2 h-auto ${
                      activeTab === "certifications" ? "bg-primary-navy text-white" : "text-slate-600"
                    }`}
                    onClick={() => setActiveTab("certifications")}
                  >
                    <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="truncate">Certifications</span>
                  </Button>
                  <Button
                    variant={activeTab === "languages" ? "default" : "ghost"}
                    className={`w-full justify-start font-subheading text-xs sm:text-sm py-2 h-auto ${
                      activeTab === "languages" ? "bg-primary-navy text-white" : "text-slate-600"
                    }`}
                    onClick={() => setActiveTab("languages")}
                  >
                    <Languages className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="truncate">Languages</span>
                  </Button>
                  <Button
                    variant={activeTab === "about" ? "default" : "ghost"}
                    className={`w-full justify-start font-subheading text-xs sm:text-sm py-2 h-auto ${
                      activeTab === "about" ? "bg-primary-navy text-white" : "text-slate-600"
                    }`}
                    onClick={() => setActiveTab("about")}
                  >
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="truncate">About & Bio</span>
                  </Button>
                  <Button
                    variant={activeTab === "settings" ? "default" : "ghost"}
                    className={`w-full justify-start font-subheading text-xs sm:text-sm py-2 h-auto ${
                      activeTab === "settings" ? "bg-primary-navy text-white" : "text-slate-600"
                    }`}
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="truncate">Settings</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6 order-1 lg:order-2">
            {/* Profile Picture Section */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-base sm:text-lg font-heading text-primary-navy">Profile Picture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="relative">
                    <Avatar className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32">
                      <AvatarImage src="/professional-user-avatar.png" alt={profileData.name} />
                      <AvatarFallback className="text-lg sm:text-xl md:text-2xl font-heading bg-gradient-to-br from-primary-navy to-[#0056B3] text-white">
                        {getInitials(profileData.name)}
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute bottom-0 right-0 h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-white shadow-lg hover:shadow-xl border-2 border-slate-100"
                    >
                      <Camera className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                  <div className="text-center sm:text-left">
                    <Button variant="outline" className="font-subheading text-sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload New Photo
                    </Button>
                    <p className="text-xs sm:text-sm text-slate-500 mt-2 font-subheading">
                      JPG, PNG or GIF. Max size 5MB.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dynamic Content Based on Active Tab */}
            {activeTab === "basic" && (
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg font-heading text-primary-navy">Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-subheading text-sm">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        className="font-subheading text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-subheading text-sm">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        className="font-subheading text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-subheading text-sm">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        className="font-subheading text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="font-subheading text-sm">Location</Label>
                      <Input
                        id="location"
                        value={profileData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="City, State/Country"
                        className="font-subheading text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="font-subheading text-sm">Website</Label>
                    <Input
                      id="website"
                      value={profileData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      placeholder="yourwebsite.com"
                      className="font-subheading text-sm"
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "professional" && (
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg font-heading text-primary-navy">Professional Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="font-subheading text-sm">Professional Title</Label>
                    <Input
                      id="title"
                      value={profileData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="Your professional title"
                      className="font-subheading text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="font-subheading text-sm">Current Company</Label>
                      <Input
                        id="company"
                        value={profileData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Company name"
                        className="font-subheading text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience" className="font-subheading text-sm">Years of Experience</Label>
                      <Select value={profileData.yearsExperience} onValueChange={(value) => handleInputChange('yearsExperience', value)}>
                        <SelectTrigger className="font-subheading text-sm">
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="2-3">2-3 years</SelectItem>
                          <SelectItem value="4-5">4-5 years</SelectItem>
                          <SelectItem value="6-7">6-7 years</SelectItem>
                          <SelectItem value="7+">7+ years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status" className="font-subheading text-sm">Work Status</Label>
                    <Select value={profileData.status} onValueChange={(value) => handleInputChange('status', value)}>
                      <SelectTrigger className="font-subheading text-sm">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Open to work">Open to work</SelectItem>
                        <SelectItem value="Currently employed">Currently employed</SelectItem>
                        <SelectItem value="Freelancing">Freelancing</SelectItem>
                        <SelectItem value="Not looking">Not looking</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "experience" && (
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <CardTitle className="text-base sm:text-lg font-heading text-primary-navy">Work Experience</CardTitle>
                    <Button onClick={addExperience} size="sm" className="bg-primary-navy hover:bg-primary-navy/90 text-sm w-full sm:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Experience
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  {experience.map((exp) => (
                    <div key={exp.id} className="p-3 sm:p-4 border border-slate-200 rounded-lg space-y-3 sm:space-y-4">
                      <div className="flex justify-between items-start">
                        <h4 className="font-subheading font-medium text-sm">Experience Entry</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeExperience(exp.id)}
                          className="text-red-600 hover:text-red-700 h-8 w-8 p-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-2">
                          <Label className="font-subheading text-sm">Job Title</Label>
                          <Input
                            value={exp.title}
                            onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                            placeholder="Senior Software Engineer"
                            className="font-subheading text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="font-subheading text-sm">Company</Label>
                          <Input
                            value={exp.company}
                            onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                            placeholder="Company Name"
                            className="font-subheading text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-2">
                          <Label className="font-subheading text-sm">Start Date</Label>
                          <Input
                            value={exp.startDate}
                            onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                            placeholder="2020"
                            className="font-subheading text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="font-subheading text-sm">End Date</Label>
                          <Input
                            value={exp.endDate}
                            onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                            placeholder="Present"
                            className="font-subheading text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-subheading text-sm">Description</Label>
                        <Textarea
                          value={exp.description}
                          onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                          placeholder="Describe your responsibilities and achievements..."
                          className="font-subheading text-sm min-h-[80px] sm:min-h-[100px]"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {activeTab === "education" && (
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <CardTitle className="text-base sm:text-lg font-heading text-primary-navy">Education</CardTitle>
                    <Button onClick={addEducation} size="sm" className="bg-primary-navy hover:bg-primary-navy/90 text-sm w-full sm:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Education
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  {education.map((edu) => (
                    <div key={edu.id} className="p-3 sm:p-4 border border-slate-200 rounded-lg space-y-3 sm:space-y-4">
                      <div className="flex justify-between items-start">
                        <h4 className="font-subheading font-medium text-sm">Education Entry</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeEducation(edu.id)}
                          className="text-red-600 hover:text-red-700 h-8 w-8 p-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="font-subheading text-sm">Degree</Label>
                        <Input
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                          placeholder="Bachelor of Science in Computer Science"
                          className="font-subheading text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-subheading text-sm">School/University</Label>
                        <Input
                          value={edu.school}
                          onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                          placeholder="University Name"
                          className="font-subheading text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-2">
                          <Label className="font-subheading text-sm">Start Year</Label>
                          <Input
                            value={edu.startYear}
                            onChange={(e) => updateEducation(edu.id, 'startYear', e.target.value)}
                            placeholder="2012"
                            className="font-subheading text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="font-subheading text-sm">End Year</Label>
                          <Input
                            value={edu.endYear}
                            onChange={(e) => updateEducation(edu.id, 'endYear', e.target.value)}
                            placeholder="2016"
                            className="font-subheading text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-subheading text-sm">Description</Label>
                        <Textarea
                          value={edu.description}
                          onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                          placeholder="Additional details about your education..."
                          className="font-subheading text-sm min-h-[80px] sm:min-h-[100px]"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {activeTab === "skills" && (
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg font-heading text-primary-navy">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="space-y-2">
                    <Label className="font-subheading text-sm">Add New Skill</Label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter a skill (e.g., React, Python, AWS)"
                        className="font-subheading text-sm flex-1"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            addSkill(e.currentTarget.value)
                            e.currentTarget.value = ''
                          }
                        }}
                      />
                      <Button
                        onClick={(e) => {
                          const input = e.currentTarget.previousElementSibling as HTMLInputElement
                          addSkill(input.value)
                          input.value = ''
                        }}
                        className="bg-primary-navy hover:bg-primary-navy/90 px-3 flex-shrink-0"
                        size="sm"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-subheading text-sm">Current Skills</Label>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="font-subheading text-xs sm:text-sm">
                          {skill}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeSkill(skill)}
                            className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 p-0 hover:bg-transparent"
                          >
                            <X className="h-2 w-2 sm:h-3 sm:w-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "projects" && (
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <CardTitle className="text-base sm:text-lg font-heading text-primary-navy">Featured Projects</CardTitle>
                    <Button onClick={addProject} size="sm" className="bg-primary-navy hover:bg-primary-navy/90 text-sm w-full sm:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Project
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  {projects.map((project) => (
                    <div key={project.id} className="p-3 sm:p-4 border border-slate-200 rounded-lg space-y-3 sm:space-y-4">
                      <div className="flex justify-between items-start">
                        <h4 className="font-subheading font-medium text-sm">Project Entry</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeProject(project.id)}
                          className="text-red-600 hover:text-red-700 h-8 w-8 p-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="font-subheading text-sm">Project Title</Label>
                        <Input
                          value={project.title}
                          onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                          placeholder="E-commerce Platform"
                          className="font-subheading text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-subheading text-sm">Description</Label>
                        <Textarea
                          value={project.description}
                          onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                          placeholder="Describe your project and what you built..."
                          className="font-subheading text-sm min-h-[80px] sm:min-h-[100px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-subheading text-sm">Technologies Used</Label>
                        <Input
                          value={project.technologies}
                          onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                          placeholder="React, Node.js, MongoDB"
                          className="font-subheading text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-subheading text-sm">Project Link</Label>
                        <Input
                          value={project.link}
                          onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                          placeholder="https://github.com/username/project"
                          className="font-subheading text-sm"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {activeTab === "certifications" && (
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <CardTitle className="text-base sm:text-lg font-heading text-primary-navy">Certifications</CardTitle>
                    <Button onClick={addCertification} size="sm" className="bg-primary-navy hover:bg-primary-navy/90 text-sm w-full sm:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Certification
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="p-3 sm:p-4 border border-slate-200 rounded-lg space-y-3 sm:space-y-4">
                      <div className="flex justify-between items-start">
                        <h4 className="font-subheading font-medium text-sm">Certification Entry</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeCertification(cert.id)}
                          className="text-red-600 hover:text-red-700 h-8 w-8 p-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="font-subheading text-sm">Certification Name</Label>
                        <Input
                          value={cert.name}
                          onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                          placeholder="AWS Certified Solutions Architect"
                          className="font-subheading text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-2">
                          <Label className="font-subheading text-sm">Issuing Organization</Label>
                          <Input
                            value={cert.issuer}
                            onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                            placeholder="Amazon Web Services"
                            className="font-subheading text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="font-subheading text-sm">Issue Date</Label>
                          <Input
                            value={cert.date}
                            onChange={(e) => updateCertification(cert.id, 'date', e.target.value)}
                            placeholder="2023"
                            className="font-subheading text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-subheading text-sm">Credential ID</Label>
                        <Input
                          value={cert.credentialId}
                          onChange={(e) => updateCertification(cert.id, 'credentialId', e.target.value)}
                          placeholder="AWS-12345"
                          className="font-subheading text-sm"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {activeTab === "languages" && (
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <CardTitle className="text-base sm:text-lg font-heading text-primary-navy">Languages</CardTitle>
                    <Button onClick={addLanguage} size="sm" className="bg-primary-navy hover:bg-primary-navy/90 text-sm w-full sm:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Language
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  {languages.map((lang) => (
                    <div key={lang.id} className="p-3 sm:p-4 border border-slate-200 rounded-lg">
                      <div className="flex justify-between items-start mb-3 sm:mb-4">
                        <h4 className="font-subheading font-medium text-sm">Language Entry</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeLanguage(lang.id)}
                          className="text-red-600 hover:text-red-700 h-8 w-8 p-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-2">
                          <Label className="font-subheading text-sm">Language</Label>
                          <Input
                            value={lang.language}
                            onChange={(e) => updateLanguage(lang.id, 'language', e.target.value)}
                            placeholder="Spanish"
                            className="font-subheading text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="font-subheading text-sm">Proficiency Level</Label>
                          <Select value={lang.proficiency} onValueChange={(value) => updateLanguage(lang.id, 'proficiency', value)}>
                            <SelectTrigger className="font-subheading text-sm">
                              <SelectValue placeholder="Select proficiency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Beginner">Beginner</SelectItem>
                              <SelectItem value="Conversational">Conversational</SelectItem>
                              <SelectItem value="Proficient">Proficient</SelectItem>
                              <SelectItem value="Fluent">Fluent</SelectItem>
                              <SelectItem value="Native">Native</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {activeTab === "about" && (
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg font-heading text-primary-navy">About & Biography</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bio" className="font-subheading text-sm">Professional Bio</Label>
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      placeholder="Tell us about yourself, your experience, and what you're passionate about..."
                      className="min-h-[120px] sm:min-h-[140px] font-subheading text-sm"
                    />
                    <p className="text-xs sm:text-sm text-slate-500 font-subheading">
                      {profileData.bio.length}/500 characters
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-subheading text-sm">Current Status</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-50 text-green-700 border-green-200 font-subheading text-xs sm:text-sm">
                        {profileData.status}
                      </Badge>
                      <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-subheading text-xs sm:text-sm">
                        Remote friendly
                      </Badge>
                      <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200 font-subheading text-xs sm:text-sm">
                        Mentor available
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "settings" && (
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg font-heading text-primary-navy">Profile Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-subheading font-medium text-sm">Profile Visibility</h4>
                        <p className="text-xs sm:text-sm text-slate-500 font-subheading">Control who can see your profile</p>
                      </div>
                      <Select defaultValue="public">
                        <SelectTrigger className="w-full sm:w-32 font-subheading text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                          <SelectItem value="connections">Connections only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-subheading font-medium text-sm">Contact Preferences</h4>
                        <p className="text-xs sm:text-sm text-slate-500 font-subheading">How others can contact you</p>
                      </div>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-full sm:w-32 font-subheading text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Everyone</SelectItem>
                          <SelectItem value="connections">Connections</SelectItem>
                          <SelectItem value="none">No one</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 