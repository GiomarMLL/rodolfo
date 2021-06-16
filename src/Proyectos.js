import React from 'react'
import Proyecto from './Proyecto'
import { FaBuffer } from 'react-icons/fa'

const Proyectos = ({prodatas}) => {
  const [menuProyect, setMenuProyect] = React.useState(
    prodatas.filter(prodata=> prodata.empresa === 'MVCS')
  )
  const filter = empresa =>{
    setMenuProyect(prodatas.filter(prodata => prodata.empresa === empresa))
  }
  return (
    <div className='father'>
        <div className='btn-container'>
          {prodatas.map(prodata => (
            <button className='proyecto-btn' onClick={()=> filter(prodata.empresa)}>
               <FaBuffer />{prodata.empresa}
            </button>
          ))}
        </div>
        <div className='divs-container'>
          {menuProyect.map(prodata => (
            <Proyecto {...prodata} />
          ))}
        </div>
    </div>
  )
}

export default Proyectos
