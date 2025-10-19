import NavigationBar from "@/components/navigation-bar/navigation-bar";
import Image from "next/image";
import Link from "next/link";

import Symbol from "@/assets/images/logo/symbol_black_v1.png";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center mx-auto gap-8 py-8 max-w-7xl">
      <div className="flex flex-col justify-center items-center text-center mx-auto  gap-8 py-8 max-w-6xl">
        <Image src={Symbol} alt="Symbol" height={300} />
        <span className="text-4xl font-bold">
          Stop Food Waste, Feed Communities
        </span>
        <span className="text-2xl">
          SourceFoods is revolutionizing how we tackle food waste by creating
          smarter allocation systems that connect surplus food with communities
          in need.
        </span>
      </div>
      <div className="flex gap-8 items-center">
        <Link href="/about-us" className="py-4 px-8 bg-secondary rounded-md">
          Learn More
        </Link>
        <Link
          href="/join-us"
          className="py-4 px-8 border border-secondary border-2 rounded-md text-secondary"
        >
          Join Our Mission
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="text-center p-6 bg-primary rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-utensils text-primary"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
              <path d="M7 2v20"></path>
              <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-text mb-2">
            Smart Allocation
          </h3>
          <p className="text-text">
            Advanced systems to match surplus food with those who need it most
          </p>
        </div>
        <div className="text-center p-6 bg-primary rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-users text-primary"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-text mb-2">
            Community Driven
          </h3>
          <p className="text-text">
            Built by volunteers passionate about reducing food waste
          </p>
        </div>
        <div className="text-center p-6 bg-primary rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart text-primary"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-text mb-2">Real Impact</h3>
          <p className="text-text">
            Making a tangible difference in communities worldwide
          </p>
        </div>
      </div>
    </div>
  );
}
