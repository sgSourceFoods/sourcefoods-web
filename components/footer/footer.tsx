import Link from "next/link";
import Image from "next/image";

import officialLogo from "@/assets/images/logo/logo_v1.svg";

export default function Footer() {
  return (
    <div className="flex flex-col px-8 py-16 gap-2 lg:gap-8 items-center bg-footer pb-16">
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-7xl mx-auto gap-4">
        <div className="flex flex-col lg:w-1/2 gap-4 items-center lg:items-start">
          <Image src={officialLogo} alt="SourceFoods Logo" height={150} />
          <span>
            Connecting surplus food with communities in need through innovative
            technology and passionate volunteers working to eliminate food
            waste.
          </span>
        </div>
        <div className="flex flex-col lg:w-1/4 lg:gap-2 text-left">
          <span className="font-bold">Quick Links</span>
          <Link className="lg:py-2 rounded-md" href="/">
            Home
          </Link>
          <Link className="lg:py-2 rounded-md" href="/about-us">
            About Us
          </Link>
          <Link className="lg:py-2 rounded-md" href="/join-us">
            Join Us
          </Link>
          <Link className="lg:py-2 rounded-md" href="/contact-us">
            Contact Us
          </Link>
        </div>
      </div>
      <hr className="mx-2 lg:mx-8 border border-white" />
      <div className="flex flex-row justify-between w-full max-w-7xl mx-auto">
        <div className="flex flex-col w-1/2">
          <span>© 2025 SourceFoods. All rights reserved.</span>
        </div>
        <div className="flex flex-col w-1/3 text-right">
          <span>Made by Volunteers!</span>
        </div>
      </div>
    </div>
  );
}
