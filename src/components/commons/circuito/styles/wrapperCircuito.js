import styled, { css } from 'styled-components';


export  const WrapperCircuito = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  .path {
    animation: draw 20s infinite;
    animation-timing-function: linear;
  }
  .path-01 {
    animation-delay: 0s;
  }
  .path-02 {
    animation-delay: 1s;
  }
  .path-03 {
    animation-delay: 2s;
  }
  .path-04 {
    animation-delay: 3s;
  }
  .path-05 {
    animation-delay: 4s;
  }

  @keyframes draw {
  0% {
  }
  100% {
    stroke-dashoffset: 0;
    stroke-opacity: 1;
  }
}
`;
