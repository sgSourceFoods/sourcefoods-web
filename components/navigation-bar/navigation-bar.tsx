"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import logoSymbol from "@/assets/images/logo/symbol_colour_v2.svg";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 border-b border-gray-200/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
              <div className="relative">
                <Image 
                  src={logoSymbol} 
                  alt="SourceFoods" 
                  width={32}
                  height={32}
                  className="w-8 h-8 group-hover:scale-105 transition-transform duration-200" 
                  priority
                />
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200">
                SourceFoods
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 rounded-md hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 rounded-md hover:bg-gray-50"
              >
                About Us
              </Link>
              <Link
                href="/partnerships"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 rounded-md hover:bg-gray-50"
              >
                Partnerships
              </Link>
              <Link
                href="/join-us"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 rounded-md hover:bg-gray-50"
              >
                Join Us
              </Link>
              <Link
                href="/contact-us"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 rounded-md hover:bg-gray-50"
              >
                Contact Us
              </Link>
              
              {/* CTA Button */}
              <Link
                href="/join-us"
                className="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative inline-flex items-center justify-center w-10 h-10 rounded-md text-gray-600 hover:text-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute block h-0.5 w-5 bg-current rounded-full transform transition-all duration-300 ease-out ${
                    isMenuOpen ? 'rotate-45 top-2.5' : 'top-1.5'
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-5 bg-current rounded-full top-2.5 transform transition-all duration-300 ease-out ${
                    isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-5 bg-current rounded-full transform transition-all duration-300 ease-out ${
                    isMenuOpen ? '-rotate-45 top-2.5' : 'top-3.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background overlay */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={closeMenu}
        ></div>
        
        {/* Menu panel */}
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-white/95 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <Link href="/" onClick={closeMenu} className="flex items-center space-x-2">
                <Image src={logoSymbol} alt="SourceFoods" width={24} height={24} className="w-6 h-6" />
                <span className="text-lg font-semibold text-gray-900">SourceFoods</span>
              </Link>
              <button
                onClick={closeMenu}
                className="w-8 h-8 flex items-center justify-center rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex-1 px-4 py-6 space-y-1">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center space-x-3 px-3 py-3 text-gray-700 rounded-lg hover:text-primary hover:bg-primary/5 transition-colors duration-200 group"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className="font-medium">Home</span>
              </Link>
              
              <Link
                href="/about-us"
                onClick={closeMenu}
                className="flex items-center space-x-3 px-3 py-3 text-gray-700 rounded-lg hover:text-primary hover:bg-primary/5 transition-colors duration-200 group"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">About Us</span>
              </Link>
              
              <Link
                href="/partnerships"
                onClick={closeMenu}
                className="flex items-center space-x-3 px-3 py-3 text-gray-700 rounded-lg hover:text-primary hover:bg-primary/5 transition-colors duration-200 group"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <span className="font-medium">Partnerships</span>
              </Link>
              
              <Link
                href="/join-us"
                onClick={closeMenu}
                className="flex items-center space-x-3 px-3 py-3 text-gray-700 rounded-lg hover:text-primary hover:bg-primary/5 transition-colors duration-200 group"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="font-medium">Join Us</span>
              </Link>
              
              <Link
                href="/contact-us"
                onClick={closeMenu}
                className="flex items-center space-x-3 px-3 py-3 text-gray-700 rounded-lg hover:text-primary hover:bg-primary/5 transition-colors duration-200 group"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium">Contact Us</span>
              </Link>
              
              {/* Divider */}
              <div className="py-3">
                <div className="border-t border-gray-200"></div>
              </div>
              
              {/* Mobile CTA */}
              <Link
                href="/join-us"
                onClick={closeMenu}
                className="flex items-center justify-center space-x-2 mx-3 px-4 py-3 text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="font-medium">Get Started</span>
              </Link>
              
              {/* National Impact Badge */}
              <div className="mt-6 mx-3 p-3 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">National Scale Initiative</span>
                </div>
                <p className="text-xs text-gray-600 mt-1 ml-6">
                  Reducing food waste across Singapore
                </p>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
