import { useState } from "react"
export const ItemCount = ({ValInicial, stock, onAdd}) => {

  const [contador, setContador] = useState(ValInicial) //Defino un estado con valor inicial 1
  
  //contador-- => contador = contador - 1 ESTO NO SE PUEDE HACER
  
  const sumar = () => contador < stock && setContador(contador + 1)
  const restar = () =>contador > ValInicial && setContador(contador - 1)

  return (
    <div>
      <button className="btn btn-dark" onClick={()=> restar()}>-</button> 
      {contador}
      <button className="btn btn-dark" onClick={()=> sumar()}>+</button>
      <button className="btn btn-light" onClick={()=> onAdd(contador)}>Agregar al Carrito</button>
    </div>
  )
}