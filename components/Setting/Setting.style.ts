import styled from 'styled-components';
import { size } from 'styles/variable';

interface IErrorMessageProps {
  isErrorNickName: boolean;
}

interface ISettingButton {
  bgColor: string;
  color: string;
  width: string;
}

export const SettingContainer = styled.main`
  width: 100%;
  background-color: #faf5ff;
  padding-top: 64px;
  padding-bottom: 160px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.02em;

  padding-left: 24px;
  padding-right: 24px;
  @media screen and (max-width: ${size.mobile}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const SettingInfoContainer = styled.main`
  width: 100%;
`;

export const SettingTitle = styled.section`
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height */

    letter-spacing: -0.02em;

    /* text/black */

    color: #1a1b1d;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    letter-spacing: -0.02em;

    /* gray/gray3 */

    color: #3c3c3f;
  }
`;

export const SettingBasicInfo = styled.section`
  position: relative;

  width: 100%;
  margin-top: 32px;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px;
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    /* identical to box height */

    letter-spacing: -0.02em;

    /* text/black */

    color: #1a1b1d;
  }
  hr {
    margin: 16px 0 0 0;
    border: 0.5px solid #cecece;
    width: 100%;
    background-color: #cecece;
  }
`;

export const SettingLineBox = styled.div`
  position: relative;
  display: flex;
  margin-top: 30px;
  align-items: center;
  gap: 12px;

  @media screen and (max-width: ${size.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SettingCategory = styled.div`
  width: 20%;

  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  white-space: nowrap;

  @media screen and (max-width: ${size.tabletS}) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const SettingNinkName = styled.input<IErrorMessageProps>`
  width: 520px;
  height: 56px;
  display: flex;
  align-items: center;
  text-indent: 12px;
  background-color: #ffffff;
  /* gray/gray2 */

  border: 1px solid;
  border-color: ${(props) => props.isErrorNickName && 'red'};
  border-radius: 8px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.02em;

  @media screen and (max-width: ${size.desktop}) {
    width: 80%;
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
  }
  &:focus {
    outline: ${(props) => (props.isErrorNickName ? 'red' : 'black')};
  }
`;

export const SettingAuthEmail = styled.input<{ isDisabled: boolean }>`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  text-indent: 12px;
  background-color: ${(props) => (props.isDisabled ? '#ededed' : '#ffffff')};
  /* gray/gray2 */
  border: 1px solid ${(props) => props.isDisabled && '#cecece'};
  border-radius: 8px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.02em;
`;

export const SettingDisabledInfo = styled.div<{ type: string }>`
  width: 520px;
  height: 56px;
  display: flex;
  align-items: center;
  text-indent: 12px;
  background-color: #ededed;
  /* gray/gray2 */

  border: 1px solid #cecece;
  border-radius: 8px;

  letter-spacing: -0.02em;
  color: ${(props) => props.type === 'ready' && '#8E8E8E'};

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.02em;

  @media screen and (max-width: ${size.desktop}) {
    width: 80%;
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
  }
  img {
    width: 24px;
    height: 24px;
    margin-left: 12px;
  }
`;

export const SettingImageBox = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  img {
    transition: 0.4s;
  }
`;

export const SettingImage = styled.img`
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 16px;
  opacity: 1;
  /* &:hover {
    cursor: pointer;
    opacity: 0;
  } */
`;

export const SettingImageHover = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  div {
    position: absolute;
    opacity: 1;
    z-index: 3;
    img {
      width: 32px;
      height: 32px;
      opacity: 1;
      z-index: 1;
      filter: brightness(100%);
    }
  }
  img {
    width: 140px;
    height: 140px;
    border-radius: 16px;
    filter: brightness(0.5);
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const InfoBox = styled.div`
  position: absolute;
  bottom: 20px;
  left: 40px;
  width: 50%;
  color: #8e8e8e;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  white-space: nowrap;
  /* identical to box height */

  letter-spacing: -0.02em;
`;

export const SettingButtonContontainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 15px;
  margin-top: 80px;
`;

export const SettingButton = styled.button<ISettingButton>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: 56px;
  /* padding: 16px 53px; */
  border-radius: 8px;
  border: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  white-space: nowrap;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.02em;
  opacity: 0.9;

  @media screen and (max-width: ${size.tabletS}) {
    font-size: 16px;
    line-height: 20px;
  }
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const EtcContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  margin-top: 64px;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    letter-spacing: -0.02em;

    /* gray/gray3 */

    color: #3c3c3f;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ErrorMessage = styled.span<IErrorMessageProps>`
  /* display: ${(props) => (props.isErrorNickName ? 'block' : 'none')}; */
  position: absolute;
  bottom: -25px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: red;
`;

export const LinkTextContainer = styled.div`
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 17px 20px 17px 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    white-space: nowrap;
  }
  /* or 24px */

  text-align: center;
  letter-spacing: -0.02em;
  .violet {
    color: #5200ff;
    font-weight: 500;
  }
  .bold {
    font-weight: 500;
  }
`;

export const LinkSaveButton = styled.button<{
  bgColor: string;
  color: string;
  width: string;
  height: string;
  dif?: string;
}>`
  margin-left: 8px;
  background-color: ${(props) => props.bgColor};
  border: ${(props) => (props.dif === '1' ? '1px solid #CECECE' : 'none')};
  font-weight: ${(props) => (props.dif === '1' ? '400' : '500')};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 4px;
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  opacity: 1;

  @media screen and (max-width: ${size.tabletS}) {
    font-size: 16px;
    line-height: 20px;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
`;

export const EmailAuthBox = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  gap: 12px;

  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
  }
  .imageBox {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .email-box {
    position: relative;
    width: 100%;
  }
`;
