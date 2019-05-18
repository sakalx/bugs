import styled from 'styled-components';

import SvgIcon from 'root/components/SvgIcon';
import Link from 'root/components/Link';

export const WrapLink = styled('div')`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const CodeLink = styled(Link)`
  :hover svg use {
    fill: var(--secondary-color);
  }
`;

export const Item = styled('li')`
  text-align: unset;
`;

export const Icon = styled(SvgIcon)`
  height: 25px;
  width: 25px;
`;