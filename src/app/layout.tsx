import type { Metadata } from "next";
import { inter, lusitana } from "../components/ui/fonts";
import NavBar from '../components/navbar/navbar';
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel App",
  description: "Find tips for your next trip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
