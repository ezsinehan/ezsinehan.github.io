import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ezsinehan",
  description: "Sinehan's Website",
};

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  integrity="sha384-HzLeBuhoPzGz1r6Scx15KVk7G5o/G1p8Ec2J+dW6KL5wwhFe6kp0rsJzCk9tjt1v"
  crossOrigin="anonymous"
/>;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black text-white font-mono">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
