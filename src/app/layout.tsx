import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BEASTMODE - Elite Fitness Progress Tracker",
  description: "Transform your fitness journey with our comprehensive progress tracking app. Monitor workouts, calculate BMI, track weekly progress, and stay motivated with detailed insights.",
  keywords: "fitness tracker, progress tracking, BMI calculator, workout tracking, fitness app, beastmode",
  authors: [{ name: "BeastMode Fitness Tracker" }],
  openGraph: {
    title: "BEASTMODE - Elite Fitness Progress Tracker",
    description: "Transform your fitness journey with our comprehensive progress tracking app.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
