import React from "react";
import './header.css'
import trollface from '../../Images/pngegg.png'

export default function Header(){
     return(
<header className="header">
<img className="trollface" src={trollface}/>
<h3>Meme Generator</h3>
</header>


    )
}

