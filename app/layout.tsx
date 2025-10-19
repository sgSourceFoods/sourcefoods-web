import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation-bar/navigation-bar";
import Footer from "@/components/footer/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SourceFoods",
  description: "Sample Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <NavigationBar />
        <div className="mt-[110px] bg-gradient-to-b from-navigation via-background to-footer min-h-screen ">
          <div className="px-8 lg:max-w-7xl mx-auto">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
