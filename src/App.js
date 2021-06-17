import './App.css';
import { useState } from 'react';
import {login, verifiedCode1} from './Users'
// lowerCamelCase = variables, funciones, import assets
//UpperCamelCase = archivos, hook
//snake_case = Base de datos
//SNAKE_CASE_UPPER = Constantes

function App() {
  let [title, setTitle]= useState("Larry")
  
  const [phone, setPhone] = useState()
  const [code, setCode] = useState()
  const [error, setError] = useState(false)
  const [viewCode, setViewCode] = useState(false)
  const [viewHome, setviewHome] = useState(false)


  const submit = () =>{
    console.log(phone)
    title==="Larry"?setTitle("No Larry"):title==="No Larry"?setTitle("Larry"):setTitle("Parce Perdido esto")
    const user=login(phone)
    setError(!user)
    setViewCode(user)

  }
  const verifiedCode = () =>{
    const codigo=verifiedCode1(code)
    setError(!codigo)
    setviewHome(codigo)

  }
 


  return (
    <div className="App">
      
      <header className="App-header">
        {!viewCode &&
        <div>
          <h2>Por favor digite el numero de telefono</h2>
          <input type="number" placeholder="(000) 000-0000" onChange={(e) => setPhone(e.target.value)}></input>
          {error && <span>El usuario no existe</span>}
          <button onClick={submit}>Iniciar sesion</button>
        </div>
        }
        {viewCode && !viewHome &&
        <div>
          <h2>Te enviamos un codigo al telefono</h2>
          <input type="number" placeholder="Codigo de verificacion" onChange={(e) => setCode(e.target.value)}></input>
          {error && <span>Codigo incorrecto</span>}
          <button onClick={verifiedCode}>Verificar</button>
        </div>
        }
        {viewHome &&
        <div>
          <h2>Ingreso al inicio</h2>
        </div>
        }
      </header>
    </div>
  );
}

export default App;
