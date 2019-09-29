import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Lottie from 'lottie-react-web'
import animation from '../../assets/json/heart.json';

import { Redirect } from 'react-router-dom';

class Dashbourd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: ''
        }



    }

    render() {
        return (
            <Context.Consumer>
                {ctx => {
                    if (localStorage.getItem("auth")=== 'lgoin') {
                        return (
                            <div>

                                <Nav2 />
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100%' }}  >


                                    <Row style={{ marginRight: 0, width: '90%', paddingTop: '10%' }} id='dash_row' >
                                        <Col xs={12} md={6} id='dash_col' >
                                            <Link to='/Allequipment'>
                                                <div id='CardBodyCate1ss'>
                                                    <p>Equipment</p>
                                                </div>
                                            </Link>
                                        </Col>
                                        <Col xs={12} md={6} id='dash_col'  >
                                            <Link to='/Allenjection'>
                                                <div id='CardBodyCate2ss'>
                                                    <p>Injections</p>
                                                </div>    </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        )
                    }

                    else if (localStorage.getItem("auth") === 'notlogin') {
                        return (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}  >
                                <Redirect to='/'></Redirect>

                            </div>
                        )
                    }



                    else {
                        return (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}  >

                                <Lottie
                                    options={{
                                        animationData: animation
                                    }}
                                    width={300}
                                    height={300}
                                />
                            </div>
                        )
                    }



                }}
            </Context.Consumer>
        )
    }
}
export default withController(Dashbourd);