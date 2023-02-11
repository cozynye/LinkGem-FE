import styled from 'styled-components';
import { size } from 'styles/variable';

export const Wrapper = styled.main`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 83vh;
  padding-top: 12vh;
  color: white;
  background-color: #0f0223;
`;

export const Title = styled.h1`
  text-align: center;
  color: #41fb6a;
  font-size: 100px;
  letter-spacing: -2%;
  line-height: 100%;

  span {
    color: white;
    font-size: 48px;
  }

  @media screen and (max-width: ${size.mobile}) {
    font-size: 55px;

    span {
      font-size: 28px;
    }
  }
`;

export const TitleRemark = styled.div`
  padding: 30px 0;
  text-align: center;
  font-size: 24px;
  letter-spacing: -2%;
  line-height: 150%;

  @media screen and (max-width: ${size.mobile}) {
    font-size: 16px;
  }
`;

export const MainButton = styled.button`
  width: 260px;
  height: 80px;
  border-radius: 100px;
  background-color: #5200ff;
  outline: none;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -2%;
  z-index: 5;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 188px;
    height: 56px;
    font-size: 16px;
  }
`;
