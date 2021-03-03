import styled, { css } from 'styled-components';


export  const WrapperCircuitoBackgroud = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  .path {
  animation: draw 14s infinite;
  animation-timing-function: linear;
}

.path-2 {
  animation: draw 14s infinite;
  animation-delay: 1s;
  animation-timing-function: linear;
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
