"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  className?: string;
  variant?: "default" | "compact" | "hero";
}

export default function NewsletterSignup({ 
  className = "",
  variant = "default" 
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`text-center ${className}`}>
        <div className="inline-flex items-center space-x-2 text-green-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium">Thank you for subscribing!</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          We'll keep you updated on our progress towards reducing food waste in Singapore.
        </p>
      </div>
    );
  }

  const inputClasses = variant === "hero" 
    ? "flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 placeholder-gray-500"
    : "flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 placeholder-gray-500";

  const buttonClasses = variant === "hero"
    ? "px-6 py-3 bg-primary text-white font-semibold rounded-r-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50"
    : "px-4 py-2 bg-primary text-white font-semibold rounded-r-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50";

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className={inputClasses}
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting || !email.trim()}
          className={buttonClasses}
        >
          {isSubmitting ? (
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
              <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75" />
            </svg>
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
      {error && (
        <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
      )}
      <p className="text-xs text-gray-500 mt-3 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}