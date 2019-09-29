import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';

import Footer from '../common/Footer';

import axios from 'axios';
import host from '../../assets/js/Host';
import Lottie from 'lottie-react-web'
import ReactPlayer from 'react-player'
import animation from '../../assets/json/heart.json';
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img1: true,
      img2: true,
      img4: true,
      img3: true,
      data: [],
      data1: [],
      data0: [],
      data2: [],
      photo: ''
    }


  }
  im2() {
    this.setState({
      img2: false,
      img1: true,
      img3: true,
      img4: true,

    })
    document.getElementById("ws").style.display = "none";
    document.getElementById("description_second").style.display = "flex";
    document.getElementById("description_first").style.display = "none";
    document.getElementById("description_third").style.display = "none";
    document.getElementById("description_four").style.display = "none";
  }

  im1() {
    this.setState({
      img1: false,
      img3: true,
      img2: true,
      img4: true,
    })
    document.getElementById("ws").style.display = "none";
    document.getElementById("description_second").style.display = "none";
    document.getElementById("description_first").style.display = "flex";
    document.getElementById("description_third").style.display = "none";
    document.getElementById("description_four").style.display = "none";
  }

  im3() {
    this.setState({
      img3: false,
      img1: true,
      img2: true,
      img4: true,
    })
    document.getElementById("ws").style.display = "none";
    document.getElementById("description_second").style.display = "none";
    document.getElementById("description_first").style.display = "none";
    document.getElementById("description_third").style.display = "flex";
    document.getElementById("description_four").style.display = "none";

  }

  im4() {
    this.setState({
      img4: false,
      img1: true,
      img2: true,
      img3: true,
    })
    document.getElementById("ws").style.display = "none";
    document.getElementById("description_second").style.display = "none";
    document.getElementById("description_first").style.display = "none";
    document.getElementById("description_third").style.display = "none";
    document.getElementById("description_four").style.display = "flex";
  }


  handleLoad = () => {
    this.props.parallaxController.update();
  };

  componentDidMount() {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');


    axios.get(host + `imgs/${myParam}`)

      .then(res1 => {

        this.setState({
          data: res1.data.ItemImg,
          data0: res1.data.ItemImg.itemImg[0],
          data1: res1.data.ItemImg.itemImg[1],
          data2: res1.data.ItemImg.itemImg[2],
        })
        console.log('f0', res1.data.ItemImg.itemImg[0]);
        console.log('f1', res1.data.ItemImg.itemImg[1]);
        console.log('f2', res1.data.ItemImg.itemImg[2]);
        console.log(res1.data.ItemImg);

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
          
            <div style={{backgroundColor:'rgb(245, 245, 245)'}} >
              <div id='apfot'>
                <Nav2 />
                <div id='main_item'   >

                {this.state.data.Video === "NON" ? (

<React.Fragment></React.Fragment>
) : (
                  <Row style={{ marginRight: 0 }} id='item_row1' >


                    <div id='video_main'>

                    
                  
                          <ReactPlayer id='vid_1' width={''} height={''} url={host + 'item/files/' + this.state.data.Video} playsinline={true} controls />
                     
                    </div>



                  </Row>
   )}
                  <Row style={{ marginRight: 0 }}   id='item_row2'>
              <Col  xs={12}  id='Gallery' >


<div className="w3-content" >

<div className="mySlides" id='ws' style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} >

  <img src={host+'item/files/'+this.state.data.cover_photo} id='img_f1' alt='img'  /> 
  
  
    
  </div>
{ this.state.img1=== false ?(
 <div className="mySlides" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} >
 
  <img src={host+'item/files/'+this.state.data.cover_photo} id='img_f1'alt='img'   />  
  </div>
):(
<div></div>
)}

{ this.state.img2=== false ?(
  <div className="mySlides" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} >

   {/* <div style={{backgroundImage:`url('${host+'item/files/'+this.state.data0.photo}')`}}id='img_f1'  >   </div> */}
   <img src={host+'item/files/'+this.state.data0.photo} id='img_f1' alt='img'   />  
   </div>
 ):(
<div></div>
 )}

