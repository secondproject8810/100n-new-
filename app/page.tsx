"use client"

import Link from "next/link"
import { Trophy, Users, FileX, MessageSquare, Briefcase, Zap, ArrowRight } from "lucide-react"
import { useEffect, useState, useRef, ReactNode, FC } from "react"
import * as React from "react"

// Utility function for combining class names (replaces cn from lib/utils)
function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return inputs.filter(Boolean).join(' ')
}

// Button component variants and styling
const buttonVariants = (variant = "default", size = "default") => {
  const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  }
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  }
  
  return `${baseStyles} ${variants[variant as keyof typeof variants]} ${sizes[size as keyof typeof sizes]}`
}

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string
  size?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants(variant, size), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// Input Component
interface InputProps extends React.ComponentProps<"input"> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary-navy disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

// Avatar Components (simplified without Radix UI dependency)
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
)
Avatar.displayName = "Avatar"

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <img
      ref={ref}
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...props}
    />
  )
)
AvatarImage.displayName = "AvatarImage"

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {}

const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium",
        className
      )}
      {...props}
    />
  )
)
AvatarFallback.displayName = "AvatarFallback"

// Custom Hook for detecting when an element is in view
const useInView = (options: IntersectionObserverInit = { threshold: 0.1 }) => {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return [ref, inView] as const
}

// Animated Component Wrapper
interface AnimateInProps {
  children: ReactNode;
  className?: string;
  from?: string;
  to?: string;
  delay?: string;
}

const AnimateIn: FC<AnimateInProps> = ({ 
  children,
  className = "",
  from = "opacity-0 translate-y-10", 
  to = "opacity-100 translate-y-0",
  delay = "duration-500"
}) => {
  const [ref, inView] = useInView({ threshold: 0.1 })
  return (
    <div
      ref={ref}
      className={`${className} transition-all ${delay} ease-in-out ${inView ? to : from}`}
    >
      {children}
    </div>
  )
}

