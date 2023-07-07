import './App.css';
import Siderbar from './components/Sidebar';
import Home from './screens/Home/';

function App() {
  return (
    <div className="AppContainer">
      <Siderbar />
      <Home />
    </div>
  );
}

export default App;
