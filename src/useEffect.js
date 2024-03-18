import { useState, useEffect } from "react";


function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const idIntervalo = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    if (count === 5) {
        console.log('Pronto 5 segundos');
        clearInterval(idIntervalo);
      }
  }, [count]);

  return (
    <div>
        <br></br> 
        <li>useEffect {count} segusdos!</li>
    </div>
  );
}

export default Timer;