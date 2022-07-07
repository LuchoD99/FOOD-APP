import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={'/'} component={LandingPage} />
                <Route exact path={'/home'} component={Home} />
                <Route exact path={'/details/:id'} component={Detail} />
            </Switch>
        </div>
    );
}

export default App;
