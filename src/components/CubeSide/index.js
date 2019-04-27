import React from 'react';

import {connect} from 'react-redux';
import {showPage} from 'root/redux-core/actions/page';

import {Wrap, Title} from './style';

let isClick = false;

function CubeSide({
                    children,
                    index,
                    label,
                    page,
                    showPage,
                  }) {
  const handleMouseDown = () => {
    setTimeout(() => isClick = false, 100);
    isClick = true;
  };

  const handleMouseUp = ({target}) => {
    if (!isClick) return;
    const sideIndex = target.attributes['side-index'].value;

    (page.active)
        ? showPage(null)
        : showPage(sideIndex);

    isClick = false;
  };

  return (
      <Wrap
          aria-label={`${label}-info`}
          component='section'
          elevation={12}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={e => handleMouseDown(e.changedTouches[0])}
          square
          side-index={index}
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