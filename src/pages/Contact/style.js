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

export const Content = styled('section')`
  display: flex;
  flex-direction: column;
  flex: 0 0 185px;
  margin: 16px;
`;

export const Icon = styled(SvgIcon)`
  flex: 0 0 8vmin;
  height: 8vmin;
  margin: 0 8px;
  width: 8vmin;
`;