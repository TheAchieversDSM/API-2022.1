import React from "react";
import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
  
        }
      >
        <ul>
          <li>
            <a href="/Home"><i className="fa-solid fa-house"></i> Home</a>
          </li>
          <li>
            <a href="/MeuPerfil"><i className="fa-solid fa-user"></i> Meu Perfil</a>
          </li>
          <li>
            <a href="/Organograma"><i className= "fa-solid fa-location-crosshairs"></i> Organograma</a>
          </li>
          <li>
            <a href="/NovoPerfil"><i className="fa-solid fa-user"></i> Novo Perfil</a>
          </li>
          <li>
            <a href="/Notificacao"><i className= "fa-solid fa-message"></i> Notificações</a>
          </li>
          <li>
            <a href="/Funcionario"><i className= "fa-solid fa-people-group"></i> Funcionário</a>
          </li>
          <li>
            <a href="/CompletarCadastro"><i className="fa-solid fa-address-book"></i> Completar</a>
          </li>
          <li>
            <a href="/logout"><i className= "fa-solid fa-arrow-right-from-bracket"></i> Sair</a>
          </li>
          


        </ul>
      </div>
    </nav>
  );
}
