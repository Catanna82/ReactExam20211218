import { Route, Switch } from 'react-router-dom';
import { getFetch, postFetch } from './services/dbServices';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Works from './components/Works/Works';
import Partners from './components/TeamAndPartners/Partners';
import HighlightInfo from './components/HighlightInfo/HighlightInfo'
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import BlueimpGallery from './components/BlueimpGallery/BlueimpGallery';
import Login from './components/LoginRegister/Login';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PhotoAlbums from './components/PhotoAlbums/PhotoAlbums';
import Album from './components/Album/Album';
import AddComment from './components/AddComment/AddComment';
import AddAlbum from './components/Admin/AddAlbum';
import AuthContext from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';
import AlbumPreview from './components/AlbumPreview/AlbumPreview';
import User from './components/User/User';
import UserPhotosDownload from './components/UserPhotosDownload/UserPhotosDownload';
import EditComments from './components/EditComments/EditComments';
import Logo from './components/Logo/Logo';
import Comments from './components/Comments/Comments';
import Studio from './components/Studio/Studio';
import Messages from './components/Messages/Messages';

const initialAuthState = {
  userId: null,
  isAdmin: false,
};

function App() {
  const [user, setUser] = useLocalStorage('user', initialAuthState);

  const login = (authData) => {
    setUser(authData);
  }

  const logout = () => {
    setUser(initialAuthState);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
            <Login postFetch={postFetch} />
            <Footer />
          </Route>
          <Route path='/allAlbums'>
            <PhotoAlbums getFetch={getFetch} />
            <Footer />
          </Route>
          <Route path='/album'>
            <Logo />
            <Album />
            <Footer />
          </Route>
          <Route path='/selectedAlbum'>
            <AlbumPreview />
            <Footer />
          </Route>
          <Route path='/addAlbum'>
            <AddAlbum postFetch={postFetch} getFetch={getFetch} />
            <Footer />
          </Route>
          <Route path='/messages'>
            <Messages />
            <Footer />
          </Route>
          <Route path='/user'>
            <User getFetch={getFetch} postFetch={postFetch} />
            <Footer />
          </Route>
          <Route path='/userPhotosDownload'>
            <UserPhotosDownload />
            <Footer />
          </Route>
          <Route path='/studio'>
            <Studio />
            <Footer />
          </Route>
          <Route path='/editComment'>
            <EditComments />
            <Footer />
          </Route>
          <Route path='/myComments'>
            <Comments postFetch={postFetch} getFetch={getFetch} userId={user.userID}/>
            <Footer />
          </Route>
          <Route path='/pendingComments'>
            <Comments postFetch={postFetch} getFetch={getFetch} status={'pending'}/>
            <Footer />
          </Route>
          <Route path='/rejectedComments'>
            <Comments postFetch={postFetch} getFetch={getFetch} status={'rejected'}/>
            <Footer />
          </Route>
          <Route path='/addComments'>
            <AddComment postFetch={postFetch} getFetch={getFetch} status={'approved'}/>
            <Footer />
          </Route>
          <Route path='/*' component={ErrorPage} />
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
