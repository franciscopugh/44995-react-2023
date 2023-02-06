import { useState, useEffect } from "react"
import { consultarBDD } from "../../utils/funciones"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState([])

    useEffect(() => {
        consultarBDD('../json/productos.json').then(prods => {
            const prod = prods.find(item => item.id === 2)
            setProducto(prod)
        })
    }, [])

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail prod={producto}/>
        </div>
    )
}