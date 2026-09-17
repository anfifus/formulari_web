import logo from './logo.svg';
import './App.css';
import {createBrowserRouter} from 'react-router';
import {RouterProvider} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Formulari from'./components/FormulariContacte';
import dadesUser from'./components/User';
const router = createBrowserRouter([
  {
    path:"/",
    element:<Navigator/>,
    children: [
      {
        index:true,
        element:<Formulari />
      },
      {
        path:"/getUsuari/:id",
        element:<dadesUser />
      }
    ]
  }
])
/*<Formulari />*/

function Navigator(){
   /*Canviar a un altre format*/
  return (
    <div>
      <nav>
        <Link to="/">Formulari de registre</Link>
        <Link to="/getUsuari/:id">Comprovar usuari</Link>
      </nav>
    </div>
  );
}

function App() {
  return <RouterProvider router={router}/>
}

export default App;
