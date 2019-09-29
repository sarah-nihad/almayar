import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import {withController } from 'react-scroll-parallax';
import { Row} from 'react-bootstrap';
import {  Button, Textarea, TextInput, Dialog, Pane, FilePicker} from 'evergreen-ui';
import Component from '@reactions/component';


import '@brainhubeu/react-carousel/lib/style.css';
import host from '../../assets/js/Host';

import axios from 'axios';

import Lottie from 'lottie-react-web'
import animation from '../../assets/json/heart.json';


import { ToastContainer, toast } from 'react-toastify';
import { Redirect} from 'react-router-dom';


class Item1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [],
      file1: [],
    cover:[],
    photo1:[],
    photo2:[],
    photo3:[],
    video:[],
      name: '',
      type: '',
      data1: [],
      myParam: '',
      body:'',
      body1:'',
      body2:'',
      body3:'',
      _id:''
      
    }

  }

  componentDidMount() {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');

    this.setState({ myParam })
    axios.get(host + `item/category/${myParam}`)

      .then(res1 => {

        this.setState({
          data1: res1.data.items,
        
        })
        console.log(res1.data.items)
      })
      .catch(err => {
        console.log('error:' + err);
      })
  }


  add() {
    let formData = new FormData();

    const token =localStorage.getItem('token')
    var headers = {
      "Content-Type": "application/json",
      Authorization: token
    };

    formData.append("body", this.state.body);
    formData.append("name", this.state.name);
    formData.append("categoryId", this.state.myParam);
    formData.append("coverImg",this.state.Cover);
    formData.append("video", this.state.video);


    axios({
      url: host + `item/`,
      method: "POST",
      data: formData,
      headers: headers
    })
      .then(response => {

        // toast.success('Equipment has been added successfully');
        // this.componentDidMount()
        this.additem(response.data.id)

      })
      .catch(function (message) {
        if (message.response.data.message[0].constraints) {
          console.log(message.response.data.message[0].constraints.isNotEmpty)
          this.setState(message.response.data.message[0].constraints.isNotEmpty)

          toast.error((message.response.data.message[0].constraints.isNotEmpty));
        } else {
          console.log(message.response.data.message)
          toast.error((message.response.data.message));
        }

      });

  }


  additem(id) {
    console.log(id);
    let formData = new FormData();

    const token =localStorage.getItem('token')
    var headers = {
      "Content-Type": "application/json",
      Authorization: token
    };

    formData.append("body", this.state.body1);
    formData.append("body", this.state.body2);
    formData.append("body", this.state.body3);
    formData.append("file0", this.state.photo1);
    formData.append("file1", this.state.photo2);
    formData.append("file2", this.state.photo3);
    formData.append("itemId",id);


    axios({
      url: host + `imgs/`,
      method: "POST",
      data: formData,
      headers: headers
    })
      .then(response => {
        toast.success('Item has been added successfully');
       

      })
      .catch(function (message) {
        if (message.response.data.message[0].constraints) {
          console.log(message.response.data.message[0].constraints.isNotEmpty)
          this.setState(message.response.data.message[0].constraints.isNotEmpty)

          toast.error((message.response.data.message[0].constraints.isNotEmpty));
        } else {
          console.log(message.response.data.message)
          toast.error((message.response.data.message));
        }

      });

  }







  delete(id) {
    let formData = new FormData();

    const token =localStorage.getItem('token')
    var headers = {
      "Content-Type": "application/json",
      Authorization: token
    };
    axios({
      url: host + `item/${id}`,
      method: "DELETE",
      data: formData,
      headers: headers
    })
      .then(response => {
        toast.success('Item has been deleted successfully');
        this.componentDidMount()

      })
      .catch(function (error) {

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

              <div id='section1_s' style={{ marginBottom: '5%' }} >
                <Row id='RowOurProdect'>
                  <p id='OurProdectTitle'>  </p>
                </Row>


                <div id='OurProdectContinerss'>
                  <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}  >

                    <div id='dash_addcate' style={{ marginBottom: '5%' }} >

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
                                this.add()
                              }}
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
                                <div>text.. :</div>
                                <Textarea id='width'
                                  name="text-input-name"
                                  placeholder="text" required
                                  value={this.state.body} onChange={(e) => {
                                    this.setState({ body: e.target.value })
                                  }} />
                              </div>

                              <div id='dd'>
                                <div>Cover Photo :</div>
                                <FilePicker id='width'
                                  multiple
                                  onChange={files =>
                                    this.setState({ Cover: files[0], file1: files.length })
                                  }
                                />
                              </div>

                              <div id='dd'>
                                <div>Video :</div>
                                <FilePicker id='width'
                                  multiple
                                  onChange={files =>
                                    this.setState({ video: files[0], file: files.length })
                                  }
                                />
                              </div>

                              <div id='dd'>
                                <div> Photo 1:</div>
                                <FilePicker id='width'
                                  multiple
                                  onChange={files =>
                                    this.setState({ photo1: files[0], file: files.length })
                                  }
                                />
                              </div>
                              <div id='dd'>
                                <div>text.. 1:</div>
                                <Textarea id='width'
                                  name="text-input-name"
                                  placeholder="text" required
                                  value={this.state.bod1y} onChange={(e) => {
                                    this.setState({ body1: e.target.value })
                                  }} />
                              </div>

                              <div id='dd'>
                                <div> Photo 2:</div>
                                <FilePicker id='width'
                                  multiple
                                  onChange={files =>
                                    this.setState({ photo2: files[0], file: files.length })
                                  }
                                />
                              </div>
                              <div id='dd'>
                                <div>text.. 2:</div>
                                <Textarea id='width'
                                  name="text-input-name"
                                  placeholder="text" required
                                  value={this.state.body2} onChange={(e) => {
                                    this.setState({ body2: e.target.value })
                                  }} />
                              </div>


                              <div id='dd'>
                                <div> Photo 3:</div>
                                <FilePicker id='width'
                                  multiple
                                  onChange={files =>
                                    this.setState({ photo3: files[0], file: files.length })
                                  }
                                />
                              </div>
                              <div id='dd'>
                                <div>text.. 3:</div>
                                <Textarea id='width'
                                  name="text-input-name"
                                  placeholder="text" required
                                  value={this.state.body3} onChange={(e) => {
                                    this.setState({ body3: e.target.value })
                                  }} />
                              </div>
                            </Dialog>

                            <Button style={{ width: '100%', boxShadow: 'none', background: 'none', color: '#FFF', fontSize: '22px', cursor: 'pointer' }} onClick={() => { setState({ isShown: true }) }}>  Add New Item  </Button>
                          </Pane>
                        )}
                      </Component>

                    </div>







                    {this.state.data1.map(((item, i) =>
                   
                      <div key={i} style={{ width: '80%', height: '50px' }} >

                        <div style={{ width: '100%', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}  >
                          <div style={{ width: '80%', paddingLeft: '5px' }} >   {item.name}  </div>
                          <div style={{ width: '10%', }} >



                          </div>

                          <div style={{ width: '10%', }}
                            onClick={(e) => { this.delete(item.id) }}   >
                            <i className="fas fa-trash-alt" style={{ color: '#9A281C' }} id='trash' ></i></div>

                        </div>






                        <div style={{ borderBottom: '1px solid #346BAE' }}  >   </div>
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
export default withController(Item1);