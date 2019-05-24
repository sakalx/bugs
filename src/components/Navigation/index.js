import React from 'react';

import rotateCube from 'root/utils/rotate-cube';

import Item from './Item';
import {Nav} from './style';

function Navigation() {
  let preX = 0;
  let preY = 0;

  const handleHover = () => {
    const cube = document.getElementById('-cube-viewport');
    const style = getComputedStyle(cube);
    preX = style.getPropertyValue('--x');
    preY = style.getPropertyValue('--y');
  };

  const handleHoverOut = () => {
    rotateCube(preX, preY);
  };

  return (
      <Nav onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
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