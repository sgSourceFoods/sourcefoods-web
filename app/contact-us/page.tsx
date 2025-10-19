import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Welcome to SourceFoods Contact Us!</div>
      <Link href="/">Home</Link>
      <Link href="/about-us">About Us</Link>
      <Link href="/join-us">Join Us</Link>
      <Link href="/contact-us">Contact Us</Link>
    </>
  );
}
