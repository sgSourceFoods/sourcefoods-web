import Link from "next/link";
import Image from "next/image";

import officialLogo from "@/assets/images/logo/logo_v1.svg";

export default function NavigationBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between px-8 py-4 items-center bg-navigation">
        <Image src={officialLogo} alt="SourceFoods Logo" height={80} />
        <div className="invisible lg:visible flex gap-6 text-xl">
          <Link
            className="py-2 px-4 rounded-md hover:bg-primary hover:text-text"
            href="/"
          >
            Home
          </Link>
          <Link
            className="py-2 px-4 rounded-md hover:bg-primary hover:text-text"
            href="/about-us"
          >
            About Us
          </Link>
          <Link
            className="py-2 px-4 rounded-md hover:bg-primary hover:text-text"
            href="/join-us"
          >
            Join Us
          </Link>
          <Link
            className="py-2 px-4 rounded-md hover:bg-primary hover:text-text"
            href="/contact-us"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
