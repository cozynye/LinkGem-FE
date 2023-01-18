import styled from 'styled-components';
import { size } from 'styles/variable';

export const LinkContainer = styled.div`
  position: relative;
  /* max-width: 280px; */
  /* max-height: 320px; */
  width: 18rem;

  background: #ffffff;
  /* overflow: hidden; */

  box-shadow: 0px 4px 10px rgba(78, 78, 78, 0.15);
  border-radius: 16px;
  transition: transform 0.35s;
  /* &:hover {
    transform: translateY(-10px);
  } */

  @media screen and (max-width: ${size.tabletL}) {
    width: 100%;
  }

  @media screen and (max-width: ${size.tabletS}) {
    /* max-height: 600px; */
  }

  /* @media screen and (max-width: ${size.mobile}) {
    width: 100%;
    height: 160px;
  } */
`;

export const ImageBox = styled.div<{ isEtcCon: boolean }>`
  border-radius: 16px 16px 0px 0px;
  width: 100%;
  height: 50%;
  overflow: hidden;

  a {
    height: 100%;
    display: block;
  }
  img {
    filter: ${(props) => props.isEtcCon && 'brightness(60%)'};
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: ${size.mobile}) {
    /* width: 200px;
    height: 100px; */
    height: 40%;
  }
`;

export const LinkDetailBox = styled.div<{ isEtcCon: boolean }>`
  position: relative;
  width: 100%;
  height: 50%;
  padding: 20px;
  display: ${(props) => props.isEtcCon && 'none'};

  @media screen and (max-width: ${size.mobile}) {
    display: ${(props) => (props.isEtcCon ? 'none' : 'flex')};
    flex-direction: column;
    justify-content: space-between;
    height: 60%;
    padding: 16px 12px;
  }
`;

export const LinkDetailTitle = styled.div`
  width: 100%;
  height: 24px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #1a1b1d;

  a {
    width: 100%;
    color: #1a1b1d;
    text-decoration: none;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  a:visited {
    color: #1a1b1d;
  }

  @media screen and (max-width: ${size.mobile}) {
    font-size: 14px;
    overflow: visible;
    a {
      white-space: normal;
    }
  }
`;
export const LinkDetailDescription = styled.div`
  width: 100%;
  height: 30%;
  margin-top: 6px;
  margin-bottom: 26px;
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

  /* gray/gray3 */

  color: #3c3c3f;
  a {
    color: #3c3c3f;
    text-decoration: none;

    @media screen and (max-width: ${size.tabletS}) {
      margin-bottom: 18px;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
  a:visited {
    color: #3c3c3f;
  }

  @media screen and (max-width: ${size.tabletS}) {
    height: 50%;
  }

  @media screen and (max-width: ${size.mobile}) {
    display: none;
  }
`;

export const LinkDetailSetting = styled.div<{ gemGrewItem: boolean }>`
  position: absolute;
  bottom: 20px;
  left: 0;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.gemGrewItem && 'end'};

    @media screen and (max-width: ${size.mobile}) {
      gap: 8px;
      justify-content: start;
    }

    svg {
      cursor: pointer;
      @media screen and (max-width: ${size.mobile}) {
        width: 14px;
      }
    }
  }

  @media screen and (max-width: ${size.mobile}) {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    justify-content: start;
  }
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

  @media screen and (max-width: ${size.mobile}) {
    font-size: 12px;
  }
`;

export const LinkDetailSettingOption = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span:hover {
    cursor: pointer;
  }
`;
export const EtcButton = styled.button`
  background: white;
  border: none;
  padding: 0px;
  letter-spacing: 3px;

  &:hover {
    cursor: pointer;
  }
`;

export const LinkEtcBox = styled.div`
  width: 100%;
  padding: 20px;
  height: 50%;
  position: relative;
  /* top: -5px; */
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px -4px 10px rgba(196, 196, 196, 0.15);

  div {
    white-space: nowrap;
  }

  @media screen and (max-width: ${size.tabletS}) {
    /* padding: 0; */
    align-items: center;
  }

  @media screen and (max-width: ${size.mobile}) {
    height: 60%;
  }

  .etc-box {
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
  }
`;

export const LinkEtcButtonBox = styled.div`
  width: 22%;
  display: flex;
  /* width: 80px; */
  flex-direction: column;
  align-items: center;

  span {
    margin-top: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    /* identical to box height, or 17px */

    text-align: center;
    letter-spacing: -0.02em;
  }
`;
export const LinkEtcButton = styled.img`
  width: 32px;
  height: 32px;
  transition: all ease 0.8s;

  &:hover {
    cursor: pointer;
    transform: rotate(-90deg);
  }
`;

export const LinkEtcXButton = styled.img`
  position: absolute;
  top: 20px;
  right: 24px;
  width: 16px;
  height: 16px;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${size.mobile}) {
    top: 8px;
    right: 10px;
  }
`;

export const GemCrewLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #1a1b1d;

  @media screen and (max-width: ${size.mobile}) {
    img {
      width: 18px;
      height: 18px;
    }
  }

  p {
    white-space: nowrap;
  }
`;

export const MemoImage = styled.img`
  margin-left: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
