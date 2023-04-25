import React from "react";

const ImageLinkForm = ({ onInput, onSubmit }) => {
  return (
    <div className="w-auto flex justify-center mt-5">
      <div className="flex jusify-center flex-col items-center w-auto">
        <div className="p-3 mb-4 font-heading">
          <h1 className="text-3xl text-center text-black-800 font-medium md:text-5xl mb-[5px]">
            Detect colors from images using <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">AI</span>
          </h1>
          <p className="text-sm md:text-lg text-center text-subtext">Just paste the URL and let the magic happen!</p>
        </div>
        <div className="flex justify-center w-full">
          <input
            type="search"
            className="bg-[#031B34] rounded w-2/3 p-1 font-extralight"
            placeholder="Image URL"
            onChange={onInput}
          />
          <button
            className="py-1 px-5 ml-1 bg-[#FF4820] text-white rounded hover:brightness-[90%]"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
