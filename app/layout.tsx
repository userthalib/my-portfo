import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ProgressBar from "./components/ProgressBar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Irfan Thalib | Full Stack Developer",
    template: "%s | Irfan Thalib",
  },
  description:
    "Full Stack Developer specializing in React & Laravel. Building scalable, pixel-perfect web applications from Indonesia.",
  keywords: ["Full Stack Developer", "React", "Laravel", "Next.js", "Indonesia", "Freelance"],
  authors: [{ name: "Irfan Thalib" }],
  openGraph: {
    title: "Irfan Thalib | Full Stack Developer",
    description: "Full Stack Developer specializing in React & Laravel.",
    url: "https://irfan.vercel.app",
    siteName: "Irfan Thalib Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Irfan Thalib | Full Stack Developer",
    description: "Full Stack Developer specializing in React & Laravel.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased overflow-x-hidden`}
      >
        <ProgressBar />

        {/* ── 3-Point Ambient Lighting ── */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          {/* Purple — top left */}
          <div className="absolute -top-[20%] -left-[15%] w-[65%] h-[65%] rounded-full bg-purple-700/20 blur-[160px]" />
          {/* Violet — bottom right */}
          <div className="absolute -bottom-[20%] -right-[15%] w-[55%] h-[55%] rounded-full bg-violet-800/18 blur-[140px]" />
          {/* Cyan — centre pop */}
          <div className="absolute top-[35%] left-[25%] w-[45%] h-[40%] rounded-full bg-cyan-700/8 blur-[130px]" />
        </div>

        {children}
      </body>
    </html>
  );
}