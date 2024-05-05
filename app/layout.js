import Navbar from "@/components/Navbar";
import { dbConnect } from "@/services/mongo";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventry - Home",
  description: "A single entry to connected to all the online events from the globe.",
};

export default async function RootLayout({ children }) {
  await dbConnect();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="py-8">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
