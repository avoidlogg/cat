import type { Metadata } from "next"
import "./globals.css"
import MotionEffects from "@/components/MotionEffects"

export const metadata: Metadata = {
  title: "Heroic Bypass - #1 NVIDIA Stream Proof FiveM Cheat",
  icons: {
    icon: "/logo.png",
  },
  description:
    "The premium undetected FiveM external cheat. Features the best aimbot, ESP, and HWID spoofer. 100% NVIDIA Stream Proof and OBS hidden. Join thousands of users today.",
  keywords: [
    "fivem cheat", "fivem external", "fivem aimbot", "fivem esp",
    "fivem spoofer", "hwid spoofer", "nvidia stream proof", "obs bypass",
    "undetected fivem cheat",
  ],
  openGraph: {
    title: "Heroic Bypass - #1 NVIDIA Stream Proof FiveM Cheat",
    description:
      "The premium undetected FiveM external cheat. 100% NVIDIA Stream Proof, OBS hidden, and constantly updated.",
    siteName: "Heroic Bypass",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heroic Bypass - #1 NVIDIA Stream Proof FiveM Cheat",
    description:
      "The premium undetected FiveM external cheat. 100% NVIDIA Stream Proof, OBS hidden, and constantly updated.",
  },
  robots: { index: true, follow: true },
  other: {
    "color-scheme": "dark",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Discord/Twitter Embed Theme Color matching globals.css background */}
        <meta name="theme-color" content="#0a0a0f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Heroic Bypass",
              url: "https://heroicbypass.com",
              description: "The premium undetected NVIDIA Stream Proof FiveM external cheat.",
              sameAs: ["https://discord.gg/heroicbypass"],
            }),
          }}
        />
      </head>
      <body>
        <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-950/20 via-transparent via-30% to-blue-900/10 to-70%" />
        {children}
        <MotionEffects />
      </body>
    </html>
  )
}
