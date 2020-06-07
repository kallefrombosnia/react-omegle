import React from 'react';
import {Button} from 'react-bootstrap';

class Buttons extends React.Component{

    render(){

        return(
            <div>
                <Button variant="primary" size="lg">
                    Start
                </Button> {' '}

                <Button disabled variant="secondary" size="lg">
                    Stop
                </Button>
           

            </div>     
        );
    }
}

export default Buttons;