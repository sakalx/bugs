import React from 'react';

import {connect} from 'react-redux';

import {Icon, Title, Wrap} from './style';

function Header({title, page}) {
  return (
      <Wrap role='heading' aria-labelledby={page.active}>
        <Title aria-labelledby={title}>{title}</Title>
        <Icon id={`icon-${page.active}`}/>
      </Wrap>
  );
}

const mapStateToProps = ({page}) => ({
  page,
});

export default connect(mapStateToProps, null)(Header);
