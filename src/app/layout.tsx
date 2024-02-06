import Navbar from "@/components/organisms/navbar";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/organisms/footer";
import ScreenSize from "@/components/atoms/screen-size";
import NextThemeProvider from "@/components/providers/next-theme";
import LiveChat from "@/components/providers/live-chat";
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
        <NextThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
