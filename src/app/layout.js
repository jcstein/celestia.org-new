import { Inter } from "next/font/google";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import "./styles/fonts.css";
import "./styles/globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
