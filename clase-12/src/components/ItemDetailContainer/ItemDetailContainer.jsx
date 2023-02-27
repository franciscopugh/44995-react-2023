import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducto } from "../../utils/firebase"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState([])

    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod)
        })
    }, [])

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail prod={producto} />
        </div>
    )
}