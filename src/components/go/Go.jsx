import React from 'react';
import {Card, Container, Row, Col, Alert} from 'react-bootstrap';


const AlertMsg = text => {
    return(
        <Alert variant="danger">
            {text}
        </Alert>
    );
};

class Go extends React.Component{
    constructor(props){
        super(props);

        this.localVideo = React.createRef();
        this.localVideo1 = React.createRef();
        this.boxLocalVideo = React.createRef();
    }

    render(){        
        return(
            <div>
                <Container>
                    <Row>
                        <Col style={{ height: '430px'}}>
                            <Card style={{ height: '430px'}} className="card bg-light p-3 push-top">
                                <Card.Body>
                                         
                                    <video style={{ width: '100%', height: 'auto' }} muted autoPlay  className="local-user-video" id="local-user-video" ref={this.localVideo1} ></video>
                              
                                </Card.Body>
                            </Card>                        
                        </Col>
                        <Col>
                            <Card style={{ height: '430px'}} className="card bg-light p-3 push-top">
                                <Card.Body ref={this.boxLocalVideo}>

                                    {navigator.getUserMedia({ video: true, audio: true }, stream => {

                                        console.log(stream)
                                        //this.localVideo.current.srcObject = stream;
                                        //this.localVideo1.current.srcObject = stream;

                                    
                                        return AlertMsg('test');
                                    

                                        console.log(this.boxLocalVideo);

                                        },

                                        error => {
                                            console.warn(error.message);
                                            return(
                                                <Alert  variant="danger">
                                                    {error.message}
                                                </Alert>
                                            )
                                        })
                                    }

                                  

                                    <video style={{ width: '100%', height: 'auto' }} muted autoPlay className="local-user-video" id="local-user-video" ref={this.localVideo} ></video>
                                    
                                </Card.Body>
                            </Card>                        
                        </Col>
                    </Row>     
                </Container>    
            </div>       
        );
    }
}

export default Go;

