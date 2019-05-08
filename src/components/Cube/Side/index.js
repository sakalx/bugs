import React from 'react';

import {connect} from 'react-redux';
import {showPage} from 'root/redux-core/actions/page';

import {Wrap, Title} from './style';

let isClick = false;

function Side({
                children,
                label,
                page,
                showPage,
              }) {
  const handleMouseDown = () => {
    isClick = true;
    setTimeout(() => isClick = false, 100);
  };

  const handleMouseUp = ({target}) => {
    if (!isClick) return;
    const sideIndex = target.attributes['aria-labelledby'].value;

    (page.active)
        ? showPage(null)
        : showPage(sideIndex);

    isClick = false;
  };

  return (
      <Wrap
          aria-labelledby={label}
          component='section'
          elevation={12}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={e => handleMouseDown(e.changedTouches[0])}
          role='button'
          square
      >
        <Title
            role='heading'
            variant='h6'
            gutterBottom
        >
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

export default connect(mapStateToProps, mapDispatchToProps)(Side);