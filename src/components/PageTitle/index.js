import React from 'react';

import {connect} from 'react-redux';

import {Icon, Header, Title} from './style';

function PageTitle({title, page}) {
  return (
      <Header role='heading' aria-labelledby={page.active}>
        <Title aria-labelledby={title}>{title}</Title>
        <Icon id={`icon-${page.active}`}/>
      </Header>
  );
}

const mapStateToProps = ({page}) => ({
  page,
});

export default connect(mapStateToProps, null)(PageTitle);
