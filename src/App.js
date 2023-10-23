import { useState } from "react";
import classes from './app.module.scss'
function App() {
  const [name, setname] = useState("");
  return (
    <div className={`${classes.name}`}>
      <h1>Salam, mən {name}</h1>
      <div className={`${classes.buttonbox}`}>
        <button type="button" onClick={() => setname("Xəyyamam.")}>0</button>
        <button type="button" onClick={() => setname("əlaçıyam.")}>1</button>
        <button type="button" onClick={() => setname("yaxşı oxuyanam.")}>2</button>
        <button type="button" onClick={() => setname("orta oxuyanam.")}>3</button>
      </div>
    </div>
  );
}

export default App;
