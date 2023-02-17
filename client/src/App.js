import './component/Navbar';
import './App.css';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
console.log("hit")
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Signup/>
      <h1>Welcome to tournTrack</h1>
      <h2>I am developing this website
      </h2>
    </div>
  );
}

export default App;
