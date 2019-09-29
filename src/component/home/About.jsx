import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import ScrollUpButton from "react-scroll-up-button";
import Footer from '../common/Footer';



import Lottie from 'lottie-react-web'
import animation from '../../assets/json/heart.json';
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }


    }
    handleLoad = () => {
        this.props.parallaxController.update();
    };
    render() {
        return (
            <Context.Consumer>
                {ctx => {
                      if (ctx.value.auth ==='lgoin' ||  ctx.value.auth ==='notlogin' ){
                    return (
                        <div >
                            <div >


                                <Nav2 />


                                <div id='main_about1'  style={{
                                    paddingBottom: '5%', width: '100%', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', flexDirection: 'column',
                                }}  >
                                    <div  id='ab_out' style={{
                                        marginTop: '2%', height: '100px', width: '85%', color: '#008CBA', borderRadius: '10px',lineHeight:'40px'
                                       ,fontSize: '40px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        // backgroundColor: '#00bcd1',
                                    }}  >
                                        ABOUT US
</div>


                                </div>


                                <div >

                                    <div id='OurProdectContiner_about'  >
                                        <p id='OurProdectTitle1'>Who We Are</p>
                                        <Row style={{ display: 'flex', flexDirection: 'column', paddingLeft: '8%', width: '85%', marginRight: 0 }}  >
                                            <div style={{ width: '100%', borderLeft: '5px solid #EEEEEE', paddingLeft: '2%' }}  >
                                                <div id='text_abouts' >The company has been established since 2007 focusing on medical Technology equipment and beauty industry.</div>
                                                <div id='text_abouts' >We have supplied all around Iraqi province. Our staff has many Experience in medical equipment. www.almayariq.com</div>
                                                <div id='text_abouts'  > Committed to the highest standards of service and quality. </div>

                                                <div id='text_abouts' style={{ paddingTop: '2%' }} >  Almayar Recognized as brand in Iraqi local market day by day we enlarge our scale and
                                        taking a big bite in medical industry. </div>
                                                <div id='text_abouts'>  We are a leading Distributor and trading company in Iraq. We specialise in Supply Medical Equipment’s such as Hair removal therapy  </div>
                                                <div id='text_abouts'>    , Body shaping system, Skin analyzer, Skin rejuvenation system، Hydro facial smart system and other and medical equipment.   </div>

                                                <div id='text_abouts' style={{ paddingTop: '2%' }}  >
                                                    We pride ourselves on excellent levels of customer and distribution Service. Our central network of experienced advisors are allocated to Wholesale beauty centre,. Informed advice is provided on the best products and Service, at the most competitive price.
                                         </div>

                                                <div id='text_abouts' style={{ paddingTop: '2%' }}  >
                                                    As the company start to grow we did understand the market size and needs through real on ground experience.
                                         </div>
                                                <div id='text_abouts' style={{ paddingTop: '2%' }}  >
                                                    This month we engage business developer on the social media side as we did realize how important this sector in Iraq.
                                         </div>
                                            </div>
                                        </Row>
                                    </div>




                                    <div style={{ width: '100%' }} >

                                        <Row id='About_row' style={{
                                            display: 'flex', backgroundColor: 'rgb(4, 180, 199)'
                                            , marginRight: 0,marginBottom:50
                                        }}  >

                                            <Col xs={12} md={6} id='about_col1' >
                                                <div id='about_div1' >
                                                   <i className="fab fa-telegram-plane" style={{ fontSize: '60px', color: '#fff', lineHeight: '100px' }}  ></i>  
                                                    <p style={{ fontSize: '30px', lineHeight: '40px' }}  >Our Mission</p>
                                                    <div style={{ textAlign: 'center', padding: '10px' }} >


                                                        To become a market leader and always consider that almayar core inspiration is
                                                         to have a positive impact toward patients’ life.
                                                        We are extremely attentive towards our clients’ needs and patients’ suggestions
                                                        Care for a healthy and beautiful life. And develop healthcare equipment which are beneficial to the user and ultimately to the patient by the way of advancement in technology at optional price.
                                                        
                                                                    </div>
                                                       </div>

                                                      </Col>


                                            <Col xs={12} md={6} id='about_col1' >
                                                <div id='about_div1' >
                                                 <i className="far fa-eye" style={{ fontSize: '60px', color: '#fff', lineHeight: '100px' }}  ></i>  
                                                    <p style={{ fontSize: '30px', lineHeight: '40px' }}  >Our Vision</p>
                                                    <div style={{ textAlign: 'center', padding: '10px' }} >


                                                        Reaching the top is one thing, staying on top is the challenge and we
                                                        know the key factor of reaching the climax and sating on it.
                                                        To continue planning, in advance, to raise the level of our services in future.To build long term and value added customer base.
                                                        We are expanding our horizon to seek new markets and long term business relationship at national and international level
                                                        
</div>
                                                </div>

                                            </Col>



                                        </Row>
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
                                    else 
                                    {
                                     return(
                                         <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}  >
                             
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
export default withController(About);