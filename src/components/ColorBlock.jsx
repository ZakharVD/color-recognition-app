const ColorBlock = ({element, index}) => {
    return (
        <div className="bg-white h-24 m-2 rounded-lg md:h-32">
            <div style={{backgroundColor: element}} className="w-full h-2/3 rounded-lg" key={index}>‎</div>
            <div className="p-1 text-sm" key={index + 10}>HEX: {element}</div>
        </div>
    );
}
export default ColorBlock;