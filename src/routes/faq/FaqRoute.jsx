import React from 'react';
import {Link} from "react-router-dom";
import {FiSearch} from "react-icons/fi";

class FaqRoute extends React.Component{

    render(){        
        return(
            <Link className="nav-icon" to="/faq">Faq
                <FiSearch size={16} className="nav-icon" />
            </Link>
        );
    }
}


export default FaqRoute;