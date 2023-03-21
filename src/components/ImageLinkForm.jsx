import React from "react";

const ImageLinkForm = ({onInput, onSubmit}) => {
    return (
        <div className="w-auto flex justify-center mt-5">
            <div className="flex jusify-center flex-col items-center w-auto">
                <h1 className="text-2xl text-white font-mono p-3">This App detects colors from your images. Give it a try!</h1>
                <div className="flex justify-center w-full">
                    <input type="text" className="bg-white rounded w-2/3" placeholder="Image URL" onChange={onInput}/>
                    <button className="py-1 px-5 ml-1 bg-purple-500 text-white rounded hover:bg-purple-600" onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;