import React from "react";
import { NavLink } from 'react-router-dom';
const Login = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div>
        <label>E-Posta</label>
        <input type="text" />
      </div>
      <div>
        <label>Şifre</label>
        <input type="text" />
      </div>
      <button>Giriş Yap</button>
      <NavLink
        to="/register"
        activeStyle={{ fontWeight: 'bold', color: 'red' }}
      >
        Kayıt ol
      </NavLink>
    </div>
    
    
  );
};

export default Login;
