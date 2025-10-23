import { ThemeProvider } from "@/components/context/ThemeContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import GlobalLoader from "@/components/GlobalLoader";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ThemeProvider>
          <GlobalLoader />
          <Header />
          <main style={{ flex: 1, padding: '2rem' }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}