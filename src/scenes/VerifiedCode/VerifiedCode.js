import { useState } from 'react';
import {verifiedCode1} from '../../Users'   
// lowerCamelCase = variables, funciones, import assets
//UpperCamelCase = archivos, hook
//snake_case = Base de datos
//SNAKE_CASE_UPPER = Constantes

function VerifiedCode({handlerSetViewHome, handlerSetViewCode}) {
  
  const [code, setCode] = useState()
  const [error, setError] = useState(false)


  
  const verifiedCode = () =>{
    const codigo=verifiedCode1(code)
    setError(!codigo)

    if(!codigo===false){
      handlerSetViewCode(true)
      handlerSetViewHome(true)
    }

    
    

  }
 


  return (
        <div>
          <h2>Te enviamos un codigo al telefono</h2>
          <input type="number" placeholder="Codigo de verificacion" onChange={(e) => setCode(e.target.value)}></input>
          {error && <span>Codigo incorrecto</span>}
          <button onClick={verifiedCode}>Verificar</button>
        </div>
        
  );
}

export default VerifiedCode;
