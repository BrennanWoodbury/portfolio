import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import {Poppins} from "next/font/google";
import {Inter} from "next/font/google";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Brennan Woodbury",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.className}`}>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      </body>
    </html>
  );
}
