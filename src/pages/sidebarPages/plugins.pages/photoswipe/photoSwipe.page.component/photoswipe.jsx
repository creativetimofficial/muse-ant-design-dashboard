import React from "react";
import { Carousel } from "antd";
import { getBBoxMethod } from "@antv/g-base";

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const PhotoSwipe = () => {
  return (
    <div>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>
            <img
              alt="img"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-pink.jpg"
              data-pswp-src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-pink.jpg"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              alt="img"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg"
              data-pswp-src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              alt="img"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-steel.jpg"
              data-pswp-src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-steel.jpg"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              alt="img"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-wood.jpg"
              data-pswp-src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-wood.jpg"
            />
          </h3>
        </div>
      </Carousel>
      ,
    </div>
  );
};

export default PhotoSwipe;
