import React from 'react';

import GoRoute from './go/GoRoute';
import FaqRoute from './faq/FaqRoute';

class Routes extends React.Component{

    render(){        
        return(
            <div>
                <GoRoute />
                <FaqRoute />           
            </div>       
        );
    }
}

export default Routes;