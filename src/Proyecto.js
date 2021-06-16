import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Proyecto = ({empresa,proyecto}) => {
  return (
    <article className='proyecto-article'>
       <div className='proyecto-title'>
         <h3>{empresa}</h3>
       </div>
       
       {proyecto.map(proyect =>(
         <div className='proyecto-info'>
           <h4><FaAngleDoubleRight className='job-icon' /> {proyect.fecha}</h4>
           {proyect.descripcion.map((t,index)=>{
              return(
                <p key={index}>{t}</p>
              )
           })}   
         </div>      
       ))}
    </article>
  )
}

export default Proyecto
