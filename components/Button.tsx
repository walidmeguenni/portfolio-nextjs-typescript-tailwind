import React from "react";

const Button: React.FC = () => {
  return (
    <button
      type="button"
      className="ss:w-[200px] ss:h-[52px] rounded-[50px] ss:text-[20px] font-semibold  flex items-center justify-center text-white bg-button cursor-pointer transition duration-[0.5s] ease-in-out relative overflow-hidden opacity-70 w-full h-[32px] text-[14px] shadow-button hover:opacity-40 focus:outline-none active:opacity-100 active:shadow-buttonactive"
    >
      Learn More
    </button>
  );
};

export default Button;
