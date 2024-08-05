import { useState } from 'react';


function Contador() {
    const [contador, setContador] = useState(0)

    function handleClick() {
        setContador((anterior) => (
            anterior + 1
        ))
        console.log(contador)
    }

    return (
        <>
            <p>{contador}</p>
            <button onClick={handleClick}>Aumentar</button>
        </>
    )
}

export default Contador