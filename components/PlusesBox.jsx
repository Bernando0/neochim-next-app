"use client";

import React from "react";

const PlusesBox = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div className="pluses-box">
      <div className="content">
        <h1 className="pluses-title">Преимущества резиновой краски</h1>
        <div className="pluses-grid">
          <div className="grid-qb-left">
            <div className="tl-cont">
              <div className="plus-img">
                <img src="imgs/Elast.svg" alt="Высокая эластичность" />
              </div>
              <div className="plus-text-vert">
                <h3>Высокая эластичность</h3>
                <p>
                  Резиновая краска способна растягиваться и сжиматься вместе с
                  поверхностью, предотвращая растрескивание и отслаивание.
                </p>
              </div>
            </div>
          </div>
          {isMobile ? (
            <>
              <div className="grid-qb-left">
                <div className="bl-cont">
                  <div className="plus-text-horiz">
                    <h3>Отличная влагостойкость</h3>
                    <p>
                      Обеспечивает надежную защиту от проникновения воды,
                      предотвращая образование плесени и грибка.
                    </p>
                  </div>
                  <div className="plus-img">
                    <img
                      src="imgs/Vlagost.svg"
                      alt="Отличная влагостойкость"
                    />
                  </div>
                </div>
              </div>
              <div className="grid-qb-right">
                <div className="tr-cont">
                  <div className="plus-img">
                    <img
                      src="imgs/ProtSkolz.svg"
                      alt="Противоскользящие свойства"
                    />
                  </div>
                  <div className="plus-text-horiz">
                    <h3>Противоскользящие свойства</h3>
                    <p>
                      Создает поверхность с высоким коэффициентом трения, что
                      делает ее безопасной для ходьбы даже в мокром состоянии.
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid-qb-right">
                <div className="tr-cont">
                  <div className="plus-img">
                    <img
                      src="imgs/ProtSkolz.svg"
                      alt="Противоскользящие свойства"
                    />
                  </div>
                  <div className="plus-text-horiz">
                    <h3>Противоскользящие свойства</h3>
                    <p>
                      Создает поверхность с высоким коэффициентом трения, что
                      делает ее безопасной для ходьбы даже в мокром состоянии.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid-qb-left">
                <div className="bl-cont">
                  <div className="plus-text-horiz">
                    <h3>Отличная влагостойкость</h3>
                    <p>
                      Обеспечивает надежную защиту от проникновения воды,
                      предотвращая образование плесени и грибка.
                    </p>
                  </div>
                  <div className="plus-img">
                    <img
                      src="imgs/Vlagost.svg"
                      alt="Отличная влагостойкость"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="grid-qb-right">
            <div className="br-cont">
              <div className="plus-text-vert">
                <h3>Устойчивость к УФ излучению</h3>
                <p>
                  Защищает цвет и структуру покрытия от выцветания и
                  разрушения под воздействием солнечного света, сохраняя
                  первоначальный вид на протяжении многих лет.
                </p>
              </div>
              <div className="br-r-block">
                {!isMobile ? <div className="null-box"></div> : <></>}
                <div className="plus-img">
                  <img src="imgs/UF.svg" alt="Устойчивость к УФ излучению" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlusesBox;
