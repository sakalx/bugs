import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export const Wrap = styled(Paper)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  user-select: none;
`;

export const Title = styled(Typography)`
  font-size: calc(12px + 2vmin) !important;
  pointer-events: none;
`;