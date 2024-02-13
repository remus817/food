
import './App.css';
import Navbar from './components/navbar';
import Home from './screens/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './screens/login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/signup';
function App() {
  return (
    <Router>
      <div >
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
      </Routes>
      </div>
    </Router>

  );
}

export default App;
