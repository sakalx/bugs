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

    (page.active)
        ? showPage(null)
        : showPage(target.dataset.page);

    isClick = false;
  };

  return (
      <Wrap
          style={{ outline: 'none'}}
          data-page={label}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
      >
        <Title>{label}</Title>
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