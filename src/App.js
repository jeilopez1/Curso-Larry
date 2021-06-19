import './App.css';
import { useState } from 'react';
import Login from './scenes/login/login';
import VerifiedCode from './scenes/VerifiedCode/VerifiedCode';
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
        <div>
          <h2>Ingreso al inicio</h2>
        </div>
        }
      </header>
    </div>
  );
}

export default App;
