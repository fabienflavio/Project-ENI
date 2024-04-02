import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Acuelle from './Views/Acuelle.jsx';
import AddAccount from './Views/AddAccount.jsx';
import Affichage from './Views/Affichage.jsx';
import Histogramme from './Views/Histogramme.jsx';
import Edit from './Views/Edit.jsx';

 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Acuelle />, 
  },
  {
    path: "/Ajouter",
    element: <AddAccount />, 
  },
  {
    path: "/Affichage",
    element : <Affichage />, 
  },
  {
    path: "/Affichage/:id",
    element : <Edit />, 
  },
  {
    path: "/Histogramme",
    element : <Histogramme/>
  },
])

function App() {
  return (<RouterProvider router={router}/>)
}


export default App
