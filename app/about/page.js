import dynamic from "next/dynamic";
import Head from 'next/head';
import { images, colorDescriptions, objectImages } from "../../data";
import "../home.style.scss";
import SkeletonLoader from "../../components/SkeletonLoader";
import AboutPaint from "@/components/AboutPaint";

const DynamicHeroSection = dynamic(() => import("../../components/HeroSection"), { 
  loading: () => <SkeletonLoader />, 
  ssr: false 
});
const DynamicAboutPaint = dynamic(() => import("../../components/AboutPaint"), { 
  loading: () => <SkeletonLoader />, 
  ssr: false 
});
const DynamicColorsBox = dynamic(() => import("../../components/ColorsBox"), { 
  loading: () => <SkeletonLoader />, 
  ssr: false 
});
const DynamicPlusesBox = dynamic(() => import("../../components/PlusesBox"), { 
  loading: () => <SkeletonLoader />, 
  ssr: false 
});
const DynamicContactForm = dynamic(() => import("../../components/ContactForm"), { 
  loading: () => <SkeletonLoader />, 
  ssr: false 
});
const DynamicSliderComponent = dynamic(() => import("../../components/SliderComponent"), { 
  loading: () => <SkeletonLoader />, 
  ssr: false 
});

function About() {
  return (
    <div>
    <Head>
      <title>О краске</title>
      <meta name="description" content="На этом сайте вы можете узнать плюсы и особенности резиновой краски, а так же купить Резиновая краска с доставкой по Казахстану." />
      <meta name="keywords" content="резиновая краска, преимущества резиновой краски, долговечная краска, краска для бассейна, для фасада и цоколи зданий краска, экологичная краска" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <main>
    <div className="container">
      <header className="header">
        <div className="toolbar">
          <a href="/" className="logo">NEOCHIM</a>
          <nav className={`nav-links`}>
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
      <AboutPaint />
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
  </div>
    
  );
}

export default About;
