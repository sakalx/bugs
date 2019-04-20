import React from 'react';

import {connect} from 'react-redux';
import {showPage} from 'root/redux-core/actions/page';

import {Wrap, Title} from './style';

let isClick = false;

function CubeSide({
                    index,
                    label,
                    children,
                    showPage,
                  }) {

  const handleMouseDown = () => {
    setTimeout(() => isClick = false, 100);
    isClick = true;
  };

  const handleMouseUp = ({target}) => {
    if (!isClick) return;

    const tabIndex = target.attributes[1].value;
    showPage(tabIndex);
    isClick = false;
  };

  return (
      <Wrap
          /*Keep tab-index as first attribute, for correct handle click*/
          tab-index={index}
          aria-label={`${label}-info`}
          component='section'
          elevation={12}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={e => handleMouseDown(e.changedTouches[0])}
          square
      >
        <Title variant='h6' gutterBottom>
          {label}
        </Title>
        {children}
      </Wrap>
  );
}

const mapStateToProps = ({page}) => ({
  page,
});

const mapDispatchToProps = {
  showPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(CubeSide);