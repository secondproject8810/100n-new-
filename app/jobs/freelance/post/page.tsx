import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PostFreelanceProjectPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-4 md:py-6 px-4 md:px-6 pb-20 md:pb-6">
      <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 mb-6 md:mb-8">
        <Link href="/jobs/freelance" className="sm:mr-6 self-start">
          <Button 
            variant="ghost"
            className="flex items-center text-slate-600 hover:text-primary-navy hover:bg-slate-50 rounded-xl p-2 sm:p-3"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-primary-navy mb-1 sm:mb-2">Post a Freelance Project</h1>
          <p className="text-slate-600 font-subheading text-sm sm:text-base">Create a project to find the perfect freelancer for your needs</p>
        </div>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="pb-4 sm:pb-6 px-4 sm:px-6">
          <CardTitle className="text-lg sm:text-xl font-heading text-primary-navy">Project Details</CardTitle>
          <CardDescription className="text-slate-600 font-subheading text-sm sm:text-base">Provide comprehensive information about your project to attract qualified freelancers</CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <form className="space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="title" className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Project Title</Label>
              <Input 
                id="title" 
                placeholder="e.g., 'Mobile App Developer for Fitness Application'" 
                className="h-10 sm:h-12 border-slate-200 focus:border-primary-navy rounded-xl font-subheading text-sm sm:text-base"
                style={{ fontSize: '16px' }}
              />
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="category" className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Category</Label>
              <Select>
                <SelectTrigger className="h-10 sm:h-12 border-slate-200 focus:border-primary-navy rounded-xl font-subheading text-sm sm:text-base">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="web" className="font-subheading">Web Development</SelectItem>
                  <SelectItem value="mobile" className="font-subheading">Mobile Development</SelectItem>
                  <SelectItem value="design" className="font-subheading">Design</SelectItem>
                  <SelectItem value="writing" className="font-subheading">Content Writing</SelectItem>
                  <SelectItem value="marketing" className="font-subheading">Marketing</SelectItem>
                  <SelectItem value="data" className="font-subheading">Data Analysis</SelectItem>
                  <SelectItem value="ai" className="font-subheading">AI & Machine Learning</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="description" className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Project Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your project in detail, including goals, requirements, and deliverables..."
                rows={4}
                className="border-slate-200 focus:border-primary-navy rounded-xl font-subheading resize-none text-sm sm:text-base sm:rows-6"
                style={{ fontSize: '16px' }}
              />
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="skills" className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Required Skills</Label>
              <Input 
                id="skills" 
                placeholder="e.g., React Native, Firebase, UI/UX, API Integration" 
                className="h-10 sm:h-12 border-slate-200 focus:border-primary-navy rounded-xl font-subheading text-sm sm:text-base"
                style={{ fontSize: '16px' }}
              />
              <p className="text-xs sm:text-sm text-slate-500 font-subheading">Separate skills with commas</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Project Budget</Label>
              <RadioGroup defaultValue="fixed" className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <RadioGroupItem value="fixed" id="fixed" className="border-slate-300" />
                  <Label htmlFor="fixed" className="font-subheading text-slate-700 text-sm sm:text-base">Fixed Price</Label>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <RadioGroupItem value="hourly" id="hourly" className="border-slate-300" />
                  <Label htmlFor="hourly" className="font-subheading text-slate-700 text-sm sm:text-base">Hourly Rate</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2 sm:space-y-3">
                <Label htmlFor="min-budget" className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Minimum Budget</Label>
                <div className="relative">
                  <span className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-slate-500 font-subheading text-sm sm:text-base">$</span>
                  <Input 
                    id="min-budget" 
                    className="h-10 sm:h-12 pl-6 sm:pl-8 border-slate-200 focus:border-primary-navy rounded-xl font-subheading text-sm sm:text-base" 
                    placeholder="e.g., 500" 
                    style={{ fontSize: '16px' }}
                  />
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <Label htmlFor="max-budget" className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Maximum Budget</Label>
                <div className="relative">
                  <span className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-slate-500 font-subheading text-sm sm:text-base">$</span>
                  <Input 
                    id="max-budget" 
                    className="h-10 sm:h-12 pl-6 sm:pl-8 border-slate-200 focus:border-primary-navy rounded-xl font-subheading text-sm sm:text-base" 
                    placeholder="e.g., 2000" 
                    style={{ fontSize: '16px' }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="duration" className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Estimated Duration</Label>
              <Select>
                <SelectTrigger className="h-10 sm:h-12 border-slate-200 focus:border-primary-navy rounded-xl font-subheading text-sm sm:text-base">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="less-than-week" className="font-subheading">Less than 1 week</SelectItem>
                  <SelectItem value="1-2-weeks" className="font-subheading">1-2 weeks</SelectItem>
                  <SelectItem value="2-4-weeks" className="font-subheading">2-4 weeks</SelectItem>
                  <SelectItem value="1-3-months" className="font-subheading">1-3 months</SelectItem>
                  <SelectItem value="3-6-months" className="font-subheading">3-6 months</SelectItem>
                  <SelectItem value="ongoing" className="font-subheading">Ongoing project</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="attachments" className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Attachments (Optional)</Label>
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 sm:p-8 text-center bg-slate-50/50">
                <p className="text-slate-600 font-subheading mb-3 sm:mb-4 text-sm sm:text-base">Drag and drop files here, or click to browse files</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-slate-200 text-slate-600 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading text-xs sm:text-sm px-3 sm:px-4 py-2"
                >
                  Browse Files
                </Button>
                <p className="text-xs sm:text-sm text-slate-500 font-subheading mt-3 sm:mt-4">
                  Max file size: 10MB. Supported formats: PDF, DOC, DOCX, JPG, PNG
                </p>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="requirements" className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Requirements</Label>
              <Textarea
                id="requirements"
                placeholder="• 3+ years of React Native development experience&#10;• Experience with Firebase and real-time databases&#10;• Portfolio of published mobile applications&#10;• Understanding of fitness/health app requirements"
                rows={3}
                className="border-slate-200 focus:border-primary-navy rounded-xl font-subheading resize-none text-sm sm:text-base sm:rows-4"
                style={{ fontSize: '16px' }}
              />
              <p className="text-xs sm:text-sm text-slate-500 font-subheading">List each requirement on a new line starting with •</p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="responsibilities" className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Responsibilities</Label>
              <Textarea
                id="responsibilities"
                placeholder="• Develop cross-platform mobile application using React Native&#10;• Implement user authentication and profile management&#10;• Create workout tracking and progress visualization features&#10;• Integrate with wearable devices and health APIs"
                rows={3}
                className="border-slate-200 focus:border-primary-navy rounded-xl font-subheading resize-none text-sm sm:text-base sm:rows-4"
                style={{ fontSize: '16px' }}
              />
              <p className="text-xs sm:text-sm text-slate-500 font-subheading">List each responsibility on a new line starting with •</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6 pt-4 sm:pt-6">
              <Button 
                variant="outline"
                className="flex-1 sm:flex-none px-6 sm:px-8 py-2 sm:py-3 h-10 sm:h-12 border-slate-200 text-slate-600 hover:border-primary-navy hover:text-primary-navy rounded-xl font-subheading text-sm sm:text-base"
              >
                Save as Draft
              </Button>
              <Button 
                className="flex-1 sm:flex-none px-8 sm:px-12 py-2 sm:py-3 h-10 sm:h-12 bg-primary-navy hover:bg-primary-navy/90 rounded-xl font-subheading text-sm sm:text-base"
              >
                Post Project
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
