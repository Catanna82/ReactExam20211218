import Header from './components/Header';
import Home from './components/Home';
import About from './components/about/About';
import Works from './components/Works';
import Partners from './components/teamAndPartners/Partners';
import HighlightInfo from './components/HighlightInfo'
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import BlueimpGallery from './components/BlueimpGallery';

function App() {
  return (
    <div classNameName="App">
      <div className="topbar animated fadeInLeftBig"></div>
      <Header />
      <Home />
      <About />
      <Works />
      <Partners />
      <HighlightInfo />
      <Contacts />
      <Footer />
      <a href="#home" className="gototop "><i className="fa fa-angle-up  fa-3x"></i></a>
     <BlueimpGallery />
    </div>
  );
}

export default App;
