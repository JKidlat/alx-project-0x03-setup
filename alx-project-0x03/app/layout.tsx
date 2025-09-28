// alx-project-0x03/app/layout.tsx

import "./globals.css";
import { Montserrat } from "next/font/google";
import Layout from "@/components/layouts/Layout";

// Import Montserrat from Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Splash App",
  description: "A modern Next.js app with shared layout and custom components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
