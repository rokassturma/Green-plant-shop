import { createContext } from "react";
import useFetch from "../hooks/useFetch";

const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {


    const { data: categories, loading, error } = useFetch(
        'https://gist.githubusercontent.com/rokassturma/45a1b4601a981b72d1bbb41fc50dcc51/raw/899fda68d7ac4f7df606c7ada9b84f63b0b6a72e/data-category.json',
        'categories',
        'fileName'
    );
    const value = { categories, loading, error };

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}

export default CategoriesContext; 
