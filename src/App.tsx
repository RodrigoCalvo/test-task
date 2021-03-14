import AppState from './context/background/AppState';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import Success from './pages/sucess';
import Send from './pages/send';
import Container from './components/Container';

const App = () => {
  return (
    <AppState>
      <Router>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/success" component={Success} />
            <Route exact path="/send" component={Send} />
          </Switch>
        </Container>
      </Router>
    </AppState>
  );
};

export default App;
