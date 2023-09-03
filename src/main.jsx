import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import Home from "./components/home.jsx"
import About from "./components/about.jsx"
import Xp from "./components/previusworks.jsx"
import Table from "./components/tablacontents.jsx"
import Reflection from "./components/reflection.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div  >
  
    <Home/>
    {/* <About/>
    <Xp/>
    <Table/>
    <Reflection/>
 */}
    </div>
    
  </React.StrictMode>,
)
