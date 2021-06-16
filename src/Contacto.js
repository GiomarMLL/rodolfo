import React from 'react'

const Contacto = () => {
  return (
    <div class="contacto_info">
        <div class="info">
            <div class="content_info">
              <p>INFORMACIÓN:</p>
              <p>Nombres: Rodolfo Anibal</p>
              <p>Apellidos: Moreno LLacza</p> 
              <p>Ingeniero Civil</p>  
              <p>Email: rodolfoamoreno@gmail.com</p>
              <p>Tel: 985 847 585</p>
            </div>  
        </div>
        <form action="formulario.php" method="post" name="formulario"id="formulario"required>
            <input type="text"placeholder="Nombre y Apellido"id="nombres"name="nombre_apellido" required />
            <input type="number"placeholder="Número de Telefóno"id="numero_telefono"name="numero_telefono" required />
            <input type="email"placeholder="Email"id="email"name="email" required />
            <textarea placeholder="Coloca un Mensaje"name="textarea" required></textarea>
            <input type="submit"value="Enviar"name="boton" /> 
        </form>
                            
    </div>
  )
}

export default Contacto
