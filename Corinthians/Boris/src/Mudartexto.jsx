import { useState } from 'react';

function Mudartexto(){
        const [textoBotao, settextoBotao] = useState("Palmeiras")

        function handleClick(){
            settextoBotao(textoBotao==="Palmeiras"? "Corinthians": "Palmeiras")
            
        }
        return(
            <>

            <button onClick={handleClick}>{textoBotao}</button>
            </>
        )
    
}
export default Mudartexto