import styled from 'styled-components';

export const LinkSaveContainer = styled.section`
  position: relative;
  top: 165px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
  }
`;

export const LinkTextContainer = styled.div`
  width: 680px;
  height: 20px;
  display: flex;
  align-items: center;
  border: 1px solid #0f0223;
  border-radius: 4px;
  padding: 17px 20px 17px 20px;
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
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.02em;
  &:focus {
    outline: none;
  }
`;

export const LinkSaveButton = styled.button`
  width: 120px;
  height: 56px;
  margin-left: 8px;
  padding: 0px;
  background: #5200ff;
  border: 0px;
  border-radius: 4px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;

  /* text/white */

  color: #ffffff;

  &:hover {
    background: #29115b;
    cursor: pointer;
  }
`;

interface LinkSaveSuccessBarProps {
  isVisibleMessage: boolean;
}

export const LinkSaveSuccessBar = styled.div<LinkSaveSuccessBarProps>`
  display: ${(props) => (props.isVisibleMessage ? 'block' : 'none')};
  margin-top: 16px;
  padding: 16px 24px;
  gap: 24px;

  position: relative;

  /* sub/purple */

  background-color: ${(props) =>
    props.isVisibleMessage ? '#f3edff' : '#FFF1F1'};
  border-radius: 16px;
`;

export const SuccessMessage = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* main/purpleblack */

  color: #0f0223;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;
export const FailMessage = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* text/error */

  color: #ff0000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const XIconImage = styled.div`
  width: 12px;
  height: 12px;

  &:hover {
    cursor: pointer;
  }
`;
