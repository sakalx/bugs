import styled, {css} from 'styled-components';

import SvgIcon from 'root/components/SvgIcon';
import {dash} from 'root/theme/keyframes';

export const Education = styled('div')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5vmin;
  
  ${props => props.rtl && css`
    justify-content: flex-end;
  `};
`;

export const Content = styled('section')`
  @media (max-width: 650px) {
    flex: 1;
  }
`;

export const Icon = styled(SvgIcon)`
  height: 15vmin;
  width: 20vmin;

  // use {
  //   animation: ${dash} 5s cubic-bezier(.17,.67,1,1.23);
  //   stroke-dasharray: 1820;
  // }
`;