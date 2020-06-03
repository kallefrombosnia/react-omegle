import React from 'react';
import {Link} from "react-router-dom";

class GoRoute extends React.Component{

    render(){        
        return(
            <Link to="/go">Go live</Link>
        );
    }
}

export default GoRoute;