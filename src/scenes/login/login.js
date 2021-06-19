import { useState } from "react"
import {login} from '../../Users'   

function Login({handlerSetViewCode}){
  const [phone, setPhone] = useState()
  const [error, setError] = useState(false)

  const submit = () =>{
    console.log(phone)
    const user=login(phone)
    setError(!user)
    handlerSetViewCode(user)

  }

    return(
        <div>
          <h2>Por favor digite el numero de telefono</h2>
          <input type="number" placeholder="(000) 000-0000" onChange={(e) => setPhone(e.target.value)}></input>
          {error && <span>El usuario no existe</span>}
          <button onClick={submit}>Iniciar sesion</button>
        </div>
    )

}
export default Login;