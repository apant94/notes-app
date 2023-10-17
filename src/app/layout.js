import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import BootstrapClient from "@/components/BootstrapClient.js";
import { Providers } from "@/store/provider";
import Loading from "./loading";

const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Заметки",
  description: "Приложение для создания, просмотра и редактирования заметок",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={monserrat.className}>
        <Providers>
          <main fallback={<Loading/>}>{children}</main>
          <Footer />
        </Providers>
      </body>
      <BootstrapClient />
    </html>
  );
}
