import { createContext, useContext, useState, useEffect } from "react";

const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
    const [selectedLevels, setSelectedLevels] = useState(() => {
        const storedLevels = localStorage.getItem("selectedLevels");
        return storedLevels ? JSON.parse(storedLevels) : [];
    });

    useEffect(() => {
        localStorage.setItem("selectedLevels", JSON.stringify(selectedLevels));
    }, [selectedLevels]);

    return (
        <LevelContext.Provider value={{ selectedLevels, setSelectedLevels }}>
            {children}
        </LevelContext.Provider>
    );
};

export const useLevel = () => useContext(LevelContext);


// contextAPI ni ishlatish uchun: 
//main.jsx faylida LevelProvider ni import qilib, App componentini orab turishi kerak.