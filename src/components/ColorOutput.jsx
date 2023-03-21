import React from "react";

const ColorOutput = ({ colors }) => {
    return (
       <div className="font-mono">
            <div className="text-2xl text-center mb-2"><p>Detected colors:</p></div>
            <div className="flex flex-row justify-arounds bg-gray-200 rounded-lg">{colors.map((e, i) => (
                <div className="bg-white h-32 m-2 rounded">
                    <div style={{backgroundColor: e}} className="w-full h-2/3 rounded" key={i}>‎</div>
                    <div className="p-1 text-sm" key={i + 10}>HEX: {e}</div>
                </div>
                 )) }
            </div>
        </div>
    )
}

export default ColorOutput;