import React from 'react';

import {connect} from 'react-redux';

import OverlayEffect from 'overlay-reveal-effect';

import AboutPage from './content/About';
import ContactPage from './content/Contact';
import EducationPage from './content/Education';
import ExperiencePage from './content/Experience';
import SkillsPage from './content/Skills';
import AccomplishmentsPage from './content/Accomplishments';
import MouseTrail from 'root/components/MouseTrail';

import {WrapContent} from './style';

function Overlays({page}) {

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
          style={{overflow: 'hidden'}}
          id='overlay-viewport'
          isOpen={!!page.active}
          direction={'bottom-right'}
      >
        <WrapContent>
          {renderContent()}
        </WrapContent>
        <MouseTrail/>
      </OverlayEffect>
  );
}

const mapStateToProps = ({page}) => ({
  page,
});

export default connect(mapStateToProps, null)(React.memo(Overlays));