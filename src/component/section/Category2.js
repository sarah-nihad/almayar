import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import {  withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';

import Footer from '../common/Footer';


import '@brainhubeu/react-carousel/lib/style.css';
import host from '../../assets/js/Host';
import Lottie from 'lottie-react-web'
import animation from '../../assets/json/heart.json';
import axios from 'axios';


class Category2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: []
        }


    }
    handleLoad = () => {
        this.props.parallaxController.update();
    };


    componentDidMount() {

        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('id');


        axios.get(host + `item/category/${myParam}`)

            .then(res1 => {

                this.setState({
                    data1: res1.data.items
                })
                // console.log(res1.data.items)
            })
            .catch(err => {
                console.log('error:' + err);
            })
    }






    render() {
        return (
            <Context.Consumer>
                {ctx => {
                        if (ctx.value.auth ==='lgoin' ||  ctx.value.auth ==='notlogin' ){
                    return (
                        <div id='mainEquContiner_cate'  >
                            <div id='apfot'>
                                <Nav2 />

                                <div id='section1_s'>



                                    <div id='OurProdectContiners1'>

                                        {/* <p id='OurProdectTitle'>Our Products</p> */}
                                        <Row id='RowOurProdect'  style={{marginTop:'5%'}}  >
                                            {this.state.data1.map(((item, i) =>
                                                <Col id='ColOurProdect' key={i} md={6} lg={4} xl={3} onClick={() => {
                                                    window.location.href = `/Item/?id=${item.id}`

                                                }}  >

                                                    <div id='DivOurProdect_cate1' style={{backgroundColor:'#fff'}}   >

                                                        <img id='imgOurProdect_cate' src={host + 'item/files/' + item.cover_photo} alt='img' />
                                                        <p id='para' >{item.name}</p>
                                                    </div>

                                                </Col>
                                            ))}



                                        </Row>
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
export default withController(Category2);