import Providers from "./providers";
import "../styles/home.css";


export const metadata = {
  title: "Tienda ucn",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );

}