import React from "react";

function FormularioCadastro(){
    return(
        <form>
            <input type="text" placeholder="Título" />
            <textarea placeholder="Escreva sua nota ..." />
            <button>Criar Nota</button>
        </form>
    );
}
export default FormularioCadastro;
