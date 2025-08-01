"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <html lang="en" data-theme="customLightTheme">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Sidebar />
          <div className="flex-1 bg-base-100">
            <Header />
            {children}
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
