import React from 'react'
import './Estilos.css'
import { Link} from "@reach/router"

function Home(){

  return (
     <div>
       
      <header className="header">
         <Link to="/">
           Home    
          </Link>     
         <Link to="/dashboard">
           Documentacion    
          </Link>
         <Link to="/nosotros">
           Nosotros    
         </Link> 
      </header>
           
      


  

     </div>
      
  )

}

export default Home;