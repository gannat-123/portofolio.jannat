import { Content, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Jannat Ashraf | Frontend Developer | المبرمجة جنات",

  description:
    "Welcome to the official portfolio of Jannat Ashraf – a creative frontend developer. Here you’ll find my latest projects, CV, contact information, and more. البشمهندسة جنات – مطورة واجهات أمامية مبدعة.",
  keywords: [
    "Jannat Ashraf",
    "المبرمجة جنات",
    "البشمهندسة جنات",
    "frontend developer",
    "Next.js portfolio",
    "جنات أشرف",
    "موقع شخصي للمبرمجة",
  ],
  verification: {
    google: "pJ_p3OG2_oyzl9yhWK4HtkM4J547PFoYX5l268nUr9M",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
