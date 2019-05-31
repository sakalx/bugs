import styled from 'styled-components';
import SvgIcon from 'root/components/SvgIcon';

export const Wrap = styled('section')`
  align-items: center;
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  transition: transform .3s ease;
  user-select: none;
  
  :hover h3{
    background-position: 0;
  };
`;

export const Title = styled('h4')`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, 
    var(--secondary-color),
    var(--secondary-color) 50%, 
    var(--background-invert-color) 50%);
  background-position: 100%;
  background-size: 200% 100%;
  pointer-events: none;
  text-transform: uppercase;
  transition: background-position 1s cubic-bezier(.32,2,.55,.27);
`;

export const Icon = styled(SvgIcon)`
  height: 23vmin;
  width: 23vmin;
`;