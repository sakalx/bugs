import styled from 'styled-components';

import SvgIcon from 'root/components/SvgIcon';

export const Wrap = styled('header')`
  align-items: center;
  display: flex;
`;

export const Title = styled('h1')`
  flex: 1;
  margin-left: 20vmin;
  text-align: center;
  text-transform: uppercase;
`;

export const Icon = styled(SvgIcon)`
  height: 20vmin;
  width: 20vmin;
`;