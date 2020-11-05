import React from "react";
import CardNota from "./CardNota";

function ListaDeNotas(){
    return(
        <ul>
            {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
                return (
                  <li>
                      <CardNota />
                  </li>
                );
            })}
        </ul>
    );
}
export default ListaDeNotas;
