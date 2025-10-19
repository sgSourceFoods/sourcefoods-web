import Link from "next/link";
import Image from "next/image";

import officialLogo from "@/assets/images/logo/logo_v1.svg";

export default function NavigationBar() {
  return (
    <div className="flex justify-between px-8 py-4 bg-white items-center">
      <Image src={officialLogo} alt="SourceFoods Logo" height={60} />
      <div className="flex gap-6 text-lg text-black">
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/join-us">Join Us</Link>
        <Link href="/contact-us">Contact Us</Link>
      </div>
    </div>
  );
}
