import React from "react"
import "./Header.css"
import Logo from "../../componentes/Header/logotipo.jpg"



function Header() {
    return(
        <header>

        <img src={Logo} alt="Logotipo do spa"/>

         <h1>Spa VNWeb</h1>

         <nav>
                <ul>
                    <li>Serviços</li>
                    <li>Atendimento</li>
                    <li>Contatos</li>
                    <li>Agenda</li>
                </ul>
            </nav>

            <form>
                <label> Usuário: </label>
                <input type="text" placeholder="Digite seu usuário" />

                <label> Senha:</label>
                <input type="password" placeholder="Digite sua senha" />
                
                <button>Entrar</button>
            </form>

        </header>
    )
}
 export default Header