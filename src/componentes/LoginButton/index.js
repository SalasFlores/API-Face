import React from 'react';
import './styles.css';

const LoginButton = ({onLogin}) =>{

    const facebookLogin = () =>{
        if (!window.FB) return;
        
        // hacer login
        window.FB.getLoginStatus(response =>{
            if (response.status === "connected"){
                // leer los datos del usuario
                facebookLoginHandler(response);
            }   else{
                // iniciar sesion
                window.FB.login(facebookLoginHandler, {scope: 'public_profile,email'});
            }
        });
    };

    const facebookLoginHandler = (response) =>{
        console.log(response);
        if(response.status === "connected"){
            // leer datos
            window.FB.api('/me?fields=id,name,email,picture', userData =>{
                 console.log(userData);

                // almacenar la sesion del usuario
                const user = {
                    ...userData,
                    accessToken: response.authResponse.accessToken
                };
                onLogin(user); //llamar funcion del componente padre
            });
        }
    };

    return(
        <div className="loginWrapper">
            <a onClick={facebookLogin} className="login">
                <span>Conéctate a Facebook</span>
            </a>
        </div>
    );
};

export default LoginButton;