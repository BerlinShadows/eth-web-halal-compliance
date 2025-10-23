import { ThemeProvider } from "@/components/context/ThemeContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import GlobalLoader from "@/components/GlobalLoader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Reimagine Ownership",
    template: "%s | Reimagine Ownership",
  },
  description: "A new paradigm for digital identity, assets, and collaboration — built on transparency, user sovereignty, and open protocols.",
  keywords: "web3, blockchain, decentralization, digital ownership, identity",
  authors: [{ name: "Protocol Labs", url: "https://t.me/mi_landau" }],
  creator: "Protocol Labs",
  publisher: "Protocol Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eth-web-halal-compliance.vercel.app/",
    title: "Reimagine Ownership",
    description: "A new paradigm for digital identity, assets, and collaboration.",
    images: [
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

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