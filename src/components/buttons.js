import styled from 'styled-components';

export const PowerButton = styled.div`
  width: 40px;
  height: 15px;
  background: #444;
  border-radius: 2px;
  position: relative;
  &::before {
    left: 0;
    right: 0;
    top: -10px;
    width: 35%;
    height: 5px;
    background: firebrick;
    position: absolute;
    margin: auto;
    content: '';
  }
  &::after {
    left: 0;
    right: 0;
    bottom: -18px;
    font-size: 11px;
    position: absolute;
    text-align: center;
    content: 'POWER';
  }
`;
