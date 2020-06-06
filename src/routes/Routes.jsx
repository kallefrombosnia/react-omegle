import React from 'react';
import {Navbar} from 'react-bootstrap';
import { DiReact } from "react-icons/di";

import GoRoute from './go/GoRoute';
import FaqRoute from './faq/FaqRoute';

class Routes extends React.Component{

    render(){        
        return(
            <div>

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        <DiReact  size={30}  color="aliceblue" />
                    React Omegle
                    </Navbar.Brand>
                    <Navbar.Text>
                        <GoRoute />
                    </Navbar.Text>
                    <Navbar.Text className="ml-auto" >
                        <FaqRoute />   
                    </Navbar.Text>
                </Navbar>
                   
            </div>       
        );
    }
}

export default Routes;