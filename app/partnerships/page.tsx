import Link from "next/link";
import Image from "next/image";
import NewsletterSignup from "@/components/ui/newsletter-signup";

export default function Partnerships() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-food-pattern-fruits py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Floating food elements for partnerships */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="food-decoration animate-float delay-1 top-16 left-16 text-primary">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="currentColor">
              <circle cx="22" cy="22" r="18" fillOpacity="0.05"/>
              <path d="M22 6c8 0 8 14 0 14s-8-14 0-14z" fillOpacity="0.07"/>
            </svg>
          </div>
          <div className="food-decoration animate-float-reverse delay-3 top-32 right-24 text-secondary">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
              <rect x="12" y="4" width="8" height="24" rx="4" fillOpacity="0.06"/>
            </svg>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-primary/20 shadow-sm mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">Partnership Opportunities</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Partner with{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SourceFoods</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join Singapore's leading food waste reduction network and amplify your social impact
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="#partnership-form" 
                    className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-primary/90 rounded-xl hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-105">
                Become a Partner
              </Link>
              <Link href="#partnership-tiers"
                    className="inline-flex items-center px-8 py-4 text-base font-semibold text-primary bg-white border border-primary/30 rounded-xl hover:bg-primary/5 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-105">
                Explore Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Partner with SourceFoods?
            </h2>
            <div className="mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Together, we can create a more sustainable and equitable food system in Singapore
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Amplify Impact */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Amplify Your Impact</h3>
              <p className="text-slate-600 leading-relaxed">
                Scale your food distribution efforts through our network of 85+ partner organizations and 750+ active volunteers across Singapore.
              </p>
            </div>

            {/* Data Insights */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary/10 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Data-Driven Results</h3>
              <p className="text-slate-600 leading-relaxed">
                Access comprehensive analytics to measure impact, optimize operations, and showcase your CSR achievements to stakeholders.
              </p>
            </div>

            {/* Brand Recognition */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Brand Recognition</h3>
              <p className="text-slate-600 leading-relaxed">
                Be recognized as a sustainability leader in Singapore's corporate community and strengthen your brand's social impact story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section id="partnership-tiers" className="py-20 bg-food-pattern-organic relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Partnership Tiers
            </h2>
            <div className="mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Choose the partnership level that best fits your organization's goals and capacity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Community Partner */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full mb-4">
                  <span className="text-sm font-medium text-emerald-700">Community Partner</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Getting Started</h3>
                <p className="text-slate-600">Perfect for small businesses and local organizations</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Platform access for food donations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Basic impact reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Community recognition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Email support</span>
                </div>
              </div>

              <button className="w-full py-3 px-6 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors duration-200 font-semibold">
                Apply Now
              </button>
            </div>

            {/* Strategic Partner */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-primary relative hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-sm font-medium text-primary">Strategic Partner</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Scale Impact</h3>
                <p className="text-slate-600">Ideal for medium to large organizations</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Everything in Community Partner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Advanced analytics dashboard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Co-branded marketing materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Dedicated account manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Volunteer program integration</span>
                </div>
              </div>

              <button className="w-full py-3 px-6 text-white bg-gradient-to-r from-primary to-primary/90 rounded-xl hover:from-primary/90 hover:to-primary transition-colors duration-200 font-semibold shadow-lg">
                Get Started
              </button>
            </div>

            {/* Enterprise Partner */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full mb-4">
                  <span className="text-sm font-medium text-secondary">Enterprise Partner</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Transform Systems</h3>
                <p className="text-slate-600">For large corporations and institutions</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Everything in Strategic Partner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Custom API integrations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Executive briefings & reports</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Joint media opportunities</span>
                </div>
              </div>

              <button className="w-full py-3 px-6 text-secondary bg-secondary/10 border border-secondary/30 rounded-xl hover:bg-secondary/20 transition-colors duration-200 font-semibold">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <div className="mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Join Singapore's most impactful organizations in reducing food waste
            </p>
          </div>

          {/* Partner logos would go here - using placeholder boxes for now */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center mb-12">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="w-24 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
                <span className="text-slate-400 text-xs font-medium">Partner {index + 1}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="#partnership-form" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors duration-200">
              See all 85+ partners
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Application */}
      <section id="partnership-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Ready to Partner?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Let's discuss how we can work together to create meaningful impact in Singapore's food ecosystem
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-2">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Full name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="contact@organization.com"
                  />
                </div>
                <div>
                  <label htmlFor="partnership-tier" className="block text-sm font-medium text-slate-700 mb-2">
                    Partnership Interest
                  </label>
                  <select
                    id="partnership-tier"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select tier</option>
                    <option value="community">Community Partner</option>
                    <option value="strategic">Strategic Partner</option>
                    <option value="enterprise">Enterprise Partner</option>
                    <option value="custom">Custom Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Tell us about your goals
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Describe how you'd like to contribute to reducing food waste in Singapore..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded"
                />
                <label htmlFor="newsletter" className="ml-3 text-sm text-slate-600">
                  Subscribe to partnership updates and impact reports
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 text-white bg-gradient-to-r from-primary to-primary/90 rounded-xl hover:from-primary/90 hover:to-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 font-semibold shadow-lg"
              >
                Submit Partnership Application
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-slate-600">
              <p>
                Questions? Contact our partnerships team at{' '}
                <a href="mailto:sgsourcefoods@gmail.com" className="text-primary hover:text-primary/80">
                  sgsourcefoods@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}