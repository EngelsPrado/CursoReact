import React,{useState,useEffect} from 'react'


function Estado(){
 
   const [click,setClick]= useState(0); 
   const [text,setText]= useState("")

    useEffect(()=>{
        console.log("hola despues del render")
     
            // Actualiza el título del documento usando la Browser API
            document.title = `You clicked ${click} times`
    },[])

  return(
      <div>
          {console.log("Hola render 1")}
          Clicks:{click}
 
           <button onClick={()=>setClick(click+1)}  >Dale click chatel</button>

           <input   onChange={(e)=>setText(e.target.value) } />
           <div>{text}</div>  
      </div>
   )

}

export default Estado