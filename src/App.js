import React from "react";
import {Link, Route} from 'react-router-dom'
import Home from "./Home";
import Users from "./Users";
import Posts from "./Posts";
import UsersShow from "./userShow";
import ShowPage from "./showPage";



function App() {
  return (
    <div>
      <><Link to='/'>Home</Link></>{' '}
      <>|</>{' '}
      <><Link to='/Users'>Users</Link></>{' '}
      <>|</>{' '}
      <><Link to='/Posts'>Posts</Link></>

      <Route path="/" component={Home} exact={true}/>
      <Route path="/Users" component={Users} exact={true}/>
      <Route path="/Posts" component={Posts} exact={true}/>
      <Route path='/users/:id' component={UsersShow} exact={true} />
      
      <Route path='/posts/:id' component={ShowPage} />
    </div>
  );
}

export default App;
