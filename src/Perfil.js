import React from 'react'

const Perfil = ({img,titulo,titulo2,titulo3,universidad,tiempo}) => {
  return (
    <>
       <article>
          <img src={img}width='206'height='202'/>
          <h3>{titulo}</h3>
          <h3>{titulo2}</h3>  
          <h3>{titulo3}</h3> 
          <h4>{universidad}</h4>
          <h4>{tiempo}</h4>
       </article>                   
    </>
  )
}

export default Perfil
