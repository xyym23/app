import { useState } from "react";
import classes from './plusfive.module.scss';
function Plusfive(){
    const [a,seta] = useState(10)

    return(
        <div className={`${classes.app}`}>
            <h1>{a}</h1>
            <button onClick={() => seta((t) => t+5)}>+</button>
            <button onClick={() => seta((t) => t-5)}>-</button>
        </div>
    )
}
export default Plusfive;