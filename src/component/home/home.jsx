import React from 'react';
import Context from '../../assets/js/Context';
import NavBar from '../common/NavBar';
import { Parallax, withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import ScrollUpButton from "react-scroll-up-button";
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react-web'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import animation from '../../assets/json/heart.json';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            subject: '',
            to: '',
            email: ''
        }


    }
    handleLoad = () => {
        this.props.parallaxController.update();
    };


    send() {


        axios.post(`https://api.almayariq.com/auth/sendEmail`, {
            'to': 'emperor.rasheed@gmail.com',
            'body': this.state.body,
            'subject': this.state.subject + this.state.email
        })

            .then(response => {

                console.log(response.data);
                toast.success('Email has been send successfully');
            })
            .catch(function (message) {


            });

    }


    render() {
        return (
            <Context.Consumer>
                {ctx => {
                    if (ctx.value.auth === 'lgoin' || ctx.value.auth === 'notlogin') {
                        return (
                            <div onLoad={this.handleLoad}>
                                <ToastContainer
                                    position="top-center"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnVisibilityChange
                                    draggable
                                    pauseOnHover
                                />
                                <div id='headerHomeContiner'>
                                    <div id='editBugHeader'>
                                        <div id='upNavBar' >
                                            <div id='upNavBar1'>
                                                <i className="fas fa-phone" id='IconHomeUP'> <span id='SPanUPNav'>+964 7715777758</span></i>
                                                <i className="fas fa-map-marker-alt " id='IconHomeUP'><span id='SPanUPNav'>iraq / bahgdad</span></i>
                                            </div>
                                            <div id='upNavBar2'>
                                                {/* <i className="fas fa-facebook-f" style={{ color: '#fff',marginLeft:50 }}></i> */}
                                                <i className="fab fa-facebook-f" id='IconHomeUP'></i>
                                                <i className="fab fa-twitter" id='IconHomeUP'></i>
                                                <i className="fab fa-instagram" id='IconHomeUP'></i>
                                            </div>
                                        </div>
                                        <NavBar />

                                    </div>
                                    <div id='downHeaderNavContiner'>
                                        <Parallax className="custom-class" y={[50, -50]} tagOuter="figure" >
                                            <Row style={{ margin: 0, paddingLeft: 80, paddingRight: 80 }} >
                                                <Col id='uperBgcimage' sm={12} lg={6}>
                                                    <p>MEDICAL TECHNOLOGIES TRANSFORM THE WORLD</p>
                                                </Col>
                                            </Row>

                                            <div id='BodyHomeBagecontiner'>
                                                <div id='CardBodyCateContiner'>
                                                    <Link to='/Equipment'>
                                                        <div id='CardBodyCate1'>
                                                            <p>Equipment</p>
                                                        </div>
                                                    </Link>
                                                    <Link to='/Injection'>
                                                        <div id='CardBodyCate2'>
                                                            <p>Injections</p>
                                                        </div>    </Link>
                                                </div>
                                            </div>
                                            <div id='HomeAboutUSContiner'>
                                                <div style={{ width: '60%', padding: '30px' }} id='te_homr'  >

                                                    <div> ABOUT US :  </div>
                                                    Reaching the top is one thing, staying on top is the challenge and we
                                                    know the key factor of reaching the climax and sating on it.
                                                    To continue planning, in advance, to raise the level of our services in future.To build long term and value added customer base.
                                                    We are expanding our horizon to seek new markets and long term business relationship at national and international level
                                            </div>


                                            </div>
                                        </Parallax>

                                        <div id='VideoHomePageContiner'>
                                            {/* <Lottie
                  options={{
                    animationData: animation
                  }}
                /> */}
                                        </div>
                                        <div id='OurProdectContiner' style={{ backgroundColor: '#f6f6f6' }} >
                                            <p id='OurProdectTitle'>Our Products</p>
                                            <Row id='RowOurProdect'>
                                                <Col id='ColOurProdect' xm={12} md={6} xl={4}>
                                                    <div className='card'>
                                                        <div className='details'>
                                                            <p style={{ marginTop: '5px', color: '#008CBA', fontSize: '26px', fontWeight: '600' }}  >Vision</p>
                                                            <div style={{ padding: '14px' }} id='concepttext' >collaborate to get more vision wideness</div>
                                                        </div>

                                                        <div className='imgBox'>
                                                            <img src={require('../../assets/img/img1.jpg')} alt='img' />
                                                        </div>

                                                    </div>





                                                </Col>
                                                <Col id='ColOurProdect' xm={12} md={6} xl={4}>
                                                    <div className='card'>
                                                        <div className='details'>
                                                            <p style={{ marginTop: '5px', color: '#008CBA', fontSize: '26px', fontWeight: '600' }}  >Vision</p>
                                                            <div style={{ padding: '14px' }} id='concepttext' >collaborate to get more vision wideness</div>
                                                        </div>

                                                        <div className='imgBox'>
                                                            <img src={require('../../assets/img/img2.jpg')} alt='img' />
                                                        </div>

                                                    </div>
                                                </Col>
                                                <Col id='ColOurProdect' xm={12} md={6} xl={4}>
                                                    <div className='card'>
                                                        <div className='details'>
                                                            <p style={{ marginTop: '5px', color: '#008CBA', fontSize: '26px', fontWeight: '600' }}  >Vision</p>
                                                            <div style={{ padding: '14px' }} id='concepttext' >collaborate to get more vision wideness</div>
                                                        </div>

                                                        <div className='imgBox'>
                                                            <img src={require('../../assets/img/img3.jpg')} alt='img' />
                                                        </div>

                                                    </div>
                                                </Col>
                                                <Col id='ColOurProdect' xm={12} md={6} xl={4}>
                                                    <div className='card'>
                                                        <div className='details'>
                                                            <p style={{ marginTop: '5px', color: '#008CBA', fontSize: '26px', fontWeight: '600' }}  >Vision</p>
                                                            <div style={{ padding: '14px' }} id='concepttext' >collaborate to get more vision wideness</div>
                                                        </div>

                                                        <div className='imgBox'>
                                                            <img src={require('../../assets/img/img1.jpg')} alt='img' />
                                                        </div>

                                                    </div>
                                                </Col>
                                                <Col id='ColOurProdect' xm={12} md={6} xl={4}>

                                                    <div className='card'>
                                                        <div className='details'>
                                                            <p style={{ marginTop: '5px', color: '#008CBA', fontSize: '26px', fontWeight: '600' }}  >Vision</p>
                                                            <div style={{ padding: '14px' }} id='concepttext' >collaborate to get more vision wideness</div>
                                                        </div>

                                                        <div className='imgBox'>
                                                            <img src={require('../../assets/img/img1.jpg')} alt='img' />
                                                        </div>

                                                    </div>
                                                </Col>
                                                <Col id='ColOurProdect' xm={12} md={6} xl={4}>

                                                    <div className='card'>
                                                        <div className='details'>
                                                            <p style={{ marginTop: '5px', color: '#008CBA', fontSize: '26px', fontWeight: '600' }}  >Vision</p>
                                                            <div style={{ padding: '14px' }} id='concepttext' >collaborate to get more vision wideness</div>
                                                        </div>

                                                        <div className='imgBox'>
                                                            <img src={require('../../assets/img/img1.jpg')} alt='img' />
                                                        </div>

                                                    </div>

                                                </Col>
                                            </Row>
                                        </div>

                                        <div id='ourteamTitleContiner'>
                                            <h1 id='ourteamTitle'>Our Team</h1>
                                            <div id='ourTEamContiner'>

                                                <div id='flexOurTeam'>
                                                    <div className='CardOurTeamContiner'>
                                                        <img id='CardOurTeamIMG' src={require('../../assets/img/1.jpg')} alt='img' />
                                                        <div className='overlay'>
                                                            <div id='textOurTeam'>
                                                                <h3>sosan badr</h3>
                                                                <p>loarem ipsum to do the pishical methode </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='CardOurTeamContiner'>
                                                        <img id='CardOurTeamIMG' src={require('../../assets/img/2.jpg')} alt='img' />
                                                        <div className='overlay'>
                                                            <div id='textOurTeam'>
                                                                <h3>sosan badr</h3>
                                                                <p>loarem ipsum to do the pishical methode </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div id='flexOurTeam'>
                                                    <div className='CardOurTeamContiner'>
                                                        <img id='CardOurTeamIMG' src={require('../../assets/img/3.jpg')} alt='img' />
                                                        <div className='overlay'>
                                                            <div id='textOurTeam'>
                                                                <h3>sosan badr</h3>
                                                                <p>loarem ipsum to do the pishical methode </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='CardOurTeamContiner'>
                                                        <img id='CardOurTeamIMG' src={require('../../assets/img/4.jpg')} alt='img' />
                                                        <div className='overlay'>
                                                            <div id='textOurTeam'>
                                                                <h3>sosan badr</h3>
                                                                <p>loarem ipsum to do the pishical methode </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div id='ContactUsContiner'  >
                                            <div id='firstPartContactUs' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
                                                <iframe id="gmap_canvas"
                                                    src="https://maps.google.com/maps?q=%D8%A7%D8%B1%D8%A8%D9%8A%D9%84%20%D8%AF%D8%B1%D9%8A%D9%85%20%D8%B3%D8%AA%D9%8A%20%D9%81%D9%8A%D9%84%D8%A713&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{ width: '90%', height: '460px', padding: '20', boxShadow: '0px 0px 5px 1px rgba(153, 153, 153, 1)' }}
                                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title='map'></iframe>
                                            </div>
                                            <div id='secondPartContactUs'   >
                                                <input type='text' id='inputCOntactHome' placeholder='email' value={this.state.email} onChange={(e) => {
                                                    this.setState({ email: e.target.value })
                                                }} />
                                                <input type='text' id='inputCOntactHome' placeholder='E-mail' value={this.state.subject} onChange={(e) => {
                                                    this.setState({ subject: e.target.value })
                                                }} />
                                                <textarea id='areaCOntactHome' placeholder='Message' value={this.state.body} onChange={(e) => {
                                                    this.setState({ body: e.target.value })
                                                }} />
                                                <div id='BtnContactUSHome' onClick={()=> this.send()}  >Send</div>
                                            </div>
                                        </div>
                                        <ScrollUpButton
                                            StopPosition={0}
                                            ShowAtPosition={150}
                                            EasingType='easeOutCubic'
                                            AnimationDuration={2000}
                                            ContainerClassName='ScrollUpButton__Container'
                                            TransitionClassName='ScrollUpButton__Toggled'
                                            style={{ backgroundColor: '#346bae' }}
                                            ToggledStyle={{}}
                                        />
                                        <Footer />
                                    </div>

                                </div>


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
export default withController(Home);