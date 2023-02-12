import styled from 'styled-components';
import { size } from 'styles/variable';
import Star169 from '../../../public/icons/star-169.svg';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: white;
  overflow: hidden;
  background-color: #0f0223;
  @media screen and (max-width: ${size.mobile}) {
  }
`;

export const Article = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  height: 80vh;

  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
    flex-direction: column;
    height: auto;
  }
`;

export const TextWrapper = styled.div`
  width: 420px;
  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
  }
`;

export const sectionTitle = styled.h2`
  color: #ffffff;
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 40px;
  line-height: 150%;
  letter-spacing: -0.02em;
  word-break: keep-all;
  font-family: 'Poppins';

  @media screen and (max-width: ${size.mobile}) {
    font-size: 28px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
`;

export const sectionText = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.02em;
  word-break: keep-all;
  font-family: 'Spoqa Han Sans';

  @media screen and (max-width: ${size.mobile}) {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ArticleContent = styled.div`
  position: relative;
  overflow: visible;
  width: 450px;
  height: 300px;

  @media screen and (max-width: ${size.mobile}) {
    margin-top: 100px;
    width: 100%;
  }
`;

export const PinkBall = styled.div`
  position: absolute;
  left: -30px;
  top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 181px;
  height: 181px;
  background-color: #ff04c8;
  border-radius: 100%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 32px;
  letter-spacing: -0.02em;
  animation: bounce 2s infinite;
  animation-delay: 2s;
  @keyframes bounce {
    0% {
      transform: translate3d(-30px, -50px, 0);
    }
    50% {
      transform: translate3d(-30px, -54px, 0);
    }
    100% {
      transform: translate3d(-30px, -50px, 0);
    }
  }

  @media screen and (max-width: ${size.tabletS}) {
    top: 70px;
    left: 60px;
    width: 131px;
    height: 131px;
    font-size: 23px;
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 85px;
    height: 85px;
    left: 80px;
    top: 0px;
    font-size: 15px;
  }
`;

export const GreyBall = styled(PinkBall)`
  top: 40px;
  left: 90px;
  background-color: #262626;
  animation: bounce 2s infinite;
  animation-delay: 2.5s;

  @media screen and (max-width: ${size.tabletS}) {
    top: 120px;

    left: 150px;
  }

  @media screen and (max-width: ${size.mobile}) {
    left: 150px;
    top: 17px;
  }
`;

export const BlueBall = styled(PinkBall)`
  display: block;
  position: relative;
  top: 120px;
  left: 150px;
  width: 410px;
  height: 205px;
  text-align: center;
  background-color: #5200ff;
  transform: rotate(-46.45deg);
  border-radius: 0px 0px 205px 205px;
  animation: none;

  @media screen and (max-width: ${size.tabletS}) {
    width: 298px;
    height: 146px;
    top: 160px;
    left: 160px;
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 205px;
    height: 102px;
    top: 30px;
    left: 160px;
  }
`;

export const DoughnutBall = styled(PinkBall)`
  top: -1px;
  left: 100px;
  width: 205px;
  height: 102.5px;
  background-color: #0f0223;
  margin: 0 auto;
  border-radius: 0px 0px 102.5px 102.5px;
  animation: none;

  @media screen and (max-width: ${size.tabletS}) {
    left: 78px;
    width: 145px;
    height: 72px;
  }

  @media screen and (max-width: ${size.mobile}) {
    left: 55px;
    width: 105px;
    height: 52px;
  }
`;

export const SaveLinkText = styled.div`
  transform: translate(0, 400%);
`;

export const GreenClip = styled.img`
  width: 35%;
  transform: translate(50%, -60%) rotate(50deg);
  animation: green-bounce 2s infinite;
  animation-delay: 2s;
  @keyframes green-bounce {
    0% {
      transform: translate(50%, -60%) rotate(50deg);
    }
    50% {
      transform: translate(50%, -65%) rotate(50deg);
    }
    100% {
      transform: translate(50%, -60%) rotate(50deg);
    }
  }
`;

export const PinkClip = styled.img`
  width: 35%;
  transform: translate(0%, -40%) rotate(40deg);
  animation: pink-bounce 2s infinite;
  animation-delay: 2.5s;
  @keyframes pink-bounce {
    0% {
      transform: translate(0%, -40%) rotate(40deg);
    }
    50% {
      transform: translate(0%, -45%) rotate(40deg);
    }
    100% {
      transform: translate(0%, -40%) rotate(40deg);
    }
  }
`;

export const GreyClip = styled.img`
  width: 25%;
  transform: translate(-80%, -50%) rotate(30deg);
  animation: grey-bounce 2s infinite;
  animation-delay: 1s;
  @keyframes grey-bounce {
    0% {
      transform: translate(-80%, -50%) rotate(30deg);
    }
    50% {
      transform: translate(-80%, -55%) rotate(30deg);
    }
    100% {
      transform: translate(-80%, -50%) rotate(30deg);
    }
  }
`;

export const SolidLine = styled.div`
  position: absolute;
  top: -40px;
  left: -50px;
  width: 545px;
  height: 405px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  transform: rotate(-15deg);

  @media screen and (max-width: ${size.tabletS}) {
    left: 10px;
    width: 400px;
    height: 300px;
  }

  @media screen and (max-width: ${size.mobile}) {
    position: relative;
    top: 0;
    left: 20px;
    width: 90%;
    height: 90%;
  }
`;

export const DottedLine = styled(SolidLine)`
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px dashed #ffffff;

  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
    height: 100%;
  }
`;

export const Star = styled(Star169)`
  position: absolute;
  top: 30px;
  left: 460px;
  width: 30px;
  height: 30px;

  @media screen and (max-width: ${size.tabletS}) {
    width: 21px;
    height: 21px;
    left: 320px;
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 21px;
    height: 21px;
    left: 320px;
  }
`;

export const GemBox = styled.div`
  @media screen and (max-width: ${size.mobile}) {
    position: absolute;
    top: 0;
  }
`;

export const BlackGem = styled.img`
  position: absolute;
  top: 20px;
  left: 90px;
  z-index: 1;
  width: 150px;
  animation: black-gem-bounce 2s infinite;
  animation-delay: 1s;
  @keyframes black-gem-bounce {
    0% {
      top: 20px;
      left: 90px;
    }
    50% {
      top: 0px;
      left: 90px;
    }
    100% {
      top: 20px;
      left: 90px;
    }
  }

  @media screen and (max-width: ${size.tabletS}) {
    width: 110px;

    @keyframes black-gem-bounce {
      0% {
        top: 20px;
        left: 110px;
      }
      50% {
        top: 0px;
        left: 110px;
      }
      100% {
        top: 20px;
        left: 110px;
      }
    }
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 76px;
    @keyframes black-gem-bounce {
      0% {
        top: 50px;
        left: 130px;
      }
      50% {
        top: 40px;
        left: 130px;
      }
      100% {
        top: 50px;
        left: 130px;
      }
    }
  }
`;

export const GreenGem = styled.img`
  position: absolute;
  top: 0px;
  left: 210px;
  width: 182px;
  animation: green-gem-bounce 2s infinite;
  animation-delay: 2s;
  @keyframes green-gem-bounce {
    0% {
      top: 0px;
      left: 210px;
    }
    50% {
      top: -20px;
      left: 210px;
    }
    100% {
      top: 0px;
      left: 210px;
    }
  }
  @media screen and (max-width: ${size.tabletS}) {
    width: 110px;
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 76px;

    @keyframes green-gem-bounce {
      0% {
        top: 50px;
        left: 200px;
      }
      50% {
        top: 40px;
        left: 200px;
      }
      100% {
        top: 50px;
        left: 200px;
      }
    }
  }
`;

export const YellowGem = styled.img`
  position: absolute;
  top: 140px;
  left: 50px;
  width: 182px;
  animation: yellow-gem-bounce 2s infinite;
  animation-delay: 1.6s;
  @keyframes yellow-gem-bounce {
    0% {
      top: 140px;
      left: 50px;
    }
    50% {
      top: 120px;
      left: 50px;
    }
    100% {
      top: 140px;
      left: 50px;
    }
  }

  @media screen and (max-width: ${size.tabletS}) {
    width: 110px;

    @keyframes yellow-gem-bounce {
      0% {
        top: 110px;
        left: 90px;
      }
      50% {
        top: 90px;
        left: 90px;
      }
      100% {
        top: 110px;
        left: 90px;
      }
    }
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 76px;
    @keyframes yellow-gem-bounce {
      0% {
        top: 120px;
        left: 120px;
      }
      50% {
        top: 100px;
        left: 120px;
      }
      100% {
        top: 120px;
        left: 120px;
      }
    }
  }
`;

export const PinkGem = styled.img`
  position: absolute;
  top: 150px;
  left: 240px;
  width: 161px;
  animation: pink-gem-bounce 2s infinite;
  animation-delay: 1.3s;
  @keyframes pink-gem-bounce {
    0% {
      top: 150px;
      left: 240px;
    }
    50% {
      top: 130px;
      left: 240px;
    }
    100% {
      top: 150px;
      left: 240px;
    }
  }

  @media screen and (max-width: ${size.tabletS}) {
    width: 110px;
    animation: pink-gem-bounce 2s infinite;
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 76px;
  }

  @keyframes pink-gem-bounce {
    0% {
      top: 110px;
      left: 200px;
    }
    50% {
      top: 130px;
      left: 200px;
    }
    100% {
      top: 110px;
      left: 200px;
    }
  }
`;

export const Memo = styled.img`
  position: absolute;
  width: 320px;
  left: 180px;
  animation: aaa-bounce 2s infinite;
  animation-delay: 1.5s;
  @keyframes aaa-bounce {
    0% {
      top: 0%;
      right: 0%;
    }
    50% {
      top: 5%;
      right: 0%;
    }
    100% {
      top: 0%;
      right: 0%;
    }
  }

  @media screen and (max-width: ${size.tabletS}) {
    width: 222px;
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 168px;
  }
`;

export const Clock = styled.img`
  position: absolute;
  left: -50px;
  z-index: 1;
  width: 281px;
  animation: clock-bounce 2s infinite;
  animation-delay: 1s;
  @keyframes clock-bounce {
    0% {
      top: 0%;
      right: 0%;
    }
    50% {
      top: 5%;
      right: 0%;
    }
    100% {
      top: 0%;
      right: 0%;
    }
  }

  @media screen and (max-width: ${size.tabletS}) {
    width: 185px;
    left: 60px;
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 140px;
    left: 60px;
  }
`;
