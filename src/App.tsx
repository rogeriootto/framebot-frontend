import './App.css';
import Siderbar from './components/Sidebar';
import Home from './screens/Home/';
import AddFrameData from './screens/AddFrameData';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="AppContainer">
        <Siderbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AddFrameData" element={<AddFrameData/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
