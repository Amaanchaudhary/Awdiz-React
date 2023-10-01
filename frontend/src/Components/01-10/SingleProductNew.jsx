import { useParams } from "react-router-dom"

const SingleProductNew = () => {
    const {id} = useParams();

    return (
        <div>
            Single Product {id}
        </div>
    )
}

export default SingleProductNew