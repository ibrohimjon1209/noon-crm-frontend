import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Levels from "./sections/Levels";
import WeekdaysPage from "./sections/WeekdaysPage";
import CourseTimes from "./sections/CourseTimes";
import Mentors from "./sections/Mentors";
import BooksPage from "./sections/BooksPage";
import Subjects from "./sections/Subjects";

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState("darajalar");

    const tabs = [
        { id: "darajalar", title: "Darajalar", component: <Levels />, buttonText: "Daraja qo‘shish" },
        { id: "haftaKunlari", title: "Hafta Kunlari", component: <WeekdaysPage />, buttonText: "Kun qo‘shish" },
        { id: "kursVaqtlari", title: "Kurs Vaqtlari", component: <CourseTimes />, buttonText: "Vaqt qo‘shish" },
        { id: "oqituvchilar", title: "O‘qituvchilar", component: <Mentors />, buttonText: null },
        { id: "kitoblar", title: "Kitoblar", component: <BooksPage />, buttonText: "Kitob qo‘shish" },
        { id: "mavzular", title: "Mavzular", component: <Subjects />, buttonText: "Mavzu qo‘shish" },
    ];

    // Hozirgi aktiv tab uchun tugma matnini olish
    const activeButtonText = tabs.find((tab) => tab.id === activeTab)?.buttonText || null;


    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <div className="flex items-center gap-10 mb-4">
                {/* Dinamik button (Faqat oqituvchilar bo‘lmagan holatda ko‘rinadi) */}
                {activeButtonText && (
                    <button className="flex items-center justify-center gap-1 w-56 p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                        <FaPlus />
                        {activeButtonText}
                    </button>
                )}

                {/* Tabs */}
                <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`flex items-center p-4 justify-center w-56 ${activeTab === tab.id ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700 hover:bg-gray-200"
                                }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="mt-4 p-4 bg-white shadow-md rounded-lg">
                {tabs.find((tab) => tab.id === activeTab)?.component}
            </div>
        </div>
    );
};

export default TabsComponent;
