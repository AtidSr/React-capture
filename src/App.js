import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
import AboutUs from './pages/AboutUs'
import ContractUs from './pages/ContractUs'
import OurWork from './pages/OurWorks'
import MovieDetail from './pages/MovieDetail'
import {Switch, Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import ScrollTop from './components/ScrollTop'

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      <ScrollTop/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
