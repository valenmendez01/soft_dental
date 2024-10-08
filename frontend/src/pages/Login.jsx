import { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from '../credenciales';
import imagen from '../assets/logo_login.png';

// eslint-disable-next-line react/prop-types
export const Login = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (!email || !password) return;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  if (user) {
    return <Navigate to="/agenda"></Navigate>;
  }

  return (
    <div className="container-fluid text-center vh-100 d-flex justify-content-center align-items-center">
      <div className="row justify-content-evenly align-items-center">
        <div className="col-5">
          <div className="card card-body">
            <h2 className='bienvenido'>Bienvenido!</h2>
            <form>
              <input type='text' placeholder='Email' className='caja-texto' id='email' onChange={handleEmailChange}></input>
              <input type='password' placeholder='Contraseña' className='caja-texto' id='password' onChange={handlePasswordChange}></input>
              <button type="button" className='btn-form' onClick={handleSignIn}>Ingresar</button>
            </form>
          </div>
        </div>
        <div className="col-4">
          <img src={imagen} className='tamaño-imagen'></img>
        </div>
      </div>
    </div>
  );
}


