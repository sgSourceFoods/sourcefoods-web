import NavigationBar from "@/components/navigation-bar/navigation-bar";
import Link from "next/link";

import CoreTeam from "@/assets/images/team.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center mx-auto gap-16 py-8 max-w-6xl">
      <div className="flex flex-col justify-center items-center text-center mx-auto gap-8 py-8">
        <span className="text-4xl font-bold">About Us</span>
        <span className="text-xl">
          We're building the future of food distribution, where technology meets
          compassion to create sustainable solutions for food waste and hunger.
        </span>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center text-center mx-auto gap-16 py-8">
        <div className="flex flex-col lg:w-1/2 items-start gap-4">
          <span className="text-2xl font-bold">Our Mission</span>
          <span className="text-lg text-left">
            Every year, billions of tons of food go to waste while millions of
            people face hunger. SourceFoods bridges this gap through innovative
            technology that optimizes food allocation, ensuring surplus food
            reaches those who need it most. Our platform connects restaurants,
            grocery stores, farms, and food banks with communities, creating an
            efficient network that reduces waste and feeds people.
          </span>
        </div>
        <div className="flex flex-col lg:w-1/2 items-start gap-4 rounded-md overflow-hidden">
          <Image src={CoreTeam} alt="Our Mission" />
        </div>
      </div>
      <div className="py-8 grid md:grid-cols-3 gap-8">
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
              className="lucide lucide-target text-primary"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-text mb-3">
            Precision Matching
          </h4>
          <p className="text-text">
            AI-powered algorithms match food surplus with demand in real-time
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
              className="lucide lucide-zap text-primary"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-text mb-3">
            Rapid Response
          </h4>
          <p className="text-text">
            Quick coordination ensures food reaches recipients while fresh
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
              className="lucide lucide-eye text-primary"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-text mb-3">Transparency</h4>
          <p className="text-text">
            Track impact and see exactly where your contributions go
          </p>
        </div>
      </div>
      <div className="my-8 flex flex-row justify-center items-center text-center mx-auto bg-secondary rounded-md p-8">
        <div className="mx-auto flex flex-col lg:w-1/2 gap-4 justify-center items-center">
          <span className="text-2xl font-bold">Project Status</span>
          <span className="bg-yellow-200 py-4 px-8 rounded-full text-lg">
            🚧 In Development
          </span>
          <span className="text-lg">Join Us in building the Future!</span>
          <span className="text-lg">
            SourceFoods is currently in active development. We're assembling a
            passionate team of volunteers to bring this vision to life. Your
            skills and dedication can help create lasting change in how we
            handle food distribution.
          </span>
        </div>
      </div>
    </div>
  );
}
