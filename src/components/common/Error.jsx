import React from 'react';
import {Alert} from 'react-bootstrap';
 
const ErrMsg = (text) => {
    return(
        <Alert variant="danger push-top">
            {text}
        </Alert>
    ) 
};


export default ErrMsg;