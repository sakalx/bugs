import styled from 'styled-components';

import Paper from 'root/components/Paper';
import SvgIcon from 'root/components/SvgIcon';

export const Wrap = styled('div')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Column = styled('section')`
  margin: 16px;
`;

export const Card = styled(Paper)`
  padding: 0 12px;
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