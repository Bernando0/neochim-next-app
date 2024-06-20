import dynamic from 'next/dynamic';
import { images, colorDescriptions, objectImages } from '../data';
import Head from 'next/head';
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
  title: "Neochim",
  description: "На этом сайте вы можете приобрести резиновую краску по Казахстану и всему СНГ по приятной цене с быстрой доставкой.",
  keywords: "краска для бассейнов, резиновая краска Казахстан, краска для фасадов, жаростойкая краска, универсальная краска, купить краску для интерьера, для бетона краска, краска нескользящая"
};

function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NEOCHIM",
    "url": "https://www.neochim-colors.kz",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7 (778) 884 0306",
      "contactType": "Neochim"
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
                <p>Адрес: ул. Ангарская 105а </p>
                <p>График работы: Пн-Пт с 9:00 до 17:00</p>
              </div>
              <div className="footer-section">
                <h3>Разделы</h3>
                <p>Объекты</p>
                <p>О краске</p>
                <p>Заказать</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>NEOCHIM 2024</p>
            </div>
          </div>
        </div>
      </main>
      <SpeedInsights />
    </>
  );
}

export default HomePage;
