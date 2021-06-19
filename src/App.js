import './App.css';
import { useState } from 'react';
import Login from './scenes/login/Login';
import VerifiedCode from './scenes/VerifiedCode/VerifiedCode';
import Home from './scenes/home/Home';
// lowerCamelCase = variables, funciones, import assets
//UpperCamelCase = archivos, hook
//snake_case = Base de datos
//SNAKE_CASE_UPPER = Constantes

function App() {
  
  const [viewCode, setViewCode] = useState(false)
  const [viewHome, setViewHome] = useState(false)

  return (
    <div className="App">
      
      <header className="App-header">
        {!viewCode &&
        <Login handlerSetViewCode={setViewCode}/>
        }
        {viewCode && !viewHome &&
        <VerifiedCode handlerSetViewCode={setViewCode} handlerSetViewHome={setViewHome}/>
        }
        {viewHome &&
        <Home></Home>
        }
      </header>
    </div>
  );
}

export default App;
