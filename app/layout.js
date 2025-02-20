import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://neochim-colors.kz'),
  title: {
    default: 'Neochim Colors - Резиновая краска в Казахстане',
    template: '%s | Neochim Colors'
  },
  description: 'Официальный дистрибьютор резиновой краски Neochim в Казахстане. Высококачественная резиновая краска для внутренних и внешних работ, бассейнов. Доставка по всему Казахстану.',
  keywords: 'резиновая краска, краска резиновая, краска для стен, краски, водоэмульсионная краска, краска для бассейна, краска для фасада, краска для бетона',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'Neochim Colors - Резиновая краска в Казахстане',
    description: 'Официальный дистрибьютор резиновой краски Neochim. Широкий выбор цветов, доставка по всему Казахстану.',
    url: 'https://neochim-colors.kz',
    siteName: 'Neochim Colors',
    locale: 'ru_RU',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-16870888888" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16870888888');
          `}
        </Script>
    </html>
  );
}
