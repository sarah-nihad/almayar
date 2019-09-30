import React,{Component} from 'react'
import {Row,Col} from 'react-bootstrap';
// import {TextInput} from 'evergreen-ui';
import Context from '../../assets/js/Context';
import axios from 'axios';
import host from '../../assets/js/Host';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
const cookies =new Cookies();
 class Admin extends Component{


    
    constructor(props){
        super(props);
    this.state={
    password:'',
    email:''
     
    }}

    login(e) {
        e.preventDefault()
        axios.post(host + `auth/login`, {
          email: this.state.email,
          password: this.state.password
        })
    
          .then(response => {
        
       console.log(response.data.token);
       
              localStorage.setItem('token',response.data.token);
              localStorage.setItem('auth','lgoin')
              cookies.set("Authorization",response.data.token,{
               
                expires:new Date(Date.now() + 60480000),
                path:'/Dashbourd',
              }
              );
              
                  window.location.href = '/Dashbourd'
     
          })
          .catch(function (message) {
              if (message.response.data.message[0].constraints) {
                console.log(message.response.data.message[0].constraints.isNotEmpty)
                // this.setState(message.response.data.message[0].constraints.isNotEmpty)
             
                toast.error((message.response.data.message[0].constraints.isNotEmpty), );
              } else {
                console.log(message.response.data.message)
                toast.error((message.response.data.message),);
              }
          
          });
      }



    render(){
        
        return(
     
          <Context.Consumer>{ctx => {
            return (
            <div style={{height:'100vh'}}>
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
       
              <div id='mahmed'>
            


    <Row style={{marginRight:'0px',width:'80%'}}  id='ahmed_row' >

<Col md={6} id='ahm_col2' >

<img src={require('../../assets/img/log.png')} style={{width:'100%'}} alt='img'   />

</Col>






        <Col xs={12} md={6} id='ahm_col1' >
        <div id='card_a21'  >
<div  id='field1_ah' style={{fontSize:'24px',fontWeight:'400',color:'#005D7F',paddingTop:'3%'}}> Login Your Account</div>



        <div id='field1_ah'>
    
 <input id='width_ah'
  name="text-input-name"
  placeholder="E-mail" 
  required value={this.state.email} onChange={(e)=>{
    this.setState({email:e.target.value})
      }}
/>
</div>


<div id='field1_ah'>
     
 <input id='width_ah'
  name="text-input-name" type='password'
  placeholder=" Password " 
  required value={this.state.password} onChange={(e)=>{
    this.setState({password:e.target.value})
      }}
/>
</div>



       

     
        <div id='log1_ah'>
     <button  id='BtnContactUSHome'   
       onClick={(e) => {
                    this.login(e) }} 
                     > 
 
       Log In 
     
        </button>
   
     </div>  </div>
  
        </Col>
    </Row>
</div>

</div>


         

)
}}

</Context.Consumer>
        );
        
    }
}
export default Admin;