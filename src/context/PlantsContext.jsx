import { createContext } from "react";
import useFetch from "../hooks/useFetch";

const PlantsContext = createContext();

export function PlantsProvider({ children }) {


    const { data: plants, loading, error } = useFetch(
        'https://gist.githubusercontent.com/rokassturma/85d311267fb4af2639584943e295bf41/raw/7ec1d3f7c6bbc9c44e382d984b667cc36e25bbec/plant.json',
        'plants',
        'image'
    );
    const value = { plants, loading, error };


    return (
        <PlantsContext.Provider value={value}>{children}</PlantsContext.Provider>
    )
}

export default PlantsContext; 
