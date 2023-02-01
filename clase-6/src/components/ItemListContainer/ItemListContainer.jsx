import {useState,useEffect} from 'react'
import { consultarBDD } from "../../utils/funciones.js"
export const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  //./ es estar dentro de carpeta publica
  useEffect(() => {
    /*
    const consultarDatos = async() => {
      const prods = await consultarBDD('./json/productos.json')
      console.log(prods)
    }
    consultarDatos()
    */
   
    consultarBDD('./json/productos.json').then(prods => console.log(prods))

  }, [])

  return (
    <div>
        
    </div>
  )
}