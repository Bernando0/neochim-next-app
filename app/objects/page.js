import dynamic from "next/dynamic";
import "../home.style.scss";
import SkeletonLoader from "../../components/SkeletonLoader";
import { SpeedInsights } from "@vercel/speed-insights/next"

const DynamicHeroSection = dynamic(() => import("../../components/HeroSection"), { 
  loading: () => <SkeletonLoader />, 
  ssr: false 
});
const DynamicAboutObjects = dynamic(() => import("../../components/AboutObjects"), { 
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

export const metadata = {
    title: 'Объекты Neochim Colors - примеры работ с резиновой краской',
    description: 'Галерея объектов, окрашенных резиновой краской Neochim. Примеры применения для фасадов, бассейнов, внутренней отделки.',
    keywords: 'резиновая краска примеры, окрашенные объекты, краска для бассейна примеры, краска для фасада фото, резиновая краска применение',
};

function Objects() {
  return (
    <>
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
      <DynamicAboutObjects/>
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

export default Objects;
