import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import BootstrapClient from "@/components/BootstrapClient.js";

const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Заметки",
  description: "Приложение для создания, просмотра и редактирования заметок",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={monserrat.className}>
        <main>
        {children}
        </main>
        <Footer />
      </body>
      {/* <Footer /> */}
      <BootstrapClient />
    </html>
  );
}
