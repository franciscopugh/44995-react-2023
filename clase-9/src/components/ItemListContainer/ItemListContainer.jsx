import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { consultarBDD } from "../../utils/funciones.js"

import { ItemList } from '../ItemList/ItemList.jsx'

export const ItemListContainer = () => {
  const {idCategoria} = useParams()
  const [productos, setProductos] = useState([])

  useEffect(() => {
    if(idCategoria) { //undefined me da falso
      consultarBDD('../json/productos.json').then(products => {
        const prods = products.filter(prod => prod.idCategoria === parseInt(idCategoria))
        const items = ItemList({prods})
        setProductos(items)
      })
    } else {
      consultarBDD('./json/productos.json').then(prods => {
        const items = ItemList({prods})
        setProductos(items)
      })
    }
  }, [idCategoria])

  return (
    <div className='row cardProductos'>
        {productos}
    </div>
  )
}