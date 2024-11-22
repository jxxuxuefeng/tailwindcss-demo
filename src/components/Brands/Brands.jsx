// 第三方
import React from "react";

// 自定义
import Brand1 from "../../assets/brand/1.png";
import Brand2 from "../../assets/brand/2.png";
import Brand3 from "../../assets/brand/3.png";
import Brand4 from "../../assets/brand/4.png";
import Brand5 from "../../assets/brand/5.png";

const Brands = () => {
  return (
    <div className="container py-14">
      <div className="flex flex-wrap justify-center lg:justify-between gap-6">
        <img src={Brand1} alt="" className="w-[110px]" />
        <img src={Brand2} alt="" className="w-[110px]" />
        <img src={Brand3} alt="" className="w-[110px]" />
        <img src={Brand4} alt="" className="w-[110px]" />
        <img src={Brand5} alt="" className="w-[110px]" />
      </div>
    </div>
  );
};

export default Brands;
