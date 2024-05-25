import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Navbar from "./componentes/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Analizador Archivos Jason",
  description: "COdigo generado por Fendy Roiz para detectar el correcto lexico de un jason",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
       <Header/>
       <Navbar/>
        
        {children}
        <Footer/>
        </body>
    </html>
  );
}
