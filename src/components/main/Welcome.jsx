import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import {FiTv} from "react-icons/fi";
import { DiReact, DiNodejsSmall, DiGithubBadge } from "react-icons/di";


class Welcome extends React.Component{
    render(){        
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card className="card bg-light p-3 push-top">
                                <Card.Body>
                                    <h2> React Omegle TV
                                        <FiTv className="nav-icon" size={30} />
                                    </h2>

                                    <p style={{marginTop: '30px'}} >
                                        So what is React omegle website? Basic idea behind this project is to test 'new' techonologies in modern web.
                                        Name is copied from well known site with intents to connect random people from around the world with video, voice and text chat.
                                    </p>

                                    <p style={{marginTop: '20px'}} >
                                       Project is available on  
                                       <a href="https://github.com/kallefrombosnia/react-omegle"> github/kallefrombosnia/react-omegle</a>.
                                       <DiGithubBadge className="nav-icon" size={30} />
                                    </p>

                                    <h4 style={{marginTop: '30px'}} >
                                       What techonologies are used on this project?
                                    </h4>

                                    <p style={{marginTop: '17px'}} >
                                        <DiReact size={30} />
                                        <a href="https://github.com/facebook/react">
                                            React.js
                                        </a> 
                                    </p>

                                    <p style={{marginTop: '17px'}} >
                                        <DiNodejsSmall size={30} />
                                        <a href="https://nodejs.org/en/">
                                            Node.js
                                        </a>
                                    </p>


                                    <p style={{marginTop: '17px'}} >
                                        <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API">
                                            WebRTC techonologies
                                        </a>
                                    </p>

                                    <p style={{marginTop: '17px'}} >
                                        <a href="https://github.com/socketio/socket.io/">
                                            Socket.io
                                        </a>
                                    </p>
                                </Card.Body>
                            </Card>                        
                        </Col>
                    </Row>     
                </Container>    
            </div>       
        );
    }
}

export default Welcome;