{ this.state.img3=== false ?(
  <div className="mySlides" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} >

   <img src={host+'item/files/'+this.state.data1.photo} id='img_f1' alt='img'  />   
   </div>
 ):(
<div></div>
 )}

{ this.state.img4=== false ?(
  <div className="mySlides" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} >

   <img src={host+'item/files/'+this.state.data2.photo} id='img_f1' alt='img'  />   
   </div>
 ):(
<div></div>
 )}


  <div className="w3-row-padding w3-section">
    <div className="w3-col s3" id='s31' >
      <img className="demo w3-opacity w3-hover-opacity-off" src={host+'item/files/'+this.state.data.cover_photo}  alt='img' style={{cursor:'pointer'}} id='img_f12' onClick={()=> {this.im1() }} />
    </div>
    <div className="w3-col s3" id='s31' >
   {this.state.data.itemImg< 1 ? (
        <React.Fragment></React.Fragment>
   ):(
  
   <img className="demo w3-opacity w3-hover-opacity-off"  alt='img' src={host+'item/files/'+this.state.data0.photo} style={{cursor:'pointer'}} id='img_f12'  onClick={() => { this.im2() }} />
 

   )}
   
      </div>
  
    <div className="w3-col s3" id='s31' >
    {this.state.data.itemImg< 1 ? (
        <React.Fragment></React.Fragment>
   ):(
  
     <img className="demo w3-opacity w3-hover-opacity-off" alt='img'   src={host+'item/files/'+this.state.data1.photo} style={{cursor:'pointer'}}  id='img_f12' onClick={() => { this.im3() }} />
   )}
    </div>
   
    <div className="w3-col s3" id='s31'  >
    {this.state.data.itemImg< 1 ? (
        <React.Fragment></React.Fragment>
   ):(
  
     <img className="demo w3-opacity w3-hover-opacity-off"  alt='img'  src={host+'item/files/'+this.state.data2.photo} style={{cursor:'pointer'}}  id='img_f12' onClick={() => { this.im4() }} />
   )}
    </div>
</div>
 

 


<div id='description_first'   >

    {this.state.data.body}

</div>
 <div id='description_second'  style={{display:'none'}}  >
  {this.state.data.itemImg<1 || this.state.data0.body===""  ? (
    <React.Fragment></React.Fragment>
  ):(
  <div> 
     {this.state.data0.body} 
     </div>
                    )}

</div>
 <div id='description_third'  style={{display:'none'}}   >
{this.state.data.itemImg<1 || this.state.data1.body==="" ?  (
    <React.Fragment></React.Fragment>
  ):(
  <div>
      {this.state.data1.body}
       </div>
                    )}

</div> 
 <div id='description_four'  style={{display:'none'}}  >
{this.state.data.itemImg<1 || this.state.data2.body===""  ? (
    <React.Fragment></React.Fragment>
  ):(
  <div>
      {this.state.data2.body}
   </div>
                    )}

</div>   


</div>


</Col>

{/* <Col  sm={6}  md={7}  id='col2_desc' >

</Col> */}
 

                    {/* <Carousel
                      autoplay={true}
                      autoplayInterval
                      ={2000}
                      wrapAround={true}
                      renderCenterLeftControls={({ previousSlide }) => (
                        <button onClick={previousSlide} style={{ border: 'none', background: 'none' }}   ><i class="fas fa-angle-left" style={{ fontSize: '25px', color: '#346BAE' }}  ></i></button>
                      )}

                      renderCenterRightControls={({ nextSlide }) => (
                        <button onClick={nextSlide} style={{ border: 'none', background: 'none' }}  ><i class="fas fa-angle-right" style={{ fontSize: '25px', color: '#346BAE' }} ></i></button>
                      )}
                    >

                      <div style={{ width: '100%', maxHeight: '350px', position: 'relative' }}   >
                        <img src={require('../../assets/img/3.jpg')} style={{ width: '100%', maxHeight: '350px', zIndex: '-1', position: 'absolute' }} alt='img' />
                        <div style={{
                          width: '35%', height: '350px', backgroundColor: 'rgba(45, 132, 221,0.7)', position: 'relative',
                          display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }} id='ss_g1' > ssss  </div>
                      </div>
                    </Carousel> */}




                  </Row>


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
export default withController(Item);