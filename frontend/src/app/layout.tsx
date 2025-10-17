import type { Metadata } from "next"
import { Geist, Geist_Mono, Jolly_Lodger, Nosifer} from "next/font/google"
import { Toaster } from 'react-hot-toast'
import "./globals.css"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})
const jolly = Jolly_Lodger({
  variable: "--font-jolly",
  subsets: ["latin"],
  weight: "400", 
})
const nosifer = Nosifer({
  variable: "--font-nosifer",
  subsets: ["latin"],
  weight: "400", 
})
export const metadata: Metadata = {
  title: "Hackman V8 - The Ultimate Hackathon Experience",
  description:
    "Join Hackman V8, the ultimate 24-hour hackathon where innovation meets collaboration. Build amazing projects, win prizes, and connect with fellow developers.",
  keywords: [
    "hackathon",
    "Hackman V8",
    "coding competition",
    "tech event",
    "hackathon Bengaluru",
    "ISE",
    "genesis",
    "information science and engineering",
    "codefest India",
    "hackathon for students",
    "software development",
    "win prizes",
    "hackathon registration 2025",
    "innovation challenge",
    "programming",
    "Dayananda Sagar College Of Engineering",
    "Bangalore",
  ],

  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'GENESIS' }],
  creator: 'GENESIS',
}
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jolly.variable} ${nosifer.variable} antialiased`}
      >
        <Toaster 
          position="top-center" 
          reverseOrder={false}
          containerStyle={{
            top: 10,
            maxHeight: '140px',
            minHeight: '140px',
            overflow: 'hidden',
          }}
          gutter={0}
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1a1a1a',
              color: '#fff',
              border: '1px solid #333',
              maxWidth: '500px',
            },
            success: {
              style: {
                background: '#0d4f3c',
                color: '#fff',
                border: '1px solid #10b981',
              },
            },
            error: {
              style: {
                background: '#4f1a1a',
                color: '#fff',
                border: '1px solid #ef4444',
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  )
}
