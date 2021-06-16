import React from 'react'
import './index.css'

const Header = () => {
    return( 
     <>  
        <div className='intro'>
            <div className='imagen'>
            </div>
            <div className="descripcion">
                <h3>Msc. Ing. Rodolfo Moreno Llacza</h3>  
                <p>Especialista en Innovación y Tecnologías de 
                   Información con experiencia en Implementación
                   de servicios digitales.
                </p>     
                <p>Tel: 985 847 585</p>
                <a href='#contacto'>Ir a Contacto</a>

                <div className="redes">
                     <a  class="btn"href="https://www.facebook.com/rodolfo.llacza"target="_blank">
                        <i class="fab fa-facebook-f">
                        </i>                                  
                    </a>
                    <a class="btn" href="#">
                        <i class="fab fa-twitter">
                        </i>
                     </a>
                     <a class="btn" href="#">
                        <i class="fab fa-google">
                        </i>
                     </a>
                     <a class="btn" href="#">
                        <i class="fab fa-instagram">
                        </i>
                     </a>
                    <a class="btn" href="https://www.youtube.com/channel/UCBlFFQlwTGlWeee71tvIeiw"target="_blank">
                        <i class="fab fa-youtube">
                        </i>
                    </a>
                </div>  
            </div>
        </div>  
        
       
     </>
                      
    )
}

export default Header
