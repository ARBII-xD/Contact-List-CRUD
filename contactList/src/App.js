import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Header from './containers/Header'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'  
import AddUser from './containers/AddUser'
import EditUser from './containers/EditUser'
import NotFound from './containers/NotFound'
import Footer from './containers/Footer'
import ViewUser from './containers/ViewUser';




function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/users/view/:id' component={ViewUser} />
        <Route exact path='/users/add' component={AddUser} />
        <Route exact path='/users/edit/:id' component={EditUser} />
        <Route  component={NotFound} />
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
