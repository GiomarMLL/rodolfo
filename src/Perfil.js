import React from 'react'

const Perfil = ({titulo,titulo2,universidad,tiempo}) => {
  return (
    <>
       <article>
          <img src=''></img>
          <h3>{titulo}</h3>
          <h3>{titulo2}</h3>   
          <h4>{universidad}</h4>
          <h4>{tiempo}</h4>
       </article>                   
    </>
  )
}

export default Perfil
