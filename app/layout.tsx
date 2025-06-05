import type { Metadata } from "next";
import "./globals.css";
import Nav from "./_components/layout/nav";
import Footer from "./_components/layout/footer";

export const metadata: Metadata = {
  title: "Alaa Khaled design",
  description: "Leather hand made",
  icons: {
    icon: "/icons/logo-white.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased relative overflow-x-hidden`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
