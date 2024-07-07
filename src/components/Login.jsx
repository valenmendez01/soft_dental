import imagen from '../assets/logo_login.jpg'
import appFirebase from '../credenciales'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {

  const functAutenticacion = async(e) =>{
    e.preventDefault();
    const correo = e.target.email.value
    const contraseña = e.target.passw.value

    try {
      await signInWithEmailAndPassword(auth, correo, contraseña)
    } catch (error) {
      alert("Email o contraseña incorrectos")
    }
  
}

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body">
              <h2 className='bienvenido'>Bienvenido!</h2>
              <form onSubmit={functAutenticacion}>
                <input type='text' placeholder='Email' className='caja-texto' id='email'></input>
                <input type='password' placeholder='Contraseña' className='caja-texto' id='passw'></input>
                <button className='btn-form'>Ingresa</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <img src={imagen} className='tamaño-imagen'></img>
        </div>
      </div>
    </div>
  )
}

export default Login