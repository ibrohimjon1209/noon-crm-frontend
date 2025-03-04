import instance from "../api/instance";

import { useCallback, useEffect, useState } from "react";

const useFetchData = (ENDPOINT, method = "GET", body = null, options = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const fetchData = useCallback(async () => {
        if (!ENDPOINT) return null;

        setLoading(true);
        setError(null);

        try {
            const response = await instance({
                url: ENDPOINT,
                method,
                data: method !== "GET" ? body : null,
                ...options,
            });

            setData(response.data ?? {});
            return response.data; 
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || "Xatolik yuz berdi";
            setError(errorMessage);
            return null; 
        } finally {
            setLoading(false);
        }
    }, [ENDPOINT, method, body]);

    useEffect(() => {
        if (method === "GET") {
            fetchData();
        }
    }, [fetchData]);

    return { data, error, loading, fetchData };
};

export default useFetchData;







