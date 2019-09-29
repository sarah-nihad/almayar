import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Context from '../../assets/js/Context';
import {Link} from 'react-router-dom';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div>
                            <Row id='RowFooter'>
                                <Col id='ColFooter' sm={12} lg={5}>
                                <div>   <i className="fas fa-map-marker-alt" id="i2"></i>
        <h6 id="h6"> Address :  </h6> </div>
      <p> Baghdad - Ziyouna / Erbil - Dream city-villa 13 </p>
    

    <div  > <i className='fas fa-phone' id="i2"></i> <h6 id="h6">Mobile :</h6></div> 
      <p>+964 7740809101   +964 7715777758 </p> 
    
      </Col>
                              
                                <Col id='ColFooter' sm={12} lg={4}>    
                                <div>  <i className='fas fa-envelope' id="i2"></i>    <h6 id="h6">Email :</h6></div> 
      <p>info@almayariq.com </p>
      <div> <i className="fa fa-clock-o" id="i2"></i> <h6 id="h6">Work days / Hours : </h6></div>
      <p>Saturday - Thursday 10am to 6pm</p>
      </Col>
                               
                               
                               
                               
                               
                               
                               
                               
                               
                               
                               
                                <Col id='ColFooter' sm={12} lg={3}>
                                    {/* <p>Quick Links</p>
                                    <div style={{ backgroundColor: '#fff', height: 2, width: 120,marginBottom:15 }} /> */}
                                    <p className='QuickLInk'> <Link to='/'> Home </Link>  </p>
                                    <p className='QuickLInk'> <Link to='/About'> About Us  </Link> </p>
                                 
                                    <p className='QuickLInk'> <Link to='/Contact'>  Contact Us  </Link>   </p>
                                    <p className='QuickLInk'>  <Link to='/Folio'> Portfolio </Link>   </p>
                                </Col>
                            </Row>
                            <div id='lineBetweenFooter' />
                            <Row id='RowFooterSecond'>
                                <Col id='ColFooterSecond1' sm={12} md={6}>© 2019 Almayar . All rights reserved  </Col>
                                <Col id='ColFooterSecond2' sm={12} md={6}>
                                    <i className="fab fa-facebook-f" id='IconHomeUP'></i>
                                    <i className="fab fa-twitter" id='IconHomeUP'></i>
                                    <i className="fab fa-instagram" id='IconHomeUP'></i>
                                </Col>
                            </Row>
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default Footer;