import NavigationBar from "@/components/navigation-bar/navigation-bar";
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/ui/animated-counter";
import NewsletterSignup from "@/components/ui/newsletter-signup";
import ClientOnly from "@/components/ui/client-only";

import Symbol from "@/assets/images/logo/symbol_colour_v2.svg";
import MinisterPresentation from "@/assets/images/minister-presentation.jpg";
import AcademicPresentation from "@/assets/images/academic-presentation.jpg";
import CDLHPresentation from "@/assets/images/cdlh-presentation.jpg";

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
            {/* Connection lines for desktop - improved alignment */}
            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-secondary to-green-500 opacity-40"></div>
            
            {/* Step 1 */}
            <div className="text-center relative flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full text-white font-bold text-xl mb-6 shadow-lg relative z-10">
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
            <div className="text-center relative flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-full text-white font-bold text-xl mb-6 shadow-lg relative z-10">
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
            <div className="text-center relative flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white font-bold text-xl mb-6 shadow-lg relative z-10">
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Target Impact</h2>
            <div className="mx-auto w-16 h-1 bg-white/30 rounded-full mb-6"></div>
            <p className="text-base text-white/90 max-w-2xl mx-auto">
              Working towards meaningful change in communities across Singapore
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold">
                <ClientOnly fallback={<span className="text-3xl lg:text-4xl font-bold">1000+</span>}>
                  <AnimatedCounter value={1000} suffix="+" className="text-3xl lg:text-4xl font-bold" />
                </ClientOnly>
              </div>
              <div className="text-base lg:text-lg opacity-90 font-medium">Meals Target Monthly</div>
              <div className="text-sm opacity-75">Aiming to prevent waste</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold">
                <ClientOnly fallback={<span className="text-3xl lg:text-4xl font-bold">50+</span>}>
                  <AnimatedCounter value={50} suffix="+" className="text-3xl lg:text-4xl font-bold" />
                </ClientOnly>
              </div>
              <div className="text-base lg:text-lg opacity-90 font-medium">Partner Organizations Target</div>
              <div className="text-sm opacity-75">Community centers & food donors</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold">
                <ClientOnly fallback={<span className="text-3xl lg:text-4xl font-bold">200+</span>}>
                  <AnimatedCounter value={200} suffix="+" className="text-3xl lg:text-4xl font-bold" />
                </ClientOnly>
              </div>
              <div className="text-base lg:text-lg opacity-90 font-medium">Volunteer Target</div>
              <div className="text-sm opacity-75">Building our community</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold">
                <ClientOnly fallback={<span className="text-3xl lg:text-4xl font-bold">10</span>}>
                  <AnimatedCounter value={10} className="text-3xl lg:text-4xl font-bold" />
                </ClientOnly>
              </div>
              <div className="text-base lg:text-lg opacity-90 font-medium">Tonnes Target Monthly</div>
              <div className="text-sm opacity-75">Food waste to prevent</div>
            </div>
          </div>
          
          {/* Progress towards goals */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-center mb-8">Starting Our 2025 Journey</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Food Waste Reduction</span>
                    <span className="text-sm opacity-90">0% of target</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Community Partnerships</span>
                    <span className="text-sm opacity-90">0% of target</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-food-icons relative">
        {/* Food decorations */}
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
              Where SourceFoods Has Been Featured
            </h2>
            <div className="mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Showcasing our mission and vision across various platforms and events
            </p>
          </div>
          
          {/* Arrow Timeline Design */}
          <div className="relative">
            {/* Timeline connector - curved arrow path */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2">
              <svg className="w-full h-24" viewBox="0 0 800 100" fill="none">
                {/* Curved arrow path */}
                <path 
                  d="M50 50 Q400 20 750 50" 
                  stroke="url(#gradient)" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
                {/* Arrow heads at connection points */}
                <polygon points="745,45 755,50 745,55" fill="#16a34a" className="animate-pulse"/>
                <polygon points="395,15 405,20 395,25" fill="#f59e0b" className="animate-pulse"/>
                
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#16a34a" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              {/* Step 1: Government Engagement */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-20">
                  1
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl mb-4 overflow-hidden">
                    <Image
                      src={MinisterPresentation}
                      alt="SourceFoods team presenting to Senior Minister of State"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Engagement with Government Leaders</h3>
                      <p className="text-xs text-slate-600">NDP Engagement 2025</p>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6">
                    Engaging with government leaders to share our vision for reducing food waste and building stronger communities across Singapore.
                  </p>
                </div>
              </div>
              
              {/* Step 2: Parliamentary Engagement */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-20">
                  2
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-secondary/5 to-amber-100/50 rounded-xl mb-4 overflow-hidden">
                    <Image
                      src={AcademicPresentation}
                      alt="SourceFoods team presenting to Mr Shawn Huang Wei Zhong, Senior Parliamentary Secretary"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Visit by Government Representatives</h3>
                      <p className="text-xs text-slate-600">CDLH Lionhearter Innofest 2025</p>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6">
                    Hosting visits by government representatives to showcase our innovative approach to food waste reduction and community impact.
                  </p>
                </div>
              </div>
              
              {/* Step 3: Community Engagement */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-20">
                  3
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl mb-4 overflow-hidden">
                    <Image
                      src={CDLHPresentation}
                      alt="SourceFoods team with community members at CDLH Innofest 2025"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Community Outreach</h3>
                      <p className="text-xs text-slate-600">CDLH Lionhearter Innofest 2025</p>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6">
                    Engaging directly with community members, sharing our mission and gathering valuable feedback from the people we aim to serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Achievement badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 items-center">
            <div className="flex items-center space-x-3 px-6 py-3 bg-primary/5 rounded-full border border-primary/20">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-700">Government Presented</span>
            </div>
            <div className="flex items-center space-x-3 px-6 py-3 bg-secondary/5 rounded-full border border-secondary/20">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-700">Community Engaged</span>
            </div>
            <div className="flex items-center space-x-3 px-6 py-3 bg-emerald-50 rounded-full border border-emerald-200">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-700">Innovation Focused</span>
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
          
          {/* Mission alignment badges */}
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="flex items-center space-x-3 px-6 py-3 bg-primary/5 rounded-full border border-primary/20">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-700">Innovation Driven</span>
            </div>
            <div className="flex items-center space-x-3 px-6 py-3 bg-secondary/5 rounded-full border border-secondary/20">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-700">Community First</span>
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
                    Planned Activities
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
                          {index === 0 && "25 meals planned for community center distribution"}
                          {index === 1 && "40kg surplus food collection from partner restaurant"}
                          {index === 2 && "18 families to be supported in local communities"}
                          {index === 3 && "New food donor partnership: Local Supermarket"}
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
              <h3 className="text-xl font-bold text-slate-900 mb-6">Planned Impact by Region</h3>
              
              {[
                { region: "Central", meals: 300, partners: 10, color: "bg-blue-500" },
                { region: "East", meals: 250, partners: 8, color: "bg-emerald-500" },
                { region: "North", meals: 200, partners: 7, color: "bg-purple-500" },
                { region: "West", meals: 220, partners: 8, color: "bg-orange-500" },
                { region: "Northeast", meals: 180, partners: 6, color: "bg-pink-500" }
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
                      <span className="text-sm text-slate-600">Meals target monthly</span>
                      <span className="font-semibold text-slate-900">
                        <ClientOnly fallback={<span>{region.meals.toLocaleString()}</span>}>
                          <AnimatedCounter value={region.meals} />
                        </ClientOnly>
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${region.color}`}
                        style={{ width: `${(region.meals / 300) * 100}%` }}
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary/8 to-secondary/8 rounded-3xl p-12 border border-primary/10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Stay Connected with Our Mission
            </h2>
            <p className="text-base text-slate-600 mb-8 max-w-2xl mx-auto">
              Get updates on our progress, impact stories, and opportunities to get involved in reducing food waste across Singapore.
            </p>
          
            <NewsletterSignup variant="hero" className="mb-8" />
            
            <div className="bg-white/90 backdrop-blur rounded-2xl p-6 max-w-2xl mx-auto border border-primary/10 shadow-sm">
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
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700 pt-6">
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
                What impact does SourceFoods plan to achieve?
              </h3>
              <p className="text-slate-600 leading-relaxed pl-12">
                We're aiming to redistribute over 1,000 meals monthly, prevent 10 tonnes of food waste, and build a network of 50+ partner organizations with 200+ active volunteers. Our planned impact will grow as more organizations join our mission.
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
