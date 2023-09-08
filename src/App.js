import {Switch, BrowserRouter,Route} from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home'
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path='/home' component={Home} />
        <Route exact path="/" component={Login } />
        <Route  exact path="/signup" component={SignUp} />
      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
