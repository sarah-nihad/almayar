import React from 'react';
import Context from './assets/js/Context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from './component/home/home.jsx';
import ScrollToTop from './component/common/scrolToTop';
import './assets/css/home.css';
import './assets/css/test.scss';
import'./assets/css/common.css';
import'./assets/css/ss.css';
import'./assets/css/task.css';
// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import About from './component/home/About';
import Folio from './component/home/Folio';
import Dashbourd from './component/Dashbourd/Dashbourd';
import Contact from './component/home/Contact';
import Category from './component/home/Category';

import Category1 from './component/section/Category1';
import Category2 from './component/section/Category2';
import Item from './component/section/Item';
import Admin from './component/common/Admin';
import Injection from './component/section/Injection';
import Equipment from './component/section/Equipment';
import Allequipment from './component/Dashbourd/Allequipment';
import Allenjection from './component/Dashbourd/Allenjection';
import Item1 from './component/Dashbourd/Item1';
import axios from 'axios';
import host from './assets/js/Host';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
class App extends React.Component {
  constructor(props) {
    super(props);   

    this.state = {
data:[],
data1:[],
data2:[],
pro:[],
auth:''
    }
  }



componentDidMount(){


  if (localStorage.getItem('token')) {
    axios.get(host + 'auth/me', { headers: { Authorization: cookies.get("Authorization") } })
    .then(res => {

    
      console.log(res.data.profile);
      
     
       this.setState({ auth: 'lgoin' })
     console.log(this.state.auth);
  localStorage.setItem('auth','lgoin' )
  
      
    })
    .catch(err => {
      this.setState({ auth: 'notlogin' })
     
      console.log('error:' + err);
    })
  }
 else {
  this.setState({ auth: 'notlogin' })
  localStorage.setItem('auth','notlogin')
  console.log('error:',this.state.auth);
 }





  
  axios.get(host + 'category/',)
  .then(res => {
  // console.log(res.data.categories);
  let data=res.data.categories

  let type1=data.filter(d=>
    d.type==="type1"
    )

    console.log(type1);
    

    this.setState({
      data1:type1
    })
    let type2=data.filter(d=>
      d.type==="type2"
      )
      // console.log(type2);
      
      this.setState({
        data2:type2
      })
   
     
     

  })
  .catch(err => {
    console.log('error:' + err);
  })




}






  render() {
    return (
      <ParallaxProvider>
      <Context.Provider value={{
        value: this.state, action: {
          // ChangeLanguage: (lang) => {
          //   localStorage.setItem('Lang', lang);
          // },

        }
      }}>

        <div className="App">
        
          <BrowserRouter>
          <ScrollToTop>
     
              <Route exact path='/' component={Home} />
              <Route  path='/About' component={About} />
              <Route  path='/Folio' component={Folio} />
              <Route path ='/Contact' component={Contact} />
              <Route path='/Category' component={Category} />
            
              <Route path ='/Equipment' component={Equipment} />
              <Route path ='/Injection' component={Injection} />
              <Route path ='/Category1' component={Category1} />
              <Route path ='/Category2' component={Category2} />
              <Route path ='/Item' component={Item} />
              <Route path ='/Admin' component={Admin} />
              <Route path ='/Dashbourd' component={Dashbourd} />
              <Route path ='/Allequipment' component={Allequipment} />
              <Route path ='/Allenjection' component={Allenjection} />
              <Route path ='/Item1' component={Item1} />
            </ScrollToTop>
           <Switch>
         
           
            </Switch> 
         
          </BrowserRouter>
        </div>
      </Context.Provider>
      </ParallaxProvider>
    );
  }
}

export default App;
