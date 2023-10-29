import React from 'react';
import { Contact } from "./user/contact";
import { About } from "./about/about";
import { Footer } from "./footer";
import { Main } from "./novaPagina";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/novaPagina">Main</a></li>
        <li><a href="/about/about">About</a></li>
        <li><a href="/user/contact">Contact</a></li>
        <li><a href="/footer">Footer</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
