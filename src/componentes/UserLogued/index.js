import React from 'react';
import './styles.css';


const UserLogued = ({user, onLogout}) =>{

    const logout = () =>{
        onLogout();
        window.FB.logout(() =>{});
    };

    return(
        <nav className="navbar navbar.ligth bg-ligth">
            {user.picture &&
                <img 
                src={user.picture.data.url}
                className="userImage"
                alt = {user.name} 
                />
            }
            <span>{user.name}</span>
            <a className="nav-item nav-link" haref="#" onClick={onLogout}>
                Salir
            </a>
        </nav>
    );
};

export default UserLogued;