import { createContext, useContext, useState, useEffect } from "react";

const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
    const [selectedLevels, setSelectedLevels] = useState(() => {
        return JSON.parse(localStorage.getItem("selectedLevels")) || [];
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