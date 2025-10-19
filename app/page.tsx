import NavigationBar from "@/components/navigation-bar/navigation-bar";
import Image from "next/image";
import Link from "next/link";

import Symbol from "@/assets/images/logo/symbol_black_v1.png";

export default function Home() {
  return (
    <div className="flex flex-col max-w-7xl justify-center items-center text-center mx-auto gap-4">
      <Image src={Symbol} alt="Symbol" height={300} />
      <span className="text-4xl font-bold text-primary">
        Stop Food Waste, Feed Communities
      </span>
      <span className="text-2xl text-primary">
        SourceFoods is revolutionizing how we tackle food waste by creating
        smarter allocation systems that connect surplus food with communities in
        need.
      </span>

      <div className="flex gap-8 items-center">
        <Link
          href="/about-us"
          className="py-4 px-8 bg-secondary rounded-md text-primary"
        >
          Learn More
        </Link>
        <Link
          href="/join-us"
          className="py-4 px-8 border border-secondary border-2 rounded-md text-secondary"
        >
          Join Our Mission
        </Link>
      </div>
    </div>
  );
}
