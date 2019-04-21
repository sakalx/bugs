import styled from 'styled-components';
import cssVar from './css-var';

import Paper from '@material-ui/core/Paper';

const {
  height,
  width,
} = cssVar;

export const Container = styled(Paper)`
  height: var(${height}, 0);
  overflow: hidden;
  position: absolute;
  transition: all .7s ease-out;
  transition-property: width, height;
  width: var(${width}, 0);
`;
