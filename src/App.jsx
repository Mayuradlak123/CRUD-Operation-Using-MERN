import React from 'react';
import "./App.css";
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import UserList from './Component/UserList';
import Navbar from './Component/Navbar';
import Adduser from './Component/Adduser';
import UpdateUser from './Component/UpdateUser';
import Footer from './Footer';
import Contact from './Contact';

function App() {
  return (
    <div>
   <Navbar/>
     <BrowserRouter>
     <Switch>
      {/* <Route exact path='/' component={Navbar}/> */}
      <Route exact path='/adduser' component={Adduser}/>
      <Route exact path='/' component={UserList} />
      <Route exact path='/update/:id' component={UpdateUser} />
      <Route exact path='/login' component={SignIn} />
      <Route exact path='/register' component={SignUp} />
      <Route exact path='/contact' component={Contact}/>
     </Switch>
     </BrowserRouter>
     <br /> <br />
   <Footer/>
   </div>
  );
}

export default App;
