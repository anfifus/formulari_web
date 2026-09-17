import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, Outlet} from 'react-router';
import {RouterProvider} from 'react-router-dom';
import {useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
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
      
    ]
  }
])
/*<Formulari />*/
const {id} = useParams();
useEffect(()=>{
  setRutes([
    {
        path:"/Usuari/:id",
        element:<dadesUser />
    }
  ]);
},[id]);

router = createBrowserRouter(rutes);

function Navigator(){
   /*Canviar a un altre format*/
  return (
    <div>
      <nav>
        <Link to="/">Formulari de registre</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return <RouterProvider router={router}/>
}

export default App;
