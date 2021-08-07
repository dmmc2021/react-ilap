import React from "react";
import { GrFacebook } from 'react-icons/gr'
import { FaInstagramSquare } from 'react-icons/fa'


function Social(){
    return(
        
        <div class="social">
               
            <a href="facebook"><GrFacebook/> logof</a>
            <a href="tweeter"><i className="fab fa-twitter-square"></i>logot</a>
            <a href="instagram"><FaInstagramSquare/>logoi</a>
            <p>&copyDerechos reservados Instituto ILAP - Soportado por Moodle.org</p>
        </div>
    
    
        
    )
}

export default Social;