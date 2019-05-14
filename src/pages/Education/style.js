import styled, {css} from 'styled-components';

import SvgIcon from 'root/components/SvgIcon';

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
  margin-right: 25px;
  
  @media (max-width: 580px) {
    flex: 1;
    margin-right: 0;
  }
`;

export const Icon = styled(SvgIcon)`
  height: 15vmin;
  width: 20vmin;

`;