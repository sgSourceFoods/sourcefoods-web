import Link from "next/link";
import Image from "next/image";
import Symbol from "@/assets/images/logo/symbol_colour_v2.svg";

export default function ContactUs() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex items-center gap-4 mb-6">
            <Image src={Symbol} alt="SourceFoods" width={36} height={36} className="w-9 h-9" />
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Contact Us</h1>
          </div>
          <p className="max-w-3xl text-slate-200 text-lg">
            We’d love to hear from you. Whether you’re a donor, NGO, volunteer, or partner, reach out and we’ll get back within 1–2 business days.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: About + Social */}
            <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Image src={Symbol} alt="SourceFoods" width={28} height={28} />
                <h2 className="text-2xl font-bold">SourceFoods</h2>
              </div>
              <p className="text-slate-200 leading-relaxed mb-8">
                SourceFood reduces food waste in Singapore by connecting donors, NGOs, and volunteers in real time — so surplus food reaches communities faster.
              </p>

              {/* Contact methods */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="mailto:info@sourcefoods.sg" className="group flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">📧</span>
                  <div>
                    <div className="text-sm text-slate-300">Email</div>
                    <div className="font-semibold">info@sourcefoods.sg</div>
                  </div>
                </a>
                <a href="https://t.me/SourceFoods" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">📨</span>
                  <div>
                    <div className="text-sm text-slate-300">Telegram</div>
                    <div className="font-semibold">t.me/SourceFoods</div>
                  </div>
                </a>
                <a href="https://instagram.com/sgsourcefoods" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">📷</span>
                  <div>
                    <div className="text-sm text-slate-300">Instagram</div>
                    <div className="font-semibold">@sgsourcefoods</div>
                  </div>
                </a>
                <a href="https://forms.gle/gsWQmRi6qT9nYqX36" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">🤝</span>
                  <div>
                    <div className="text-sm text-slate-300">Volunteer</div>
                    <div className="font-semibold">Join the movement</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Quick Links */}
            <aside className="bg-white rounded-2xl p-8 border border-slate-200 self-start">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-slate-700">
                <li><Link href="/" className="hover:text-primary font-medium">Home</Link></li>
                <li><Link href="/about-us" className="hover:text-primary font-medium">About Us</Link></li>
                <li><Link href="/partnerships" className="hover:text-primary font-medium">Partnerships</Link></li>
                <li><Link href="/join-us" className="hover:text-primary font-medium">Join Us</Link></li>
                <li><Link href="/contact-us" className="hover:text-primary font-medium">Contact Us</Link></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Diagram: How SourceFoods Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How SourceFoods Works</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We complement existing organisations. We connect donors, NGOs and volunteers with real-time data — we don’t run warehouses or collect food ourselves.
            </p>
          </div>

          {/* Flow diagram */}
          <div className="space-y-8">
            {/* Row 1: Donors → SourceFoods */}
            <div className="flex items-center justify-center gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center flex-1 max-w-xs">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">1</div>
                <h3 className="font-bold text-slate-900 mb-2">Food Donors</h3>
                <p className="text-sm text-slate-600">Restaurants, supermarkets, caterers list surplus food</p>
              </div>
              
              <div className="hidden sm:block">
                <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 5l7 7-7 7V5z"/>
                </svg>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center flex-1 max-w-xs">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/20 text-primary flex items-center justify-center font-bold">2</div>
                <h3 className="font-bold text-slate-900 mb-2">SourceFoods</h3>
                <p className="text-sm text-slate-700">Real-time matching and volunteer coordination</p>
              </div>
            </div>
            
            {/* Central arrow down */}
            <div className="flex justify-center">
              <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 13l7 7 7-7H5z"/>
              </svg>
            </div>
            
            {/* Row 2: NGOs → Communities */}
            <div className="flex items-center justify-center gap-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center flex-1 max-w-xs">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">3</div>
                <h3 className="font-bold text-slate-900 mb-2">NGOs & Volunteers</h3>
                <p className="text-sm text-slate-700">Collect and distribute food to communities</p>
              </div>
              
              <div className="hidden sm:block">
                <svg className="w-12 h-12 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 5l7 7-7 7V5z"/>
                </svg>
              </div>
              
              <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-6 text-center flex-1 max-w-xs">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center font-bold">4</div>
                <h3 className="font-bold text-slate-900 mb-2">Communities Fed</h3>
                <p className="text-sm text-slate-700">Faster delivery, less waste, more dignity</p>
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <p className="text-slate-700 leading-relaxed">
              SourceFood is a tech-based community initiative that helps reduce food waste and make food distribution in Singapore more efficient. We don’t collect food ourselves — we work behind the scenes to connect organisations with real-time data and volunteers. If one partner has extra food and another has people in need, we coordinate so that the surplus reaches the right place quickly. We help the ecosystem work smarter — using data, coordination, and people power — so no good food goes to waste and vulnerable communities are supported faster.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
