import React from 'react';
import GoogleLogin from 'react-google-login';

function InicioG() {

    const respuestaG =(respuesta)=>{
        console.log(respuesta);
        console.log(respuesta.profileobj);
    }
    
    return(
        <div className='inicioG'>
            <GoogleLogin
            clientId='901008478480-vkrmh8vfel6reu4emhr5niam67md57s2.apps.googleusercontent.com'
            buttonText='Inicio de sesion con Google'
            onSuccess={respuestaG}
            onFailure={respuestaG}
            cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}

  
export default InicioG;
