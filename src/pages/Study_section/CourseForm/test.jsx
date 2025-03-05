import { useState } from "react";

const CreateCourse = () => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("#000000");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: name,
            color: color
        };

        try {
            const response = await fetch("http://nightmafia.uz/dashboard/courses/create/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log("Success:", result);
            alert("Kurs muvaffaqiyatli yaratildi!");
        } catch (error) {
            console.error("Error:", error);
            alert("Xatolik yuz berdi!");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg">
            <input
                type="text"
                placeholder="Kurs nomi"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border p-2 rounded"
            />
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
                className="border p-2 rounded"
            />
            <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
                Kursni Yaratish
            </button>
        </form>
    );
};

export default CreateCourse;