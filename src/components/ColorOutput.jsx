import React from "react";
import ColorBlock from "./ColorBlock";

const ColorOutput = ({ colors }) => {
  return (
    <div className="sm:w-5/6">
      {colors.length >= 1 && (
        <div className="text-md font-heading text-center mb-2 md:text-2xl">
          <p className="text-subtext">Detected colors:</p>
        </div>
      )}
      <div className="flex flex-row justify-center flex-wrap rounded-lg">
        {colors.map((element, index) => (
          <ColorBlock element={element} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ColorOutput;
