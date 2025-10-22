import Image from "next/image";
import Link from "next/link";
import Symbol from "@/assets/images/logo/symbol_colour_v2.svg";

export default function JoinUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 py-20 lg:py-28 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="food-decoration animate-float delay-1 top-16 left-16 text-primary">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
              <circle cx="20" cy="20" r="15" fillOpacity="0.08"/>
              <path d="M20 8c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12S26.6 8 20 8zm0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fillOpacity="0.04"/>
            </svg>
          </div>
          <div className="food-decoration animate-float-reverse delay-2 top-32 right-20 text-secondary">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
              <rect x="12" y="4" width="8" height="24" rx="4" fillOpacity="0.06"/>
              <circle cx="16" cy="6" r="3" fillOpacity="0.04"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <Image 
                src={Symbol} 
                alt="SourceFoods Symbol" 
                width={100} 
                height={100} 
                className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 group-hover:scale-105 transition-transform duration-300" 
                priority
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Join the{' '}</span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Movement
            </span>
          </h1>
          
          <div className="mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Be part of Singapore's mission to reduce food waste and strengthen communities. Every action counts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a 
              href="https://forms.gle/gsWQmRi6qT9nYqX36" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-primary/90 rounded-xl hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-105"
            >
              Become a Volunteer
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </a>
            <Link
              href="/partnerships"
              className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-primary bg-white/90 backdrop-blur border border-gray-200 rounded-xl hover:bg-white hover:border-primary/30 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-105"
            >
              Partner with Us
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Ways to Get Involved
            </h2>
            <div className="mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Choose how you want to contribute to Singapore's food waste reduction mission
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Individual Volunteer */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Individual Volunteer</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                Join our community of passionate volunteers helping to collect, sort, and distribute food to communities in need.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-700">Food collection & distribution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-700">Community events & outreach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-700">Flexible scheduling</span>
                </div>
              </div>
              <a 
                href="https://forms.gle/gsWQmRi6qT9nYqX36" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-3 text-primary border-2 border-primary/20 rounded-lg hover:border-primary hover:bg-primary/5 font-medium transition-all duration-200"
              >
                Sign Up Now
              </a>
            </div>

            {/* Business Partnership */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-secondary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary/10 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Business Partnership</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                Transform your surplus food into community impact. Join restaurants, supermarkets, and caterers making a difference.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-gray-700">Easy surplus food listing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-gray-700">Automated matching system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-gray-700">Impact reporting & analytics</span>
                </div>
              </div>
              <Link
                href="/partnerships"
                className="w-full inline-flex items-center justify-center px-6 py-3 text-secondary border-2 border-secondary/20 rounded-lg hover:border-secondary hover:bg-secondary/5 font-medium transition-all duration-200"
              >
                Learn More
              </Link>
            </div>

            {/* Community Organization */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Community Organization</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                NGOs, community centers, and social organizations can access our platform to receive food donations efficiently.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Priority food matching</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Volunteer coordination tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Distribution management</span>
                </div>
              </div>
              <Link
                href="/contact-us"
                className="w-full inline-flex items-center justify-center px-6 py-3 text-emerald-600 border-2 border-emerald-200 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 font-medium transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Process */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How Volunteering Works
            </h2>
            <div className="mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A simple 3-step process to start making an impact in your community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 transform translate-y-6"></div>
            
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full text-white font-bold text-xl mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sign Up & Onboard</h3>
              <p className="text-gray-600 mb-6">
                Complete our quick registration form and attend a brief orientation session to learn about food safety and our processes.
              </p>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">30-minute orientation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-sm text-gray-600">Food safety training included</span>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-full text-white font-bold text-xl mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Your Activities</h3>
              <p className="text-gray-600 mb-6">
                Pick volunteer opportunities that match your schedule and interests, from food collection to community distribution events.
              </p>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Weekly options available</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Flexible</span>
                </div>
                <div className="text-xs text-gray-600">2-4 hours commitment • Your choice</div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full text-white font-bold text-xl mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Make an Impact</h3>
              <p className="text-gray-600 mb-6">
                Connect with fellow volunteers, help families in need, and see the direct impact of your contributions through our tracking system.
              </p>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Track your impact</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">Join our volunteer community</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://forms.gle/gsWQmRi6qT9nYqX36" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-105"
            >
              Start Your Volunteer Journey
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Join Our Growing Community
            </h2>
            <div className="mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Be part of a movement that's already making a real difference across Singapore
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/10">
              <div className="text-3xl font-bold text-primary mb-2">750+</div>
              <div className="text-slate-700 font-medium">Active Volunteers</div>
              <div className="text-sm text-slate-600 mt-1">Growing every week</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl border border-secondary/10">
              <div className="text-3xl font-bold text-secondary mb-2">85+</div>
              <div className="text-slate-700 font-medium">Partner Organizations</div>
              <div className="text-sm text-slate-600 mt-1">Across all regions</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200">
              <div className="text-3xl font-bold text-emerald-600 mb-2">12.5K+</div>
              <div className="text-slate-700 font-medium">Meals Distributed</div>
              <div className="text-sm text-slate-600 mt-1">By our volunteers</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">25T</div>
              <div className="text-slate-700 font-medium">Food Waste Prevented</div>
              <div className="text-sm text-slate-600 mt-1">Monthly savings</div>
            </div>
          </div>
          
          {/* Community Connections */}
          <div className="bg-gradient-to-r from-primary/8 to-secondary/8 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Connect with Fellow Volunteers</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Join our active community channels to coordinate activities, share experiences, and stay updated on volunteer opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a href="https://t.me/SourceFoods" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Join Telegram Community
              </a>
              <a href="https://instagram.com/sgsourcefoods" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center px-6 py-3 text-primary bg-white border border-primary/30 rounded-lg hover:bg-primary/5 font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow @sgsourcefoods
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Making a Difference?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Every volunteer makes a real impact. Join us today and help build a more sustainable Singapore.
          </p>
          
          <a 
            href="https://forms.gle/gsWQmRi6qT9nYqX36" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 text-xl font-semibold text-primary bg-white rounded-2xl hover:bg-gray-50 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 transform hover:scale-105"
          >
            Complete Volunteer Application
            <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          
          <div className="mt-8 flex justify-center items-center space-x-8 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free to join</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Flexible schedule</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Training provided</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
