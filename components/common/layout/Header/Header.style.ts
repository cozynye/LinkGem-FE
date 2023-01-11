import styled from 'styled-components';
import { size } from 'styles/variable';

interface IHeaderContainer {
  login: boolean;
  scrollPosition: number;
}

interface IUrlCategoryItem {
  current: boolean;
}

interface IHeaderLinkSave {
  isLinkSave: boolean;
}

interface ISettingModal {
  isSettingModal: boolean;
}

export const HeaderContainer = styled.header<IHeaderContainer>`
  position: fixed;
  background-color: ${({ login }) => (login ? '#29115B' : '#0f0223')};
  width: 100%;
  height: 11vh;
  height: 84px;
  z-index: 100;
  box-shadow: ${({ scrollPosition }) =>
    scrollPosition > 0 && 'rgba(0, 0, 0, 0.15) 0px 4px 10px'};
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${size.tabletS}) {
    height: 64px;
  }
`;
export const HeaderBox = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 24px;
  @media screen and (max-width: ${size.desktop}) {
    max-width: 100%;
  }
`;

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: white;

  span {
    color: #41fb6a;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;

    /* identical to box height */

    letter-spacing: -0.02em;
  }
`;

export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 60px;
  gap: 30px;
  @media screen and (max-width: 1180px) {
    gap: 20px;
  }
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const Menu = styled.li`
  box-sizing: border-box;
  font-family: 'Poppins';
  font-size: 18px;
  letter-spacing: -0.03em;
  white-space: nowrap;
  color: ${(props: { current: boolean }) =>
    props.current ? '#41FB6A' : '#ffffff'};
  cursor: pointer;
  @media screen and (max-width: 1180px) {
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

export const JoinButton = styled.button`
  width: 520px;
  height: 48px;
  border: none;
  border-radius: 100px;
  background-color: #41fb6a;
  font-size: 18px;
  color: black;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  /* identical to box height */

  letter-spacing: -0.02em;

  @media screen and (max-width: 916px) {
    width: 50px;
    height: 28px;
  }
`;

export const LogoImage = styled.img`
  width: 165px;
  height: 27px;
  @media screen and (max-width: ${size.tabletS}) {
    width: 103px;
    height: 16px;
  }
`;

export const StarImage = styled.div`
  position: absolute;
  left: 30%;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 165px;
  height: 27px;

  @media screen and (max-width: ${size.tabletS}) {
    width: 103px;
    height: 16px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const LinkSaveButton = styled.button`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  background-color: #5200ff;
  border: 0;
  border-radius: 4px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */
  font-family: 'Spoqa Han Sans';
  text-align: center;

  /* text/white */

  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: ${size.tabletS}) {
    display: none;
  }
`;

export const AlarmImage = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 28px;
  display: flex;

  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: ${size.tabletS}) {
    width: 19px;
    height: 21px;
    margin-left: 0px;
    margin-right: 0px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Initial = styled.div`
  display: flex;
  position: relative;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  /* gray/gray2 */

  background: #cecece;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  /* identical to box height */

  letter-spacing: -0.02em;

  /* main/purple */

  color: #29115b;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const UrlCategory = styled.div`
  display: flex;
  margin-left: 5%;
  text-align: center;
  a {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    letter-spacing: -0.03em;
    margin-right: 40px;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
`;

export const SpaceCell = styled.div`
  flex: 1 1 0;
`;

export const UrlCategoryItem = styled.div<IUrlCategoryItem>`
  color: ${({ current }) => (current ? '#41FB6A' : '#FFFFFF')};
`;

export const HeaderLinkSave = styled.div<IHeaderLinkSave>`
  visibility: ${({ isLinkSave }) => (isLinkSave ? 'visible' : 'hidden')};
  width: 420px;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 7px 10px 7px 10px;
  background-color: white;
  margin-right: 20px;

  img {
    padding-right: 5px;
    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: ${size.tabletL}) {
    width: 350px;
  }
  @media screen and (max-width: ${size.tabletS}) {
    display: none;
  }
`;

export const LinkText = styled.input`
  width: 100%;
  height: 22px;
  top: 10px;
  margin-left: 12px;
  border-style: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.02em;
  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #8e8e8e;
  }
`;

export const SettingBox = styled.div`
  position: relative;
  @media screen and (max-width: ${size.tabletS}) {
    display: none;
  }
`;

export const SettingModal = styled.div<ISettingModal>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  top: 55px;
  right: 5px;
  width: 212px;
  height: 113px;
  padding: 13px 16px 0px 16px;

  background: #ffffff;

  z-index: 1;
  /* shadow */
  color: black;
  box-shadow: 0px 4px 10px rgba(78, 78, 78, 0.15);
  border-radius: 8px;
  p {
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;

    &:nth-child(1) {
    }

    &:nth-child(2) {
      img {
        width: 30px;
        height: 30px;
      }
    }
    &:nth-child(4) {
      padding-left: 2px;
      img {
        width: 20px;
        height: 20px;
      }
      &:hover {
        cursor: pointer;
      }
    }
    span {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      /* identical to box height */

      letter-spacing: -0.02em;
    }
  }
  hr {
    border: 1px solid #ededed;
    width: 100%;
    background-color: #cecece;
  }

  animation: 0.7s ${(props) => (props.isSettingModal ? 'showUp' : 'showOut')};

  @keyframes showUp {
    0% {
      transform: translate(0, -10px);
    }
    100% {
      transform: translate(0, 0px);
    }
  }
  @keyframes showOut {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`;

export const AlarmBox = styled.div`
  position: relative;

  margin-left: 26px;
  margin-right: 26px;
  .new-alarm-alert {
    position: absolute;
    top: -5px;
    right: 0;
  }
`;

export const PolygonBox = styled.div`
  position: absolute;
  top: -10px;
  right: 30px;
  img {
    width: 12px;
    height: 12px;
  }
`;

export const PolygonBox2 = styled.div`
  position: absolute;
  top: -10px;
  right: 10px;

  img {
    width: 12px;
    height: 12px;
  }
`;
