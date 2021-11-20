import Header from './components/Header';
import Home from './components/Home';
import About from './components/about/About';
import Works from './components/works/Works';
import Partners from './components/teamAndPartners/Partners';
import HighlightInfo from './components/HighlightInfo'
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import BlueimpGallery from './components/BlueimpGallery';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './components/loginRegister/Login';
import ErrorPage from './components/errorPage/ErrorPage';

function App() {
  return (
    <div className='App log'>
      <div className='topbar animated fadeInLeftBig'></div>

      <Switch>
        <Route path='/' exact>
          <Header />
          <Home />
          <About />
          <Works />
          <Partners />
          <HighlightInfo />
          <Contacts />
          <a href='#home' className='gototop'><i className='fa fa-angle-up fa-3x'></i></a>
          <BlueimpGallery />
          <Footer />
        </Route>
        <Route path='/login'>
          <Login />
          <Footer />
        </Route>
        <Route path='/*' component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
