// 第三方
import React from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";

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
        <motion.img
          variants={SlideLeft(0.2)}
          initial="initial"
          whileInView={"animate"}
          src={Brand1}
          alt=""
          className="w-[110px]"
        />
        <motion.img
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView={"animate"}
          src={Brand2}
          alt=""
          className="w-[110px]"
        />
        <motion.img
          variants={SlideUp(0.6)}
          initial="initial"
          whileInView={"animate"}
          src={Brand3}
          alt=""
          className="w-[110px]"
        />
        <motion.img
          variants={SlideUp(0.8)}
          initial="initial"
          whileInView={"animate"}
          src={Brand4}
          alt=""
          className="w-[110px]"
        />
        <motion.img
          variants={SlideUp(1)}
          initial="initial"
          whileInView={"animate"}
          src={Brand5}
          alt=""
          className="w-[110px]"
        />
      </div>
    </div>
  );
};

export default Brands;
