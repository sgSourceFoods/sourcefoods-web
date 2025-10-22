import NavigationBar from "@/components/navigation-bar/navigation-bar";
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/ui/animated-counter";
import NewsletterSignup from "@/components/ui/newsletter-signup";
import ClientOnly from "@/components/ui/client-only";

import Symbol from "@/assets/images/logo/symbol_colour_v2.svg";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-food-pattern-subtle py-16 sm:py-20 lg:py-28 overflow-hidden">
        {/* Floating food decorations */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Fruits and vegetables floating */}
          <div className="food-decoration animate-float delay-1 top-10 left-10 text-primary">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
              <circle cx="20" cy="20" r="15" fillOpacity="0.1"/>
              <path d="M20 8c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12S26.6 8 20 8zm0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fillOpacity="0.05"/>
            </svg>
          </div>
          
          <div className="food-decoration animate-float-reverse delay-2 top-32 right-20 text-secondary">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
              <rect x="12" y="4" width="8" height="24" rx="4" fillOpacity="0.08"/>
              <circle cx="16" cy="6" r="3" fillOpacity="0.06"/>
            </svg>
          </div>
          
          <div className="food-decoration animate-float delay-3 bottom-20 left-1/4 text-primary">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor">
              <path d="M18 6c-6 0-6 12 0 12s6-12 0-12z" fillOpacity="0.06"/>
              <path d="M10 20c4-4 8-4 12 0s4 8 0 12-8 4-12 0-4-8 0-12z" fillOpacity="0.04"/>
            </svg>
          </div>
          
          <div className="food-decoration animate-float-reverse bottom-32 right-16 text-secondary">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
              <circle cx="14" cy="14" r="10" fillOpacity="0.05"/>
              <circle cx="14" cy="14" r="6" fillOpacity="0.03"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            {/* Logo with enhanced styling */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <Image 
                  src={Symbol} 
                  alt="SourceFoods Symbol" 
                  width={120} 
                  height={120} 
                  className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 group-hover:scale-105 transition-transform duration-300" 
                  priority
                />
              </div>
            </div>
            
            {/* Main heading with enhanced typography */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                Smarter Aid,{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Feed More</span>
              </h1>
              <div className="mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <p className="text-lg sm:text-xl font-medium text-slate-700 max-w-2xl mx-auto leading-relaxed">
                Connecting Singapore's food ecosystem to reduce waste and feed communities
              </p>
            </div>
            
            {/* Enhanced description */}
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                SourceFoods reduces food waste by connecting food donors, NGOs, and volunteers through real-time coordination and data-driven insights.
              </p>
              
              {/* Value propositions */}
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-emerald-200 shadow-sm relative">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-800">Real-time Matching</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 text-emerald-500 opacity-20">
                    <svg fill="currentColor" viewBox="0 0 12 12"><circle cx="6" cy="6" r="5"/></svg>
                  </div>
                </div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-amber-200 shadow-sm relative">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-800">National Scale</span>
                  <div className="absolute -bottom-1 -left-1 w-2 h-4 text-secondary opacity-20">
                    <svg fill="currentColor" viewBox="0 0 8 16"><rect width="8" height="16" rx="4"/></svg>
                  </div>
                </div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-primary/30 shadow-sm relative">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-800">Community First</span>
                  <div className="absolute -top-1 -left-1 w-4 h-3 text-primary opacity-20">
                    <svg fill="currentColor" viewBox="0 0 16 12"><path d="M8 0c4 0 4 6 0 6S4 0 8 0z"/></svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6">
              <Link href="/about-us" 
                    className="group inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-primary/90 rounded-xl hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-105">
                Learn Our Story
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/join-us"
                    className="group inline-flex items-center px-8 py-4 text-base font-semibold text-primary bg-white/90 backdrop-blur border border-gray-200 rounded-xl hover:bg-white hover:border-primary/30 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-105">
                Join the Movement
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-food-pattern-fruits relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-50 rounded-full border border-red-100 mb-4">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-sm font-medium text-red-700">The Challenge</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Singapore's Food Waste Crisis
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Every year, Singapore discards 817,000 tonnes of food while many communities face food insecurity.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Massive Food Waste</h3>
                    <p className="text-slate-700">817,000 tonnes of food waste annually - enough to fill 30,000 double-decker buses</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Poor Coordination</h3>
                    <p className="text-slate-700">Food donors and communities struggle to connect efficiently</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Limited Data</h3>
                    <p className="text-slate-700">Lack of insights to optimize food distribution and impact measurement</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-50 rounded-full border border-green-100">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-700">Our Solution</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Smart Food Distribution Network</h3>
                <p className="text-gray-600">
                  SourceFoods creates an intelligent ecosystem that connects food donors, NGOs, and volunteers through real-time data and coordination tools.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Real-time food matching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Data-driven insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Community coordination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-food-pattern-organic relative">
        {/* Floating food elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="food-decoration animate-float top-16 left-8 text-primary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c5 0 5 8 0 8s-5-8 0-8z" fillOpacity="0.08"/>
            </svg>
          </div>
          <div className="food-decoration animate-float-reverse delay-2 top-32 right-12 text-secondary">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <circle cx="10" cy="10" r="8" fillOpacity="0.06"/>
            </svg>
          </div>
          <div className="food-decoration animate-float delay-1 bottom-24 left-1/3 text-primary">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
              <rect x="10" y="4" width="8" height="20" rx="4" fillOpacity="0.05"/>
            </svg>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How SourceFoods Works
            </h2>
            <div className="mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A simple yet powerful process that transforms food waste into community nourishment
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Food Donors Connect</h3>
              <p className="text-gray-600 mb-6">
                Restaurants, supermarkets, and caterers easily list surplus food through our platform with photos, quantities, and pickup times.
              </p>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">50 meals available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Pickup: 6-8 PM today</span>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-full text-white font-bold text-xl mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Matching</h3>
              <p className="text-gray-600 mb-6">
                Our AI instantly matches available food with nearby NGOs and communities based on need, location, and capacity.
              </p>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Community Centre A</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Perfect Match</span>
                </div>
                <div className="text-xs text-gray-600">2.1 km away • Capacity: 60 people</div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white font-bold text-xl mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Communities Fed</h3>
              <p className="text-gray-600 mb-6">
                Volunteers coordinate pickup and delivery, while our platform tracks impact and provides insights for continuous improvement.
              </p>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">50 people fed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-sm text-gray-600">12kg food waste prevented</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Designed for Impact
            </h2>
            <div className="mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with human-centered design to maximize social impact
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Coordination Card */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-r from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Smart Coordination</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Real-time matching algorithm connects food donors with communities in need, optimizing for location, capacity, and dietary requirements.
              </p>
            </div>

            {/* Data Insights Card */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-secondary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-r from-secondary/10 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Data-Driven Insights</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Comprehensive analytics help organizations understand impact, optimize operations, and make informed decisions for greater efficiency.
              </p>
            </div>

            {/* Community First Card */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-gradient-to-r from-green-100 to-green-200 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Community First</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Built with and for our community, ensuring every solution addresses real human needs while maintaining dignity and respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-secondary/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Growing Impact</h2>
            <div className="mx-auto w-16 h-1 bg-white/30 rounded-full mb-6"></div>
            <p className="text-base text-white/90 max-w-2xl mx-auto">
              Every day, we're making a difference in communities across Singapore
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold">
                <ClientOnly fallback={<span className="text-3xl lg:text-4xl font-bold">12500+</span>}>
                  <AnimatedCounter value={12500} suffix="+" className="text-3xl lg:text-4xl font-bold" />
                </ClientOnly>
              </div>
              <div className="text-base lg:text-lg opacity-90 font-medium">Meals Redistributed</div>
              <div className="text-sm opacity-75">Preventing food waste daily</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold">
                <ClientOnly fallback={<span className="text-3xl lg:text-4xl font-bold">85+</span>}>
                  <AnimatedCounter value={85} suffix="+" className="text-3xl lg:text-4xl font-bold" />
                </ClientOnly>
              </div>
              <div className="text-base lg:text-lg opacity-90 font-medium">Partner Organizations</div>
              <div className="text-sm opacity-75">NGOs, restaurants & suppliers</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold">
                <ClientOnly fallback={<span className="text-3xl lg:text-4xl font-bold">750+</span>}>
                  <AnimatedCounter value={750} suffix="+" className="text-3xl lg:text-4xl font-bold" />
                </ClientOnly>
              </div>
              <div className="text-base lg:text-lg opacity-90 font-medium">Active Volunteers</div>
              <div className="text-sm opacity-75">Passionate community helpers</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold">
                <ClientOnly fallback={<span className="text-3xl lg:text-4xl font-bold">25</span>}>
                  <AnimatedCounter value={25} className="text-3xl lg:text-4xl font-bold" />
                </ClientOnly>
              </div>
              <div className="text-base lg:text-lg opacity-90 font-medium">Tonnes Saved Monthly</div>
              <div className="text-sm opacity-75">Food waste prevented</div>
            </div>
          </div>
          
          {/* Progress towards goals */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-center mb-8">On Track for 2025 Goals</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Food Waste Reduction</span>
                    <span className="text-sm opacity-90">68% of target</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Community Partnerships</span>
                    <span className="text-sm opacity-90">85% of target</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-food-icons relative">
        {/* Food decorations for testimonials */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="food-decoration animate-float delay-1 top-20 left-16 text-primary">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 4c6 0 6 12 0 12s-6-12 0-12z" fillOpacity="0.06"/>
              <circle cx="16" cy="20" r="8" fillOpacity="0.04"/>
            </svg>
          </div>
          <div className="food-decoration animate-float-reverse delay-3 bottom-16 right-20 text-secondary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="8" y="2" width="8" height="20" rx="4" fillOpacity="0.05"/>
            </svg>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Community Voices
            </h2>
            <div className="mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Hear from the partners and communities who are making this vision a reality
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Sarah Chen</h4>
                  <p className="text-sm text-slate-600">Food Bank Singapore</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                "SourceFoods has transformed how we coordinate food distribution. The real-time matching saves us hours of phone calls and ensures food reaches families faster."
              </p>
              <div className="flex text-secondary text-sm">
                ★★★★★
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Marcus Lim</h4>
                  <p className="text-sm text-slate-600">Restaurant Owner</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                "Instead of throwing away perfectly good food, we can now easily connect with communities who need it. It's rewarding to see our surplus make a real difference."
              </p>
              <div className="flex text-secondary text-sm">
                ★★★★★
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7.5h-1c-.83 0-1.5.67-1.5 1.5v6h-2v-6c0-1.1-.9-2-2-2H9.5c-1.1 0-2 .9-2 2v6H5.5v-6c0-.83-.67-1.5-1.5-1.5h-1a1.5 1.5 0 0 0-1.46.87L0 14.5H2.5V22h4v-6h2v6h4v-6h2v6h4z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Priya Raj</h4>
                  <p className="text-sm text-slate-600">Community Volunteer</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                "Being able to coordinate with other volunteers through the platform makes our food drives so much more effective. We're feeding more families than ever before."
              </p>
              <div className="flex text-secondary text-sm">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Trusted by Singapore's Leading Organizations
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From government agencies to grassroots organizations, we're building a community of changemakers
            </p>
          </div>
          
          {/* Partner logos grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center mb-12 opacity-70">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="w-20 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors duration-200">
                <span className="text-slate-400 text-xs font-medium">Partner</span>
              </div>
            ))}
          </div>
          
          {/* Recognition badges */}
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="flex items-center space-x-3 px-6 py-3 bg-primary/5 rounded-full border border-primary/20">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-700">SGClimate Partner</span>
            </div>
            <div className="flex items-center space-x-3 px-6 py-3 bg-secondary/5 rounded-full border border-secondary/20">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-700">Social Enterprise Award</span>
            </div>
            <div className="flex items-center space-x-3 px-6 py-3 bg-emerald-50 rounded-full border border-emerald-200">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-700">UN SDG Aligned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Impact Map Section */}
      <section className="py-20 bg-food-pattern-subtle relative">
        {/* Add section divider */}
        <div className="section-divider-food max-w-4xl mx-auto mb-16"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Real-Time Impact Across Singapore
            </h2>
            <div className="mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              See how SourceFoods is making a difference in communities across all five regions of Singapore
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Map placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Interactive Impact Map</h3>
                    <p className="text-slate-600 text-sm">Real-time visualization of food distributions across Singapore</p>
                  </div>
                </div>
                
                {/* Live activity feed */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-3"></div>
                    Live Activity
                  </h4>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-900 font-medium">
                          {index === 0 && "25 meals distributed to Bedok Community Centre"}
                          {index === 1 && "40kg surplus food collected from Restaurant ABC"}
                          {index === 2 && "18 families supported in Jurong West"}
                          {index === 3 && "New partner onboarded: Sunshine Supermarket"}
                        </p>
                        <p className="text-xs text-slate-500">{3 + index * 2} minutes ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Regional stats */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Impact by Region</h3>
              
              {[
                { region: "Central", meals: 2850, partners: 23, color: "bg-blue-500" },
                { region: "East", meals: 3200, partners: 18, color: "bg-emerald-500" },
                { region: "North", meals: 2100, partners: 15, color: "bg-purple-500" },
                { region: "West", meals: 2750, partners: 16, color: "bg-orange-500" },
                { region: "Northeast", meals: 1600, partners: 13, color: "bg-pink-500" }
              ].map((region, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 ${region.color} rounded-full`}></div>
                      <h4 className="font-semibold text-slate-900">{region.region}</h4>
                    </div>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                      {region.partners} partners
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Meals distributed</span>
                      <span className="font-semibold text-slate-900">
                        <ClientOnly fallback={<span>{region.meals.toLocaleString()}</span>}>
                          <AnimatedCounter value={region.meals} />
                        </ClientOnly>
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${region.color}`}
                        style={{ width: `${(region.meals / 3200) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/8 to-secondary/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Stay Connected with Our Mission
          </h2>
          <p className="text-base text-slate-600 mb-8 max-w-2xl mx-auto">
            Get updates on our progress, impact stories, and opportunities to get involved in reducing food waste across Singapore.
          </p>
          
          <NewsletterSignup variant="hero" className="mb-8" />
          
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 max-w-2xl mx-auto border border-primary/10 shadow-sm">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Join Our Community</h3>
              <p className="text-sm text-slate-600">
                Connect with fellow volunteers, test our platform, and share your feedback in our active Telegram community
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <a href="https://t.me/SourceFoods" target="_blank" rel="noopener noreferrer" 
                   className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Join Telegram Group
                </a>
                <a href="https://instagram.com/sgsourcefoods" target="_blank" rel="noopener noreferrer" 
                   className="inline-flex items-center px-6 py-3 text-primary bg-white border border-primary/30 rounded-lg hover:bg-primary/5 font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Follow Updates
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 pt-4">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Monthly impact updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Volunteer opportunities</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Community stories</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to know about joining Singapore's food waste reduction movement
            </p>
          </div>
          
          <div className="space-y-8">
            {/* FAQ Items */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-primary font-semibold text-sm">1</span>
                Is the food safe to distribute?
              </h3>
              <p className="text-slate-600 leading-relaxed pl-12">
                Absolutely. We work closely with food safety authorities and follow strict guidelines. All food donors are vetted, and we only distribute items that are within their best-by dates and have been stored properly. Our volunteers are trained in food safety protocols.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-4 text-secondary font-semibold text-sm">2</span>
                How do I become a volunteer?
              </h3>
              <p className="text-slate-600 leading-relaxed pl-12">
                Simply visit our 'Join Us' page and complete the volunteer registration. We provide orientation sessions every week, and you can choose activities that fit your schedule - from food collection to community distribution events.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-4 text-emerald-600 font-semibold text-sm">3</span>
                Can my restaurant/business donate surplus food?
              </h3>
              <p className="text-slate-600 leading-relaxed pl-12">
                Yes! We welcome partnerships with restaurants, supermarkets, caterers, and food manufacturers. Our platform makes it easy to list surplus food, and we handle the coordination with recipient organizations. Contact our partnerships team to get started.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-primary font-semibold text-sm">4</span>
                How does the matching system work?
              </h3>
              <p className="text-slate-600 leading-relaxed pl-12">
                Our AI-powered system considers factors like location, food type, quantity, pickup timing, and recipient capacity to create optimal matches. This ensures food reaches communities quickly while minimizing waste and transportation costs.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-4 text-secondary font-semibold text-sm">5</span>
                What impact has SourceFoods made so far?
              </h3>
              <p className="text-slate-600 leading-relaxed pl-12">
                We've redistributed over 12,500 meals, prevented 25 tonnes of monthly food waste, and built a network of 85+ partner organizations with 750+ active volunteers. Our impact continues to grow as more organizations join our mission.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-4 text-emerald-600 font-semibold text-sm">6</span>
                Is there a cost to use SourceFoods?
              </h3>
              <p className="text-slate-600 leading-relaxed pl-12">
                Our platform is free for community organizations and individual volunteers. We offer different partnership tiers for businesses looking to scale their food donation programs, with options starting from community-level partnerships at no cost.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-700 mb-4">Still have questions?</p>
            <Link href="/contact-us" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors duration-200">
              Get in touch with our team
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-food-pattern-organic relative overflow-hidden">
        {/* Final food decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="food-decoration animate-float top-12 left-12 text-primary">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
              <circle cx="24" cy="24" r="20" fillOpacity="0.04"/>
              <path d="M24 8c8 0 8 16 0 16s-8-16 0-16z" fillOpacity="0.06"/>
            </svg>
          </div>
          <div className="food-decoration animate-float-reverse delay-2 top-20 right-16 text-secondary">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor">
              <rect x="14" y="6" width="8" height="24" rx="4" fillOpacity="0.05"/>
              <circle cx="18" cy="8" r="4" fillOpacity="0.03"/>
            </svg>
          </div>
          <div className="food-decoration animate-float delay-1 bottom-16 left-1/4 text-primary">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 10c6 0 6 10 0 10s-6-10 0-10z" fillOpacity="0.04"/>
              <path d="M10 25c5-5 10-5 15 0s5 10 0 15-10 5-15 0-5-10 0-15z" fillOpacity="0.02"/>
            </svg>
          </div>
          <div className="food-decoration animate-float-reverse delay-3 bottom-20 right-20 text-secondary">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
              <circle cx="16" cy="16" r="12" fillOpacity="0.03"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
            Join thousands of Singaporeans who are already working together to reduce food waste and strengthen our communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Link href="/join-us" 
                  className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-primary/90 rounded-xl hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-105">
              Start Your Journey
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
            
            <Link href="/about-us"
                  className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 bg-gray-100 border border-gray-200 rounded-xl hover:bg-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-300 transform hover:scale-105">
              Learn More
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 text-emerald-500">
                <svg fill="currentColor" viewBox="0 0 12 12">
                  <path d="M6 1c3 0 3 4 0 4S3 1 6 1z" fillOpacity="0.8"/>
                  <circle cx="6" cy="8" r="3" fillOpacity="0.6"/>
                </svg>
              </div>
              <span>Active nationwide</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 text-primary">
                <svg fill="currentColor" viewBox="0 0 12 12">
                  <circle cx="6" cy="6" r="5" fillOpacity="0.7"/>
                </svg>
              </div>
              <span>Growing daily</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 text-secondary">
                <svg fill="currentColor" viewBox="0 0 12 12">
                  <rect x="4" y="1" width="4" height="10" rx="2" fillOpacity="0.8"/>
                </svg>
              </div>
              <span>Community driven</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
