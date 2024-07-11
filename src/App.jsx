import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <NavBar />
      <div className="container">
        <ItemListContainer greeting="Bienvenido a nuestra tienda!" />
        
   
       
      </div>
    </>
  );
}

export default App;
