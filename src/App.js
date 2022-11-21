import './App.css';
import ContactUs from './components/ContactUs';
import FirstCarousel from './components/FirstCarousel';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SecondCarousel from './components/SecondCarousel';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
  <>
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<div>
                <h2>Welcome to My Photography World</h2>
                  <div className='container ashu' style={{display:"flex",
                    justifyContent:"center",flexDirection:"column"}} ><FirstCarousel className="flexItems"/>
                  <h2 className="flexItems">Some Random Shots</h2>
                    <div className="flexItems" style={{marginTop:"25px"}}>
                      <SecondCarousel className="flexItems test" />
                    </div>
                  </div>
              </div>}>
          </Route>
          <Route path="/contact" element={<ContactUs  />}>
          </Route>
        </Routes>
      <Footer  />
    </Router>
  </>
  );
}

export default App;