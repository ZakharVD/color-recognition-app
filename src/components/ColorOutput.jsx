import React from "react";

const ColorOutput = ({ colors }) => {
    return (
       <div className="font-mono  sm:w-5/6">
            <div className="text-md text-center mb-2 md:text-2xl"><p>Detected colors:</p></div>
            <div className="flex flex-row justify-center flex-wrap rounded-lg">{colors.map((e, i) => (
                <div className="bg-white h-24 m-2 rounded-lg md:h-32">
                    <div style={{backgroundColor: e}} className="w-full h-2/3 rounded-lg" key={i}>‎</div>
                    <div className="p-1 text-sm" key={i + 10}>HEX: {e}</div>
                </div>
                 )) }
            </div>
        </div>
    )
}

export default ColorOutput;