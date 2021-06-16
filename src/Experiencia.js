import React from 'react'

const Experiencia = ({empresa,tiempo,funcion,concepto,concepto2}) => {
  return (
       <div className='text'>
          <img src=''width='181'></img>
          <div className='titulos'>
             <h3>{empresa}</h3>
             <h3>{tiempo}</h3>
             <h3>{funcion}</h3>
          </div>
          <p>
            {concepto}{concepto2}
          </p>
       </div>
  )
}

export default Experiencia
