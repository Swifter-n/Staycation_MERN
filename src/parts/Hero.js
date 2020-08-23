import React from "react";
import ImageHero from "./../assets/images/hero.png";
import IconBag from "./../assets/images/icons/tas.svg";
import IconMap from "./../assets/images/icons/map.svg";
import IconCamera from "./../assets/images/icons/camera.svg";
import Button from "./../elements/Button";
import formatNumber from "./../utils/formatNumber";

export default function Hero(props) {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };
  return (
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
                src={IconBag}
                alt={`${props.data.travelers} Travellers`}
              />
              <h6 class="mt-3">
                {formatNumber(props.data.travelers)}{" "}
                <span class="text-gray-500 font-weight-light">travellers</span>
              </h6>
            </div>
            <div class="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={IconMap}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 class="mt-3">
                {formatNumber(props.data.treasures)}{" "}
                <span class="text-gray-500 font-weight-light">treasures</span>
              </h6>
            </div>
            <div class="col-auto">
              <img
                width="36"
                height="36"
                src={IconCamera}
                alt={`${props.data.cities} Cities`}
              />
              <h6 class="mt-3">
                {formatNumber(props.data.cities)}{" "}
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
  );
}
