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
  title: "Olga Scrivner | AI Researcher, Educator & Builder",
  description: "Olga Scrivner studies AI agents, evaluation, and reusable capabilities, connecting scientific inquiry with practical applications across domains.",
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
    title: "Olga Scrivner | AI Researcher, Educator & Builder",
    description: "Exploring the Capabilities of AI. Research on AI agents, evaluation, and reusable capabilities, connecting scientific inquiry with practical applications across domains.",
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
