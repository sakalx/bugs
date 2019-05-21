import React from 'react';

import SvgIcon from 'root/components/SvgIcon';

import {Nav, WrapItem} from './style';

const Item = ({title}) =>
    <WrapItem>
      <SvgIcon color='var(--secondary-color)' id={`icon-${title}`}/>
      <span>{title}</span>
    </WrapItem>;

function Navigation() {
  return (
      <Nav>
        <Item title='About'/>
        <Item title='Education'/>
        <Item title='Experience'/>
        <Item title='Skills'/>
        <Item title='Accomplishments'/>
        <Item title='Contact'/>
      </Nav>
  );
}

export default Navigation;
