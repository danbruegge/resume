import { type ReactNode } from "react";
import { type Metadata } from "next";
import Script from "next/script";

import "tailwindcss/tailwind.css";

import resume from "@/resume.json";

const { basics } = resume;

export const metadata: Metadata = {
  title: `Resume - ${basics.name}`,
  description: basics.summary,
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <Script
        defer
        type="text/javascript"
        src="https://api.pirsch.io/pirsch.js"
        id="pirschjs"
        data-code="GqHty434nWqNleCKrQKwtteyCBVYGVwa"
      />
      <body className="h-full bg-white text-sm font-light text-neutral-700 antialiased dark:bg-black dark:text-neutral-200 lg:text-base">
        {children}
      </body>
    </html>
  );
}
