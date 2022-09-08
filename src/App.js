import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Problems from "./Components/Problems/Problems";
import Features from "./Components/Features/Features";
import Team from "./Components/Team/Team";
import News from "./Components/News/News";
import Blog from "./Components/Blog/Blog";
import Partners from "./Components/Partners/Partners";
import BackToTop from "./Components/BackToTop/BackToTop";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Banner />
        <Problems />
      </div>
      <div className="feature">
        <div className="container">
          <Features />
        </div>
        
      </div>
      <div className="borbottom">
        <div className="container ">
          <Team/>
        </div>
      </div>
      
        <div className="container">
          <News/>
          
        </div>
        <div className="feature">
        <div className="container">
          <Blog />
        </div>
        
      </div>
      <div className="container">
      <Partners/>
      </div>
      
      <BackToTop/>
    </div>
  );
}

export default App;
