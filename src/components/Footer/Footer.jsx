// 第三方
import React from "react";
import Logo from "../../assets/Logo.png";

// 自定义

const Footer = () => {
  return (
    <footer>
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/*company info*/}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="" className="w-10" />
              <p>Interior</p>
            </div>
            <p className="">Geater Noida, Uttrar Pradesh, China</p>
            <p>@ 2024 TGC All rights reserved</p>
          </div>
          {/*footer link*/}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Designer</a>
                </li>
                <li>
                  <a href="#">Craftmanship</a>
                </li>
                <li>
                  <a href="#">Sustainbility</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Suport</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Faq</a>
                </li>
                <li>
                  <a href="#">Shipping & Return</a>
                </li>
                <li>
                  <a href="#">Care Guide</a>
                </li>
                <li>
                  <a href="#">Sustainbility</a>
                </li>
              </ul>
            </div>
          </div>
          {/*contact section*/}
          <div className="space-y-4">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Contact us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Designer</a>
                </li>
                <li>
                  <a href="#">Craftmanship</a>
                </li>
                <li>
                  <a href="#">Sustainbility</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*copyright section*/}
        <p className="text-center text-sm font-semibold mt-5 border-t-2 pt-5 mt-5">
          @copy 2024 TGC All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
