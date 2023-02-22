import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
export const Cart = () => {
  const carrito = [ {id: 1, idCategoria: 1,cant: 10,nombre: "Notebook",marca: "Lenovo",modelo: "Y510P",precio: 60000,stock: 30,img: "notebook-lenovo.jpg"}, {id: 1, idCategoria: 1,nombre: "Notebook",cant: 5,marca: "Lenovo",modelo: "Y510P",precio: 60000,stock: 30,img: "notebook-lenovo.jpg"}, {id: 1, idCategoria: 1,nombre: "Notebook",cant: 7,marca: "Lenovo",modelo: "Y510P",precio: 60000,stock: 30,img: "notebook-lenovo.jpg"}]
  
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
              <ItemList prods={carrito} plantilla="ItemCart"/>
              <div className="divButtons">
                <p>Resumen de la compra: PrecioTotal</p>
                <button className="btn btn-danger" onClick={() => console.log("Productos eliminados")}>Vaciar Carrito</button>
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