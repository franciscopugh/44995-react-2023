import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { createOrdenCompra, updateProducto, getProducto } from "../../utils/firebase";
export const Checkout = () => {
    const { carrito, emptyCart, totalPrice } = useCarritoContext()
    let navigate = useNavigate()
    const datosForm = useRef()
    const consultarForm = (e) => {
        e.preventDefault()
        const data = new FormData(datosForm.current)
        const cliente = Object.fromEntries(data)

        const aux = [...carrito]

        aux.forEach(prodCarrito => { //Descontar stock de BDD
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant //Descontar stock 
                updateProducto(prodBDD.id, prodBDD)
            })
        })

        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
            toast(`🦄 Muchas gracias por comprar con nosotros!, su orden de compra con el id ${ordenCompra.id} por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            e.target.reset()
            emptyCart()
            navigate("/")
        })


    }

    return (

        <>
            {carrito.length === 0
                ?
                <>
                    <h2>Para finalizar la compra debe tener productos en el carrito</h2>
                    <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                </>
                :
                <div className="container contForm">
                    <form onSubmit={consultarForm} ref={datosForm}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" name="nombre" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dni" className="form-label">Documento</label>
                            <input type="number" className="form-control" name="dni" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label">Numero telefonico</label>
                            <input type="number" className="form-control" name="celular" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Direccion</label>
                            <input type="text" className="form-control" name="direccion" />
                        </div>
                        <button type="submit" className="btn btn-primary">Finalizar compra</button>

                    </form>
                </div>
            }


        </>


    )
}