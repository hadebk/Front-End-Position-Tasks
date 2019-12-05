import React, {Component} from 'react';
import './Header_style.css';
import Navbar from '../Navbar/Navbar_';
import Slide1 from '../Images/slide-1.jpg'
import Slide2 from '../Images/slide-2.jpg'
import Slide3 from '../Images/slide-3.jpg'

const $ = window.$

class App extends Component {

  componentDidMount() {
  
    $('.carousel').carousel({
      pause:'hover'
    })

    // set position to arrow control of carousel relativ to slogan box
    $(document).ready(function(){
      arrow_position()
    })

    $(window).resize(function(){
      arrow_position()
    })

    function arrow_position(){
      var position = $('.slogan').offset();
      $('.icon-main-box').offset({
        top: (position.top + 25),
        left: (position.left - $('.icon-main-box').width() +10)
      })
    }
    //==================================================================

  }

  render() {
    return (
      <div className="header">
        {/* invok navbar section*/}
        <Navbar/>

        {/* start carousel*/}
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={Slide1} alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={Slide2} alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={Slide3} alt="Third slide"/>
              </div>
          </div>
          {/* controls arrow */}
          <div className="icon-main-box">
            <a className="" href="#carouselExampleControls" role="button" data-slide="prev">
              <div className="icon-box"><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
              <span className="sr-only">Previous</span>
            </a>
            <a className="" href="#carouselExampleControls" role="button" data-slide="next">
            <div className="icon-box"><i className="fa fa-arrow-right" aria-hidden="true"></i></div>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        {/* end carousel*/}

        {/* start slogan box*/}
        <div className="slogan">
          <p>We help both <span> industrial</span></p>
          <p>and <span>digital</span> engineers</p>
          <p><span>Increase</span> revenue</p>
        </div>
        {/* end slogan box*/}

      </div>
    );
  }
}

export default App;
