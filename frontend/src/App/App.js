import React from 'react'
import GlobalStyle from '../styles/global'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Index from '../Components/HeroSection'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Employee from '../Components/Employee/Employee'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/employee' component={Employee} />
          <Route exact path='/' component={Index} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App
