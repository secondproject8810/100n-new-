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
  Building,
  Calendar,
  Users,
  Briefcase,
  Settings,
  Award,
  Code,
  Plus,
  Trash2,
  FileText,
  Target,
  Zap,
  Building2
} from "lucide-react"

export default function EditCompanyProfilePage() {
  const router = useRouter()
  
  const [companyData, setCompanyData] = useState({
    name: "TechCorp Inc",
    tagline: "Leading Technology Solutions Provider",
    description: "TechCorp Inc is a leading technology solutions provider specializing in enterprise software development, cloud infrastructure, and AI-powered solutions. We serve Fortune 500 companies worldwide, helping them transform their digital capabilities and achieve sustainable growth. Founded in 2015, we've grown from a small startup to a globally recognized technology company with offices in San Francisco, New York, and London.",
    industry: "Technology",
    companySize: "51-200 employees",
    companyType: "Private Company",
    founded: "2015",
    headquarters: "San Francisco, CA",
    email: "contact@techcorp.com",
    phone: "(555) 987-6543",
    website: "techcorp.com",
    linkedIn: "linkedin.com/company/techcorp",
    twitter: "@techcorp",
    status: "Actively hiring"
  })

  const [specialties, setSpecialties] = useState([
    "Enterprise Software", "Cloud Infrastructure", "AI Solutions", "Machine Learning", "DevOps", "Cybersecurity"
  ])

  const [locations, setLocations] = useState([
    {
      id: 1,
      type: "Headquarters",
      address: "123 Tech Street, San Francisco, CA 94105",
      employees: "150+"
    },
    {
      id: 2,
      type: "Branch Office",
      address: "456 Innovation Ave, New York, NY 10001",
      employees: "50+"
    }
  ])

  const [benefits, setBenefits] = useState([
    "Health Insurance", "Dental & Vision", "401(k) Matching", "Remote Work", "Flexible Hours", "Professional Development"
  ])

  const [activeTab, setActiveTab] = useState("basic")

  const handleInputChange = (field: string, value: string) => {
    setCompanyData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const addSpecialty = (specialty: string) => {
    if (specialty.trim() && !specialties.includes(specialty.trim())) {
      setSpecialties([...specialties, specialty.trim()])
    }
  }

  const removeSpecialty = (specialtyToRemove: string) => {
    setSpecialties(specialties.filter(specialty => specialty !== specialtyToRemove))
  }

  const addLocation = () => {
    const newLocation = {
      id: Date.now(),
      type: "",
      address: "",
      employees: ""
    }
    setLocations([...locations, newLocation])
  }

  const updateLocation = (id: number, field: string, value: string) => {
    setLocations(locations.map(location => 
      location.id === id ? { ...location, [field]: value } : location
    ))
  }

  const removeLocation = (id: number) => {
    setLocations(locations.filter(location => location.id !== id))
  }

  const addBenefit = (benefit: string) => {
    if (benefit.trim() && !benefits.includes(benefit.trim())) {
      setBenefits([...benefits, benefit.trim()])
    }
  }

  const removeBenefit = (benefitToRemove: string) => {
    setBenefits(benefits.filter(benefit => benefit !== benefitToRemove))
  }

  const handleSaveProfile = () => {
    // Here you would typically save to your backend
    console.log("Saving company profile:", {
      companyData,
      specialties,
      locations,
      benefits
    })
    
    // Show success message or redirect
    router.push("/company-profile")
  }

  const handleCancel = () => {
    router.back()
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  const tabs = [
    { id: "basic", label: "Basic Info", icon: Building },
    { id: "contact", label: "Contact", icon: Mail },
    { id: "about", label: "About", icon: FileText },
    { id: "locations", label: "Locations", icon: MapPin },
    { id: "culture", label: "Culture", icon: Users }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCancel}
                className="rounded-full h-8 w-8 sm:h-10 sm:w-10 text-gray-600 hover:bg-gray-100 flex-shrink-0"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Edit Company Profile</h1>
                <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Update your company information</p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-3 flex-shrink-0">
              <Button
                variant="outline"
                onClick={handleCancel}
                className="rounded-lg text-xs sm:text-sm px-2 sm:px-4 h-8 sm:h-10"
              >
                <span className="hidden sm:inline">Cancel</span>
                <span className="sm:hidden">Cancel</span>
              </Button>
              <Button
                onClick={handleSaveProfile}
                className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg text-xs sm:text-sm px-2 sm:px-4 h-8 sm:h-10"
              >
                <Save className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Save Changes</span>
                <span className="sm:hidden">Save</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Tab Navigation */}
      <div className="lg:hidden bg-white border-b border-gray-200 sticky top-16 z-10">
        <div className="overflow-x-auto">
          <div className="flex space-x-1 px-4 py-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`whitespace-nowrap text-xs h-8 px-3 flex-shrink-0 ${
                  activeTab === tab.id 
                    ? "bg-primary-navy text-white" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon className="h-3 w-3 mr-1" />
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Desktop Sidebar Navigation */}
            <div className="hidden lg:block lg:col-span-1">
              <Card className="sticky top-32">
                <CardHeader className="pb-4">
                  <CardTitle className="text-base font-medium">Sections</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 pt-0">
                  {tabs.map((tab) => (
                    <Button
                      key={tab.id}
                      variant={activeTab === tab.id ? "default" : "ghost"}
                      className={`w-full justify-start text-left h-10 ${
                        activeTab === tab.id 
                          ? "bg-primary-navy text-white" 
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <tab.icon className="h-4 w-4 mr-3" />
                      {tab.label}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-4 sm:space-y-6">
              
              {/* Company Logo Section */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-base sm:text-lg">
                    <Building2 className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Company Logo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="relative mx-auto sm:mx-0">
                      <Avatar className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-gray-200">
                        <AvatarImage src="/company-logo.png" alt={companyData.name} />
                        <AvatarFallback className="text-base sm:text-lg font-bold bg-primary-navy text-white">
                          {getInitials(companyData.name)}
                        </AvatarFallback>
                      </Avatar>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 h-6 w-6 sm:h-8 sm:w-8 rounded-full shadow-lg"
                      >
                        <Camera className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Company Logo</h3>
                      <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                        Upload a square logo that represents your company. Recommended size: 400x400px.
                      </p>
                      <Button variant="outline" size="sm" className="text-xs sm:text-sm h-8 sm:h-9">
                        <Upload className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Upload New Logo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Basic Information */}
              {activeTab === "basic" && (
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-base sm:text-lg">
                      <Building className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Basic Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium">Company Name *</Label>
                        <Input
                          id="name"
                          value={companyData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter company name"
                          className="mt-1.5 h-10"
                        />
                      </div>
                      <div>
                        <Label htmlFor="tagline" className="text-sm font-medium">Tagline</Label>
                        <Input
                          id="tagline"
                          value={companyData.tagline}
                          onChange={(e) => handleInputChange("tagline", e.target.value)}
                          placeholder="Brief description of your company"
                          className="mt-1.5 h-10"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <Label htmlFor="industry" className="text-sm font-medium">Industry *</Label>
                        <Select value={companyData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                          <SelectTrigger className="mt-1.5 h-10">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Technology">Technology</SelectItem>
                            <SelectItem value="Healthcare">Healthcare</SelectItem>
                            <SelectItem value="Finance">Finance</SelectItem>
                            <SelectItem value="Education">Education</SelectItem>
                            <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="Retail">Retail</SelectItem>
                            <SelectItem value="Consulting">Consulting</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="companySize" className="text-sm font-medium">Company Size</Label>
                        <Select value={companyData.companySize} onValueChange={(value) => handleInputChange("companySize", value)}>
                          <SelectTrigger className="mt-1.5 h-10">
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10 employees">1-10 employees</SelectItem>
                            <SelectItem value="11-50 employees">11-50 employees</SelectItem>
                            <SelectItem value="51-200 employees">51-200 employees</SelectItem>
                            <SelectItem value="201-500 employees">201-500 employees</SelectItem>
                            <SelectItem value="501-1000 employees">501-1000 employees</SelectItem>
                            <SelectItem value="1000+ employees">1000+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <Label htmlFor="companyType" className="text-sm font-medium">Company Type</Label>
                        <Select value={companyData.companyType} onValueChange={(value) => handleInputChange("companyType", value)}>
                          <SelectTrigger className="mt-1.5 h-10">
                            <SelectValue placeholder="Select company type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Private Company">Private Company</SelectItem>
                            <SelectItem value="Public Company">Public Company</SelectItem>
                            <SelectItem value="Startup">Startup</SelectItem>
                            <SelectItem value="Non-profit">Non-profit</SelectItem>
                            <SelectItem value="Government">Government</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="founded" className="text-sm font-medium">Founded Year</Label>
                        <Input
                          id="founded"
                          value={companyData.founded}
                          onChange={(e) => handleInputChange("founded", e.target.value)}
                          placeholder="e.g., 2015"
                          className="mt-1.5 h-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="status" className="text-sm font-medium">Company Status</Label>
                      <Select value={companyData.status} onValueChange={(value) => handleInputChange("status", value)}>
                        <SelectTrigger className="mt-1.5 h-10">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Actively hiring">Actively hiring</SelectItem>
                          <SelectItem value="Not hiring">Not hiring</SelectItem>
                          <SelectItem value="Selective hiring">Selective hiring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Contact Information */}
              {activeTab === "contact" && (
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-base sm:text-lg">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={companyData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="contact@company.com"
                          className="mt-1.5 h-10"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={companyData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="(555) 123-4567"
                          className="mt-1.5 h-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="headquarters" className="text-sm font-medium">Headquarters Address</Label>
                      <Input
                        id="headquarters"
                        value={companyData.headquarters}
                        onChange={(e) => handleInputChange("headquarters", e.target.value)}
                        placeholder="City, State/Country"
                        className="mt-1.5 h-10"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <Label htmlFor="website" className="text-sm font-medium">Website</Label>
                        <Input
                          id="website"
                          value={companyData.website}
                          onChange={(e) => handleInputChange("website", e.target.value)}
                          placeholder="company.com"
                          className="mt-1.5 h-10"
                        />
                      </div>
                      <div>
                        <Label htmlFor="linkedIn" className="text-sm font-medium">LinkedIn</Label>
                        <Input
                          id="linkedIn"
                          value={companyData.linkedIn}
                          onChange={(e) => handleInputChange("linkedIn", e.target.value)}
                          placeholder="linkedin.com/company/yourcompany"
                          className="mt-1.5 h-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="twitter" className="text-sm font-medium">Twitter</Label>
                      <Input
                        id="twitter"
                        value={companyData.twitter}
                        onChange={(e) => handleInputChange("twitter", e.target.value)}
                        placeholder="@yourcompany"
                        className="mt-1.5 h-10"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* About Section */}
              {activeTab === "about" && (
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-base sm:text-lg">
                      <FileText className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      About Your Company
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    <div>
                      <Label htmlFor="description" className="text-sm font-medium">Company Description *</Label>
                      <Textarea
                        id="description"
                        value={companyData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Tell people about your company, what you do, your mission, and what makes you unique..."
                        className="mt-1.5 min-h-[100px] sm:min-h-[120px] text-sm"
                        maxLength={2000}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {companyData.description.length}/2000 characters
                      </p>
                    </div>

                    <div>
                      <Label className="text-sm font-medium">Specialties</Label>
                      <p className="text-xs sm:text-sm text-gray-500 mb-3">
                        Add your company's main areas of expertise and services
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="flex items-center gap-1 text-xs px-2 py-1">
                            {specialty}
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-4 w-4 hover:bg-red-100 ml-1"
                              onClick={() => removeSpecialty(specialty)}
                            >
                              <X className="h-2.5 w-2.5" />
                            </Button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Input
                          placeholder="Add a specialty..."
                          className="flex-1 h-10 text-sm"
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              addSpecialty(e.currentTarget.value)
                              e.currentTarget.value = ''
                            }
                          }}
                        />
                        <Button 
                          variant="outline" 
                          className="h-10 px-3 text-sm flex-shrink-0"
                          onClick={(e) => {
                            const input = e.currentTarget.previousElementSibling as HTMLInputElement
                            addSpecialty(input.value)
                            input.value = ''
                          }}
                        >
                          <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Locations */}
              {activeTab === "locations" && (
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-center text-base sm:text-lg">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Office Locations
                      </div>
                      <Button onClick={addLocation} size="sm" variant="outline" className="text-xs sm:text-sm h-8 sm:h-9 w-full sm:w-auto">
                        <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Add Location
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {locations.map((location) => (
                      <div key={location.id} className="border rounded-lg p-3 sm:p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-sm sm:text-base">Location {location.id}</h4>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => removeLocation(location.id)}
                            className="h-7 w-7 sm:h-8 sm:w-8 text-red-500 hover:bg-red-50"
                          >
                            <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm font-medium">Location Type</Label>
                            <Select 
                              value={location.type} 
                              onValueChange={(value) => updateLocation(location.id, "type", value)}
                            >
                              <SelectTrigger className="mt-1.5 h-10">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Headquarters">Headquarters</SelectItem>
                                <SelectItem value="Branch Office">Branch Office</SelectItem>
                                <SelectItem value="Remote Office">Remote Office</SelectItem>
                                <SelectItem value="Co-working Space">Co-working Space</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label className="text-sm font-medium">Employee Count</Label>
                            <Input
                              value={location.employees}
                              onChange={(e) => updateLocation(location.id, "employees", e.target.value)}
                              placeholder="e.g., 50+"
                              className="mt-1.5 h-10"
                            />
                          </div>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Address</Label>
                          <Input
                            value={location.address}
                            onChange={(e) => updateLocation(location.id, "address", e.target.value)}
                            placeholder="Street address, City, State/Country"
                            className="mt-1.5 h-10"
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Culture & Benefits */}
              {activeTab === "culture" && (
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-base sm:text-lg">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Company Culture & Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    <div>
                      <Label className="text-sm font-medium">Employee Benefits</Label>
                      <p className="text-xs sm:text-sm text-gray-500 mb-3">
                        Highlight the benefits and perks you offer to employees
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {benefits.map((benefit, index) => (
                          <Badge key={index} variant="secondary" className="flex items-center gap-1 text-xs px-2 py-1">
                            {benefit}
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-4 w-4 hover:bg-red-100 ml-1"
                              onClick={() => removeBenefit(benefit)}
                            >
                              <X className="h-2.5 w-2.5" />
                            </Button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Input
                          placeholder="Add a benefit..."
                          className="flex-1 h-10 text-sm"
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              addBenefit(e.currentTarget.value)
                              e.currentTarget.value = ''
                            }
                          }}
                        />
                        <Button 
                          variant="outline" 
                          className="h-10 px-3 text-sm flex-shrink-0"
                          onClick={(e) => {
                            const input = e.currentTarget.previousElementSibling as HTMLInputElement
                            addBenefit(input.value)
                            input.value = ''
                          }}
                        >
                          <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 