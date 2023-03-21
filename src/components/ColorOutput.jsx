import React from "react";

const ColorOutput = ({ colors }) => {
    return (
       <div>
            <div className="flex flex-row justify-arounds bg-red-700 rounded">{colors.map((e) => (
                <div className="bg-green-300 h-32 m-2 rounded">
                    <div style={{backgroundColor: e}} className="w-full h-2/3 rounded">‎</div>
                    <div className="p-1">HEX: {e}</div>
                </div>
                 )) }
            </div>
        </div>
    )
}

export default ColorOutput;