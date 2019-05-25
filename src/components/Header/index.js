import React from 'react';

import {connect} from 'react-redux';

import {Icon, Title, Wrap} from './style';

function Header({title, page}) {
  return (
      <Wrap>
        <Icon color='#6f6f6f' id={`icon-${page.active}`}/>
        <Title>{title}</Title>
      </Wrap>
  );
}

const mapStateToProps = ({page}) => ({
  page,
});

export default connect(mapStateToProps, null)(Header);
