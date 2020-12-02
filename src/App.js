import React, {useState, useEffect} from 'react';
import Header from './componentes/Layout/Header';
import LoginButton from './componentes/LoginButton';
import UserLogued from './componentes/UserLogued';
import Post from './componentes/Post';
import * as storage from './utils/Storage';

function App() {
  const [user, setUser]  = useState(null);

  const onLogin = (user) =>{

    // almacenar los datos en localStorage
    storage.setUser(user);
    setUser(user);
  };

  const onLogout = () =>{
    storage.clear();
    setUser(null);
  };

  useEffect(() =>{
    const checkSession = () =>{
      const user = storage.getUser(); //leer el storage
      if(user){
        setUser(user);
      }
    };

    checkSession();
  }, []);

  return (
    <div className="container-fluid">
      <Header>
        {user && <UserLogued user={user} onLogout={onLogout}/>}
      </Header>

      <div className="row" style={{padding: '24px 16px'}}>
        
        {!user && <LoginButton onLogin={onLogin}/>}
        {user && <Post />}
       

      </div>
    </div>
  );
}

export default App;
