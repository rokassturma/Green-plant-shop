import PacmanLoader from "react-spinners/ClipLoader";



export default function DataHandler({ loading, error, children, noData }) {

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
    if (noData) {
        return <div className="example">Plant was not found</div>
    }
    return (children)
}
