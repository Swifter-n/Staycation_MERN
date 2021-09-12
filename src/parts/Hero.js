import React from "react";
import ImageHero from "./../assets/images/hero.png";
import Button from "./../elements/Button";
import formatNumber from "./../utils/formatNumber";
import Fade from 'react-reveal/Fade';

export default function Hero(props) {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  console.log(props.data);
  
  return (
    <Fade bottom>
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 class="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p
            class="mb-4 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me
          </Button>
          <div class="row" style={{ marginTop: 80 }}>
            <div class="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src="/images/tas.svg"
                alt={`${props.data.traveler} travelers`}
              />
              <h6 class="mt-3">
                {formatNumber(props.data.traveler)}{" "}
                <span class="text-gray-500 font-weight-light">travellers</span>
              </h6>
            </div>
            <div class="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src="/images/map.svg"
                alt={`${props.data.treasure} Treasures`}
              />
              <h6 class="mt-3">
                {formatNumber(props.data.treasure)}{" "}
                <span class="text-gray-500 font-weight-light">treasures</span>
              </h6>
            </div>
            <div class="col-auto">
              <img
                width="36"
                height="36"
                src="/images/camera.svg"
                alt={`${props.data.city} Cities`}
              />
              <h6 class="mt-3">
                {formatNumber(props.data.city)}{" "}
                <span class="text-gray-500 font-weight-light">cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div class="col-6 pl-5">
          <div style={{ width: 520, height: 410 }}>
            <img
              src={ImageHero}
              alt="room with couches"
              class="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
    </Fade>
  );
}
