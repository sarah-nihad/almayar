import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row} from 'react-bootstrap';

import Footer from '../common/Footer';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import host from '../../assets/js/Host';
import Icon from 'react-fa';
import Media from "react-media";
import Lottie from 'lottie-react-web'
import animation from '../../assets/json/heart.json';

class Injection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // number: 6
        }


    }

    render() {
        return (
            <Context.Consumer>
                {ctx => {
                       if (ctx.value.auth ==='lgoin' ||  ctx.value.auth ==='notlogin' ){
                    return (
                        <div id='mainEquContiner1' >
                            
                            <div id='apfot'>
                                <Nav2 />

                                <div id='section1_s'  >
                                    <Row id='RowOurProdect'>
                                        <p id='OurProdectTitle'>  </p>
                                    </Row>


                                    <div id='OurProdectContinerss'>
                                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
                                            <Media queries={{
                                                small: "(max-width: 599px)",
                                                medium: "(min-width: 600px) and (max-width: 1199px)",
                                                large: "(min-width: 1200px)"
                                            }}>
                                                {matches => (
                                                    <React.Fragment>
                                                        {matches.small &&
                                                            <Carousel
                                                                addArrowClickHandler
                                                                slidesPerPage={1}
                                                                slidesPerScroll={1}
                                                                // animationSpeed={3000}
                                                                // autoPlay={true}
                                                                stopAutoPlayOnHover
                                                                // clickToChange
                                                                infinite={true}
                                                                // itemWidth={250} 
                                                                arrowLeft={<Icon className="fas fa-angle-double-left" name="arrow-left" />}
                                                                arrowRight={<Icon className="fas fa-angle-double-right" name="arrow-right" />}
                                                          

                                                            >
                                                                {ctx.value.data2.map(((item, i) =>

                                                                    <div id='slide_e1' style={{backgroundColor:'#fff'}}    key={i} onClick={() => {
                                                                        window.location.href = `Category2/?id=${item.id}&&name=${item.name}`

                                                                    }}  >
                                                                        <img id='slid_img' src={host + 'item/files/' + item.file} alt='img' />
                                                                        <p style={{ textAlign: 'center' }}  > {item.name}</p>
                                                                    </div>

                                                                ))}

                                                            </Carousel>
                                                        }

                                                        {matches.medium &&
                                                            <Carousel
                                                                addArrowClickHandler
                                                                slidesPerPage={3}
                                                                slidesPerScroll={1}
                                                                // animationSpeed={3000}
                                                                // autoPlay={true}
                                                                stopAutoPlayOnHover
                                                                // clickToChange
                                                                infinite={true}
                                                                // itemWidth={250} 
                                                                arrowLeft={<Icon className="fas fa-angle-double-left" name="arrow-left" />}
                                                                arrowRight={<Icon className="fas fa-angle-double-right" name="arrow-right" />}
                                                          

                                                            >
                                                                {ctx.value.data2.map(((item, i) =>

                                                                    <div id='slide_e1' style={{backgroundColor:'#fff'}}    key={i} onClick={() => {
                                                                        window.location.href = `Category2/?id=${item.id}`

                                                                    }}  >
                                                                        <img id='slid_img' src={host + 'item/files/' + item.file} alt='img' />
                                                                        <p style={{ textAlign: 'center' }}  > {item.name}</p>
                                                                    </div>

                                                                ))}

                                                            </Carousel>
                                                        }

{matches.large &&
                                                            <Carousel
                                                                addArrowClickHandler
                                                                slidesPerPage={5}
                                                                slidesPerScroll={1}
                                                                // animationSpeed={3000}
                                                                // autoPlay={true}
                                                                stopAutoPlayOnHover
                                                                // clickToChange
                                                                infinite={true}
                                                                // itemWidth={250} 
                                                                arrowLeft={<Icon className="fas fa-angle-double-left" name="arrow-left" />}
                                                                arrowRight={<Icon className="fas fa-angle-double-right" name="arrow-right" />}
                                                          

                                                            >
                                                                {ctx.value.data2.map(((item, i) =>

                                                                    <div id='slide_e1' style={{backgroundColor:'#fff'}} key={i} onClick={() => {
                                                                        window.location.href = `Category2/?id=${item.id}&name=${item.name}`

                                                                    }}  >
                                                                        <img id='slid_img' src={host + 'item/files/' + item.file} alt='img' />
                                                                        <p style={{ textAlign: 'center' }}  > {item.name}</p>
                                                                    </div>

                                                                ))}

                                                            </Carousel>
                                                        }


                                                    </React.Fragment>



                                                )}
                                            </Media>
                                        </div>

                                    </div>





                                </div>


                            </div>
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
export default withController(Injection);