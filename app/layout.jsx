import Header from "@/componentes/Header";
import Footer from "@/componentes/Footer";
import { roboto } from "@/estilos/fuentes"; //fuente principal
import "@/estilos/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Purity Spa",
  description: "Web dedicada a tu relajación",
  keywords: ["Estetica", "Relax", "Belleza"],
  authors: { name: 'Brenda Giambelluca' },
  icons: {
    icon: {
      url: "/favicon.ico",
      type: "image/x-icon"
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-ar">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        <div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
