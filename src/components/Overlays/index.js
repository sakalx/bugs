import React, {useLayoutEffect, useRef, lazy} from 'react';

import {connect} from 'react-redux';


import OverlayEffect from 'overlay-reveal-effect';

//import MouseTrail from 'root/components/MouseTrail';

import AboutPage from './content/About';
//import TweenMax from 'gsap/TweenMax';

//const mouseTrail = lazy(() => import('root/utility/mouse-trail'));

//import mouseTrail from 'root/utility/mouse-trail';

// import ContactPage from 'root/pages/Contact';
// import EducationPage from 'root/pages/Education';
// import ExperiencePage from 'root/pages/Experience';
// import SkillsPage from 'root/pages/Skills';
// import AccomplishmentsPage from 'root/pages/Accomplishments';

//import {} from './style';

const Overlays = React.memo(function Overlays({page}) {
  const canvasEl = useRef(null);

  useLayoutEffect(() => {
    const viewport = document.getElementById('overlay-viewport');
    const canvas = canvasEl.current;

    import('root/utility/mouse-trail')
    .then((module) => {
      module.default(viewport, canvas);
    });


    // (async () => {
    //   const moduleSpecifier = './utils.mjs';
    //   const module = await import(moduleSpecifier)
    //   module.default();
    //
    // })();
  }, []);

  const renderContent = () => {
    const pages = {
      'front': <AboutPage/>,
  /*    'back': <ContactPage/>,
      'right': <EducationPage/>,
      'left': <ExperiencePage/>,
      'top': <SkillsPage/>,
      'bottom': <AccomplishmentsPage/>,*/
    };
    return pages[page.active] || null;
  };

  return (
      <OverlayEffect style={{height: '100%', overflow: 'hidden'}}
                     id='overlay-viewport'
                     isOpen={!!page.active}
                     direction={'bottom-right'}>
        {renderContent()}
        <canvas ref={canvasEl} style={{opacity: .1}}/>
      </OverlayEffect>
  );
});

const mapStateToProps = ({page}) => ({
  page,
});

export default connect(mapStateToProps, null)(Overlays)