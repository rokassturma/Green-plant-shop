import React from 'react';
import PacmanLoader from "react-spinners/ClipLoader";



export default function dataHandler({ loading, error, children }) {

    if (loading) {
        return (<PacmanLoader
            color='#50806B'
            margin={2}
        />
        )
    }
    if (error) {
        return (<>Error: {error}</>)
    }
    return (children)

    return (
        <>



        </>
    )
}
