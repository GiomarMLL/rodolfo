import React from 'react'
import { FaThList,FaTimes } from 'react-icons/fa'
import Experiencia from './Experiencia'
import Header from './Header'
import Perfil from './Perfil'
import expdatas from './experiencia_data'
import univdatas from './universidades_data'
import prodatas from './proyectos_data'
import Proyectos from './Proyectos'
import Contacto from './Contacto'
import logo from './img/logo.jpg'
import gio from './img/gio.png'
import code from './img/code.png'

const App = () => {
 var contador= 0 ;
  const menu = () =>{
    if(contador==0){
      document.getElementById("menu_cel").style.transform="translateX(0%)"
      //document.getElementById('boton').value = <FaThList/>     
      contador=1;
    } 
    else{
       document.getElementById("menu_cel").style.transform="translateX(-110%)"
       //document.getElementById('boton').value = <FaTimes/>
       contador=0;
    }  
    //console.log(contador)
  }
  return (

    <div className='contenedor'id='contenedor'>
       <div>
          <a href="#"><input type="button"value="^"className="boton_deslizador"id="boton_deslizador"/></a>
       </div>

       <header className='header'id='header'>
            <div>
               <img src={logo}/>
               <p>Rodolfo Moreno LLacza</p>
            </div>   
            
            <button type='button'id='boton'onClick={menu}>
               { contador === 0 ? <FaThList /> : <FaTimes/> }
            </button>
            
            <nav>
               <a href='#perfil'>Perfil</a>
               <a href='#experiencia'>Experiencia</a>
               <a href='#proyectos'>Proyectos</a>
               <a href='#contacto'>Contacto</a>
            </nav>
        </header> 

        <nav id='menu_cel'>
               <a href="#perfil">Perfil</a>
               <a href="#experiencia">Experiencia</a>
               <a href="#proyectos">Proyectos</a>
               <a href="#contacto">Contacto</a>
        </nav>
        
       <Header/>
       
       <div className='perfil'id='perfil'>
       <h2>Perfil:</h2>
           <p>
                Especialista en innovación y tecnologías de Información con experiencia en implementación de servicios digitales, Gestión de   
                proyectos y desarrollo de software 
                para el sector de la Construcción, Mineria, Medio Ambiente y Educación; realizando funciones como: Director de información, Jefe de proyectos,  
                Arquitecto y 
                Desarrollador de Software, a traves de innovar en nuevos servicios digitales acorde a los objetivos empresariales, Gestión de proyectos con metodologias
                PMI y SCRUM, explorando tecnologías Web, Móvil, GIS y BI con software propietario y open source                  
           </p>
          <h2>Educación:</h2>
          <div className="universidades">
            {univdatas.map(univdata=>{
              const {img,titulo,titulo2,titulo3,universidad,tiempo} = univdata
              return(
                <Perfil 
                   img = {img}
                   titulo = {titulo}
                   titulo2 = {titulo2}
                   titulo3 = {titulo3}
                   universidad = {universidad}
                   tiempo = {tiempo}
                />
              )
            })}
          </div>
       </div>

       <div className='experiencia'id='experiencia'>
          <h2>Experiencia:</h2>
          <div className='empresa_exp'>
            {expdatas.map(expdata=>{
              const {img,empresa,tiempo,funcion,concepto,concepto2} = expdata
              return(
              <Experiencia
                 img={img}
                 empresa={empresa}
                 tiempo={tiempo}
                 funcion={funcion}
                 concepto={concepto}
                 concepto2={concepto2}
              />
             )
            })}    
          </div>      

          <div className='proyectos'id='proyectos'>
             <h2>Proyectos:</h2>
             <Proyectos prodatas={prodatas}/>
          </div>   

          <div className="contacto"id="contacto">
             <h2>Contacto:</h2>
             <Contacto />
          </div>

          <footer>
              <div className="creditos">
                  <p>copy Creado por</p>
                  <img src={gio}/>
              </div>
              <div className="otros"> 
                  <a href="https://codekidsperu1234.000webhostapp.com/index.html"target="blank"><img src={code}/></a>     
              </div>   
              <div className="redes_foot">
                  <a  className="btn"href="https://www.facebook.com/rodolfo.llacza"target="_blank">      
                     <i class="fab fa-facebook-f">
                     </i>  
                  </a>
                  <a className="btn" href="#">
                     <i class="fab fa-twitter">
                     </i>
                  </a>
                  <a className="btn" href="#">
                     <i class="fab fa-google">
                     </i>
                  </a>
                  <a className="btn" href="#">
                     <i class="fab fa-instagram">
                     </i>
                  </a>
                  <a className="btn" href="https://www.youtube.com/channel/UCBlFFQlwTGlWeee71tvIeiw"target="_blank">
                     <i class="fab fa-youtube">
                     </i>
                  </a>
               </div>      
          </footer>  
       </div>
    </div>
  )
}

export default App
