import "./Sass/style.css"
import Add from "./Components/Addition.js"
import Sub from "./Components/Subtraction.js"
import Mult from "./Components/Multiplication.js"
import Divi from "./Components/Division.js"

function App() {
  return (
    <>
    <section>
      <div className="wrapper">
        <p>{Add(10,24)}</p>
        <p>{Sub(10,24)}</p>
        <p>{Mult(10,8)}</p>
        <p>{Divi(10,24)}</p>
      </div>  
    </section>
    
    </>
  );
}

export default App;
