import dynamic from 'next/dynamic';
import { images, colorDescriptions, objectImages } from '../data';
import SkeletonLoader from '../components/SkeletonLoader';
import './home.style.scss';
import { SpeedInsights } from "@vercel/speed-insights/next";

const DynamicHeroSection = dynamic(() => import('../components/HeroSection'), {
  loading: () => <SkeletonLoader />,
  ssr: false,
});
const DynamicNeochimBlock = dynamic(() => import('../components/NeochimBlock'), {
  loading: () => <SkeletonLoader />,
  ssr: false,
});
const DynamicColorsBox = dynamic(() => import('../components/ColorsBox'), {
  loading: () => <SkeletonLoader />,
  ssr: false,
});
const DynamicPlusesBox = dynamic(() => import('../components/PlusesBox'), {
  loading: () => <SkeletonLoader />,
  ssr: false,
});
const DynamicContactForm = dynamic(() => import('../components/ContactForm'), {
  loading: () => <SkeletonLoader />,
  ssr: false,
});
const DynamicSliderComponent = dynamic(() => import('../components/SliderComponent'), {
  loading: () => <SkeletonLoader />,
  ssr: false,
});

export const metadata = {
  title: 'Neochim Colors - Резиновая краска для любых поверхностей',
  description: 'Универсальная резиновая краска Neochim для внутренних и внешних работ, бассейнов и фасадов. Официальный дистрибьютор в Казахстане. Бесплатная доставка от 10 литров.',
  keywords: 'резиновая краска, краска резиновая, краска для стен, краски, водоэмульсионная краска, жаростойкая краска, краска для бассейна, универсальная краска, краска для фасада, краска нескользящая',
};

function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Neochim Colors",
    "description": "Официальный дистрибьютор резиновой краски Neochim в Казахстане",
    "url": "https://neochim-colors.kz",
    "logo": "https://neochim-colors.kz/favicon.ico",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7 (778) 884 0306",
      "contactType": "sales",
      "availableLanguage": ["Russian", "Kazakh"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Ангарская 105а",
      "addressLocality": "Алматы",
      "addressCountry": "KZ"
    },
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Резиновая краска Neochim",
        "description": "Универсальная резиновая краска для внутренних и внешних работ, бассейнов",
        "category": "Строительные материалы > Краски"
      }
    }
  };

  return (
    <>
      <main>
        
        <div className="container">
          <header className="header">
            <div className="toolbar">
              <h1 className="logo">NEOCHIM</h1>
              <nav className="nav-links">
                <a href="/about" className="nav-link">О краске</a>
                <a href="/objects" className="nav-link">Объекты</a>
                <a href="/order" className="nav-link highlight">Заказать</a>
                <span className="phone">
                  <a href="https://api.whatsapp.com/send?phone=77788840306" className="phone">+7 (778) 884 0306</a>
                </span>
              </nav>
            </div>
          </header>
          <div className="bottom-stripe1"></div>
          <DynamicHeroSection images={images} colorDescriptions={colorDescriptions} />
          <DynamicColorsBox colorDescriptions={colorDescriptions} />
          <DynamicPlusesBox />
          <div className="bottom-stripe"></div>
          <DynamicNeochimBlock />
          <div className="resh-block">
            <div className="content">
              <h1 className="resh-title">Решение для любых поверхностей</h1>
              <div className="resh-content">
                <div className="resh-item">
                  <a href="/about">
                    <img src='/imgs/1derevo.jpg' alt='Дерево' />
                  </a>
                  <div className="resh-caption"><h3>Дерево</h3></div>
                </div>
                <div className="resh-item">
                  <a href="/about">
                    <img src='/imgs/1beton.jpg' alt='Бетон' />
                  </a>
                  <div className="resh-caption"><h3>Бетон</h3></div>
                </div>
                <div className="resh-item">
                  <a href="/about">
                    <img src='/imgs/1plastic.jpg' alt='Пластик' />
                  </a>
                  <div className="resh-caption"><h3>Пластик</h3></div>
                </div>
                <div className="resh-item">
                  <a href="/about">
                    <img src='/imgs/1krisha.jpg' alt='Крыша' />
                  </a>
                  <div className="resh-caption"><h3>Металл</h3></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-stripe"></div>
          <section id="objects-section" className="objects-block">
            <h1 className="objects-title">Объекты покрашенные нашей краской</h1>
            <DynamicSliderComponent objectImages={objectImages} />
          </section>
          <DynamicContactForm />
          <div className="bottom-stripe"></div>
          <div className="footer">
            <div className="footer-content">
              <div className="footer-section">
                <h3>Контакты</h3>
                <p>Телефон: +77788840306</p>
                <p>Почта: 5552403@mail.ru</p>
                <p>График работы: Пн-Пт с 9:00 до 17:00</p>
              </div>
              <div className="footer-section">
                <h3>Разделы</h3>
                
                <p><a href='/objects'>Объекты</a></p>
                <p><a href='/about'>О краске</a></p>
                <p><a href='/order'>Заказать</a></p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>NEOCHIM 2025</p>
            </div>
          </div>
        </div>
      </main>
      <SpeedInsights />
    </>
  );
}

export default HomePage;
