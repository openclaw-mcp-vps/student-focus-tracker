import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Focus Tracker – Webcam Attention Detection for Online Learning",
  description: "Track study focus with webcam attention detection. Monitor when students look away, generate focus reports, and improve learning outcomes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="331164b5-8fc9-48ea-a12e-cc6401580c11"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
