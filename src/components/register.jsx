import React from "react";
import { NavLink } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div>
        <label>Ad Soyad </label>
        <input type="text" />
      </div>
      <div>
        <label>E-Posta </label>
        <input type="text" />
      </div>
      <div>
        <label>Şifre </label>
        <input type="text" />
      </div>
      <button>Kayıt Ol</button>
      <NavLink to="/login" activeStyle={{ fontWeight: "bold", color: "red" }}>
        Giriş Yap
      </NavLink>
    </div>
  );
};

export default Register;
