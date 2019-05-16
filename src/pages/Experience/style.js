import styled from 'styled-components';

import SvgIcon from 'root/components/SvgIcon';

export const Company = styled('header')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
`;

export const Info = styled('div')`
  flex: 1 1 120px;
  margin: 0 16px;
  text-align: center;
`;

export const Icon = styled(SvgIcon)`
  height: 10vmin;
  width: 10vmin;
`;