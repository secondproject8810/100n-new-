"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { MessageSquare, Globe, Briefcase, GraduationCap, Users, Building2, X } from "lucide-react"
import { cn } from "@/lib/utils"

const footerItems = [
  {
    name: "Feed",
    href: "/feed",
    icon: MessageSquare,
  },
  {
    name: "Freelance",
    href: "/jobs/freelance",
    icon: Globe,
  },
  {
    name: "Jobs",
    href: "/jobs",
    icon: Briefcase,
  },
  {
    name: "Internships",
    href: "/internships",
    icon: GraduationCap,
  },
]

const networkOptions = [
  {
    name: "People",
    href: "/people",
    icon: Users,
    description: "Connect with professionals"
  },
  {
    name: "Companies",
    href: "/employers",
    icon: Building2,
    description: "Discover organizations"
  },
]

export default function MobileFooter() {
  const pathname = usePathname()
  const router = useRouter()
  const [showNetworkModal, setShowNetworkModal] = useState(false)

  // Hide mobile footer on landing page
  if (pathname === "/") {
    return null
  }

  const isNetworkActive = pathname === "/people" || pathname === "/employers"

  const handleNetworkClick = () => {
    setShowNetworkModal(true)
  }

  const handleNetworkOptionClick = (href: string) => {
    setShowNetworkModal(false)
    router.push(href)
  }

  return (
    <>
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 md:hidden">
        <div className="flex items-center justify-around px-2 py-2 safe-area-pb">
          {footerItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-colors min-w-0 flex-1",
                  isActive
                    ? "text-[#0056B3] bg-[#0056B3]/5"
                    : "text-slate-600 hover:text-[#0056B3] hover:bg-slate-50"
                )}
              >
                <item.icon className={cn("h-4 w-4 mb-0.5", isActive ? "text-[#0056B3]" : "text-slate-600")} />
                <span className={cn(
                  "text-[10px] font-medium max-w-full leading-none text-center",
                  isActive ? "text-[#0056B3]" : "text-slate-600"
                )}>
                  {item.name}
                </span>
              </Link>
            )
          })}
          
          {/* Network Tab */}
          <button
            onClick={handleNetworkClick}
            className={cn(
              "flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-colors min-w-0 flex-1",
              isNetworkActive
                ? "text-[#0056B3] bg-[#0056B3]/5"
                : "text-slate-600 hover:text-[#0056B3] hover:bg-slate-50"
            )}
          >
            <Users className={cn("h-4 w-4 mb-0.5", isNetworkActive ? "text-[#0056B3]" : "text-slate-600")} />
            <span className={cn(
              "text-[10px] font-medium max-w-full leading-none text-center",
              isNetworkActive ? "text-[#0056B3]" : "text-slate-600"
            )}>
              Network
            </span>
          </button>
        </div>
      </footer>

      {/* Network Options Modal */}
      {showNetworkModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-[60] md:hidden">
          <div className="bg-white rounded-t-2xl w-full max-w-sm mx-4 mb-20 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-heading text-primary-navy">Choose Network</h3>
                <button
                  onClick={() => setShowNetworkModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-slate-600" />
                </button>
              </div>

              {/* Network Options */}
              <div className="space-y-3">
                {networkOptions.map((option) => (
                  <button
                    key={option.href}
                    onClick={() => handleNetworkOptionClick(option.href)}
                    className="w-full flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="h-12 w-12 bg-primary-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <option.icon className="h-6 w-6 text-primary-navy" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-subheading font-medium text-primary-navy">{option.name}</h4>
                      <p className="text-sm text-slate-600 font-subheading">{option.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 