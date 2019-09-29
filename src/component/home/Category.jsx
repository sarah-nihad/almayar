import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';

import Footer from '../common/Footer';
import Lottie from 'lottie-react-web'
import animation from '../../assets/json/heart.json';
class Category extends React.Component {
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
                        <div>
<div id='apfot'>
                            <Nav2 />








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
export default withController(Category);