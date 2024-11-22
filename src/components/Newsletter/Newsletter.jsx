// 第三方
import React from "react";

// 自定义

const Newsletter = () => {
  return (
    <>
      <div className="max-w-[500px] mx-auto space-py-5 py-14">
        <h1 className="text-3xl font-bold font-serif text-center">
          Subscribe to our Newsletter
        </h1>
        <p className="text-sm text-gray-500  max-w-[300px] mx-auto">
          Lorem ipsum,dolor sit amet consectetur adipisicing elit. Sed libero
          doloremque
        </p>
        {/*form section*/}
        <div className="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="Enter your email"
            className="px-4 py-4 ring-1 ring-gray-300"
          />
          <button className="bg-black text-white px-6 py-4">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
