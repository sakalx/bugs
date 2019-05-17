import styled from 'styled-components';

import SvgIcon from 'root/components/SvgIcon';

export const Wrap = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const WrapTitle = styled('header')`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
`;

export const Title = styled('h2')`
  margin: 0;
`;

export const Icon = styled(SvgIcon)`
  flex: 0 0 8vmin;
  height: 8vmin;
  margin: 0 8px;
  width: 8vmin;
`;