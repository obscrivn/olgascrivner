import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olga Scrivner | AI Researcher, Educator & Entrepreneur",
  description: "Personal website of Olga Scrivner. Assistant Professor of Computer Science at Rose-Hulman Institute of Technology, Adjunct in Data Science at Indiana University, Co-Founder & Head of AI at Scrivner Solutions, and builder of Radient AI. Research and building in Agentic AI, AI Evaluation, and Responsible AI.",
  keywords: [
    "Olga Scrivner",
    "Agentic AI",
    "AI Evaluation",
    "Responsible AI",
    "Radient AI",
    "Rose-Hulman Computer Science",
    "Indiana University Data Science",
    "Scrivner Solutions",
    "Multi-agent Systems",
    "Healthcare AI"
  ],
  authors: [{ name: "Olga Scrivner" }],
  openGraph: {
    title: "Olga Scrivner | AI Researcher, Educator & Entrepreneur",
    description: "AI researcher, educator, entrepreneur, and builder working at the intersection of AI evaluation, agentic AI, healthcare operations, and responsible AI.",
    url: "https://olgascrivner.com",
    siteName: "Olga Scrivner Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-white text-slate-900 min-h-screen flex flex-col font-sans selection:bg-indigo-100 selection:text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
