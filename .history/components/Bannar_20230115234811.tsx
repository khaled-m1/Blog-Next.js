import React from "react";

export const Bannar = () => {
  return (
    <div className="flex flex-col lg:flex">
      <div>
        <h1 className="text-7xl">Lorem, ipsum dolor.</h1>
        <h2 className="mt-5 md:mt-0">
          Lorem, ipsum.
          <span className="underline decoration-4 decoration-[#BA2948]">
            Lorem, ipsum.
          </span>
          Lorem, ipsum dolor.
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta!
      </p>
    </div>
  );
};
