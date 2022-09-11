import styled from 'styled-components';

interface IHeaderContainer {
  login: boolean;
}

interface IUrlCategoryItem {
  current: boolean;
}

interface IHeaderLinkSave {
  isLinkSave: boolean;
}

export const HeaderContainer = styled.header<IHeaderContainer>`
  background-color: ${({ login }) => (login ? '#29115B' : '#0f0223')};
  width: 100%;
  height: 10vh;
  max-height: 84px;
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: white;
  margin-left: 240px;
  @media screen and (max-width: 916px) {
    margin-left: 100px;
  }

  span {
    color: #41fb6a;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;

    /* identical to box height */

    letter-spacing: -0.02em;

    @media screen and (max-width: 500px) {
      font-size: 8px;
      color: #41fb6a;
    }
  }
`;

export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  width: 60%;
`;

export const Menu = styled.li`
  box-sizing: border-box;
  padding: 0px 0px 0px 60px;
  font-family: 'Poppins';
  font-size: 18px;
  letter-spacing: -0.03em;
  color: ${(props: { current: boolean }) =>
    props.current ? '#41FB6A' : '#ffffff'};
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-right: 240px;
  @media screen and (max-width: 916px) {
    margin-right: 80px;
  }
`;

export const LoginButton = styled.button`
  width: 70px;
  height: 48px;
  margin-right: 32px;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 16px;
  text-align: right;
  cursor: pointer;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: -0.02em;

  @media screen and (max-width: 916px) {
    width: 50px;
    height: 28px;
  }
`;

export const JoinButton = styled.button`
  width: 120px;
  height: 48px;
  border: none;
  border-radius: 100px;
  background-color: #41fb6a;
  font-size: 18px;
  color: black;
  cursor: pointer;
  font-family: 'Spoqa Han Sans Neo';
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
`;

export const StarImage = styled.div`
  position: absolute;
  left: 30%;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
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

  background: #5200ff;
  border: 0;
  border-radius: 4px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;

  /* text/white */

  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;

export const AlarmImage = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  margin-left: 26px;
  margin-right: 26px;
  display: flex;

  &:hover {
    cursor: pointer;
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

  font-family: 'Spoqa Han Sans Neo';
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
  height: 32px;
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
`;

export const LinkText = styled.input`
  width: 100%;
  height: 22px;
  top: 10px;
  margin-left: 12px;
  border-style: none;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  /* or 22px */
  letter-spacing: -0.02em;
  &:focus {
    outline: none;
  }
`;

export const SettingBox = styled.div`
  position: relative;
`;

export const SettingModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  top: 55px;
  right: 5px;
  width: 180px;
  height: 95px;
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
      img {
        width: 30px;
        height: 30px;
      }
    }
    &:nth-child(3) {
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
      font-family: 'Spoqa Han Sans Neo';
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
`;

export const AlarmBox = styled.div`
  position: relative;
`;

export const AlramModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  top: 50px;
  right: 5px;
  width: 300px;
  padding: 20px 16px 20px 16px;

  background: #ffffff;

  z-index: 1;
  /* shadow */
  color: black;
  box-shadow: 0px 4px 10px rgba(78, 78, 78, 0.15);
  border-radius: 8px;

  hr {
    margin-top: 15px;
    margin-bottom: 10px;
    border: 1px solid #ededed;
    width: 100%;
    background-color: #cecece;
  }
`;
export const AlramContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    /* identical to box height */

    letter-spacing: -0.02em;

    /* text/placeholder */

    color: #8e8e8e;
  }
  p {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* or 150% */

    letter-spacing: -0.02em;

    /* text/black */

    color: #1a1b1d;
  }

  button {
    display: block;
    padding: 8px;
    background: #5200ff;
    border-radius: 4px;
    color: white;
    border-style: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const PolygonBox = styled.div`
  position: absolute;
  top: 40px;

  img {
    width: 12px;
    height: 12px;
  }
`;

export const PolygonBox2 = styled.div`
  position: absolute;
  top: 50px;

  img {
    width: 12px;
    height: 12px;
  }
`;