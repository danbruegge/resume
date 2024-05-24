import { type ReactNode } from "react";
import type { Viewport, Metadata } from "next";
import Script from "next/script";

import "tailwindcss/tailwind.css";

import resume from "@/resume.json";

const { basics } = resume;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `Resume - ${basics.name}`,
  description: basics.summary,
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning={true}>
      <Script
        defer
        type="text/javascript"
        src="https://api.pirsch.io/pirsch.js"
        id="pirschjs"
        data-code="GqHty434nWqNleCKrQKwtteyCBVYGVwa"
      />
      <body className="h-full bg-light text-sm font-mono print:font-sans font-light text-dark antialiased dark:bg-dark dark:text-light lg:text-base">
        {children}
      </body>
    </html>
  );
}
