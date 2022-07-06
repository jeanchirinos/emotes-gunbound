import { keyframes } from 'styled-components';

export const hello = keyframes`
  50%{
    transform: rotate(30deg);
  }
`;

export const bye = keyframes`
  50%{
    transform: rotate(-30deg);
  }
`;

export const myGod = keyframes`
  50%{
    transform: translateY(-10px);
  }
`;

export const help = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

export const good = keyframes`
  50%{
    transform: scale(1.2);
  }
`;

export const veryGood = keyframes`
  25%{
    transform: scale(0.8);
  }

  50%{
    transform: scale(1);
  }

  75%{
    transform: scale(1.2);
  }
`;

export const goodTry = keyframes`
  25%{
    transform: translateX(-10px);
  }

  50%{
    transform: translateX(0px);
  }

  75%{
    transform: translateX(10px);
  }
`;

export const sorry = keyframes`
  50%{
    transform: translateY(10px);
  }
`;

export const beginner = keyframes`
  50%{
    transform: rotate(180deg);
  }

  100%{
    transform: rotate(360deg);  
  }
`;

export const thanks = keyframes`
  25%{
    transform: rotate(-50deg);
  }

  50%{
    transform: rotate(0deg);
  }

  75%{
    transform: rotate(50deg);
  }
`;
