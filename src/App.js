import { useState } from "react";

function App() {
  const [name,setname] = useState("");
  return (
    <div className="name">
      <h1>Salam, mən {name}</h1>
      <button type="button" onClick={() => setname("Xəyyamam.")}>0</button>
      <button type="button" onClick={() => setname("əlaçıyam.")}>1</button>
      <button type="button" onClick={() => setname("yaxşı oxuyanam.")}>2</button>
      <button type="button" onClick={() => setname("orta oxuyanam.")}>3</button>
    </div>
  );
}

export default App;
