import dynamic from "next/dynamic";
import { objectImages } from "../../data";
import "../home.style.scss";
import SkeletonLoader from "../../components/SkeletonLoader";
import Head from "next/head";

const DynamicHeroSection = dynamic(
  () => import("../../components/HeroSection"),
  {
    loading: () => <SkeletonLoader />,
    ssr: false,
  }
);
const DynamicExtraOrder = dynamic(() => import("../../components/ExtraOrder"), {
  loading: () => <SkeletonLoader />,
  ssr: false,
});
const DynamicColorsBox = dynamic(() => import("../../components/ColorsBox"), {
  loading: () => <SkeletonLoader />,
  ssr: false,
});
const DynamicPlusesBox = dynamic(() => import("../../components/PlusesBox"), {
  loading: () => <SkeletonLoader />,
  ssr: false,
});
const DynamicContactForm = dynamic(
  () => import("../../components/ContactForm"),
  {
    loading: () => <SkeletonLoader />,
    ssr: false,
  }
);
const DynamicSliderComponent = dynamic(
  () => import("../../components/SliderComponent"),
  {
    loading: () => <SkeletonLoader />,
    ssr: false,
  }
);

export const metadata = {
  title: "Заказ Neochim",
  description:
    "На этом сайте вы можете заказать универсальную резиновую краску Neochim с быстрой доставкой по всему Казахстану.",
  keywords: "резиновая краска, заказать краску, универсальная краска",
};

function Order() {
  return (
    <>
      <main>
        <div className="container">
          <header className="header">
            <div className="toolbar">
              <a href="/" className="logo">
                NEOCHIM
              </a>
              <nav className={`nav-links`}>
                <a href="/about" className="nav-link">
                  О краске
                </a>
                <a href="/objects" className="nav-link">
                  Объекты
                </a>
                <a href="/order" className="nav-link highlight">
                  Заказать
                </a>
                <span className="phone">
                  <a
                    href="https://api.whatsapp.com/send?phone=77788840306"
                    className="phone"
                  >
                    +7 (778) 884 0306
                  </a>
                </span>
              </nav>
            </div>
          </header>
          <div className="bottom-stripe1"></div>
          <DynamicExtraOrder />
          <DynamicContactForm />
          <div className="bottom-stripe"></div>
          <div className="footer">
            <div className="footer-content">
              <div className="footer-section">
                <h3>Контакты</h3>
                <p>Телефон: +77788840306</p>
                <p>Почта: 5552403@mail.ru</p>
                <p>Адрес: ул. Ангарская 105а</p>
                <p>График работы: Пн-Пт с 9:00 до 17:00</p>
              </div>
              <div className="footer-section">
                <h3>Разделы</h3>

                <p>
                  <a href="/objects">Объекты</a>
                </p>
                <p>
                  <a href="/about">О краске</a>
                </p>
                <p>
                  <a href="/order">Заказать</a>
                </p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>NEOCHIM 2024</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Order;
