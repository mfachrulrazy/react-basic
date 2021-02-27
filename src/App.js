import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import Experiments from './Experiments';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import ContactUs from './ContactUs';


function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/exp">
              <Experiments />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
