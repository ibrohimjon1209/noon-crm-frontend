import { useEffect, useState } from "react";
import instance from "../api/instance";


// 🔹 Ma'lumotlarni olish (GET)
const useFetchData = (ENDPOINT) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        if (!ENDPOINT) return;
        setLoading(true);

        try {
            const response = await instance.get(ENDPOINT);
            setData(response.data);
        } catch (err) {
            console.error("Xatolik:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [ENDPOINT]);

    return [data, loading, fetchData, setData]; // ✅ `setData` qaytadi
};

// 🔹 Ma'lumot qo‘shish (POST)
const usePostData = () => {
    const [loading, setLoading] = useState(false);

    const postData = async (ENDPOINT, newData) => {
        setLoading(true);
        try {
            const response = await instance.post(ENDPOINT, newData);
            return response.data;
        } catch (error) {
            console.error("POST xatolik:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return [postData, loading];
};

// 🔹 Ma'lumotni yangilash (PUT)
const usePutData = () => {
    const [loading, setLoading] = useState(false);

    const putData = async (ENDPOINT, updatedData) => {
        setLoading(true);
        try {
            const response = await instance.put(ENDPOINT, updatedData);
            return response.data;
        } catch (error) {
            console.error("PUT xatolik:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return [putData, loading];
};

// 🔹 Ma'lumotni o‘chirish (DELETE)
const useDeleteData = () => {
    const [loading, setLoading] = useState(false);

    const deleteData = async (DELURL) => {
        setLoading(true);
        try {
            await instance.delete(DELURL);
        } catch (error) {
            console.error("DELETE xatolik:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return [deleteData, loading];
};

export { useFetchData, usePostData, usePutData, useDeleteData };
