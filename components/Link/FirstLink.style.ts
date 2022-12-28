import styled from 'styled-components';
import { size } from 'styles/variable';

export const LinkContainer = styled.section`
  position: relative;
  /* max-width: 280px; */
  /* max-height: 320px; */
  width: 18rem;

  background: #ffffff;
  overflow: hidden;

  box-shadow: 0px 4px 10px rgba(78, 78, 78, 0.15);
  border-radius: 16px;
  transition: transform 0.35s;
  /* &:hover {
    transform: translateY(-10px);
  } */

  @media screen and (max-width: ${size.tabletL}) {
    max-width: 100%;
    width: 100%;
  }

  @media screen and (max-width: ${size.tabletS}) {
    max-height: 420px;
    height: 420px;
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  height: 50%;
  overflow: hidden;
  border-radius: 16px 16px 0px 0px;
  a {
    display: block;
    width: 100%;
    height: 100%;
    span {
      width: 100% !important;
      height: 100% !important;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const LinkDetailContainer = styled.div`
  position: relative;
  padding: 24px;
  height: 50%;
  a:link {
    color: black;
    text-decoration: none;
  }
  a:visited {
    color: black;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
`;

export const LinkDetailTitle = styled.div`
  width: 100%;
  height: 24px;

  overflow: hidden;
  text-overflow: ellipsis;

  white-space: nowrap;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  /* or 25px */

  letter-spacing: -0.02em;

  /* text/black */

  color: #1a1b1d;
`;
export const LinkDetailDescription = styled.div`
  width: 100%;
  margin-top: 12px;
  padding-bottom: 46px;
  overflow: hidden;
  text-overflow: ellipsis;
  ::-webkit-scrollbar {
    display: none;
  }
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* or 20px */

  letter-spacing: -0.02em;
  color: #616163;
`;
export const LinkDetailSetting = styled.div`
  position: absolute;
  padding: 0px 20px;
  width: 100%;
  left: 0px;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LinkDetailSettingDate = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  letter-spacing: -0.02em;

  /* gray/gray3 */

  color: #3c3c3f;
`;
export const LinkDetailSettingOption = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const EtcButton = styled.button`
  background: white;
  border: none;
  padding: 0px;
  letter-spacing: 3px;
`;

export const FirstLinkTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 97px;
  margin-bottom: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  /* or 28px */

  text-align: center;
  letter-spacing: -0.02em;

  /* text/black */

  color: #1a1b1d;
`;

export const FirstLinkImage = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
