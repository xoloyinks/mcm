import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"
import "../style.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MCM Kitchen & Hair Beauty Salon",
  description: "Welcome to MCM Kitchen and Hair Beauty Services | At MCM Kitchen, we deliver classy and high-quality foods made with the freshest African ingredients | We also craft elegance and style with the power of quality products and techniques ensuring your hair receives the care it deserves. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
