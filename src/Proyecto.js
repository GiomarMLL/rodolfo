import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Proyecto = ({logo,empresa,proyecto,monto,plazo}) => {
  return (
    <article className='proyecto-article'>
       <div className='proyecto-title'>
         <div>
           <img src={logo}width='48'></img>
         </div>
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
           <br ></br>
           {proyect.monto === '' ? '' : 
             <>
              <p> <b>Monto:</b> {proyect.monto}</p>
              <p> <b>Plazo:</b> {proyect.plazo}</p>
             </>
           }
           <img style={{width:'120%'}}src={proyect.img}/>
         </div>      
       ))}
          
    </article>
  )
}

export default Proyecto
