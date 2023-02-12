import { CloseOutlined } from '@ant-design/icons';
import { Dispatch, SetStateAction } from 'react';
import styled, { keyframes } from 'styled-components';

interface IPropsSnackBarStyles {
  isLinkCopy?: boolean;
}

interface IPropsSnackBar {
  isLinkCopy?: boolean;
  isDelete?: boolean;
  setIsCopy: Dispatch<SetStateAction<boolean>>;
}

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const LinkCopyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;

  position: fixed;
  width: 240px;
  height: 56px;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 88px;
  z-index: 10;

  background: ${(props: IPropsSnackBarStyles) =>
    props.isLinkCopy ? '#252730' : '#FFF1F1'};
  border-radius: 16px;
  animation: ${boxFade} 3s;
  animation-iteration-count: 1;
`;

const LinkCopyText = styled.div`
  text-align: center;
  font-family: 'Spoqa Han Sans';
  font-weight: 500;
  font-size: 16px;
  color: ${(props: IPropsSnackBarStyles) =>
    props.isLinkCopy ? '#ffffff' : '#ff0000'};
`;

export const XIconImage = styled(CloseOutlined)`
  color: ${(props: IPropsSnackBarStyles) =>
    props.isLinkCopy ? '#ffffff' : '#000000'};
  &:hover {
    cursor: pointer;
  }
`;

const Snackbar = (props: IPropsSnackBar) => {
  return (
    <LinkCopyContainer isLinkCopy={props.isLinkCopy || props.isDelete}>
      <LinkCopyText isLinkCopy={props.isLinkCopy || props.isDelete}>
        {props.isLinkCopy && '링크가 복사되었습니다.'}
        {props.isDelete && '링크가 삭제되었습니다.'}
        {!props.isLinkCopy && !props.isDelete && '오류가 발생했습니다.'}
      </LinkCopyText>
      <XIconImage
        alt="plus-icon"
        width={12}
        height={11}
        isLinkCopy={props.isLinkCopy || props.isDelete}
        onClick={() => props.setIsCopy(false)}
      />
    </LinkCopyContainer>
  );
};

export default Snackbar;
