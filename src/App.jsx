import { useState } from 'react'

// Importar módulos de Firebase
import appFirebase from '../src/credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth' // onAuthStateChanged sirve para detectar estado del login
const auth = getAuth(appFirebase)

// Importar los componentes
import Login from '../src/components/Login'
import Home from '../src/components/Home'

import './App.css'

function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  })

  return (
    <div>
      {usuario ? <Home correoUsuario = {usuario.email}/> : <Login/>}
    </div>
  )
}

export default App
