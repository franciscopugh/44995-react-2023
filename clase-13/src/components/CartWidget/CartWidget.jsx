import { Link } from "react-router-dom"
import { useCarritoContext } from "../../context/CarritoContext"

export const CartWidget = () => {
  const { getItemQuantity } = useCarritoContext()
  return (
    <>
      <Link className="nav-link" to={"/cart"}>
        <button className="btn btn-dark cartWidget">Carrito</button>
        {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
      </Link>

    </>
  )
}