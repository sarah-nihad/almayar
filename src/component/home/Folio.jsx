import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';

import ScrollUpButton from "react-scroll-up-button";
import Footer from '../common/Footer';


import Lottie from 'lottie-react-web'
import animation from '../../assets/json/heart.json';
class Folio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }


    }

    render() {
        return (
            <Context.Consumer>
                {ctx => {
                        if (ctx.value.auth ==='lgoin' ||  ctx.value.auth ==='notlogin' ){
                    return (
                        <div >
                            <div >


                                <Nav2 />

                                <div id='contine_folio'>

                                    <div id='main_folio'>
                                        <img src={require('../../assets/img/log.png')} id='logo_folio' alt='img' />




                                        <div style={{ color: '#fff' }} id='folio_text' >
                                            <div>About us:</div>
                                            <div>
                                                The company has been established since 2007 focusing
                                                on medical Technology equipment and beauty industry.
                                                We have supplied all around Iraqi province. Our staff has many
                                                Experience in medical equipment. www.almayariq.com
                                                Committed to the highest standards of service and quality.
                                                </div>

                                            <div style={{ paddingTop: '10px' }} >Almayar Recognized as brand in Iraqi local market day by day
                                            we enlarge our scale and taking a big bite in medical industry.
                                               </div>
                                            <div style={{ paddingTop: '15px' }}  >

                                                We are a leading Distributor and trading company in Iraq.
                                            We specialise in Supply Medical Equipment’s such as Hair removal
                                            </div>
                                            <div>
                                                therapy, Body shaping system, Skin analyzer, Skin rejuvenation system Hydro facial smart system and other and medical
                                                equipment.
                                               </div>

                                            <div style={{ paddingTop: '25px' }} >
                                                We pride ourselves on excellent levels of customer and
                                                distribution

</div>
                                            <div>
                                                Service. Our central network of experienced advisors are
                                                allocated to Wholesale beauty centre,. Informed advice is
                                                provided on the best
                                                products and Service, at the most competitive price.
</div>

                                            <div style={{ paddingTop: '25px' }} >

                                                As the company start to grow we did understand the market size and needs through real on ground experience.
</div>
                                            <div style={{ paddingTop: '25px' }} >

                                                This month we engage business developer on the social media side as we did realize how important this sector in Iraq.
</div>
                                            <div style={{ paddingTop: '50px' }} >
                                                Our Mission:
</div>

                                            <div style={{ paddingTop: '10px' }} >
                                                To become a market leader and always consider that almayar core inspiration is
                                                 to have a positive impact toward patients’ life.
</div>
                                            <div style={{ paddingTop: '10px' }} >
                                                We are extremely attentive towards our clients’ needs and
                                                patients’ suggestions
                                                Care for a healthy and beautiful life,
</div>
                                            <div>equipment which are beneficial to the user and ultimately to the patient by the way of advancement in technology at optional price.</div>

                                            <div style={{ paddingTop: '50px' }} >
                                                Vision:
    </div>
                                            <div style={{ paddingTop: '10px' }} >
                                                Reaching the top is one thing, staying on top is the challenge and
                                                 we know the key factor of reaching the climax and sating on it.

        </div>
                                            <div style={{ paddingTop: '10px' }} >
                                                To continue planning, in advance, to raise the level of our
                                        services in future.
            </div>
                                            <div style={{ paddingTop: '15px' }} >
                                                To win the confidence of our clients based on mutual
                                    trust & higher business ethic.
                </div>
                                            <div style={{ paddingTop: '15px' }} >
                                                To build long term and value added customer base.
                    </div>
                                            <div style={{ paddingTop: '15px' }} >
                                                We are expanding our horizon to seek new markets and long term business relationship at national and international level.
                        </div>

                                            <div style={{ paddingTop: '55px' }} >
                                                Success factors:

                            </div>
                                            <div style={{ paddingTop: '15px' }} >
                                                -  Our team is our partner we work as one big family.
                                </div>
                                            <div> -  Work hard play hard.   </div>
                                            <div> -  We treat every costumer with best service </div>
                                            <div> -  HR System that make our team strong and reworded </div>
                                            <div> -  Training center</div>
                                            <div>  -  Marketing strategy </div>
                                            <div>  -  We stay focus on our field and we believe in growing vertical
                                                      with no attention to move to another sector. </div>
                                            <div> -  Motivation by collecting point to every team member and
                                                         evaluation will take place</div>
                                            <div>-  Holding in house events for the team and proudly talking
                                                      about achievement</div>


                                            <div style={{ paddingTop: '50px' }} >
                                                <img src={require('../../assets/img/3.png')}  id='im_foli1'   alt='img' />
                                            </div>
                                            <div style={{ paddingTop: '80px' }} >
                                                Research and development:
                                                              </div>

                                            <div style={{ paddingTop: '10px' }} >
                                                When the technology take place in beauty world we keep
                                                      learning and update
                                                                  </div>
                                            <div>
                                                Our scale, We are the early bird company in terms of fallowing
                                               annual medical conferences and advanced medical research.
                                                   Hitting toward modern cosmetic devices and beauty products.
                                                                  </div>


                                            <div style={{ paddingTop: '50px' }} >
                                                <img src={require('../../assets/img/4.png')} id='im_foli1'  alt='img' />
                                            </div>
                                            <div style={{ paddingTop: '50px', color: 'gray', paddingBottom: '50px' }} >
                                                If you have any questions or need help  please feel free to email or call and will be happy to help you out
                                                </div>



                                        </div>

                                    </div>
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
export default withController(Folio);