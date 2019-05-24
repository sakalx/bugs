import React from 'react';

import {connect} from 'react-redux';

import {Icon, Title, Wrap} from './style';

function Header({title, page}) {
  return (
      <Wrap role='heading' aria-labelledby={page.active}>
        <Icon color='#6f6f6f' id={`icon-${page.active}`}/>
        <Title aria-labelledby={title}>{title}</Title>
      </Wrap>
  );
}

const mapStateToProps = ({page}) => ({
  page,
});

export default connect(mapStateToProps, null)(Header);
