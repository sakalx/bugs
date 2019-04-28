import React, {useLayoutEffect, useRef} from 'react';

import {connect} from 'react-redux';

import OverlayEffect from 'overlay-reveal-effect';
import mouseTrail from 'root/utility/mouse-trail';

import Cube from 'root/components/Cube';
import AboutPage from 'root/pages/About';
import AccomplishmentsPage from 'root/pages/Accomplishments';
import ContactPage from 'root/pages/Contact';
import EducationPage from 'root/pages/Education';
import ExperiencePage from 'root/pages/Experience';
import SkillsPage from 'root/pages/Skills';

import {Wrap} from './style';

const App = React.memo(function App({page}) {
  const canvasEl = useRef(null);

  useLayoutEffect(() => {
    const viewport = document.getElementById('overlay-viewport');
    const canvas = canvasEl.current;

    mouseTrail(viewport, canvas);

  }, []);

  const renderContent = () => {
    const pages = {
      'front': <AboutPage/>,
      'back': <ContactPage/>,
      'right': <EducationPage/>,
      'left': <ExperiencePage/>,
      'top': <SkillsPage/>,
      'bottom': <AccomplishmentsPage/>,
    };
    return pages[page.active] || null;
  };


  // TODO render OverlayEffect after this App was rendered
  return (
      <Wrap>
        <Cube/>


        <OverlayEffect
            style={{height: '100%', overflow: 'hidden'}}
            id='overlay-viewport'
            isOpen={!!page.active}
            direction={'bottom-right'}
        >
          {renderContent()}
          <canvas ref={canvasEl} style={{opacity: .1}}/>

        </OverlayEffect>
      </Wrap>
  );
});

const mapStateToProps = ({page}) => ({
  page,
});

export default connect(mapStateToProps, null)(App);