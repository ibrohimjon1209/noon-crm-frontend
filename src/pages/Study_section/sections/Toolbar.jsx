import { PiTextBBold, PiTextItalicLight, PiTextUnderline, PiLinkSimple } from "react-icons/pi";
import { CiTextAlignLeft, CiTextAlignCenter, CiTextAlignRight } from "react-icons/ci";

const Toolbar = () => {
    return (
        <div className="flex gap-2 border p-2 rounded-lg bg-white shadow-md">
            
            <div className="flex gap-1 border rounded-lg p-1">
                <button className="p-2 hover:bg-gray-200 rounded-md"><PiTextBBold /></button>
                <button className="p-2 hover:bg-gray-200 rounded-md"><PiTextItalicLight /></button>
                <button className="p-2 hover:bg-gray-200 rounded-md"><PiTextUnderline /></button>
                <button className="p-2 hover:bg-gray-200 rounded-md"><PiLinkSimple /></button>
            </div>

            <div className="flex gap-1 border rounded-lg p-1">
                <button className="p-2 hover:bg-gray-200 rounded-md"><CiTextAlignLeft /></button>
                <button className="p-2 hover:bg-gray-200 rounded-md"><CiTextAlignCenter /></button>
                <button className="p-2 hover:bg-gray-200 rounded-md"><CiTextAlignRight /></button>
            </div>

            <div className="flex gap-1 border rounded-lg p-1">
                <button className="p-2 hover:bg-gray-200 rounded-md">H1</button>
                <button className="p-2 hover:bg-gray-200 rounded-md">H4</button>
                <button className="p-2 hover:bg-gray-200 rounded-md">H3</button>
                <button className="p-2 hover:bg-gray-200 rounded-md">H2</button>
            </div>
        </div>
    );
};

export default Toolbar;
