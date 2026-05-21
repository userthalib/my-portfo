import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ProgressBar from "./components/ProgressBar";
import { AppProvider } from "./context/AppContext";

/**
 * Configure Geist Sans font with custom CSS variable mapping.
 * Subsets are limited to 'latin' to optimize font file delivery sizes.
 */
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

/**
 * Configure Geist Mono font for code display or monospaced styling elements.
 */
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

/**
 * Configure Space Grotesk font as the display font for headings.
 * Includes weights from Light (300) through Bold (700) to support design variants.
 */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

/**
 * Application-wide SEO metadata.
 * Optimizes titles, descriptions, and OpenGraph/Twitter social cards.
 */
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

/**
 * Root Layout Component
 * Serves as the HTML envelope for the entire application.
 * 
 * Key Features:
 * 1. Scroll Smoothness: Enables browser-native smooth scroll behaviors.
 * 2. Tailwind & Font Variables: Injects Geist and Space Grotesk CSS variable classes into the body.
 * 3. Scroll Progress: Renders a sticky dynamic visual progress indicator at the top of the viewport.
 * 4. Ambient Background Lighting: Employs absolute-positioned blurred gradient spheres behind page content.
 * 
 * @param children - Active page components nested inside the layout wrapper.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased overflow-x-hidden`}
      >
        <AppProvider>
          {/* Visual page scroll progress indicator */}
          <ProgressBar />

          {/* ── 3-Point Ambient Lighting ──
              Positioned as fixed backdrop elements with z-index -10 to avoid overlapping foreground content.
              Uses large blur settings to create smooth, non-intrusive accent lights. */}
          <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            {/* Purple — top left background glow */}
            <div className="absolute -top-[20%] -left-[15%] w-[65%] h-[65%] rounded-full bg-purple-700/20 light:bg-indigo-300/20 blur-[160px] transition-colors duration-500" />
            {/* Violet — bottom right background glow */}
            <div className="absolute -bottom-[20%] -right-[15%] w-[55%] h-[55%] rounded-full bg-violet-800/18 light:bg-violet-300/15 blur-[140px] transition-colors duration-500" />
            {/* Cyan — centre pop background accent */}
            <div className="absolute top-[35%] left-[25%] w-[45%] h-[40%] rounded-full bg-cyan-700/8 light:bg-sky-300/10 blur-[130px] transition-colors duration-500" />
          </div>

          {children}
        </AppProvider>
      </body>
    </html>
  );
}