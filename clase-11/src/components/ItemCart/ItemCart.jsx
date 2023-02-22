export const ItemCart = ({item}) => {
   return (
     <div className="card mb-3 cardCart">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`/img/${item.img}`} alt={`Imagen de ${item.nombre}`} className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                    <p className="card-text"> Cantidad: {item.cant}</p>
                    <p className="card-text"> Precio Unitario: {item.precio}</p>
                    <p className="card-text"> Subtotal: {item.cant * item.precio}</p>
                    <button className="btn btn-danger" onClick={() => console.log("Producto eliminado")}>Eliminar del carrito</button>
                </div>
            </div>
        </div>
     </div>
   )
}