import { useRoutes } from './router';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.scss';
import Navbar from './components/Navbaer/Navbar';
import Alert from './components/Alert/Alert';
import { AlertState } from './context/alert/AlertState';
// import { FirebaseContext } from './context/firebase/FirebaseContext';
import { FirebaseState } from './context/firebase/firebaseState';


function App() {
  const routes = useRoutes()

  return (
    <FirebaseState>
      <AlertState>
        <Router>
          <Navbar/>
          <div className="container">
            <Alert/>
            {routes}
          </div>
        </Router>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
