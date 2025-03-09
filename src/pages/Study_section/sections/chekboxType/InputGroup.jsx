import React, { useState } from 'react';

const InputGroup = () => {
    const [selected, setSelected] = useState("");
    
    return (
        <div>
            <div className="flex gap-4 mt-5 rounded-lg w-full">
                <label
                    className={`flex items-center justify-between gap-4 px-4 py-2 rounded-lg cursor-pointer w-1/2 border ${selected === "tavsif" ? "text-blue-600 font-medium" : "text-gray-600"
                        }`}
                >
                    <input
                        type="radio"
                        name="toggle"
                        value="tavsif"
                        checked={selected === "tavsif"}
                        onChange={() => setSelected("tavsif")}
                        className="hidden"
                    />
                    Tavsif
                    <div
                        className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${selected === "tavsif" ? "border-blue-600" : "border-gray-400"
                            }`}
                    >
                        {selected === "tavsif" && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                    </div>
                </label>

                <label
                    className={`flex items-center justify-between gap-2 px-4 py-2 rounded-lg cursor-pointer border w-1/2 ${selected === "savollar" ? "text-blue-600 font-medium" : "text-gray-600"
                        }`}
                >
                    <input
                        type="radio"
                        name="toggle"
                        value="savollar"
                        checked={selected === "savollar"}
                        onChange={() => setSelected("savollar")}
                        className="hidden"
                    />
                    Savollar
                    <div
                        className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${selected === "savollar" ? "border-blue-600" : "border-gray-400"
                            }`}
                    >
                        {selected === "savollar" && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                    </div>
                </label>
            </div>


        </div>
    );
}

export default InputGroup;
