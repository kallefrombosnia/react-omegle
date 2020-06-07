import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import io from 'socket.io-client';

import logo from '../../logo.svg';

import ErrMsg from '../common/Error';
import Buttons from './buttons/Buttons';

global.socket = io('localhost:8000');


class Go extends React.Component{

    constructor(props){
        super(props);

        this.localVideo = React.createRef();

        this.state = {
            camError: false,
            startedSearch: false
        };

    }

    componentDidMount() {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            this.localVideo.current.srcObject = stream;
        })
        .catch(err => {
           this.setState({
               camError: err
           })
        });
    }

    render(){        
        return(
            <div>
                <Container>

                    {this.state.camError && ErrMsg(this.state.camError.toString())}

                    <Row>
                        <Col style={{ height: '430px'}}>
                            <Card style={{ height: '430px'}} className="card bg-light p-3 push-top">
                                <Card.Body>

                                    {!this.state.startedSearch && <img src={logo} className="App-logo" alt="logo" />}  

                                    <video hidden={!this.state.startedSearch ? true : false} style={{ width: '100%', height: 'auto' }} muted autoPlay  className="remote-user-video" id="remote-user-video" ref={this.localVideo1} ></video>
                              
                                </Card.Body>
                            </Card>                        
                        </Col>
                        <Col>
                            <Card style={{ height: '430px'}} className="card bg-light p-3 push-top">
                                <Card.Body>                

                                    <video ref={this.localVideo} style={{ width: '100%', height: 'auto' }} muted autoPlay className="local-user-video" id="local-user-video" ></video>
                                    
                                </Card.Body>
                            </Card>                        
                        </Col>
                    </Row>
                    <Row>
                        <Col className="push-top">
                            <Buttons callState="" > 

                            </Buttons>
                        </Col>
                    </Row>     
                </Container>    
            </div>       
        );
    }
}

export default Go;

