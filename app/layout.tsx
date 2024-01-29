import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion World",
  description: "Everything is here",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: '/N-light.svg',
        href: "/N-light.svg"
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: '/N-dark.svg',
        href: "/N-dark.svg"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="notion-world"
        >
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
