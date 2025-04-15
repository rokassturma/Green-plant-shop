import { useEffect, useState } from "react";

export default function useFetch(url, folder, imgKey) {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to retrieve from API');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log('Klaida');
            }
        }

        fetchData();
    }, [url, folder, imgKey]);

    return data;
}
