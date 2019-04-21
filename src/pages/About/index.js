import React from 'react';

import {connect} from 'react-redux';
import {hidePage} from 'root/redux-core/actions/page';

import Zoom from 'root/components/animation/Zoom';

import {WrapContent} from './style';


// Front Cube
function AboutPage({page, hidePage}) {

  const handleClick = () => {
    hidePage();
  };

  return (
      <Zoom zoomIn={page.active === 'front'}>
        <WrapContent>
          <h5 onClick={handleClick}>BACK</h5>
          <h1>About Page</h1>
        </WrapContent>
      </Zoom>
  );
}

const mapStateToProps = ({page}) => ({
  page,
});

const mapDispatchToProps = {
  hidePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);