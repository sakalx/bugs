import React from 'react';

import {connect} from 'react-redux';

import OverlayEffect from 'overlay-reveal-effect';
import Cube from 'root/components/Cube';
import AboutPage from 'root/pages/About';
import AccomplishmentsPage from 'root/pages/Accomplishments';
import ContactPage from 'root/pages/Contact';
import EducationPage from 'root/pages/Education';
import ExperiencePage from 'root/pages/Experience';
import SkillsPage from 'root/pages/Skills';

import {Wrap} from './style';

const App = React.memo(function App({page}) {
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
      <Wrap>
        <Cube/>
        <OverlayEffect isOpen={!!page.active} direction={'bottom-right'}>
          {renderContent()}
        </OverlayEffect>
      </Wrap>
  );
});

const mapStateToProps = ({page}) => ({
  page,
});

export default connect(mapStateToProps, null)(App);