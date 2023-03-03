import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../../context/CarritoContext"
export const Cart = () => {
  const { carrito, emptyCart, totalPrice } = useCarritoContext()
  return (
    <>
      {
        carrito.length === 0
          ? //Si no existen productos en el carrito
          <>
            <h2>Carrito vacio</h2>
            <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
          </>
          : //Si existen productos en el carito
          <div className="container cartContainer">
            <ItemList prods={carrito} plantilla="ItemCart" />
            <div className="divButtons">
              <p>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
              <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar Carrito</button>
              <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar comprando</button></Link>
              <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar Compra</button></Link>
            </div>
          </div>
      }

    </>
  )

}

/*
  Primer metodo de rendering - Complejidad de 6
  const cond = false
  if(cond) {
    return <h2>Es verdadero</h2>
  }
   
  return <h2>Es falso</h2>

  Segundo metodo de rendering - Complejidad de 6

  const cond = true
  return (
    <>
      {cond && <h2>Es verdadero</h2>}
      {!cond && <h2>Es falso</h2>}
    </>
  )

  Tercer metodo de rendering - Complejidad 5
  const cond = false
  return (
    <>
      {cond ? <h2>Es verdadero</h2> : <h2>Es falso</h2>}
    </>
  )
*/