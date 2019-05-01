import React, {useLayoutEffect, useRef} from 'react';

import {connect} from 'react-redux';

import OverlayEffect from 'overlay-reveal-effect';

import AboutPage from './content/About';
import ContactPage from './content/Contact';
import EducationPage from './content/Education';
import ExperiencePage from './content/Experience';
import SkillsPage from './content/Skills';
import AccomplishmentsPage from './content/Accomplishments';

import {WrapContent} from './style';

const Overlays = React.memo(function Overlays({page}) {
  const canvasEl = useRef(null);

  useLayoutEffect(() => {
    const viewport = document.getElementById('overlay-viewport');
    const canvas = canvasEl.current;

    (async () => {
      const module = await import('root/utils/mouse-trail');
      module.default(viewport, canvas);
    })();
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

  return (
      <OverlayEffect
          style={{height: '100%', overflow: 'hidden'}}
          id='overlay-viewport'
          isOpen={!!page.active}
          direction={'bottom-right'}
      >
        <WrapContent>
          {renderContent()}
        </WrapContent>
        <canvas ref={canvasEl} style={{opacity: .1}}/>
      </OverlayEffect>
  );
});

const mapStateToProps = ({page}) => ({
  page,
});

export default connect(mapStateToProps, null)(Overlays);