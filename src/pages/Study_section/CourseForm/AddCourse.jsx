import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchData, usePostData } from "../../../hook/useFetchData";

const AddCourse = () => {
    const navigation = useNavigate();

    //  Yangi kurs obyektini state-da saqlash
    const [courseData, setCourseData] = useState({
        name: "",
        color: "",
    });

    const [selectedBranches, setSelectedBranches] = useState([]);
    const [prices, setPrices] = useState({});

    const branches = [
        "Registon Ltd",
        "Najod Talim",
        "Robocode",
        "Texnopark",
        "Wester School",
        "English Life",
    ];

    const [postData, loading, error] = usePostData(); // Api ga ma'lumot yuborish uchun custom hook, Post uchun

    // Forma ma'lumotlarini API ga jo‘natish
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCourse = {
            ...courseData,

        };

        console.log("📤 Yuborilayotgan JSON:", JSON.stringify(newCourse, null, 2));

        const response = await postData("/courses/create/", newCourse);

        if (response) {
            console.log("✅ Kurs qo‘shildi:", response);
            setCourseData({
                name: "",
                color: "#000000",
            });
            setSelectedBranches([]);
            setPrices({});
            navigation("/study_section/offlineCourses");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBranchSelect = (branch) => {
        setSelectedBranches((prev) =>
            prev.includes(branch) ? prev.filter((b) => b !== branch) : [...prev, branch]
        );
    };

    const handlePriceChange = (branch, value) => {
        setPrices((prev) => ({ ...prev, [branch]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 w-full">
            <div className="flex shadow-md gap-5 w-full mb-4 p-6 h-32 bg-white rounded-lg">
                <div className="flex flex-col text-[#747474]">
                    <label className="block">Kurs Nomi</label>
                    <input
                        type="text"
                        name="name"
                        value={courseData.name}
                        onChange={handleChange}
                        className="bg-[#EDF3F9] w-[500px] p-2 border rounded-md"
                        placeholder="Kurs nomini kiriting..."
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label className="block">Rang</label>
                    <input
                        type="color"
                        name="color"
                        value={courseData.color}
                        onChange={handleChange}
                        className="w-10 h-10 rounded border"
                    />
                </div>
            </div>

            <h2 className="font-medium text-lg text-gray-700 mb-2">
                SHU DARS O'QITILADIGAN FILIALLARNI TANLANG VA BITTA DARS NARXINI KIRITING
            </h2>

            <div className="bg-white shadow-md rounded-md p-4">
                <div className="flex justify-between font-medium text-[#747474] p-3 rounded-t-md">
                    <div className="flex">
                        <div className="w-40">Mavjudligi</div>
                        <div className="w-40">Filiallar</div>
                    </div>
                    <div className="mr-28">1 Dars Narxi</div>
                </div>

                {branches.map((branch) => (
                    <div key={branch} className="flex items-center justify-between border-t p-3">
                        <div className="flex justify-start items-center">
                            <input
                                type="checkbox"
                                checked={selectedBranches.includes(branch)}
                                onChange={() => handleBranchSelect(branch)}
                                className="peer hidden"
                            />
                            <div
                                onClick={() => handleBranchSelect(branch)}
                                className="w-5 h-5 border border-gray-300 rounded-md cursor-pointer flex items-center justify-center 
                                bg-white peer-checked:bg-blue-500 peer-checked:border-blue-500 relative
                                after:content-['✓'] after:hidden peer-checked:after:block after:text-white after:text-lg"
                            ></div>
                            <div className="text-gray-600 ml-36">{branch}</div>
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder="0.00"
                                onChange={(e) => handlePriceChange(branch, e.target.value)}
                                className="w-full text-gray-500 p-2 border rounded-md bg-[#EDF3F9]"
                                disabled={!selectedBranches.includes(branch)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-end gap-5 mt-4">
                <button
                    type="button"
                    className="bg-white px-10 py-4 rounded-md text-gray-700"
                    onClick={() => {
                        setCourseData({
                            name: "",
                            price: 0,
                            description: "A description",
                            categoryId: 1,
                            images: ["https://placeimg.com/640/480/any"],
                            course_branch: [],
                            course_levels: [
                                { name: "Boshlang‘ich", color: "#FF5733" },
                                { name: "O‘rta", color: "#33FF57" },
                            ],
                            color: "#000000",
                        });
                        setSelectedBranches([]);
                        setPrices({});
                    }}
                >
                    Bekor qilish
                </button>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-10 py-4 rounded-md"
                    disabled={loading}
                >
                    {loading ? "Yuklanmoqda..." : "Saqlash"}
                </button>
            </div>

            {/* {error && <p className="text-red-600 mt-4">Xatolik: {error}</p>} */}
            {postData && <p className="text-green-600 mt-4">✅ Kurs qo‘shildi!</p>}
        </form>
    );
};

export default AddCourse;
//  ========================================

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { usePostData } from "../../../hook/useFetchData"; // usePostData ni to‘g‘ri import qilyapmiz

// const AddCourse = () => {
//     const navigation = useNavigate();

//     const [courseData, setCourseData] = useState({
//         name: "",
//         color: "#000000",
//     });

//     const [selectedBranches, setSelectedBranches] = useState([]);
//     const [prices, setPrices] = useState({});

//     const branches = [
//         "Registon Ltd",
//         "Najod Talim",
//         "Robocode",
//         "Texnopark",
//         "Wester School",
//         "English Life",
//     ];

//     const [postData, loading] = usePostData(); // Api ga ma'lumot yuborish uchun custom hook

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const newCourse = {
//             ...courseData,
//         };

//         console.log("📤 Yuborilayotgan JSON:", JSON.stringify(newCourse, null, 2));

//         try {
//             const response = await postData("/courses/create/", newCourse);

//             if (response) {
//                 console.log("✅ Kurs qo‘shildi:", response);
//                 setCourseData({
//                     name: "",
//                     color: "#000000",
//                 });
//                 setSelectedBranches([]);
//                 setPrices({});
//                 navigation("/study_section/offlineCourses");
//             }
//         } catch (error) {
//             console.error("Xatolik:", error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="p-6 w-full">
//             <div className="flex shadow-md gap-5 w-full mb-4 p-6 h-32 bg-white rounded-lg">
//                 <div className="flex flex-col text-[#747474]">
//                     <label className="block">Kurs Nomi</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={courseData.name}
//                         onChange={(e) => setCourseData({ ...courseData, name: e.target.value })}
//                         className="bg-[#EDF3F9] w-[500px] p-2 border rounded-md"
//                         placeholder="Kurs nomini kiriting..."
//                         required
//                     />
//                 </div>

//                 <div className="flex flex-col">
//                     <label className="block">Rang</label>
//                     <input
//                         type="color"
//                         name="color"
//                         value={courseData.color}
//                         onChange={(e) => setCourseData({ ...courseData, color: e.target.value })}
//                         className="w-10 h-10 rounded border"
//                     />
//                 </div>
//             </div>

//             <div className="flex justify-end gap-5 mt-4">
//                 <button
//                     type="submit"
//                     className="bg-blue-500 text-white px-10 py-4 rounded-md"
//                     disabled={loading}
//                 >
//                     {loading ? "Yuklanmoqda..." : "Saqlash"}
//                 </button>
//             </div>
//         </form>
//     );
// };

// export default AddCourse;







// ========================================
// yangi API boyicha test

// import axios from "axios";
// import { useEffect, useState } from "react";

// const ProductForm = () => {
//     const [formData, setFormData] = useState({
//         title: "",
//         price: "",
//         description: "",
//         categoryId: "",
//         images: ""
//     });

//     useEffect(() => {
//         axios.get("https://api.escuelajs.co/api/v1/products")
//             .then(response => console.log(response.data))
//             .catch(error => console.error(error));
//     })

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const productData = {
//             ...formData,
//             price: Number(formData.price), // Price son bo‘lishi kerak
//             categoryId: Number(formData.categoryId), // categoryId ham son bo‘lishi kerak
//             images: [formData.images] // images array bo‘lishi kerak
//         };

//         try {
//             const response = await fetch("https://api.escuelajs.co/api/v1/products/", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(productData)
//             });

//             const data = await response.json();
//             console.log("Success:", data);
//             alert("Mahsulot muvaffaqiyatli qo‘shildi!");
//         } catch (error) {
//             console.error("Error:", error);
//             alert("Xatolik yuz berdi!");
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg">
//             <input type="text" name="title" placeholder="Mahsulot nomi" value={formData.title} onChange={handleChange} required className="border p-2 rounded" />
//             <input type="number" name="price" placeholder="Narxi" value={formData.price} onChange={handleChange} required className="border p-2 rounded" />
//             <textarea name="description" placeholder="Tavsif" value={formData.description} onChange={handleChange} required className="border p-2 rounded"></textarea>
//             <input type="number" name="categoryId" placeholder="Kategoriya ID" value={formData.categoryId} onChange={handleChange} required className="border p-2 rounded" />
//             <input type="text" name="images" placeholder="Rasm URL" value={formData.images} onChange={handleChange} required className="border p-2 rounded" />
//             <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Mahsulotni Yuborish</button>
//         </form>
//     );
// };

// export default ProductForm;





