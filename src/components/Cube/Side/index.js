import React from 'react';

import {connect} from 'react-redux';
import {showPage} from 'root/redux-core/actions/page';

import {Icon, Title, Wrap} from './style';

let isClick = false;

function Side({
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
          data-page={label}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
      >
        <Title>{label}</Title>
        {page.active
            ? <Icon
                color='var(--secondary-color)'
                id='icon-Close'
            />
            : <Icon
                color='var(--background-invert-color)'
                id={`icon-${label}`}
            />
        }
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