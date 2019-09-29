import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import {  withController } from 'react-scroll-parallax';
import { Row,  } from 'react-bootstrap';
import {  Button,  TextInput,Dialog, Pane, FilePicker } from 'evergreen-ui';
import Component from '@reactions/component';


import '@brainhubeu/react-carousel/lib/style.css';
import host from '../../assets/js/Host';

import axios from 'axios';
import { Redirect} from 'react-router-dom';
import Lottie from 'lottie-react-web'
import animation from '../../assets/json/heart.json';


import { ToastContainer, toast } from 'react-toastify';


class Allenjection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          file:[],
          name:'',
          type:'',
          name1:''
        }

    }



    add() {

     
      let formData = new FormData();

      const token =localStorage.getItem('token')
      var headers = {
        "Content-Type": "application/json",
        Authorization: token
        };
  
        formData.append("type", "type2");
        formData.append("name",this.state.name);
        formData.append("file",this.state.file);
    
    
        axios({
          url: host + `category/add`,
          method: "POST",
          data: formData,
          headers: headers
        })
          .then(response => {
            toast.success('Category has been added successfully');
            // this.componentDidMount()
          })
          .catch(function (message) {
            if (message.response.data.message[0].constraints) {
              console.log(message.response.data.message[0].constraints.isNotEmpty)
               this.setState(message.response.data.message[0].constraints.isNotEmpty)
           
               toast.error((message.response.data.message[0].constraints.isNotEmpty), );
            } else {
              console.log(message.response.data.message)
              toast.error((message.response.data.message),);
            }
        
        });
    
      }


      edit(id) {

        let formData = new FormData();

        const token =localStorage.getItem('token')
        var headers = {
          "Content-Type": "application/json",
          Authorization: token
        };
        formData.append("type","type2");
        formData.append("name",this.state.name1);
        // formData.append("file", this.state.file);
    
        // formData.append("file", file);
        axios({
          url: host + `category/${id}`,
    
          method: "PUT",
          data: formData,
          headers: headers
        })
          .then(response => {
            toast.success('Category has been Edit successfully');
            // this.componentDidMount()
          })
          .catch(function (message) {
            // if (message.response.data.message.constraints) {
            //   console.log(message.response.data.message.constraints.isNotEmpty)
              //  this.setState(message.response.data.message.constraints.isNotEmpty)
           
            //    toast.error((message.response.data.message.constraints.isNotEmpty), );
            // } else {
            //   console.log(message.response.data.message)
            //   toast.error((message.response.data.message),);
            // }
        
        });
    
      }
    







    render() {
        return (
            <Context.Consumer>
                {ctx => {
                     if (localStorage.getItem("auth")=== 'lgoin'){
                    return (
                 
                        <div  >
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
                       
                                <Nav2 />

                                <div id='section1_s' style={{marginBottom:'5%'}} >
                                    <Row id='RowOurProdect'>
                                        <p id='OurProdectTitle'>  </p>
                                    </Row>


                                    <div id='OurProdectContinerss'>
                                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',flexDirection:'column' }}  >
                                          
<div id='dash_addcate1' style={{marginBottom:'5%'}} > 

<Component initialState={{ isShown: false }}>
                          {({ state, setState }) => (
                            <Pane >
                              <Dialog
                                isShown={state.isShown}
                                title=" Add New "
                                confirmLabel="Add"
                                onCloseComplete={() => setState({ isShown: false })}
                                onConfirm={() => {
                                  setState({ isShown: false })
                                  this.add() }} 
                                   > 

                                  <div id='dd'>
                                  <div>Name :</div>
                                  <TextInput id='width'
                                    name="text-input-name"
                                    placeholder="name" required
                                    value={this.state.name} onChange={(e) => {
                                      this.setState({ name: e.target.value })
                                    }} />
                                    </div>

                                    <div id='dd'>
                                  <div>Photo :</div>
                                  <FilePicker id='width'
                                    multiple
                                    onChange={files =>
                                      this.setState({ file: files[0], file1: files.length })
                                    }
                                  />
          </div>
  


                              </Dialog>

                              <Button style={{width:'100%',boxShadow:'none',background:'none',color:'#fff',cursor:'pointer'  }} id='butt_eq1' onClick={() => { setState({ isShown: true }) }}>  Add New Category   </Button>
                            </Pane>
                          )}
                        </Component>

 </div>







                                                                {ctx.value.data2.map(((item, i) =>
                                                                <div key={i} style={{width:'80%',height:'50px' }} >
                                                               
                                                                    <div style={{width:'100%',height:'50px',display:'flex',alignItems:'center',justifyContent:'space-between' }}  >
                                                                  <div style={{paddingLeft:'5px'}}id='text_eq11' >   {item.name}  </div>
                                                                  <div style={{  width: '10%',}} >

<Component initialState={{ isShown: false }}>
                          {({ state, setState }) => (
                            <Pane >
                              <Dialog
                                isShown={state.isShown}
                                title=" Edit Category"
                                confirmLabel="edit"
                                onCloseComplete={() => setState({ isShown: false })}
                                onConfirm={() => {
                                  setState({ isShown: false })
                                  this.edit(item.id) }} 
                                   > 

                                  <div id='dd'>
                                  <div>Name :</div>
                                  <TextInput id='width'
                                    name="text-input-name"
                                    placeholder="name" required
                                    value={this.state.name1} onChange={(e) => {
                                      this.setState({ name1: e.target.value })
                                    }} />
                                    </div>

                                    <div id='dd'>
                                  <div>Photo :</div>
                                  <FilePicker id='width'
                                    multiple
                                    onChange={files =>
                                      this.setState({ file: files[0], file1: files.length })
                                    }
                                  />
          </div>
  


                              </Dialog>

                              <Button style={{width:'100%',boxShadow:'none',background:'none',color:'#00bcd1',fontSize:'22px',cursor:'pointer'  }}  onClick={() => { setState({ isShown: true }) }}> <i className="fas fa-edit" style={{color:'#9A281C'}} ></i>  </Button>
                            </Pane>
                          )}
                        </Component>

                                            </div>

                                            <div style={{  width: '10%',}} 
                                           onClick={() => {
                                            window.location.href = `Item1/?id=${item.id}&&name=${item.name}`

                                        }}  >
                                            <i className="fas fa-plus" style={{color:'#9A281C'}}id='trash' ></i></div>

                                                                  </div>
                                                                    
                                                                    
                                                                    
                                                               


                                                                    <div style={{borderBottom:'1px solid #346BAE'}}  >   </div>
                                                                                    </div>
                                                                ))}

                                                     
                                                    


                                       



                                       
                                        </div>

                                    </div>





                                </div>
                           
                        </div>



                    )

                  }

                
                  else if(localStorage.getItem("auth") === 'notlogin'){
                    return (
                      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}  >
<Redirect to='/'></Redirect>
    
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
export default withController(Allenjection);