// 第三方
import React from "react";

// 自定义
const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO",
    img: "https://i.pravatar.cc/300?img=1",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Alex",
    designation: "CEO",
    img: "https://i.pravatar.cc/300?img=2",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    id: 3,
    name: "George",
    designation: "CEO",
    img: "https://i.pravatar.cc/300?img=3",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Testimonial = () => {
  return (
    <>
      <div className=" py-14">
        {/*header section*/}
        <div className="space-y-5 text-center max-w-[550px] mx-auto mb-8">
          <h1 className="text-3xl font-bold">Words from our coustomers</h1>
          <p className="text-gray-500 text-sm max-w-[350px] mx-auto">
            Bring your dream home to life with one-on-one design help & hand
            picked products
          </p>
        </div>
        {/*testimonial cards*/}
        <div className="bg-black p-12">
          <div className="container grid grid-cols-1 md:grid-cols-3 gap-10">
            {TestimonialData.map((testimonial) => {
              return (
                <div
                  key={testimonial.id}
                  className="border-[1px] border-e-gray-500 p-5 text-white group hover:bg-white hover:text-black duration-300"
                >
                  <div className="flex fle-row items-center gap-5">
                    <img
                      src={testimonial.img}
                      alt=""
                      className="w-[80px] rounded-full"
                    />
                    <div>
                      <p className="text-sm font-bold group-hover:text-black">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.designation}
                      </p>
                      <div className="text-xs mt-2">✨✨✨✨</div>
                    </div>
                  </div>
                  <div className="mt-5 border-t-2 border-gray-500 pt-5">
                    <p className="text-sm text-gray-500">{testimonial.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
