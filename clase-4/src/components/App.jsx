import './App.css'; 

//Components 
import { Navbar } from './Navbar/Navbar';
import { CartWidget } from './CartWidget/CartWidget';
export const App = () => {
  //<NombreComponente/>
  return (
    <>
      <Navbar valor={10}/> 
      <CartWidget cantCarrito={5}/>
    </>
  )
}