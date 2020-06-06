import React from 'react';
import {Link} from "react-router-dom";
import {FiCamera} from "react-icons/fi";

class GoRoute extends React.Component{

    render(){        
        return(
            <Link className="nav-icon first" to="/go">Go live
                <FiCamera size={16} className="nav-icon" />
            </Link>
        );
    }
}

export default GoRoute;