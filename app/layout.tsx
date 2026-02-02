import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProgressBar from "./components/ProgressBar"; // Import it

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// UPDATE METADATA (See Step 2 below for details)
export const metadata: Metadata = {
  title: {
    default: "Irfan | Full Stack Developer",
    template: "%s | Irfan Thalib"
  },
  description: "I build accessible, pixel-perfect, and performant web applications using the React and Laravel ecosystems.",
  openGraph: {
    title: "Irfan | Full Stack Developer",
    description: "I build accessible, pixel-perfect, and performant web applications.",
    url: "https://your-portfolio-url.com", // REPLACE THIS LATER
    siteName: "Irfan's Portfolio",
    images: [
      {
        url: "/og-image.jpg", // We will create this file later
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] text-slate-100 overflow-x-hidden`}>
        {/* TOP SCROLL BAR */}
        <ProgressBar />
        
        {/* AMBIENT GLOW */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px]" />
        </div>
        
        {children}
      </body>
    </html>
  );
}