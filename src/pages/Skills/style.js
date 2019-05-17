import styled from 'styled-components';

import SvgIcon from 'root/components/SvgIcon';

export const Wrap = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Title = styled('header')`
  align-items: center;
  display: flex;
`;

export const Icon = styled(SvgIcon)`
  height: 10vmin;
  margin: 0 8px;
  width: 10vmin;
`;