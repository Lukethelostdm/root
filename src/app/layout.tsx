import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "@/components/providers";
import { ThemeProvider } from "@/components/theme-provider";


export const metadata: Metadata = {
  title: "Root | The Mental Health Platform",
  description: "Helping you grow from the ground up. We are here to help keep you rooted.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        </head>
        <body className=" min-h-[calc(100vh-1px)] flex flex-col font-sans bg-brand-50 text-brand-950 antialiased">
          <main className="relative flex-1 flex flex-col">
            <ThemeProvider
             attribute="class"
             defaultTheme="system"
             enableSystem
             disableTransitionOnChange
            >
            <Providers>{children}</Providers>
            </ThemeProvider>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
