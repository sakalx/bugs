import React from 'react';

import {connect} from 'react-redux';
import {showPage} from 'root/redux-core/actions/page';

import rotateCube from 'root/utils/rotate-cube';

import SvgIcon from 'root/components/SvgIcon';

import {WrapItem} from './style';

const Item = ({title, showPage}) => {

  const handleShowPage = () => {
    showPage(title);
  };

  const handleHover = () => {
    switch (title) {
      case 'About':
        rotateCube('0deg', '0deg');
        break;
      case 'Education':
        rotateCube('-90deg', '360deg');
        break;
      case 'Experience':
        rotateCube('90deg', '0deg');
        break;
      case 'Skills':
        rotateCube('360deg', '-90deg');
        break;
      case 'Accomplishments':
        rotateCube('360deg', '90deg');
        break;
      case 'Contact':
        rotateCube('180deg', '360deg');
        break;
      default:
        rotateCube('0deg', '0deg');
    }
  };

  return (
      <WrapItem
          onMouseEnter={handleHover}
          onClick={handleShowPage}
      >
        <SvgIcon color='var(--secondary-color)' id={`icon-${title}`}/>
        <span>{title}</span>
      </WrapItem>
  );
};

const mapDispatchToProps = {
  showPage,
};

export default connect(null, mapDispatchToProps)(Item);
