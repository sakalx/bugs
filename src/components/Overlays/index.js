import React, {useEffect} from 'react';

import {connect} from 'react-redux';

import setDocTitle from 'root/utils/doc-title';

import OverlayEffect from 'overlay-reveal-effect';

import AboutPage from 'root/pages/About';
import ContactPage from 'root/pages/Contact';
import EducationPage from 'root/pages/Education';
import ExperiencePage from 'root/pages/Experience';
import SkillsPage from 'root/pages/Skills';
import AccomplishmentsPage from 'root/pages/Accomplishments';
import MouseTrail from 'root/components/MouseTrail';

import {WrapContent} from './style';

function Overlays({page}) {
  useEffect(() => setDocTitle(page.active), [page.active]);

  const renderContent = () => {
    const pages = {
      'About': <AboutPage/>,
      'Contact': <ContactPage/>,
      'Education': <EducationPage/>,
      'Experience': <ExperiencePage/>,
      'Skills': <SkillsPage/>,
      'Accomplishments': <AccomplishmentsPage/>,
    };

    return pages[page.active] || pages[page.prev];
  };

  return (
      <OverlayEffect
          mainFon='#fff'
          secondaryFon='#ce8fff'
          aria-labelledby='overlay'
          direction={'bottom-right'}
          id='overlay-viewport'
          isOpen={!!page.active}
          style={{position: 'relative'}}
      >
        <WrapContent role='dialog'>
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