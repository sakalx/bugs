import React, {useEffect, useRef} from 'react';

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

const renderContent = (page) => {
  const pages = {
    'About': <AboutPage/>,
    'Contact': <ContactPage/>,
    'Education': <EducationPage/>,
    'Experience': <ExperiencePage/>,
    'Skills': <SkillsPage/>,
    'Accomplishments': <AccomplishmentsPage/>,
  };

  return pages[page.active] || pages[page.cache];
};

function Overlays({page}) {
  const contentEl = useRef(null);

  useEffect(() => {
    setDocTitle(page.active);
    !page.active && (contentEl.current.scrollTop = 0);
  }, [page.active]);

  return (
      <OverlayEffect
          direction='bottom-left'
          id='overlay-viewport'
          isOpen={!!page.active}
          mainFon='var(--background-color)'
          secondaryFon='#e5e5e5'
          style={{position: 'relative'}}
      >
        <WrapContent ref={contentEl}>
          {renderContent(page)}
        </WrapContent>

        {!isMobile && <MouseTrail/>}
      </OverlayEffect>
  );
}

const mapStateToProps = ({page}) => ({
  page,
});

export default connect(mapStateToProps, null)(Overlays);