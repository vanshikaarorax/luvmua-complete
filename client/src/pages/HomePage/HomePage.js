import React, { useState } from 'react';
import VizSens from 'react-visibility-sensor';
import { Link } from 'react-router-dom';


import mainImg from '../../media/make1.jpg';
import eventImg from '../../media/make2.jpg';
import editorialImg from '../../media/make3.jpg';
import bridalImg from '../../media/make4.jpg';
import './HomePage.scss';
import NavBar from '../../components/NavBar';

function HomePage() {
  const vizOffset = 400;

  // Workaround for react-visibility-sensor bug
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [vizzedOnce1, setVizzedOnce1] = useState(false);
  const [vizzedOnce2, setVizzedOnce2] = useState(false);
  const [vizzedOnce3, setVizzedOnce3] = useState(false);

  const disableAnim1 = () => {
    if (!vizzedOnce1) {
      setVizzedOnce1(true);
      return;
    }
    setIsVisible1(true);
  };

  const disableAnim2 = () => {
    if (!vizzedOnce2) {
      setVizzedOnce2(true);
      return;
    }
    setIsVisible2(true);
  };

  const disableAnim3 = () => {
    if (!vizzedOnce3) {
      setVizzedOnce3(true);
      return;
    }
    setIsVisible3(true);
  };

  return (
    <div className="HomePage" data-testid="HomePage">
     <NavBar/>
      <div className="main-img-container">
        <img className="main-img" src={mainImg} alt="woman with makeup" />
      </div>
      <section className="summaries">
        <VizSens
          offset={{ top: vizOffset }}
          partialVisibility="top"
          onChange={disableAnim1}
          active={!isVisible1}
          delayedCall
        >
          <div className="article-background">
            <article className={`summary-img-text-container ${isVisible1 ? 'fade-in-anim' : ''}`}>
              <div className={`summary-img-container ${isVisible1 ? 'slide-in-rev-anim' : ''}`}>
                <img className="summary-img" src={eventImg} alt="woman with makeup" />
              </div>
              <div className={`long-title ${isVisible1 ? 'slide-in-anim' : ''}`}>
                <h1>EVENTS &#38;</h1>
                <h1>SPECIAL OCCASIONS</h1>
              </div>
            </article>
          </div>
        </VizSens>
        <VizSens
          offset={{ top: vizOffset }}
          partialVisibility="top"
          onChange={disableAnim2}
          active={!isVisible2}
          delayedCall
        >
          <div className="article-background">
            <article className={`summary-img-text-container ${isVisible2 ? 'fade-in-anim' : ''}`}>
              <h1 className={`${isVisible2 ? 'slide-in-rev-anim' : ''}`}>BRIDAL</h1>
              <div className={`summary-img-container ${isVisible2 ? 'slide-in-anim' : ''}`}>
                <img className="summary-img" src={bridalImg} alt="woman with makeup" />
              </div>
            </article>
          </div>
        </VizSens>
        <VizSens
          offset={{ top: vizOffset }}
          partialVisibility="top"
          onChange={disableAnim3}
          active={!isVisible3}
          delayedCall
        >
          <div className="article-background">
            <article className={`summary-img-text-container ${isVisible3 ? 'fade-in-anim' : ''}`}>
              <div className={`summary-img-container ${isVisible3 ? 'slide-in-rev-anim' : ''}`}>
                <img className="summary-img" src={editorialImg} alt="woman with makeup" />
              </div>
              <h1 className={`${isVisible3 ? 'slide-in-anim' : ''}`}>EDITORIAL</h1>
            </article>
          </div>
        </VizSens>
        <div className="article-background call-to-action">
          <h1>BOOKING</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </p>
         
        </div>
      </section>
    </div>
  );
}

export default HomePage;
