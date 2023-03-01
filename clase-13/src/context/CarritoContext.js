import { useContext, createContext, useState } from "react";

const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([])

    //Si existe producto en el carrito
    const isInCart = (id) => {
        //Si existe el producto lo retorna, si no existo retorna undefined 
        return carrito.find(prod => prod.id === id)
    }

    //Agregar producto en el carrito

    const addItem = (producto, cantidad) => {
        //Si existe en el carrito, modifico las cantidades
        if (isInCart(producto.id)) {
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            const aux = [...carrito]
            aux[indice].cant = cantidad
            setCarrito(aux)
        } else {
            //Si no existe en el carrito, lo creo y lo guardo
            const prodCart = {
                ...producto,
                cant: cantidad
            }
            /*
                const aux = [...carrito]
                aux.push(prodCart)
                setCarrito(aux)
            */

            setCarrito([...carrito, prodCart])
        }

    }

    //Eliminar producto del carrito

    const removeItem = (id) => {
        //const indice = carrito.findIndex(prod => prod.id === id)
        //carrito.splice(indice,1)
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    //Vaciar carrito
    const emptyCart = () => {
        setCarrito([])
    }

    //Cantidad Total de productos en el carrito
    const getItemQuantity = () => {
        //return carrito.length
        return carrito.reduce((acum, prod) => acum += prod.cant, 0)
    }

    //Precio total de la compra
    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
    }

    console.log(carrito)

    return (
        <CarritoContext.Provider value={{ carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice }} >
            {props.children}
        </CarritoContext.Provider>
    )

}