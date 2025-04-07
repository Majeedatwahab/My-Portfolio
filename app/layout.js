import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Majeedat Wahab | Frontend Developer",
  description: "Portfolio of MJ — A frontend developer passionate about clean code, stunning UIs, and fast cars.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased bg-black text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
