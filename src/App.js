import logo from './logo.svg';
import './App.css';
// IMAGES
import linesleft from './images/linesleft.png'
import linesright from './images/linesleft.png'
import lamp1 from './images/lamp1.png'
import lamp2 from './images/lamp2.png'
import house from './images/house.png'
import lampline from './images/lampline.png'
import textline from './images/textline.png'
import arrow from './images/arrow.png'

function App() {
  return (
    <div className="App">

      <img src={linesleft} alt="" className="linesleft" />
      <img src={linesright} alt="" className="linesright" />

      



      <div className="MainContainer">

        <nav>
          <div className="logodiv">
            <h3>ArchStudio.</h3>
            <img src={lamp1} alt="" className="lamp1" />
            <img src={lamp2} alt="" className="lamp2" />
            <img src={lampline} alt="" className="lampline" />
          </div>
          <div className="navbtns">
            <p>Expertise</p>
            <p>Portfolio</p>
            <p>About</p>
            <p>Blog</p>
          </div>
          <div className="contactBTN">Contact Us</div>
        </nav>

        <div className="mainmid">

          <div className="leftside">
            <div className="leftsideH1div">
              <h1>We Help To Build Your Dreams.</h1>
              <img src={textline} alt="" className="textline" />
            </div>
            <p>We research, create and build workplaces with the fusion
              of design, technology and innovation. Let our interior
              architecture team help you create a better business.
            </p>
            <div className="leftmid">
              <button className='requestBTN'>Request a Project</button>
              <div className="playdiv">
                <div className="playcircle">
                  <span className="material-symbols-outlined" style={{ color: '#3755EE' }}>
                    play_arrow
                  </span>
                </div>
                <p style={{ color: 'black', fontWeight: '600' }}>Watch a Promo</p>
              </div>
            </div>

            <div className="leftbottom">
              <div className="leftbottombox1">
                <h4>800+</h4>
                <p>Happy customers</p>
              </div>
              <div className="leftbottombox2">
                <h4>10+</h4>
                <p>Years of experience</p>
              </div>
              <div className="leftbottombox3">
                <h4>120+</h4>
                <p>Award winning</p>
              </div>
            </div>


          </div>

          <div className="rightside">
            <img src={house} alt="" className='house' />
            <img src={arrow} alt="" className="arrow" />
          </div>
        </div>



      </div>


    </div>
  );
}

export default App;
