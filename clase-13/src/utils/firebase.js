import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB1GPF9-DaY4-Bl_VzNv4rai4XI_6TCO0E",
    authDomain: "react-coder-44995.firebaseapp.com",
    projectId: "react-coder-44995",
    storageBucket: "react-coder-44995.appspot.com",
    messagingSenderId: "137118444290",
    appId: "1:137118444290:web:936edc9b45eb20e3dbf01b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore() //Referencia a mi base de datos

/*
    CRUD PRODUCTOS
    CREATE
    READ
    UPDATE
    DELETE

*/

export const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), { //collection si existe productos, lo consulta sino lo crea y lo consulta
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })

}

export const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

export const updateProducto = async (id, info) => {
    await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async (id) => {
    await deleteDoc(doc(db, "productos", id))
}

//CREATE AND READ ORDEN DE COMPRA

export const createOrdenCompra = async (cliente, productos, precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenesCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const oC = await getDoc(doc(db, "ordenesCompra", id))
    const ordenCompra = { ...oC.data(), id: oC.id }
    return ordenCompra
}