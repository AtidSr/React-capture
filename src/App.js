import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
import AboutUs from './pages/AboutUs'
import ContractUs from './pages/ContractUs'
import OurWork from './pages/OurWorks'
import MovieDetail from './pages/MovieDetail'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch>
        <Route path="/" exact>
          <AboutUs/>
        </Route>
        <Route path="/work" exact>
          <OurWork/>
        </Route>
        <Route path="/work/:id">
          <MovieDetail/>
        </Route>
        <Route path="/contract">
          <ContractUs/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
