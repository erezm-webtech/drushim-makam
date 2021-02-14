import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Highlights from './Components/AutoComplete'
import Jobs from './Components/Jobs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
       <div className="App">
       <Navbar />
       <Highlights />
      <Switch>
        <Route path="/jobs" exact component={Jobs}></Route>
        <Route path="/jobs/:name" component={Jobs}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
