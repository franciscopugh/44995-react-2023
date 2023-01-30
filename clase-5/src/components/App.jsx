import './App.css'; 

//Components 
import { Navbar } from './Navbar/Navbar';
import { ItemCount } from './ItemCount/ItemCount';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
export const App = () => {
  return (
    <>
      <Navbar/> 
      <ItemCount ValInicial={5} stock={15}/>
      <ItemListContainer greeting={"Hola"}/>
    </>
  )
}