import styled from 'styled-components';

import SvgIcon from 'root/components/SvgIcon';
import Link from 'root/components/Link';

export const Item = styled('li')`
  text-align: unset;
`;

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

export const Icon = styled(SvgIcon)`
  height: 30px;
  margin: 0 8px;
  width: 30px;
`;

export const NpmIcon = styled(SvgIcon)`
  height: 20px;
  width: 40px;
`;

export const Languages = styled('footer')`
  margin-bottom: 24px;
  width: 200px;
`;

export const TitleLang = styled('section')`
  align-items: center;
  display: flex;
`;

export const ItemLang = styled('li')`
  display: flex;
`;