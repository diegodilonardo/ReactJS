import './App.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App () {

  return(
    <div>
      <Navbar />
      <ItemListContainer Detalle_Seccion="Calzado, Indumentaria y Accesorios Deportivos para toda la familia"/>
    </div>
  )
}  

export default App