export default function LandingPage() {
  return (
    <>
      {/* Embedded Styles for Complete Independence */}
      <style jsx global>{`
        /* CSS Variables */
        :root {
          --background: 0 0% 100%;
          --foreground: 218 25% 15%;
          --card: 0 0% 100%;
          --card-foreground: 218 25% 15%;
          --popover: 0 0% 100%;
          --popover-foreground: 218 25% 15%;
          --primary: 218 25% 15%;
          --primary-foreground: 0 0% 98%;
          --secondary: 220 14% 96%;
          --secondary-foreground: 218 25% 15%;
          --muted: 220 14% 96%;
          --muted-foreground: 215 16% 47%;
          --accent: 250 95% 63%;
          --accent-foreground: 0 0% 98%;
          --destructive: 0 84% 60%;
          --destructive-foreground: 210 40% 98%;
          --border: 214 32% 91%;
          --input: 214 32% 91%;
          --ring: 250 95% 63%;
          --radius: 0.5rem;
          --primary-navy: 218 25% 15%;
          --accent-navy-light: 218 25% 25%;
          --neutral-light: 220 14% 96%;
          --text-navy: 218 25% 15%;
        }

        .dark {
          --background: 218 25% 15%;
          --foreground: 210 40% 98%;
          --card: 218 25% 15%;
          --card-foreground: 210 40% 98%;
          --popover: 218 25% 15%;
          --popover-foreground: 210 40% 98%;
          --primary: 250 95% 63%;
          --primary-foreground: 218 25% 15%;
          --secondary: 218 25% 25%;
          --secondary-foreground: 210 40% 98%;
          --muted: 218 25% 25%;
          --muted-foreground: 215 20% 65%;
          --accent: 250 95% 63%;
          --accent-foreground: 218 25% 15%;
          --destructive: 0 63% 31%;
          --destructive-foreground: 210 40% 98%;
          --border: 218 25% 25%;
          --input: 218 25% 25%;
          --ring: 250 95% 63%;
        }

        /* Base styles */
        * {
          border-color: hsl(var(--border));
        }

        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }

        body {
          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
        }

        /* Custom utility classes */
        .bg-primary {
          background-color: hsl(var(--primary));
        }

        .text-primary {
          color: hsl(var(--primary));
        }

        .bg-primary-foreground {
          background-color: hsl(var(--primary-foreground));
        }

        .text-primary-foreground {
          color: hsl(var(--primary-foreground));
        }

        .bg-secondary {
          background-color: hsl(var(--secondary));
        }

        .text-secondary-foreground {
          color: hsl(var(--secondary-foreground));
        }

        .bg-muted {
          background-color: hsl(var(--muted));
        }

        .text-muted-foreground {
          color: hsl(var(--muted-foreground));
        }

        .bg-accent {
          background-color: hsl(var(--accent));
        }

        .text-accent {
          color: hsl(var(--accent));
        }

        .text-accent-foreground {
          color: hsl(var(--accent-foreground));
        }

        .bg-destructive {
          background-color: hsl(var(--destructive));
        }

        .text-destructive-foreground {
          color: hsl(var(--destructive-foreground));
        }

        .border-input {
          border-color: hsl(var(--input));
        }

        .bg-background {
          background-color: hsl(var(--background));
        }

        .text-foreground {
          color: hsl(var(--foreground));
        }

        .ring-offset-background {
          --tw-ring-offset-color: hsl(var(--background));
        }

        .focus-visible\\:ring-ring:focus-visible {
          --tw-ring-color: hsl(var(--ring));
        }

        .bg-primary-navy {
          background-color: hsl(var(--primary-navy));
        }
        
        .text-primary-navy {
          color: hsl(var(--primary-navy));
        }

        .focus-visible\\:border-primary-navy:focus-visible {
          border-color: hsl(var(--primary-navy));
        }

        /* Animation keyframes */
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(var(--orbit-radius, 150px)) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(var(--orbit-radius, 150px)) rotate(-360deg);
          }
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
        }

        /* Font imports */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
      `}</style>

      <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden w-screen -mx-2 md:-mx-4 -my-2 md:-my-3 -mb-16 md:-mb-3">
        {/* Header */}
        <header className="relative z-50 bg-black backdrop-blur-md">
          <div className="w-full px-0">
            <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
              <div className="flex items-center space-x-4 md:space-x-8">
                <Link href="/" className="text-xl md:text-2xl font-black italic" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontStyle: 'italic'}}>
                  <span style={{color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontStyle: 'italic'}}>100</span><span style={{color: '#0056B3', fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontStyle: 'italic'}}>Networks</span>
                </Link>
              </div>
              <div className="flex items-center space-x-1 md:space-x-4">
                <Button className="bg-black text-white hover:bg-blue-400 hover:text-white font-medium px-1.5 py-0.5 md:px-6 md:py-2 text-[10px] md:text-base border border-white hover:border-blue-400 transform hover:scale-105 transition-all">
                  For Individual
                </Button>
                <Button className="bg-black text-white hover:bg-blue-400 hover:text-white font-medium px-1.5 py-0.5 md:px-6 md:py-2 text-[10px] md:text-base border border-white hover:border-blue-400 transform hover:scale-105 transition-all">
                  For Company
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-black">
          <div className="absolute inset-0 bg-black"></div>
          <div className="w-full px-4 md:px-6 text-center relative z-10">
            <AnimateIn delay="duration-300">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 md:mb-8 leading-tight">
                The Better Career<br />
                <span className="text-blue-400">Social Network</span>
              </h1>
            </AnimateIn>
            
            <AnimateIn delay="duration-500">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto px-2">
                Find your first internship, freelance gig or job. The interactive portal with unlimited opportunities and AI-powered matching.
              </p>
            </AnimateIn>

            <AnimateIn delay="duration-700">
              <div className="flex justify-center mb-12 md:mb-16">
                <Link href="/explore">
                  <Button className="bg-blue-600 text-white hover:bg-blue-400 hover:text-white font-semibold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg transition-colors">
                    Get Started Now
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay="duration-900">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto px-4">
                <div className="bg-gray-900 rounded-2xl p-4 md:p-6 border border-gray-700">
                  <div className="text-blue-400 text-2xl md:text-3xl font-bold mb-2">Jobs</div>
                  <div className="text-gray-300 text-sm md:text-base">Full-Time Career Opportunities</div>
                </div>
                <div className="bg-gray-900 rounded-2xl p-4 md:p-6 border border-gray-700">
                  <div className="text-blue-400 text-2xl md:text-3xl font-bold mb-2">Internships</div>
                  <div className="text-gray-300 text-sm md:text-base">Paid Learning Experiences</div>
                </div>
                <div className="bg-gray-900 rounded-2xl p-4 md:p-6 border border-gray-700">
                  <div className="text-blue-400 text-2xl md:text-3xl font-bold mb-2">Freelancing</div>
                  <div className="text-gray-300 text-sm md:text-base">Project-Based Work</div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* What We Offer Differently */}
        <section className="py-16 md:py-24 bg-black">
          <div className="w-full px-4 md:px-6">
            <AnimateIn delay="duration-300">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 md:mb-8 leading-tight">
                What Makes Us <span className="text-blue-400">Different</span>
              </h2>
            </AnimateIn>
            
            <AnimateIn delay="duration-500">
              <p className="text-lg md:text-xl text-gray-300 text-center mb-12 md:mb-16 max-w-3xl mx-auto px-2">
                Three pathways to success, all in one platform. Here's how we revolutionize each opportunity type.
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
              {/* Jobs Section */}
              <AnimateIn delay="duration-300">
                <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700">
                  <div className="bg-gray-800 rounded-2xl p-3 md:p-4 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 mx-auto">
                    <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center">Full-Time Jobs</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-bold">✓</span>
                      </div>
                      <span className="text-white font-medium">Verified Employers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-bold">AI</span>
                      </div>
                      <span className="text-white font-medium">Resume Optimization</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-bold">∞</span>
                      </div>
                      <span className="text-white font-medium">Unlimited Applications</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-bold">📊</span>
                      </div>
                      <span className="text-white font-medium">Real-Time Tracking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-bold">💰</span>
                      </div>
                      <span className="text-white font-medium">Salary Transparency</span>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* Internships Section */}
              <AnimateIn delay="duration-500">
                <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700">
                  <div className="bg-gray-800 rounded-2xl p-3 md:p-4 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 mx-auto">
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center">Internships</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-bold">💵</span>
                      </div>
                      <span className="text-white font-medium">Guaranteed Pay</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-bold">👨‍🏫</span>
                      </div>
                      <span className="text-white font-medium">Expert Mentorship</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-bold">🎓</span>
                      </div>
                      <span className="text-white font-medium">Skill Certifications</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-bold">📁</span>
                      </div>
                      <span className="text-white font-medium">Portfolio Building</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-bold">🚀</span>
                      </div>
                      <span className="text-white font-medium">Job Pipeline</span>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* Freelancing Section */}
              <AnimateIn delay="duration-700">
                <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700">
                  <div className="bg-gray-800 rounded-2xl p-3 md:p-4 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 mx-auto">
                    <Zap className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center">Freelancing</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-bold">💎</span>
                      </div>
                      <span className="text-white font-medium">Zero Platform Fees</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-bold">🛡️</span>
                      </div>
                      <span className="text-white font-medium">Protected Community</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-bold">⚡</span>
                      </div>
                      <span className="text-white font-medium">Instant Payments</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-bold">🎯</span>
                      </div>
                      <span className="text-white font-medium">Smart Matching</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-bold">💬</span>
                      </div>
                      <span className="text-white font-medium">Direct Communication</span>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>

            <AnimateIn delay="duration-900">
              <div className="text-center mt-16">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg transition-colors">
                  Explore All Opportunities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="py-32 bg-black">
          <div className="w-full px-6 text-center">
            <AnimateIn delay="duration-300">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Why <span style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontStyle: 'italic'}}>100<span className="text-[#0056B3]">Networks</span></span><br />
                <span className="text-blue-400">Dominates the Market</span>
              </h2>
            </AnimateIn>
            
            <AnimateIn delay="duration-500">
              <p className="text-xl md:text-2xl text-gray-300 mb-20 max-w-4xl mx-auto">
                Unlimited opportunities, AI-powered matching, zero platform fees for freelancers and hirers (limited time), and a community where freelancers don't compete with cheap overseas workers. Your success is our mission.
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <AnimateIn delay="duration-300">
                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700">
                  <div className="bg-gray-800 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">Zero Platform Fees</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span className="text-gray-300">No Hidden Costs</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span className="text-gray-300">Fair Rate Structure</span>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay="duration-500">
                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700">
                  <div className="bg-gray-800 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">All-in-One Platform</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span className="text-gray-300">Jobs + Internships + Freelancing</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span className="text-gray-300">Full-time & Contract Hiring</span>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay="duration-700">
                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700">
                  <div className="bg-gray-800 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center"><span style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontStyle: 'italic'}}>100<span className="text-[#0056B3]">Networks</span></span> AI</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span className="text-gray-300">Profile Optimization</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span className="text-gray-300">Smart Job Matching</span>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay="duration-900">
                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700">
                  <div className="bg-gray-800 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">Career Social Network</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span className="text-gray-300">Direct Messaging</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span className="text-gray-300">Professional Updates</span>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* App Features Showcase */}
        <section className="py-16 md:py-24 lg:py-32 bg-black">
          <div className="w-full px-4 md:px-6">
            <AnimateIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-12 md:mb-16 leading-tight">
                Why Choose <span style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontStyle: 'italic'}}>100<span className="text-[#0056B3]">Networks</span></span>?<br />
                <span className="text-blue-400">Revolutionary Platform Features</span>
              </h2>
            </AnimateIn>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
              <AnimateIn delay="duration-300">
                <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700">
                  <div className="bg-gray-800 rounded-2xl p-3 md:p-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4 md:mb-6">
                    <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-blue-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4"><span style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontStyle: 'italic'}}>100<span className="text-[#0056B3]">Networks</span></span> AI Assistant</h3>
                  <p className="text-gray-300 mb-6">
                    Our integrated AI optimizes your profile, matches perfect opportunities, and helps you craft winning applications to land your dream offer.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      AI-powered profile optimization
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Smart job matching algorithm
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Application success prediction
                    </li>
                  </ul>
                </div>
              </AnimateIn>

              <AnimateIn delay="duration-500">
                <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700">
                  <div className="bg-gray-800 rounded-2xl p-3 md:p-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4 md:mb-6">
                    <Trophy className="h-8 w-8 md:h-10 md:w-10 text-blue-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Free Platform - Zero Fees</h3>
                  <p className="text-gray-300 mb-6">
                    100% free for freelancers and people who hire (limited time offer). No platform fees, no hidden costs, no surprises. Keep all your earnings.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Competitive rates vs industry standard
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Your money is 100% safe with us
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Full financial transparency
                    </li>
                  </ul>
                </div>
              </AnimateIn>

              <AnimateIn delay="duration-700">
                <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700">
                  <div className="bg-gray-800 rounded-2xl p-3 md:p-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4 md:mb-6">
                    <Zap className="h-8 w-8 md:h-10 md:w-10 text-blue-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Free Applicant Tracking System</h3>
                  <p className="text-gray-300 mb-6">
                    Companies get completely free ATS for hiring (limited time offer). Post unlimited jobs, internships, and freelance work to reach mass applicants at zero cost.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Unlimited job postings for free
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Advanced applicant filtering
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Hire full-time or contractual
                    </li>
                  </ul>
                </div>
              </AnimateIn>

              <AnimateIn delay="duration-900">
                <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700">
                  <div className="bg-gray-800 rounded-2xl p-3 md:p-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4 md:mb-6">
                    <Users className="h-8 w-8 md:h-10 md:w-10 text-blue-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Protected Community</h3>
                  <p className="text-gray-300 mb-6">
                    Freelancers don't compete with cheap overseas workers. Build your portfolio fresh, connect with quality clients, and grow in a supportive community.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Quality-focused marketplace
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Direct messaging & networking
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Portfolio building support
                    </li>
                  </ul>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Platform Comparison */}
        <section className="py-16 md:py-24 lg:py-32 bg-black">
          <div className="w-full px-4 md:px-6">
            <AnimateIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 md:mb-8 leading-tight">
                <span style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontStyle: 'italic'}}>100<span className="text-[#0056B3]">Networks</span></span> vs <span className="text-blue-400">Everyone Else</span>
              </h2>
            </AnimateIn>
            
            <AnimateIn delay="duration-300">
              <p className="text-lg md:text-xl text-gray-300 text-center mb-12 md:mb-16 max-w-4xl mx-auto px-2">
                See why thousands are switching to the platform that actually puts users first
              </p>
            </AnimateIn>

            <div className="max-w-6xl mx-auto">
              <AnimateIn delay="duration-500">
                <div className="bg-gray-900 rounded-3xl p-4 md:p-6 lg:p-8 border border-gray-700 overflow-x-auto">
                  <table className="w-full text-left min-w-[500px]">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="py-3 md:py-4 pr-4 md:pr-8 text-gray-300 font-semibold text-sm md:text-base">Features</th>
                        <th className="py-3 md:py-4 px-2 md:px-4 text-blue-400 font-bold text-center text-sm md:text-base"><span style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontStyle: 'italic'}}>100<span className="text-[#0056B3]">Networks</span></span></th>
                        <th className="py-3 md:py-4 px-2 md:px-4 text-gray-400 font-semibold text-center text-sm md:text-base">Competitors</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-gray-800">
                        <td className="py-3 md:py-4 pr-4 md:pr-8 text-sm md:text-base">Platform Fees</td>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-center text-blue-400 font-bold text-sm md:text-base">FREE (Limited Time)</td>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-center text-red-400 text-sm md:text-base">UP TO 25%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 md:py-4 pr-4 md:pr-8 text-sm md:text-base">Job Application Limit</td>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-center text-blue-400 font-bold text-sm md:text-base">Unlimited</td>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-center text-red-400 text-sm md:text-base">Limited</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 md:py-4 pr-4 md:pr-8 text-sm md:text-base">Individual Hiring</td>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-center text-blue-400 font-bold text-sm md:text-base">✓ Yes</td>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-center text-red-400 text-sm md:text-base">✗ No</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 md:py-4 pr-4 md:pr-8 text-sm md:text-base">Applicant Tracking System</td>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-center text-blue-400 font-bold text-sm md:text-base">Free (Limited Time)</td>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-center text-red-400 text-sm md:text-base">$500+/month</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-8">AI Profile Optimization</td>
                        <td className="py-4 px-4 text-center text-blue-400 font-bold">✓ Included</td>
                        <td className="py-4 px-4 text-center text-red-400">✗ Not Available</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-8">Social Networking Feed</td>
                        <td className="py-4 px-4 text-center text-blue-400 font-bold">✓ Yes</td>
                        <td className="py-4 px-4 text-center text-red-400">✗ Limited</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-8">Quality Control</td>
                        <td className="py-4 px-4 text-center text-blue-400 font-bold">Protected Community</td>
                        <td className="py-4 px-4 text-center text-red-400">Race to Bottom</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-8">Contractual + Full-time</td>
                        <td className="py-4 px-4 text-center text-blue-400 font-bold">✓ Both</td>
                        <td className="py-4 px-4 text-center text-red-400">One or Other</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-8">Transparency</td>
                        <td className="py-4 px-4 text-center text-blue-400 font-bold">100% Full</td>
                        <td className="py-4 px-4 text-center text-red-400">Hidden Costs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Interactive Platform Demo */}
        <section className="py-16 md:py-24 lg:py-32 bg-black">
          <div className="w-full px-4 md:px-6">
            <AnimateIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 md:mb-16 leading-tight">
                Experience the Future<br />
                <span className="text-blue-400">of Career Building</span>
              </h2>
            </AnimateIn>

            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                <div className="space-y-8 md:space-y-12">
                  <AnimateIn>
                    <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">🚀 Career Social Feed</h3>
                      <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6">
                        Stay connected with like-minded professionals. Share updates about your journey, see what others are working on, and grow your network organically.
                      </p>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {['Project Updates', 'Job Wins', 'Skill Achievements', 'Network Growth', 'Career Milestones'].map((skill, i) => (
                          <span key={i} className="bg-blue-500/20 text-blue-400 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimateIn>

                  <AnimateIn delay="duration-300">
                    <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">🤝 Direct Messaging & Networking</h3>
                      <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6">
                        Connect directly with professionals, companies, and potential collaborators. Message anyone, share your profile, and build meaningful career relationships.
                      </p>
                      <div className="grid grid-cols-3 gap-3 md:gap-4">
                        {['Chat', 'Connect', 'Grow'].map((role, i) => (
                          <div key={i} className="bg-black/40 rounded-xl p-3 md:p-4 text-center border border-gray-600">
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-accent/30 rounded-full mx-auto mb-2"></div>
                            <div className="text-white text-xs md:text-sm">{role}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimateIn>

                  <AnimateIn delay="duration-600">
                    <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">💰 Secure Payments & Zero Fees</h3>
                      <p className="text-gray-300 text-base md:text-lg">
                        Your money is completely safe with us. Zero platform fees for freelancers and hirers (limited time), no hidden costs, full financial protection. Keep 100% of your earnings.
                      </p>
                    </div>
                  </AnimateIn>
                </div>

                <div className="lg:sticky lg:top-32">
                  <AnimateIn delay="duration-400">
                    <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700">
                      <div className="space-y-4 md:space-y-6">
                        <div className="flex items-center justify-between mb-4 md:mb-6">
                          <h3 className="text-xl md:text-2xl font-bold text-white">Active Projects</h3>
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="space-y-3 md:space-y-4">
                          {[
                            { 
                              title: "Full-Stack Developer Internship", 
                              client: "TechStart Inc.", 
                              team: "Remote", 
                              payment: "$3,000/month", 
                              status: "Open",
                              skills: ["React", "Node.js", "MongoDB"]
                            },
                            { 
                              title: "Senior Product Designer", 
                              client: "FinanceFlow", 
                              team: "Hybrid", 
                              payment: "$85,000/year", 
                              status: "Urgent",
                              skills: ["Figma", "UI/UX", "Design Systems"]
                            },
                            { 
                              title: "Freelance Logo Design", 
                              client: "Local Restaurant", 
                              team: "Individual", 
                              payment: "$800", 
                              status: "Open",
                              skills: ["Illustrator", "Branding", "Creative"]
                            }
                          ].map((project, i) => (
                            <div key={i} className="bg-black/60 rounded-2xl p-4 md:p-6 border border-gray-700/50 hover:border-accent/50 transition-colors">
                              <div className="flex justify-between items-start mb-2 md:mb-3">
                                <h4 className="font-bold text-white text-base md:text-lg pr-2">{project.title}</h4>
                                <span className={`text-xs px-2 py-1 md:px-3 rounded-full flex-shrink-0 ${
                                  project.status === 'Urgent' ? 'bg-red-500/20 text-red-400' :
                                  project.status === 'Open' ? 'bg-blue-500/20 text-blue-400' :
                                  'bg-yellow-500/20 text-yellow-400'
                                }`}>
                                  {project.status}
                                </span>
                              </div>
                              <p className="text-gray-400 text-xs md:text-sm mb-2 md:mb-3">{project.client}</p>
                              <div className="flex justify-between items-center mb-2 md:mb-3">
                                <span className="text-gray-300 text-xs md:text-sm">{project.team}</span>
                                <span className="text-accent font-bold text-sm md:text-base">{project.payment}</span>
                              </div>
                              <div className="flex flex-wrap gap-1 md:gap-2">
                                {project.skills.map((skill, j) => (
                                  <span key={j} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimateIn>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 md:py-24 lg:py-32 bg-black">
          <div className="w-full px-4 md:px-6 text-center">
            <AnimateIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 md:mb-8">
                Building the Future<br />
                <span className="text-accent">One Project at a Time</span>
              </h2>
            </AnimateIn>
            
            <AnimateIn delay="duration-500">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 md:mb-16 max-w-4xl mx-auto px-2">
                <span style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontStyle: 'italic'}}>100<span className="text-[#0056B3]">Networks</span></span> is revolutionizing how Gen Z finds work—building the future 
                of careers through meaningful collaboration and opportunity.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 lg:py-32 bg-black">
          <div className="w-full px-4 md:px-6">
            <AnimateIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center leading-tight mb-12 md:mb-16">
                Your Journey on<br />
                <span style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontStyle: 'italic'}}>100<span className="text-[#0056B3]">Networks</span></span>
              </h2>
            </AnimateIn>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <AnimateIn delay="duration-300">
                <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700 text-center">
                  <div className="bg-gray-800 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <span className="text-blue-400 text-2xl md:text-3xl font-bold">1</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Build Your Profile</h3>
                  <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6">
                    Showcase your skills, set your availability, and tell us what kind of projects excite you. 
                    Our AI creates a personalized experience from day one.
                  </p>
                  <div className="bg-gray-800/50 rounded-2xl p-3 md:p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/30 rounded-full"></div>
                      <div className="text-left">
                        <div className="text-white font-semibold text-sm md:text-base">Your Profile</div>
                        <div className="text-gray-400 text-xs md:text-sm">Frontend Developer</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {['React', 'TypeScript', 'Design'].map((skill, i) => (
                        <span key={i} className="bg-accent/20 text-accent px-2 py-1 md:px-3 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay="duration-500">
                <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700 text-center">
                  <div className="bg-gray-800 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <span className="text-blue-400 text-2xl md:text-3xl font-bold">2</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Join & Collaborate</h3>
                  <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6">
                    Get matched with projects and teammates. Work together using our integrated tools, 
                    learn from each other, and deliver amazing results.
                  </p>
                  <div className="bg-gray-800/50 rounded-2xl p-3 md:p-4">
                    <div className="text-white font-semibold mb-3 text-sm md:text-base">Team Chat</div>
                    <div className="space-y-2 text-xs md:text-sm">
                      <div className="bg-accent/20 rounded-lg p-2 text-accent">Let's nail this project! 🚀</div>
                      <div className="bg-purple-500/20 rounded-lg p-2 text-purple-300">Frontend looks amazing!</div>
                      <div className="bg-blue-500/20 rounded-lg p-2 text-blue-300">API integration complete ✅</div>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay="duration-700">
                <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700 text-center">
                  <div className="bg-gray-800 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <span className="text-blue-400 text-2xl md:text-3xl font-bold">3</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Get Hired & Grow</h3>
                  <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6">
                    Your completed projects become verified portfolio pieces. Companies reach out directly, 
                    and your proven experience opens doors to dream opportunities.
                  </p>
                  <div className="bg-gray-800/50 rounded-2xl p-3 md:p-4">
                    <div className="text-white font-semibold mb-3 text-sm md:text-base">Portfolio Impact</div>
                    <div className="grid grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                      <div className="bg-green-500/20 rounded-lg p-2 md:p-3 text-center">
                        <div className="text-green-400 font-bold text-lg md:text-xl">5</div>
                        <div className="text-gray-300">Projects</div>
                      </div>
                      <div className="bg-accent/20 rounded-lg p-2 md:p-3 text-center">
                        <div className="text-accent font-bold text-lg md:text-xl">12</div>
                        <div className="text-gray-300">Job Offers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 md:py-24 lg:py-32 bg-black">
          <div className="w-full px-4 md:px-6">
            <AnimateIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 md:mb-8">
                Real Stories,<br />
                <span className="text-accent">Real Success</span>
              </h2>
            </AnimateIn>
            
            <AnimateIn delay="duration-300">
              <p className="text-lg md:text-xl text-gray-300 text-center mb-12 md:mb-16 max-w-3xl mx-auto px-2">
                See how <span style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontStyle: 'italic'}}>100<span className="text-[#0056B3]">Networks</span></span> is transforming careers through zero platform fees (limited time), unlimited opportunities, and AI-powered matching.
              </p>
            </AnimateIn>
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  quote: "100 Networks AI helped me optimize my profile and I landed my dream job within 3 weeks! The zero platform fees and free access helped me build my portfolio without any budget constraints. Complete game changer!",
                  author: "Arjun Sharma",
                  role: "",
                  avatar: "/professional-man-2.png",
                  metric: "₹12L Job Offer",
                  color: "accent"
                },
                {
                  quote: "Finally a platform that doesn't take 25% commission! I can focus on building quality relationships and projects without the stress of competition. Connected with amazing clients through the social feed.",
                  author: "Priya Singh", 
                  role: "",
                  avatar: "/professional-woman-2.png",
                  metric: "Zero Fees Saved ₹2L",
                  color: "purple-500"
                },
                {
                  quote: "The free ATS and unlimited job postings saved us thousands of rupees! We can hire both full-time and contract workers based on our requirements. Quality candidates without any agency fees.",
                  author: "Rohit Gupta",
                  role: "",
                  avatar: "/manager-avatar.png",
                  metric: "Saved ₹15L in Fees",
                  color: "blue-500"
                },
                {
                  quote: "I can apply to unlimited internships and freelance projects without any restrictions! The AI helped me target the right opportunities. Got my first internship and 3 freelance projects within a month.",
                  author: "Ananya Reddy",
                  role: "",
                  avatar: "/young-professional-woman.png",
                  metric: "4 Opportunities Found",
                  color: "green-500"
                },
                {
                  quote: "The community is very supportive and protects us from cheap competition. I can build genuine relationships, message clients directly, and have a completely stress-free freelancing experience.",
                  author: "Vikash Kumar",
                  role: "",
                  avatar: "/professional-man-glasses.png",
                  metric: "Quality Community",
                  color: "accent"
                },
                {
                  quote: "As an individual, I can hire freelancers for my side projects without going through expensive agencies. Zero fees and transparency make it perfect for small businesses and entrepreneurs.",
                  author: "Sneha Joshi",
                  role: "",
                  avatar: "/professional-woman-headshot.png",
                  metric: "Individual Hiring",
                  color: "purple-500"
                }
              ].map((testimonial, index) => (
                <AnimateIn key={index} delay={`duration-${300 + index * 100}`}>
                  <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700 hover:border-gray-600 transition-all">
                    <div className={`inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 bg-${testimonial.color}/20 border border-${testimonial.color}/30`}>
                      <span className={`text-${testimonial.color === 'accent' ? 'accent' : testimonial.color} font-bold text-xs md:text-sm`}>
                        {testimonial.metric}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <Avatar className="w-10 h-10 md:w-12 md:h-12">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback className="bg-accent/20 text-accent">{testimonial.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-white text-base md:text-lg">{testimonial.author}</p>
                        {testimonial.role && <p className="text-gray-400 text-sm md:text-base">{testimonial.role}</p>}
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Join the Revolution CTA */}
        <section className="py-16 md:py-24 lg:py-32 bg-black relative">
          <div className="w-full px-4 md:px-6 text-center">
            <AnimateIn>
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 md:mb-8 leading-tight">
                Ready to Build<br />
                <span className="text-blue-400">Your Future?</span>
              </h2>
            </AnimateIn>
            
            <AnimateIn delay="duration-300">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto px-2">
                Join thousands who are building careers with zero platform fees (limited time), unlimited opportunities, and free access to all features.
              </p>
            </AnimateIn>

            <AnimateIn delay="duration-500">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16 px-4">
                <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full max-w-md sm:max-w-none">
                  <Input 
                    placeholder="Enter your email address" 
                    className="w-full sm:w-64 md:w-80 bg-gray-900 text-white border-gray-700 placeholder:text-gray-400 rounded-xl h-12 md:h-14 text-base md:text-lg"
                  />
                  <Link href="/explore">
                    <Button className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-400 hover:text-white font-semibold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg transition-colors rounded-xl h-12 md:h-14">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay="duration-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
                <div className="flex items-center justify-center space-x-2 md:space-x-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-sm md:text-base">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">No credit card required</span>
                </div>
                <div className="flex items-center justify-center space-x-2 md:space-x-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-sm md:text-base">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">Start earning immediately</span>
                </div>
                <div className="flex items-center justify-center space-x-2 md:space-x-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-sm md:text-base">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">Build verified portfolio</span>
                </div>
              </div>
            </AnimateIn>
            
            <AnimateIn delay="duration-900">
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                By joining <span style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontStyle: 'italic'}}>100<span className="text-[#0056B3]">Networks</span></span>, you agree to our Terms of Service and Privacy Policy. 
                Your data is secure and never shared with third parties.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Footer */}
        <footer className="hidden md:block bg-black py-12 md:py-16 lg:py-20 border-t border-gray-800">
          <div className="w-full px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6"><span style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontStyle: 'italic'}}>100<span className="text-[#0056B3]">Networks</span></span></h3>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
                  Building the future of work through collaborative project-based experiences.
                </p>
              </div>
              
              <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm mb-4 md:mb-0">
                  ©2024 <span style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontStyle: 'italic'}}>100<span className="text-[#0056B3]">Networks</span></span> Inc. All rights reserved.
                </div>
                <div className="flex space-x-6 text-sm text-gray-400">
                  <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
                  <Link href="/cookies" className="hover:text-accent transition-colors">Cookie Policy</Link>
                  <Link href="/accessibility" className="hover:text-accent transition-colors">Accessibility</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
