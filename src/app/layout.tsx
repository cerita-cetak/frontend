import "../styles/globals.css";
import Navbar from "@/components/organisms/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/organisms/footer";
import NextThemeProvider from "@/components/providers/next-theme";
import TawkChat from "@/components/providers/tawk";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cerita cetak",
  description: "create beautiful invitations, invitations to various events.",
  icons: "/logo.jpg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative">
        <TawkChat />
        <NextThemeProvider attribute="class" defaultTheme="light">
          <Navbar />

          {children}
          <Footer />
          {/* <ScreenSize /> */}
        </NextThemeProvider>
        {/* <LiveChat /> */}
      </body>
    </html>
  );
}
