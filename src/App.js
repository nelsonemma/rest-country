
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FetchData from "./FetchData"
import Currency from "./Currency";
import Language from "./Language";
import Style from "./Style";
import Capital from "./Capital";
import { Container } from '@mui/material';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <FetchData/>
    // errorElement: <h1>ERROR PAGE</h1>
  } ,
  {
    path: "/links",
    element: <Style/>
  }, 

  {
    path: "/Currency",
    element: <Currency/>
    //  errorElement: <h1>ERROR PAGE</h1>
  },

  {
    path: "/Language",
    element: <Language/>
    //  errorElement: <h1>ERROR PAGE</h1>
  },

  {
    path: "/Capital",
    element: <Capital/>
    //  errorElement: <h1>ERROR PAGE</h1>
  },
] )


function App ( ) {
  return (
    <Container>
      <RouterProvider router={router}  />
      <Style/>
   
     
      
    </Container>
    
  )
  
}

export default App;