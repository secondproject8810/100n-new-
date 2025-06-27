"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Search, Filter, MapPin, Users, Building2, Star, TrendingUp, Award, ChevronRight, Bookmark, Eye, Heart, Globe, Calendar, Shield, Zap, ArrowLeft, X, Send, MessageCircle, UserPlus, ExternalLink, CheckCircle, Phone, Mail, DollarSign, Clock, Target } from "lucide-react"
import Link from "next/link"
import SimplePreloader from "@/components/simple-preloader"

export default function EmployersPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showFilters, setShowFilters] = useState(false)
  const [followerRange, setFollowerRange] = useState([1000, 1000000])
  const [ratingRange, setRatingRange] = useState([3.0, 5.0])
  const [selectedCompany, setSelectedCompany] = useState<any>(null)
  const [showJobsModal, setShowJobsModal] = useState(false)
  const [followedCompanies, setFollowedCompanies] = useState<number[]>([2])

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 second loading time

    return () => clearTimeout(timer)
  }, [])

  const companies = [
    {
      id: 1,
      name: "Amazon",
      industry: "Internet & Software",
      followers: "145K",
      location: "Seattle, WA",
      employees: "25,000+",
      type: "Public",
      logo: "/placeholder.svg?height=48&width=48&query=amazon logo",
      logoFallback: "AM",
      isVerified: true,
      description: "Leading e-commerce and cloud computing company",
      openJobs: 235,
      rating: 4.2,
      founded: 1994,
      website: "amazon.com",
      phone: "+1 (206) 266-1000",
      email: "careers@amazon.com",
      about: "Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Amazon strives to be Earth's Most Customer-Centric Company, Earth's Best Employer, and Earth's Safest Place to Work. Consumer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by Amazon, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, Amazon Echo, Alexa, Just Walk Out technology, Amazon Studios, and The Climate Pledge are some of the things pioneered by Amazon.",
      mission: "To be Earth's Most Customer-Centric Company, where customers can find and discover anything they might want to buy online.",
      vision: "To be the global leader in e-commerce and cloud computing innovation.",
      values: ["Customer Obsession", "Ownership", "Invent and Simplify", "Learn and Be Curious", "Hire and Develop the Best"],
      benefits: ["Health Insurance", "401(k) Matching", "Stock Options", "Paid Time Off", "Parental Leave", "Professional Development"],
      culture: "Amazon's culture is built on 16 Leadership Principles that guide every decision and action. We believe in thinking big, having ownership, and being customer-obsessed.",
      recentNews: [
        "Amazon announces $15 billion investment in renewable energy projects",
        "New fulfillment center opening in Austin, creating 1,500 jobs",
        "Amazon Web Services launches new AI capabilities"
      ],
      jobOpenings: [
        {
          id: 1,
          title: "Software Development Engineer",
          department: "Engineering",
          location: "Seattle, WA",
          type: "Full-time",
          salaryRange: "$130,000 - $200,000",
          experience: "3-5 years",
          posted: "2 days ago",
          description: "Join our team to build scalable systems that serve millions of customers worldwide."
        },
        {
          id: 2,
          title: "Product Manager",
          department: "Product",
          location: "Seattle, WA",
          type: "Full-time",
          salaryRange: "$150,000 - $220,000",
          experience: "5+ years",
          posted: "1 week ago",
          description: "Lead product strategy and roadmap for our consumer-facing applications."
        },
        {
          id: 3,
          title: "Data Scientist",
          department: "Analytics",
          location: "Remote",
          type: "Full-time",
          salaryRange: "$140,000 - $190,000",
          experience: "3+ years",
          posted: "3 days ago",
          description: "Apply machine learning to solve complex business problems at scale."
        }
      ]
    },
    {
      id: 2,
      name: "100Networks",
      industry: "Internet & Software",
      followers: "2.08M",
      location: "San Francisco, CA",
      employees: "250 - 1,000",
      type: "Private",
      logo: null,
      logoFallback: "1N",
      isVerified: true,
      description: "Professional networking platform following talent with opportunities",
      openJobs: 47,
      rating: 4.8,
      founded: 2018,
      website: "100networks.com",
      phone: "+1 (415) 555-0100",
      email: "careers@100networks.com",
      about: "100Networks is revolutionizing professional networking by connecting talent with opportunities in innovative ways. Our platform uses advanced AI and machine learning to match professionals with their ideal career paths, companies, and growth opportunities.",
      mission: "To democratize professional opportunities and help every professional reach their full potential.",
      vision: "A world where talent and opportunity find each other effortlessly.",
      values: ["Innovation", "Transparency", "Diversity", "Growth", "Community"],
      benefits: ["Equity Package", "Unlimited PTO", "Health & Wellness", "Remote Work", "Learning Budget", "Team Retreats"],
      culture: "We're a fast-growing startup with a mission to change how people think about careers. Our culture values innovation, collaboration, and making a real impact.",
      recentNews: [
        "Raised $50M Series B funding led by top VCs",
        "Launched AI-powered career matching technology",
        "Expanded to 10 new cities across North America"
      ],
      jobOpenings: [
        {
          id: 4,
          title: "Senior Frontend Engineer",
          department: "Engineering",
          location: "San Francisco, CA",
          type: "Full-time",
          salaryRange: "$140,000 - $180,000",
          experience: "4+ years",
          posted: "1 day ago",
          description: "Build beautiful, responsive user interfaces for our growing platform."
        },
        {
          id: 5,
          title: "Growth Marketing Manager",
          department: "Marketing",
          location: "Remote",
          type: "Full-time",
          salaryRange: "$90,000 - $130,000",
          experience: "3+ years",
          posted: "5 days ago",
          description: "Drive user acquisition and retention through data-driven marketing campaigns."
        }
      ]
    },
    {
      id: 3,
      name: "Google",
      industry: "Internet & Software",
      followers: "71.6K",
      location: "Mountain View, CA",
      employees: "25,000+",
      type: "Public",
      logo: "/placeholder.svg?height=48&width=48&query=google logo",
      logoFallback: "GO",
      isVerified: true,
      description: "Organizing the world's information and making it universally accessible",
      openJobs: 156,
      rating: 4.5,
      founded: 1998,
      website: "google.com",
      phone: "+1 (650) 253-0000",
      email: "careers@google.com",
      about: "Google's mission is to organize the world's information and make it universally accessible and useful. Since our founding in 1998, Google has grown by leaps and bounds. From offering search in a single language we now offer dozens of products and services—including various forms of advertising and web applications for all kinds of tasks—in scores of languages.",
      mission: "To organize the world's information and make it universally accessible and useful.",
      vision: "To provide access to the world's information in one click.",
      values: ["Focus on the user", "Democracy on the web", "Fast is better than slow", "Great just isn't good enough"],
      benefits: ["Health Insurance", "401(k)", "Stock Options", "Free Meals", "On-site Gym", "Flexible Hours"],
      culture: "Google's culture is built on collaboration, innovation, and fun. We believe in empowering our employees to think big and make an impact.",
      recentNews: [
        "Google announces breakthrough in quantum computing",
        "New sustainability initiatives to achieve carbon neutrality",
        "Launch of next-generation AI assistant capabilities"
      ],
      jobOpenings: [
        {
          id: 6,
          title: "Software Engineer",
          department: "Engineering",
          location: "Mountain View, CA",
          type: "Full-time",
          salaryRange: "$120,000 - $180,000",
          experience: "2+ years",
          posted: "3 days ago",
          description: "Develop next-generation technologies that change how billions of users connect, explore, and interact."
        },
        {
          id: 7,
          title: "UX Designer",
          department: "Design",
          location: "New York, NY",
          type: "Full-time",
          salaryRange: "$110,000 - $160,000",
          experience: "3+ years",
          posted: "1 week ago",
          description: "Create intuitive and engaging user experiences across Google's product portfolio."
        }
      ]
    },
    {
      id: 4,
      name: "Microsoft",
      industry: "Internet & Software",
      followers: "89.3K",
      location: "Redmond, WA",
      employees: "25,000+",
      type: "Public",
      logo: "/placeholder.svg?height=48&width=48&query=microsoft logo",
      logoFallback: "MS",
      isVerified: true,
      description: "Empowering every person and organization on the planet to achieve more",
      openJobs: 198,
      rating: 4.4,
      founded: 1975,
      website: "microsoft.com",
      phone: "+1 (425) 882-8080",
      email: "careers@microsoft.com",
      about: "Microsoft's mission is to empower every person and every organization on the planet to achieve more. We strive to create local opportunity, growth, and impact in every country around the world.",
      mission: "To empower every person and every organization on the planet to achieve more.",
      vision: "A computer on every desk and in every home, running Microsoft software.",
      values: ["Respect", "Integrity", "Accountability", "Inclusive", "Growth Mindset"],
      benefits: ["Comprehensive Healthcare", "401(k)", "Stock Awards", "Vacation", "Family Care", "Wellness Programs"],
      culture: "Microsoft culture is centered on embracing a growth mindset, being customer-obsessed, becoming more diverse and inclusive, and working as One Microsoft.",
      recentNews: [
        "Microsoft Teams reaches 300 million monthly active users",
        "Major investment in renewable energy infrastructure",
        "Launch of new Azure AI services for enterprises"
      ],
      jobOpenings: [
        {
          id: 8,
          title: "Cloud Solution Architect",
          department: "Cloud & AI",
          location: "Redmond, WA",
          type: "Full-time",
          salaryRange: "$130,000 - $190,000",
          experience: "5+ years",
          posted: "2 days ago",
          description: "Help customers achieve more through cloud transformation and digital innovation."
        }
      ]
    }
  ]

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

  const isFollowed = (companyId: number) => followedCompanies.includes(companyId)

  return (
    <>
      {/* Simple Preloader */}
      <SimplePreloader isLoading={isLoading} />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header Section */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-primary-navy mb-2">Discover Companies</h1>
        <p className="text-slate-600 font-subheading text-base sm:text-lg lg:text-xl">Follow leading organizations and explore career opportunities</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Enhanced Sidebar for Companies - Mobile/Tablet Responsive */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="space-y-4 lg:space-y-6">
            {/* Advanced Filters */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3 lg:pb-4 p-4 lg:p-6">
                <CardTitle className="text-lg lg:text-xl font-heading text-primary-navy flex items-center justify-between">
                  <span className="flex items-center">
                    <Filter className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                    Advanced Filters
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="text-[#0056B3] hover:text-primary-navy hover:bg-primary-navy/5 rounded-lg text-sm"
                  >
                    {showFilters ? 'Hide' : 'Show'}
                  </Button>
                </CardTitle>
              </CardHeader>
              {showFilters && (
                <CardContent className="space-y-4 lg:space-y-6 p-4 lg:p-6 pt-0">
                  {/* Company Type */}
                  <div>
                    <h4 className="font-subheading font-medium text-primary-navy mb-3 text-sm lg:text-base">Company Type</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="public" className="border-slate-300" />
                        <label htmlFor="public" className="text-xs lg:text-sm font-subheading text-slate-600">Public Company</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="private" className="border-slate-300" />
                        <label htmlFor="private" className="text-xs lg:text-sm font-subheading text-slate-600">Private Company</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="startup" className="border-slate-300" />
                        <label htmlFor="startup" className="text-xs lg:text-sm font-subheading text-slate-600">Startup</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="nonprofit" className="border-slate-300" />
                        <label htmlFor="nonprofit" className="text-xs lg:text-sm font-subheading text-slate-600">Non-Profit</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="government" className="border-slate-300" />
                        <label htmlFor="government" className="text-xs lg:text-sm font-subheading text-slate-600">Government</label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Company Size */}
                  <div>
                    <h4 className="font-subheading font-medium text-primary-navy mb-3 text-sm lg:text-base">Company Size</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="size-small" className="border-slate-300" />
                        <label htmlFor="size-small" className="text-xs lg:text-sm font-subheading text-slate-600">Small (1-50 employees)</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="size-medium" className="border-slate-300" />
                        <label htmlFor="size-medium" className="text-xs lg:text-sm font-subheading text-slate-600">Medium (51-200 employees)</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="size-large" className="border-slate-300" />
                        <label htmlFor="size-large" className="text-xs lg:text-sm font-subheading text-slate-600">Large (201-1000 employees)</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="size-enterprise" className="border-slate-300" />
                        <label htmlFor="size-enterprise" className="text-xs lg:text-sm font-subheading text-slate-600">Enterprise (1000+ employees)</label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Industry */}
                  <div>
                    <h4 className="font-subheading font-medium text-primary-navy mb-3 text-sm lg:text-base">Industry</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="technology" className="border-slate-300" />
                        <label htmlFor="technology" className="text-xs lg:text-sm font-subheading text-slate-600">Technology</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="finance" className="border-slate-300" />
                        <label htmlFor="finance" className="text-xs lg:text-sm font-subheading text-slate-600">Financial Services</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="healthcare" className="border-slate-300" />
                        <label htmlFor="healthcare" className="text-xs lg:text-sm font-subheading text-slate-600">Healthcare</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="education" className="border-slate-300" />
                        <label htmlFor="education" className="text-xs lg:text-sm font-subheading text-slate-600">Education</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="retail" className="border-slate-300" />
                        <label htmlFor="retail" className="text-xs lg:text-sm font-subheading text-slate-600">Retail & E-commerce</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="manufacturing" className="border-slate-300" />
                        <label htmlFor="manufacturing" className="text-xs lg:text-sm font-subheading text-slate-600">Manufacturing</label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Location */}
                  <div>
                    <h4 className="font-subheading font-medium text-primary-navy mb-3 text-sm lg:text-base">Location</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="usa" className="border-slate-300" />
                        <label htmlFor="usa" className="text-xs lg:text-sm font-subheading text-slate-600">United States</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="canada" className="border-slate-300" />
                        <label htmlFor="canada" className="text-xs lg:text-sm font-subheading text-slate-600">Canada</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="europe" className="border-slate-300" />
                        <label htmlFor="europe" className="text-xs lg:text-sm font-subheading text-slate-600">Europe</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="asia" className="border-slate-300" />
                        <label htmlFor="asia" className="text-xs lg:text-sm font-subheading text-slate-600">Asia Pacific</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remote" className="border-slate-300" />
                        <label htmlFor="remote" className="text-xs lg:text-sm font-subheading text-slate-600">Remote-First Companies</label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Company Rating */}
                  <div>
                    <h4 className="font-subheading font-medium text-primary-navy mb-3 text-sm lg:text-base">Company Rating</h4>
                    <div className="px-2">
                      <Slider
                        value={ratingRange}
                        onValueChange={setRatingRange}
                        max={5.0}
                        min={1.0}
                        step={0.1}
                        className="mb-3"
                      />
                      <div className="flex justify-between text-sm font-subheading text-slate-500">
                        <span>{ratingRange[0].toFixed(1)} stars</span>
                        <span>{ratingRange[1].toFixed(1)} stars</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Follower Count */}
                  <div>
                    <h4 className="font-subheading font-medium text-primary-navy mb-3 text-sm lg:text-base">Follower Count</h4>
                    <div className="px-2">
                      <Slider
                        value={followerRange}
                        onValueChange={setFollowerRange}
                        max={1000000}
                        min={100}
                        step={1000}
                        className="mb-3"
                      />
                      <div className="flex justify-between text-sm font-subheading text-slate-500">
                        <span>{followerRange[0].toLocaleString()}</span>
                        <span>{followerRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Special Features */}
                  <div>
                    <h4 className="font-subheading font-medium text-primary-navy mb-3 text-sm lg:text-base">Special Features</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="verified" className="border-slate-300" />
                        <label htmlFor="verified" className="text-xs lg:text-sm font-subheading text-slate-600">Verified Companies</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="hiring" className="border-slate-300" />
                        <label htmlFor="hiring" className="text-xs lg:text-sm font-subheading text-slate-600">Actively Hiring</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="top-rated" className="border-slate-300" />
                        <label htmlFor="top-rated" className="text-xs lg:text-sm font-subheading text-slate-600">Top Rated Employers</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="diversity" className="border-slate-300" />
                        <label htmlFor="diversity" className="text-xs lg:text-sm font-subheading text-slate-600">Diversity & Inclusion Focus</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="benefits" className="border-slate-300" />
                        <label htmlFor="benefits" className="text-xs lg:text-sm font-subheading text-slate-600">Great Benefits</label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Company Stage */}
                  <div>
                    <h4 className="font-subheading font-medium text-primary-navy mb-3 text-sm lg:text-base">Company Stage</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="seed" className="border-slate-300" />
                        <label htmlFor="seed" className="text-xs lg:text-sm font-subheading text-slate-600">Seed Stage</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="series-a" className="border-slate-300" />
                        <label htmlFor="series-a" className="text-xs lg:text-sm font-subheading text-slate-600">Series A</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="growth" className="border-slate-300" />
                        <label htmlFor="growth" className="text-xs lg:text-sm font-subheading text-slate-600">Growth Stage</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="established" className="border-slate-300" />
                        <label htmlFor="established" className="text-xs lg:text-sm font-subheading text-slate-600">Established</label>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-sm lg:text-base h-9 lg:h-10">
                    Apply Filters
                  </Button>
                </CardContent>
              )}
            </Card>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 space-y-6 lg:space-y-8">
          {/* Search and Simple Filters */}
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-slate-400" />
                  <Input 
                    placeholder="Search companies by name, industry, or location..." 
                    className="pl-10 lg:pl-12 h-10 lg:h-12 border-slate-200 focus:border-primary-navy focus:ring-primary-navy/10 font-subheading rounded-xl text-sm lg:text-base"
                  />
                </div>
        <Select>
                  <SelectTrigger className="w-full sm:w-40 lg:w-[160px] h-10 lg:h-12 border-slate-200 focus:border-primary-navy rounded-xl font-subheading text-sm lg:text-base">
                    <SelectValue placeholder="Sort by" />
          </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="relevance" className="font-subheading text-sm lg:text-base">Most Relevant</SelectItem>
                    <SelectItem value="followers" className="font-subheading text-sm lg:text-base">Most Followers</SelectItem>
                    <SelectItem value="rating" className="font-subheading text-sm lg:text-base">Highest Rated</SelectItem>
                    <SelectItem value="jobs" className="font-subheading text-sm lg:text-base">Most Jobs</SelectItem>
                    <SelectItem value="newest" className="font-subheading text-sm lg:text-base">Newest Companies</SelectItem>
          </SelectContent>
        </Select>
              </div>
            </CardContent>
          </Card>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {companies.map((company) => {
              const followed = isFollowed(company.id)
              
              return (
                <Card 
                  key={company.id} 
                  className="border-slate-200 hover:shadow-lg hover:border-primary-navy/30 transition-all duration-200 group cursor-pointer overflow-hidden"
                  onClick={() => handleCompanyClick(company)}
                >
                  <CardContent className="p-0">
                    {/* Company Info */}
                    <div className="p-4 relative">
                      {/* Company Logo */}
                      <div className="flex justify-center mb-4 relative">
                        {company.logo ? (
                          <div className="w-16 h-16 rounded-xl overflow-hidden border-4 border-slate-200 shadow-md bg-white">
                            <img src={company.logo} alt={company.name} className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-navy to-[#0056B3] flex items-center justify-center text-white font-heading text-lg border-4 border-slate-200 shadow-md">
                            {company.logoFallback}
                          </div>
                        )}
                        {company.isVerified && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                            <Award className="h-2.5 w-2.5 text-white" />
                          </div>
                        )}
                      </div>
                      
                      {/* Follow Button - Top Right */}
                      <div className="absolute top-2 right-2">
                        <Button
                          variant={followed ? "outline" : "default"}
                          size="sm"
                          className={followed 
                            ? "border-slate-200 hover:border-red-300 hover:text-red-600 rounded-lg font-subheading text-xs px-3 h-7" 
                            : "bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-xs px-3 h-7"
                          }
                          onClick={(e) => {
                            e.stopPropagation()
                            handleFollowClick(company.id)
                          }}
                        >
                          {followed ? "Following" : "Follow"}
                        </Button>
                      </div>

                      {/* Company Details */}
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <h2 className="text-lg font-heading text-primary-navy group-hover:text-primary-navy transition-colors">
                            {company.name}
                          </h2>
                          {company.isVerified && (
                            <Badge className="bg-green-50 text-green-700 border-green-200 font-subheading text-xs ml-2">
                              Verified
                            </Badge>
                          )}
                        </div>
                        
                        <p className="text-slate-600 font-subheading text-sm mb-3 line-clamp-2">
                          {company.description}
                        </p>
                        
                        <div className="space-y-2 text-xs text-slate-500 mb-4">
                          <div className="flex items-center space-x-1">
                            <Building2 className="h-3 w-3 flex-shrink-0" />
                            <span className="font-subheading truncate">{company.industry}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3 flex-shrink-0" />
                            <span className="font-subheading truncate">{company.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3 flex-shrink-0" />
                            <span className="font-subheading">{company.employees}</span>
                          </div>
                        </div>
                        
                        {/* Stats Row */}
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="h-3 w-3" />
                            <span className="font-subheading">{company.followers} followers</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span className="font-subheading text-slate-600">{company.rating}</span>
                          </div>
                        </div>
                        
                        {/* Company Type & Jobs */}
                        <div className="flex items-center justify-between">
                          <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">
                            {company.type}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading text-xs px-3 h-7"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleViewJobsClick()
                            }}
                          >
                            {company.openJobs} jobs
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-8 lg:mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-xl font-subheading px-6 lg:px-8 text-sm lg:text-base"
            >
              Load More Companies
            </Button>
            <p className="text-slate-500 font-subheading text-xs lg:text-sm mt-3">
              Showing 6 of 1,247 companies
            </p>
          </div>
        </div>
          </div>
        </div>

    {/* Company Details Modal */}
    {selectedCompany && !showJobsModal && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 lg:p-4">
        <div className="bg-white rounded-2xl max-w-[calc(100vw-1rem)] sm:max-w-4xl lg:max-w-5xl w-full max-h-[95vh] lg:max-h-[90vh] overflow-y-auto">
          <div className="p-4 lg:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <div className="flex items-center space-x-2 lg:space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedCompany(null)}
                  className="rounded-xl h-8 w-8 lg:h-10 lg:w-10"
                >
                  <ArrowLeft className="h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
                <h1 className="text-lg lg:text-2xl font-heading text-primary-navy">Company Profile</h1>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedCompany(null)}
                className="rounded-xl h-8 w-8 lg:h-10 lg:w-10"
              >
                <X className="h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </div>

            {/* Company Content */}
            <div className="space-y-4 lg:space-y-6">
              {/* Basic Info */}
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <div className="relative mx-auto sm:mx-0 flex-shrink-0">
                  {selectedCompany.logo ? (
                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0">
                      <img src={selectedCompany.logo} alt={selectedCompany.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl bg-gradient-to-br from-primary-navy to-[#0056B3] flex items-center justify-center text-white font-heading text-xl lg:text-2xl">
                      {selectedCompany.logoFallback}
                    </div>
                  )}
                  {selectedCompany.isVerified && (
                    <div className="absolute -top-1 -right-1 w-7 h-7 lg:w-8 lg:h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Award className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-2 sm:space-y-0">
                    <h2 className="text-2xl lg:text-3xl font-heading text-primary-navy">{selectedCompany.name}</h2>
                    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
                      {selectedCompany.isVerified && (
                        <Badge className="bg-green-100 text-green-700 font-subheading text-xs lg:text-sm">
                          Verified Company
                        </Badge>
                      )}
                      <Badge className={`font-subheading text-xs lg:text-sm ${
                        selectedCompany.type === 'Public' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                      }`}>
                        {selectedCompany.type}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-base lg:text-lg text-slate-600 font-subheading mb-3">{selectedCompany.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6 text-slate-600 font-subheading mb-4 text-sm lg:text-base">
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Building2 className="h-4 w-4 lg:h-5 lg:w-5 text-slate-500 flex-shrink-0" />
                      <span>{selectedCompany.industry}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-slate-500 flex-shrink-0" />
                      <span>{selectedCompany.location}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Users className="h-4 w-4 lg:h-5 lg:w-5 text-slate-500 flex-shrink-0" />
                      <span>{selectedCompany.employees} employees</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Calendar className="h-4 w-4 lg:h-5 lg:w-5 text-slate-500 flex-shrink-0" />
                      <span>Founded {selectedCompany.founded}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Globe className="h-4 w-4 lg:h-5 lg:w-5 text-slate-500 flex-shrink-0" />
                      <span className="truncate">{selectedCompany.website}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Star className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-500 flex-shrink-0" />
                      <span>{selectedCompany.rating}/5.0 rating</span>
              </div>
            </div>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-6 text-slate-500 font-subheading text-sm lg:text-base justify-center sm:justify-start">
                    <span>{selectedCompany.followers} followers</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{selectedCompany.openJobs} open positions</span>
                  </div>
          </div>
        </div>

              <Separator />

              {/* About */}
              <div>
                <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">About</h3>
                <p className="text-slate-600 font-subheading leading-relaxed text-sm lg:text-base">{selectedCompany.about}</p>
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Mission</h3>
                  <p className="text-slate-600 font-subheading leading-relaxed text-sm lg:text-base">{selectedCompany.mission}</p>
                </div>
                <div>
                  <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Vision</h3>
                  <p className="text-slate-600 font-subheading leading-relaxed text-sm lg:text-base">{selectedCompany.vision}</p>
                </div>
              </div>

              {/* Values */}
              <div>
                <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Core Values</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCompany.values.map((value: string, index: number) => (
                    <Badge key={index} className="bg-[#0056B3]/10 text-[#0056B3] font-subheading text-xs lg:text-sm">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {value}
                    </Badge>
                  ))}
          </div>
        </div>

              {/* Benefits */}
              <div>
                <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Benefits & Perks</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {selectedCompany.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2 text-slate-600 font-subheading text-sm lg:text-base">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Culture */}
              <div>
                <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Company Culture</h3>
                <p className="text-slate-600 font-subheading leading-relaxed text-sm lg:text-base">{selectedCompany.culture}</p>
              </div>

              {/* Recent News */}
              <div>
                <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Recent News</h3>
                <div className="space-y-3">
                  {selectedCompany.recentNews.map((news: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-2 h-2 bg-[#0056B3] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 font-subheading text-sm lg:text-base">{news}</p>
            </div>
                  ))}
          </div>
        </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Contact Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-600 font-subheading">{selectedCompany.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-600 font-subheading">{selectedCompany.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-600 font-subheading">{selectedCompany.website}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-600 font-subheading">{selectedCompany.location}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <Button 
                  className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading text-sm lg:text-base h-10 lg:h-12"
                  onClick={handleViewJobsClick}
                >
                  View Open Positions
                </Button>
                <Button 
                  className={`flex-1 rounded-xl font-subheading text-sm lg:text-base h-10 lg:h-12 ${
                    isFollowed(selectedCompany.id)
                      ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                      : 'bg-[#0056B3] hover:bg-primary-navy text-white'
                  }`}
                  onClick={() => handleFollowClick(selectedCompany.id)}
                >
                  {isFollowed(selectedCompany.id) ? 'Following' : 'Follow Company'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Jobs Modal */}
    <Dialog open={showJobsModal} onOpenChange={setShowJobsModal}>
      <DialogContent className="max-w-[calc(100vw-1rem)] sm:max-w-3xl lg:max-w-4xl max-h-[95vh] lg:max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-primary-navy text-lg lg:text-xl">
            Job Openings at {selectedCompany?.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 lg:space-y-6 mt-4">
          {/* Company Info */}
          {selectedCompany && (
            <Card className="border-slate-200 bg-slate-50">
              <CardContent className="p-3 lg:p-4">
            <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="relative flex-shrink-0">
                    {selectedCompany.logo ? (
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg overflow-hidden border border-slate-200 flex-shrink-0">
                        <img src={selectedCompany.logo} alt={selectedCompany.name} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br from-primary-navy to-[#0056B3] flex items-center justify-center text-white font-heading text-xs lg:text-sm">
                        {selectedCompany.logoFallback}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading text-primary-navy text-sm lg:text-base truncate">{selectedCompany.name}</h4>
                    <p className="text-slate-600 font-subheading text-xs lg:text-sm truncate">{selectedCompany.location} • {selectedCompany.openJobs} open positions</p>
                  </div>
                  <div className="flex items-center space-x-1 lg:space-x-2 flex-shrink-0">
                    <Star className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-500" />
                    <span className="text-slate-600 font-subheading text-xs lg:text-sm">{selectedCompany.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Job Listings */}
          <div className="space-y-3 lg:space-y-4">
            {selectedCompany?.jobOpenings.map((job: any) => (
              <Card key={job.id} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 lg:mb-4 space-y-3 sm:space-y-0">
                    <div className="flex-1">
                      <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-2">{job.title}</h3>
                      <p className="text-slate-600 font-subheading mb-3 text-sm lg:text-base">{job.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-slate-600 font-subheading text-sm lg:text-base">
                          <Building2 className="h-3 w-3 lg:h-4 lg:w-4 text-slate-500 flex-shrink-0" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-600 font-subheading text-sm lg:text-base">
                          <MapPin className="h-3 w-3 lg:h-4 lg:w-4 text-slate-500 flex-shrink-0" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-600 font-subheading text-sm lg:text-base">
                          <DollarSign className="h-3 w-3 lg:h-4 lg:w-4 text-slate-500 flex-shrink-0" />
                          <span>{job.salaryRange}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-600 font-subheading text-sm lg:text-base">
                          <Award className="h-3 w-3 lg:h-4 lg:w-4 text-slate-500 flex-shrink-0" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-600 font-subheading text-sm lg:text-base">
                          <Clock className="h-3 w-3 lg:h-4 lg:w-4 text-slate-500 flex-shrink-0" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-600 font-subheading text-sm lg:text-base">
                          <Calendar className="h-3 w-3 lg:h-4 lg:w-4 text-slate-500 flex-shrink-0" />
                          <span>Posted {job.posted}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                    <Button 
                      className="flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-sm lg:text-base h-9 lg:h-10"
                    >
                      Apply Now
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading text-sm lg:text-base h-9 lg:h-10"
                    >
                      Save Job
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-slate-200">
            <Button 
              variant="outline" 
              className="flex-1 border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading text-sm lg:text-base h-9 lg:h-10"
              onClick={() => setShowJobsModal(false)}
            >
              Close
            </Button>
            <Button 
              className="flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-sm lg:text-base h-9 lg:h-10"
            >
              View All Jobs at {selectedCompany?.name}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  )
}
