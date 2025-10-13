import { type ReactNode } from "react";
import type { Viewport } from "next";
import Script from "next/script";

import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
      <body className="h-full bg-light text-sm font-light text-dark antialiased dark:bg-dark dark:text-light lg:text-base">
        {children}
      </body>
    </html>
  );
}
